import Head from 'next/head'
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components'

const Teste = styled.div`
  
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  .box{
    flex-basis: 30%;
    background-color: #ededed;
    color: #666;
    padding: 20px;
    a{
      text-decoration: none;
      color: #666;
      text-transform: uppercase;
    }
  }
  
`

const GET_POSTS = gql`
  query{
  posts{
    _id
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
        <h1>
          Posts
        </h1>        
        {posts.map((post) => {
          return <Teste key={post._id}>
            <div className="box">
            <Link href="/posts/[_id]" as={`/posts/${post._id}`} id={post._id}>
            <a><div key={post._id} >
            <div className="title"><h2>{post.title}</h2></div>
            <div className="edit">
              <Link href="#">
                <a>Editar</a>
              </Link>
            </div>
            <div className="edit">
              <Link href="#">
                <a>Apagar</a>
              </Link>
            </div>            
          </div></a>
          </Link>
          </div>
          </Teste>
        })}
        <Link href="/posts/novo-post"><a>+ CRIAR NOVO POST</a></Link>
        <Link href="/users/novo-usuario"><a>+ CRIAR NOVO USUÁRIO</a></Link>       
      </main>
      <footer>
       
      </footer>
    </div>
  )
}

