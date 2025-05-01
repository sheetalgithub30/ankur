/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation PaymentOrderWebinarMutation(
    $amount: Float!
    $currency: String!
    $name: String!
    $phone: String!
    $websiteUrl: String!
    $email: String!
  ) {
    PaymentOrderWebinar(amount: $amount, currency: $currency, email: $email, name: $name, phone:$phone, websiteUrl: $websiteUrl) {
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
