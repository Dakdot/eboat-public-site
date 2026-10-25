import { BlogPostCard } from "@/components/blog-post-card";
import { client } from "@/sanity/client";
import { Post } from "@/types/sanity";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, excerpt, publishedAt, image, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogHomePage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

  return (
    <div className="bg-white flex flex-col items-center">
      <div className="py-30 container px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 container py-5 md:py-20 px-4">
        {posts.map((post) => (
          <BlogPostCard post={post} key={post._id} />
        ))}
      </ul>
    </div>
  );
}
