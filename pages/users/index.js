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

export default function Home() {

  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const users = data.users;
  
 console.log("users", data)
  return (
    <div>
      <Head>
        <title>Marketing - PB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main>       
        <h1 style={{width: '100%', textAlign: 'center', color: '#000'}}>
          USUÁRIOS
        </h1> 
         
        <Box>
        <Link href="/posts/novo-usuario"><a className="add">+ CRIAR NOVO USUÁRIO</a></Link>       
        {users.map((user) => {
          return <div className="box" key={user._id}>
            <Link href="/users/[_id]" as={`/users/${user._id}`} id={user._id}>
            <a><div key={user._id} >
            <div className="title"><h2>{user.fullName}</h2></div>
            <div className="edit">
              <Link href="/users/editar-usuario/[_id]" as={`/users/editar-usuario/${user._id}`} id={user._id}>
                <a className="editar">Editar</a>
              </Link>
            </div>
            <div className="delete">
            <Link href="/users/apagar-usuario/[_id]" as={`/users/apagar-user/${user._id}`} id={user._id}>
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

