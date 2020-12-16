import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link'
import styled from 'styled-components'

const PostWrapper = styled.div`
  background-color: #fff;
  color: #666;
  max-width: 600px;
  border-radius: 10px;
  padding: 25px;
  margin: auto;
` 


const GET_POST = gql`
query Post($id: ID!){
  post(id: $id){
    title
    content
    author{
      fullName
    }
  } 
}
`;


export default function Post() {

  const rota = useRouter();


  const id = rota.query._id;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id }
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const post = data.post;
  console.log("data", data, post);

  return (
    <div>
      <Head>
        <title>Marketing - PB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main> <h1>
          Posts
        </h1>
      <PostWrapper>       
      <div className="edit">
              <Link href="/posts/editar-post/[_id]" as={`/posts/editar-post/${post._id}`} id={post._id}>
                <a className="editar">Editar</a>
              </Link>
            </div>
            <div className="delete">
            <Link href="/posts/apagar-post/[_id]" as={`/posts/apagar-post/${post._id}`} id={post._id}>
                <a className="apagar">APAGAR</a>
              </Link>
            </div>         
          <div class="title"><h1>{post.title}</h1></div>
          <div class="id">{post._id}</div>
          <div class="content">{post.content}</div>
          <p>autor: {post.author.fullName}</p>           
          </PostWrapper>     
      </main>
      <footer>

      </footer>
    </div>
  )
}

