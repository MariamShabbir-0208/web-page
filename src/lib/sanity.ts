import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-17",
  useCdn: true
})

export async function getProducts() {
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
  }`)
  return products
}

export async function getProduct(id: string) {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
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
    }`,
    { id }
  )
  return product
}
