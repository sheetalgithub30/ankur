/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation CustomerServiceBookingMailMutation(
    $amount: Float!
    $date: String!
    $duration: Float!
    $fullName: String!
    $email: String!
    $phone: Float!
    $time: String!
  ) {
    CustomerServiceBookingMail(
      amount: $amount
      date: $date
      duration: $duration
      email: $email
      fullName: $fullName
      phone: $phone
      time: $time
    ) {
      status
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
