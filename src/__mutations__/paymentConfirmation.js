/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation PaymentConfirmationMutaion(
    $cashFreeOrderId: String!
  ) {
    PaymentConfirmation(
      cashFreeOrderId: $cashFreeOrderId
    ) {
      status
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
