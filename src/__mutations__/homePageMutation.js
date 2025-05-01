/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation CustomerHomepageFormMutation(
    $email: String!
    $fullName: String!
    $message: String!
     $phone: Float!
  ) {
    CustomerHomepageForm(
      email: $email
      fullName: $fullName
      message: $message
      phone: $phone
    ) {
      message
      status
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
