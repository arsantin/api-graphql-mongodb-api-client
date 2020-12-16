// import App from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Menu from '../components/Menu'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});



function MyApp({ Component, pageProps }) {
  return <>
  <ApolloProvider client={client}> 
  <Menu/>   
    <Component {...pageProps} />
    </ApolloProvider>
  </>
}

export default MyApp