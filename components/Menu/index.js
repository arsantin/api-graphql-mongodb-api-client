import Link from 'next/link';
import styled from 'styled-components';


const Nav = styled.ul`  
  display: flex;
  width: 100%;
  li{
    background-color: yellow;
    a{
      display: block;
    }
  }
`


const Menu = () => {
  return ( 
    <div>
      <img width="80" height="80" src="data:image/png;base64,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" /> Paraná Banco
    <Nav>
      <li><Link href="/"><a>HOME</a></Link></li>
      <li><Link href="/users"><a>USUÁRIOS</a></Link></li>
      <li><Link href="/posts"><a>POSTS</a></Link></li>
      <li><Link href="/users/novo-usuario"><a>+ USUÁRIO</a></Link></li>
      <li><Link href="/posts/novo-post"><a>+ POSTS</a></Link></li>
    </Nav>  
    </div>
  )
}

export default Menu;