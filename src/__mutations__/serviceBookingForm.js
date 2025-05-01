/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation CustomerServiceBookingFormMutation(
    $amount: Float!
    $email: String!
    $fullName: String!
    $orderId: String!
    $phone: Float!
    $serviceId: String!
     $isInternational: Boolean!
  ) {
    CustomerServiceBookingForm(
      amount: $amount
      email: $email
      fullName: $fullName
      orderId: $orderId
      phone: $phone
      serviceId: $serviceId
      isInternational: $isInternational
    ) {
      status  
      id
      message
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
