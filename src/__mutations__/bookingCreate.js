/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation BookingCreateMutation(
    $orderId: String!
  ) {
    BookingCreate(orderId: $orderId) {
      status
      message
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
