import { defineField,defineType } from "sanity"
export default defineType({
    name: "blog",
    title:"My Blog",
    type: "document",
    fields:[
        defineField(
        {
            name: "heading",
            title: "Title",
            type: "string"
        }),
        defineField(
            // {
            //     name: 'mainContent',
            //     title: 'Main Content',
            //     type: 'array',
            //     of: [
            //       { type: 'block' }, // Rich text block for paragraphs
            //       { type: 'image' }, // Option for images in the main content
            //       {
            //         type: 'object',
            //         name: 'section',
            //         title: 'Section',
            //         fields: [
            //           {
            //             name: 'sectionTitle',
            //             title: 'Section Title',
            //             type: 'string', // Title for each section (e.g., "How Does Agentic AI Work?")
            //           },
            //           {
            //             name: 'sectionContent',
            //             title: 'Section Content',
            //             type: 'text', // Content for each section
            //           },
            //         ],
            //       },
            //     ],
            //   },
        {
            name: "description",
            title: "Description",
            type: "text"
        }
    ),
        defineField(
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options:{
                source:"heading",
                maxLength: 200,

            }

        }),
        defineField(
        {
            name: "image",
            title: "Image",
            type: "image",
            options:{
                hotspot: true
            }
        })
    ]
})

// schemas/agenticAI.js

// export default {
//     name: 'agenticAI',
//     title: 'Agentic AI Blog Post',
//     type: 'document',
//     fields: [
//       {
//         name: 'title',
//         title: 'Title',
//         type: 'string', // Main title of the blog
//       },
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: {
//           source: 'title',
//           maxLength: 96,
//         },
//       },
//       {
//         name: 'author',
//         title: 'Author',
//         type: 'string', // Author of the blog
//       },
//       {
//         name: 'datePublished',
//         title: 'Date Published',
//         type: 'datetime', // Date and time when the blog is published
//       },
//       {
//         name: 'intro',
//         title: 'Introduction',
//         type: 'text', // Introduction paragraph of the blog
//       },
//       {
//         name: 'mainContent',
//         title: 'Main Content',
//         type: 'array',
//         of: [
//           { type: 'block' }, // Rich text block for paragraphs
//           { type: 'image' }, // Option for images in the main content
//           {
//             type: 'object',
//             name: 'section',
//             title: 'Section',
//             fields: [
//               {
//                 name: 'sectionTitle',
//                 title: 'Section Title',
//                 type: 'string', // Title for each section (e.g., "How Does Agentic AI Work?")
//               },
//               {
//                 name: 'sectionContent',
//                 title: 'Section Content',
//                 type: 'text', // Content for each section
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'benefits',
//         title: 'Benefits of Agentic AI',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             name: 'benefit',
//             fields: [
//               {
//                 name: 'benefitTitle',
//                 title: 'Benefit Title',
//                 type: 'string', // Title for the benefit
//               },
//               {
//                 name: 'benefitDescription',
//                 title: 'Benefit Description',
//                 type: 'text', // Detailed description for the benefit
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'challenges',
//         title: 'Challenges and Ethical Considerations',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             name: 'challenge',
//             fields: [
//               {
//                 name: 'challengeTitle',
//                 title: 'Challenge Title',
//                 type: 'string', // Title for the challenge (e.g., "Accountability")
//               },
//               {
//                 name: 'challengeDescription',
//                 title: 'Challenge Description',
//                 type: 'text', // Description for the challenge
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'conclusion',
//         title: 'Conclusion',
//         type: 'text', // Conclusion of the blog
//       },
//     ],
//   };
  