import Head from 'next/head'
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components'

const Box = styled.div`  
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: auto;
  .box{   
    flex-basis: 100%; 
    width: 100%;
    min-width: 100%;
    background-color: #f9f9f9;
    margin: 1px 20px;
    color: #666;
    padding: 5px 15px;
    border-radius: 3px;
    h2{
      margin: 0px;
      font-weight: 100;
    }
    a{
      text-decoration: none;
      div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .title{
          flex-basis: 100%;
          font-size: 11px;
          color: #4c4c4c;
          h2{
            text-align: left;
          }          
        }
        .edit{
          flex-basis: 10%;
          width: 100%;
        }
        .delete{
          flex-basis: 12%;
          width: 100%;
        }
      }
    }
  }
  .add{
    display: block;
    padding: 10px;
    border-radius: 5px;
    background-color: #339966; 
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    margin-bottom: 20px;  
    color: #fff;
  }
  .editar{
    display: block;
    padding: 10px;
    border-radius: 5px;
    background-color: #dabb4a;   
    text-align: center;
    margin: 3px 0px;  
    color: #77672b;
  }
  .apagar{
    display: block;
    padding: 10px;
    border-radius: 5px;
    background-color: #d0372f; 
    text-align: center;
    margin: 3px 0px;  
    color: #fff;
  }
  
`

const GET_USERS = gql`
  query{
  users{
    _id
    fullName
  }
}
`;

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

  const { loadingUser, errorUser, dataUser } = useQuery(GET_USERS);
  if (loadingUser) return <p>Loading...</p>;
  if (errorUser) return <p>Error :(</p>;
  const users = JSON.stringify(dataUser);

  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const posts = data.posts;
  
 console.log("posts", data, "users", users)
  return (
    <div>
      <Head>
        <title>Marketing - PB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main>       
        <h1 style={{width: '100%', textAlign: 'center', color: '#000'}}>
          POSTS
        </h1> 
         
        <Box>
        <Link href="/posts/novo-post"><a className="add">+ CRIAR NOVO POST</a></Link>       
        {posts.map((post) => {
          return <div className="box" key={post._id}>
            <Link href="/posts/[_id]" as={`/posts/${post._id}`} id={post._id}>
            <a><div key={post._id} >
            <div className="title"><h2>{post.title}</h2></div>
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
          </div></a>
          </Link>
          </div>         
        })}
        </Box>   
        
       
      </main>
      <footer>
       
      </footer>
    </div>
  )
}

