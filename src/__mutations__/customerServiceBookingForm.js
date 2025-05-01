/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation CustomerServiceBookingFormMutation(
    $email: String!
    $fullName: String!
    $phone: Float!
    $amount: Float!
    $orderId: String!
    $serviceId: String!

  ) {
    CustomerServiceBookingForm(
        email: $email
        fullName: $fullName
        phone: $phone
        amount: $amount
        orderId: $orderId
        serviceId: $serviceId
  
    ) {
      status
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
