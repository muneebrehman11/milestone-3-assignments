// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// export interface Blog {
//   heading: string,
//   description: string,
//   slug: string,
//   imageUrl: string;
// }

// export default async function Home() {
//   const data: Blog[] = await client.fetch(`*[_type == "blog"]{
//   heading,
//     description,
//   "slug":slug.current,
// "imageUrl":image.asset->url
// }`)
//   // const [heading,description,slug,imageUrl] = data
//   // let data = await response.json()
//   return (


//     <main className="items-center justify-center   grid grid-cols-3 gap-4 p-10">
//       {data.map((data) => {
//         return(
//           <Link href={`/blog/${data.slug}`}>
//           <div className="flex flex-col  overflow-hidden  shadow-lg hover:scale-105 active:scale-100 curspor-pointer transition-transform duration-300 ease-in-out  p-5 h-96 ">
//             <Image src={data.imageUrl} alt={"sss"} width={400} height={200} className="object-contain" />
//             <h1>{data.heading}</h1>
//             <p className="">
//               {data.description}
//             </p>
//             <button>Read More</button>
//           </div>
//         </Link>
  
//         )
//       }
//       )}
     
//     </main>
//   );
// }



// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";

// export interface Blog {
//   heading: string;
//   description: string;
//   slug: string;
//   imageUrl: string;
// }

// export default async function Home() {
//   const data: Blog[] = await client.fetch(
//     `*[_type == "blog"]{
//       heading,
//       description,
//       "slug":slug.current,
//       "imageUrl":image.asset->url
//     }`
//   );

//   return (
//     <main className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.map((post) => (
//           <Link key={post.slug} href={`/blog/${post.slug}`}>
//             <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 active:scale-100 cursor-pointer">
//               {/* Blog Image */}
//               <div className="relative h-48">
//                 <Image
//                   src={post.imageUrl}
//                   alt={post.heading}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-lg"
//                 />
//               </div>

//               {/* Blog Content */}
//               <div className="p-6 space-y-4">
//                 <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
//                   {post.heading}
//                 </h2>
//                 <p className="text-gray-700 text-base line-clamp-3">{post.description}</p>
//                 <button className="mt-4 text-blue-500 font-medium hover:text-blue-600">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }




















import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Home() {
  const data: Blog[] = await client.fetch(
    `*[_type == "blog"]{
      heading,
      description,
      "slug":slug.current,
      "imageUrl":image.asset->url
    }`
  );

  return (
    <main className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow   ease-in-out transform hover:scale-105 active:scale-100 duration-300 cursor-pointer h-full">
              {/* Blog Image */}
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.heading}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                  {post.heading}
                </h2>
                <p className="text-gray-700 text-base line-clamp-3">{post.description}</p>
                <button className="mt-4 text-blue-500 font-medium hover:text-blue-600">
                  Read More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
