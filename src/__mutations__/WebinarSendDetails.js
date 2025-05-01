/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
mutation WebinarSendDetails($email: String!, $name: String!, $phone: Float!) {
  WebinarSendDetails(email: $email, name: $name, phone: $phone) {
    status
    updatedAt
    name
    id
    duration
    createdAt
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
