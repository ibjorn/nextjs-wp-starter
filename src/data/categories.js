import { TaxonomySeoItems } from './seo'

// All categories
export const AllCategories = `
    query AllCategoriesQuery {
        categories(first: 10000) {
          edges {
            node {
              databaseId
              description
              id
              title: name
              slug
              uri
              parentId
            }
          }
        }
    }
`

// category by category by uri
export const CategoryByUri = `
    query CategoryByUriQuery($uri: ID!) {
        category(id: $uri, idType: URI) {
            databaseId
            description
            id
            title: name
            slug
            uri
            seo {
              ${TaxonomySeoItems}
            }
        }
    }
`

// // category by category by slug
// export const CategoryBySlug = `
//     query CategoryBySlugQuery($slug: ID!) {
//         category(id: $slug, idType: SLUG) {
//             databaseId
//             description
//             id
//             name
//             slug
//         }
//     }
// `