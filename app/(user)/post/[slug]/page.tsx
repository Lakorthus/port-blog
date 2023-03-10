import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
        *[_type=='post']
        {
            slug
        }
    `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  // Querying for a single post by slug using groq
  const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

  // Getting the post from the query
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border-[#F7AB0A] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              priority
              sizes={"(max-width: 640px) 100vw, 640px"}
            />
          </div>

          <section className="p-5 bg-[#062C80] w-full text-[#F6F5DA]">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  ;
                </p>
              </div>

              <div className="flex items-center space-x-2 p-5">
                <div className="relative w-20 h-20 rounded-full">

                  <Image
                    className="object-cover rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    priority
                    sizes={"(max-width: 640px) 100vw, 640px"}
                    />
                </div>

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* TODO: Author BIO */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className=" flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-[#4FB9FC] text-[#F6F5DA] px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;
