import Link from 'next/link'
import React from 'react'
import { Blog } from './blog/page';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
const Home = async () => {
 const data: Blog[] = await client.fetch(
    `*[_type == "blog"]{
      heading,
      description,
      "slug":slug.current,
      "imageUrl":image.asset->url
 }`
  );
  const latestPosts = data.slice(0, 3)
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 to-gray-900 text-gray-100 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to My Blog</h2>
          <p className="text-lg mb-6">Explore amazing content on technology, lifestyle, and much more.</p>
          <a href="/blog" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Start Exploring
          </a>
        </div>
      </section>
      {/* Featured Blog Posts */}
      <section className="py-16 bg-white">
       
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {latestPosts.map((post) => (
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
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Explore Categories</h3>
          <div className="flex justify-center space-x-8">
            <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Technology
            </Link>
            <Link href="/blog" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700">
              Lifestyle
            </Link>
            <Link href="/blog" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
              Business
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">About My Blog</h3>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p>Welcome to my blog where I share articles on various topics such as technology, lifestyle, business, and more. This platform aims to provide valuable insights and keep you updated with the latest trends. Whether you're a tech enthusiast, a business owner, or someone looking for lifestyle tips, there's something for everyone.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home