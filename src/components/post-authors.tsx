import { client } from "@/sanity/client";
import { TeamMember } from "@/types/sanity";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

function buildAuthorsString(authors: TeamMember[]) {
  if (authors.length == 1) return `By ${authors[0].name}`;
  let result = "By ";
  for (let i = 0; i < authors.length - 2; i++) {
    result += authors[i].name + ", ";
  }
  result +=
    authors[authors.length - 2].name +
    " and " +
    authors[authors.length - 1].name;
  return result;
}

export const PostAuthors = ({ authors }: { authors: TeamMember[] }) => {
  if (authors.length < 1) return;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative">
        {authors &&
          authors.map((author: TeamMember, idx) => (
            <span
              key={author._id}
              className="relative inline-block h-16 w-16 shrink-0"
              style={{ marginLeft: idx > 0 ? "-16px" : undefined }}
            >
              {author.portrait ? (
                <img
                  className="h-full w-full rounded-full border transition-transform duration-200 hover:scale-150 hover:z-10"
                  src={urlFor(author.portrait).width(200).url()}
                  alt={author.name}
                />
              ) : (
                <div className="bg-zinc-600 w-16 h-16 rounded-full border font-serif text-zinc-300 flex items-center justify-center text-2xl select-none">
                  IS
                </div>
              )}
            </span>
          ))}
      </div>
      <p className="font-serif">{buildAuthorsString(authors)}</p>
    </div>
  );
};
