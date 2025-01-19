import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}

export const searchProducts = (query: string) => {
  if (!query) return schema.types; // Return all products if no query
  return schema.types.filter((product: any) => 
    product.title.toLowerCase().includes(query.toLowerCase())
  );
}
