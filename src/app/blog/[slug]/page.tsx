// import React from 'react'
// import Image from 'next/image'
// import { client } from '@/sanity/lib/client'
// import { Blog } from '@/app/blog/page'

// interface Params {
//     params: { slug: string }
// }
//  const BlogPost = async (params: Params) => {
//     const { slug } = params.params
//     const data: Blog = await client.fetch(`*[_type == "blog" && slug.current == $slug]{
//       heading,
//       description,
//       "slug":slug.current,
//       "imageUrl":image.asset->url
//     }[0]` , { slug })
//     return (
//         <main className=' mx-auto '>
//             <div className='items-center flex flex-col justify-center p-10 '>
//             <div className='object-contain place-items-center '>
//                 <Image src={data.imageUrl} alt={'abc'} height={300} width={900} />
//             </div>

//             <div className='p-10'>
//                 <h1 className='font-bold text-4xl'>{data.heading}</h1>
//                 <p className='text-gray-600 font-semibold p-10 text-left'>{data.description}</p>
//             </div>

//             </div>
         
//         </main>
//     )
// }

// export default BlogPost;

import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { Blog } from '@/app/blog/page';
import CommentSection from '@/app/components/commentSection';

interface Params {
  params: { slug: string };
}

interface Comment {
    id: number;
    text: string;
  }

const BlogPost = async ({ params }: Params) => {
  const { slug } = params;
   const data: Blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug]{
      heading,
      description,
      "slug":slug.current,
      "imageUrl":image.asset->url
    }[0]`,
    { slug }
  );

  return (
    <main className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Blog Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={data.imageUrl}
            alt={data.heading}
            height={600}
            width={1200}
            className=" object-cover w-full h-80 sm:h-96"
          />
        </div>

        {/* Blog Content */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {data.heading}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
      <div className="blog-post max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h1 className="text-4xl font-bold mb-4">Your Blog Post Title</h1>
      <div className="content mb-6">
        <p>Your blog post content goes here...</p>
      </div>

      {/* Comment Section */}
      <CommentSection />
    </div>
    </main>
  );
};

export default BlogPost;




