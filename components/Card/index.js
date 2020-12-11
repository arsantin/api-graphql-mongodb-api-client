import Link from 'next/link';
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  background-color: #ededed;
  margin: 3px;
  width: 100%;
  align-items: center;
`

const Card = ({post}) => {
  return(
<CardWrapper key={post._id}>
          <div><h3>{post.title}</h3></div>
          <div><label>Autor: </label>{post.author.fullName}</div>
          <div><Link href="#"><a>editar</a></Link></div>
          <div><Link href="#"><a>excluir</a></Link></div>

          </CardWrapper>
  )}

export default Card;
