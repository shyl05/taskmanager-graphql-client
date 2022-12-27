import { gql } from '@apollo/client';

const ADD_TASK = gql`
  mutation AddTask(
    $title: String!
    $description: String!
    $status: TaskStatus!
  ) {
    addTask(
      title: $title
      description: $description
      status: $status
    ) {
      id
      title
      description
      status
    }
  }
`;

const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: ID!
    $title: String!
    $description: String!
    $status: TaskStatusUpdate!
  ) {
    updateTask(
      id: $id
      title: $title
      description: $description
      status: $status
    ) {
      id
      title
      description
      status
    }
  }
`;

export { ADD_TASK, DELETE_TASK, UPDATE_TASK};