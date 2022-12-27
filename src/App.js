import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import NavbarComp from './Components/NavbarComp';
import AllTasks from './Pages/AllTasks';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        tasks: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/tasksapp',
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavbarComp />
        <br />
        <AllTasks />
      </div>
    </ApolloProvider>
  );
}

export default App;
