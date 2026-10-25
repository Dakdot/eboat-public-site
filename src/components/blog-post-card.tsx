import { Post } from "@/types/sanity";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const BlogPostCard = ({ post }: { post: Post }) => {
  if (!post.slug) return;
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).url()
    : undefined;

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <Card className="relative mx-auto w-full pt-0 overflow-hidden hover:scale-[1.02] transition-all h-full">
        <img
          className="relative z-20 aspect-video w-full object-cover brightness-75 dark:brightness-50"
          src={postImageUrl}
        />
        <CardHeader>
          <CardTitle className="text-xl font-serif">{post.title}</CardTitle>
          {post.publishedAt && (
            <CardDescription>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                dateStyle: "medium",
              })}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>{post.excerpt && <p>{post.excerpt}</p>}</CardContent>
      </Card>
    </Link>
  );
};
