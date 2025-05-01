/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation PaymentOrderMutation(
    $amount: Float!
    $currency: String!
    $name: String!
    $phone: String!
    $websiteUrl: String!
    $serviceId: String!
    $isInternational: Boolean!
  ) {
    PaymentOrder(amount: $amount, currency: $currency, name: $name, phone:$phone, websiteUrl: $websiteUrl, serviceId:$serviceId, isInternational:$isInternational) {
      id
      orderId
      paymentSessionId
      message
      status
      name
      currency
      email
      phone
      url
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
