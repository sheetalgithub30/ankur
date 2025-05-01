/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation BookingCreateTempMutation(
    $customerId: String!
    $dateTime: DateTime!
    $description: String!
    $eventId: String!
    $meetingTitle: String!
    $orderId: String!
    $timeZone: String!
  ) {
    BookingCreateTemp(
      customerId: $customerId
      dateTime: $dateTime
      description: $description
      eventId: $eventId
      meetingTitle: $meetingTitle
      orderId: $orderId
      timeZone: $timeZone
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
