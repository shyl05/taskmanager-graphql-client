import { gql } from '@apollo/client';

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      title
      description
      status
    }
  }
`;

const GET_TASK = gql`
  query getTask($id: ID!) {
    task(id: $id) {
      id
      title
      description
      status
    }
  }
`;

export { GET_TASKS, GET_TASK };