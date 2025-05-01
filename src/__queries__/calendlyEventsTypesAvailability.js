/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
query AvailabilityGetAll($endDate: DateTime!, $startDate: DateTime!, $duration: PositiveInt!) {
  AvailabilityGetAll(
    duration: $duration
    endDate: $endDate
    startDate: $startDate
  ) {
    dates
    dateByTime {
      availableSlots {
        time
      }
      date
    }
    status
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
