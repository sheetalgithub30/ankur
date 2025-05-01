/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
query ServicesGetAllQuery {
  ServicesGetAll {
    active
    createdAt
    description
    details
    heading
    descriptionMain
    id
    policy
    status
    price
    actualPrice
    discountedPrice
    numberOfQuestions
    commission
    type
    imageUrl
    discount
    priceAccordingToTime {
      actualPrice
      commission
      createdAt
      discountedPrice
      discount
      duration
      id
      pricing
      status
    }
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
