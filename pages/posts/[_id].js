import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link'


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
      <main>
        <h1>
          Posts
        </h1>        
          <div class="title"><h1>{post.title}</h1></div>
          <div class="id">{post._id}</div>
          <div class="content">{post.content}</div>
          <p>autor: {post.author.fullName}</p>       
      </main>
      <footer>

      </footer>
    </div>
  )
}

