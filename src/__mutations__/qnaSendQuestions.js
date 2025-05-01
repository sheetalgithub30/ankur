/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation QNASendQuestionsMutation(
    $email: String!
    $fullName: String!
    $phone: Float!
    $questions: [String!]!
    $orderId: String!
  ) {
    QNASendQuestions(
      email: $email
      fullName: $fullName
      phone: $phone
      questions: $questions
      orderId: $orderId
    ) {
      status
      message
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
