import Head from 'next/head'
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Card from '../../components/Card'
import styled from 'styled-components'

const Teste = styled.div`
  background-color: red;
  color: #fff;
  padding: 10px;
`

const GET_POSTS = gql`
  query{
  posts{
    title
    content
    author{
      fullName
    }    
  }
}
`;

export default function Home() {

  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log("data", data)

  const posts = data.posts;

  return (
    <div>
      <Head>
        <title>Marketing - PB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main>
        <Teste>
        <h1>
          Posts
        </h1></Teste>
        {posts.map((post) => {
          return <div key={post._id}>{post.title}</div>
        })}
        <Link href="/posts/novo-post"><a>+ CRIAR NOVO POST</a></Link>
        <Link href="/users/novo-usuario"><a>+ CRIAR NOVO USUÁRIO</a></Link>       
      </main>
      <footer>
       
      </footer>
    </div>
  )
}

