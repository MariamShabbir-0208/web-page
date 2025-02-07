import { createClient } from 'next-sanity'

// Hardcode the Sanity configuration
const projectId = 'g7s14207';
const dataset = 'production';
const apiVersion = "2024-01-17";
const token = 'sk9OtmE8PhQcdOTTvMj495UPNGVuKytYsScoQMWsVsBZ2zRAIuWyRL2tRFO6X4hc9kyMlRYbkys6NzPe0IlA5a67HnlmV4vUqHWpw9SOT8i1e58NAV08CDrTiObZ48Ts5vEfoOqfTLdmD6kUfewMkmAnKsQkZ8GLa9ZIxAvubzuACXTC5dEl';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token
})

export async function getProducts() {
  try {
    console.log('Sanity Client Config:', {
      projectId,
      dataset
    });

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

    if (!Array.isArray(products)) {
      throw new Error('Invalid response format from Sanity');
    }

    console.log('Fetched products:', products);
    return products;
  } catch (error) {
    console.error('Error in getProducts:', error);
    throw error;
  }
}

export async function getProduct(id: string) {
  try {
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
