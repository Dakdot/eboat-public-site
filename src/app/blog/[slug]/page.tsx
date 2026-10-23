import { client } from "@/sanity/client";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";

export const instant = false;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  const components = {
    types: {
      image: ({
        value,
      }: {
        value: SanityImageSource & {
          alt?: string;
          caption?: string;
        };
      }) => {
        const imageUrl = urlFor(value)?.width(1200).url();

        if (!imageUrl) return null;

        return (
          <figure className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={value.alt ?? ""}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
            {value.caption && (
              <figcaption className="mt-2 text-sm text-zinc-600">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="max-w-prose my-8">
        <div className="flex-3 flex flex-col">
          <Link href="/blog" className="hover:underline">
            ← Back to posts
          </Link>
          <div className="my-4 space-y-2">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="font-sans uppercase text-sm font-medium text-zinc-600">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                dateStyle: "long",
              })}
            </p>
          </div>

          {postImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={postImageUrl}
              alt={post.title}
              className="rounded-xl my-4"
              width="550"
              height="310"
            />
          )}
          <div className="prose">
            {Array.isArray(post.body) && (
              <PortableText value={post.body} components={components} />
            )}
          </div>
        </div>
        <div className="flex flex-1">
          <p>More Articles</p>
        </div>
      </div>
    </div>
  );
}
