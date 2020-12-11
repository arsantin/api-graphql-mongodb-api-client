import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';


export default function Home({users}) {
  console.log("users", users)
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing - PB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className={styles.main}>
        <h1 className={styles.title}>
          Usuários
        </h1>
        <Link href="/posts/novo-post"><a>+ CRIAR NOVO POST</a></Link>
        <Link href="/users/novo-usuario"><a>+ CRIAR NOVO USUÁRIO</a></Link>
        {users.map((user)=> {
          return <div key={user._id}>{user.firstName}</div>
        })

        }
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  })

  const {data} = await client.query({
    query: gql`
      query{
  users{
    firstName
    _id
  }
}
    ` 
  })

  console.log(data)

  return{
    props: {
      users: data.users
    }
  }
}
