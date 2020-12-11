import Link from 'next/link';
import styled from 'styled-components';

const Teste = styled.ul`  
  display: none;
`

const Menu = () => {
  return ( 
    <div>
    <Teste>
      <li><Link href="/"><a>HOME</a></Link></li>
      <li><Link href="/users"><a>USUÁRIOS</a></Link></li>
      <li><Link href="/posts"><a>POSTS</a></Link></li>
      <li><Link href="/users/novo-usuario"><a>+ USUÁRIO</a></Link></li>
      <li><Link href="/posts/novo-post"><a>+ POSTS</a></Link></li>
    </Teste>  
    </div>
  )
}

export default Menu;