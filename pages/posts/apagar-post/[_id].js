import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router'

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id){
      _id
    }
  }
`;

export default function DeletePost() {
  const { register, handleSubmit } = useForm();

  const [deletePost] = useMutation(DELETE_POST);

  
  const rota = useRouter();

  const onSubmit = (data) => {  
    
    const num = rota.query._id;
    alert("post apagado", num);
    deletePost({ variables: { 
      id: "5fd44edda257110f64faef04"
    } })
    
  }

  return (
    <>
    <h2>Update Post</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" ref={register} placeholder="Título" />

      <textarea name="content" ref={register} placeholder="Conteúdo" />
      <input name="author" ref={register} placeholder="Autor" />

     

      <input type="submit" />
    </form>
    </>
  );
}