import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "up1415tm",
  dataset: "blinkitdemo",
  useCdn: true,
  apiVersion: "2023-05-03",
  // token: process.env.SANITY_SECRET_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getItems() {
//   const items = await client.fetch('*[_type == "item"]');
//   return items;
// }
// export async function getCategory(name) {
//   const category = await client.fetch('*[_type == "category"]');
//   return category;
// }

// export async function createPost(post: Post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }

export async function getItemsByCategory() {
  const categories = await client.fetch(`
    *[_type == "category"] {
      _id,
      title,
      slug,
      image,
      "items": *[_type == "item" && references(^._id)] {
        _id,
        name,
        price,
        mrp,
        weight,
        image
      }
    }
  `);
  return categories;
}

export async function getCategoryBySlug(slug) {
  const categories = await client.fetch(`
    *[_type == "category" && slug == "${slug}"] {
        _id,
        title,
        slug,
        image,
        "items": *[_type == "item" && references(^._id)] {
          _id,
          name,
          price,
          mrp,
          weight,
          image
        }
    }
  `);
  return categories;
}
