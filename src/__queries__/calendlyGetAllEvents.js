
  /*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
query CalendlyGetEventTypesQuery {
    CalendlyGetEventTypes {
      active
      createdAt
      duration
      eventUrl
      id
      message
      status
      updatedAt
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
