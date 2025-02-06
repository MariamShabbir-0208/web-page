import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId) {
  console.error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set');
}

if (!dataset) {
  console.error('NEXT_PUBLIC_SANITY_DATASET is not set');
}

export const client = createClient({
  projectId: projectId || '',
  dataset: dataset || 'production',
  apiVersion: "2024-01-17",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

export async function getProducts() {
  try {
    console.log('Sanity Client Config:', {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
    });

    if (!projectId || !dataset) {
      throw new Error('Sanity configuration is incomplete. Please check your environment variables.');
    }

    const products = await client.fetch(`*[_type == "product"]{
      _id,
      title,
      description,
      price,
      productImage {
        asset->{
          _id,
          url
        }
      },
      tags,
      dicountPercentage,
      isNew
    }`);

    console.log('Fetched products:', products);
    return products;
  } catch (error) {
    console.error('Error in getProducts:', error);
    throw error;
  }
}

export async function getProduct(id: string) {
  try {
    if (!projectId || !dataset) {
      throw new Error('Sanity configuration is incomplete. Please check your environment variables.');
    }

    const query = `*[_type == "product" && _id == $id][0]{
      _id,
      title,
      description,
      price,
      productImage {
        asset->{
          _id,
          url
        }
      },
      tags,
      dicountPercentage,
      isNew
    }`;
    const product = await client.fetch(query, { id });
    return product;
  } catch (error) {
    console.error('Error in getProduct:', error);
    throw error;
  }
}
