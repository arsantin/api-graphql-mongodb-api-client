import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router'


const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $data: PostInput!) {
    updatePost(id: $id, data: $data){
      _id
      title
    }
  }
`;

export default function UpdatePost() {
  const { register, handleSubmit } = useForm();

  const [updatePost] = useMutation(UPDATE_POST);

  const rota = useRouter();
    

  const onSubmit = (data) => { 
    

    console.log("id", JSON.stringify(rota.query._id))
    
    updatePost({
      variables: { id: rota.query._id, data: data }      
      });
  }

  return (
    <>
    <h2>Update Post</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" ref={register} placeholder="Título" />
      <div id="editorjs" style={{backgroundColor: 'blue', width: '600px', hwight: '450px'}}></div> 
      <textarea name="content" ref={register} placeholder="Conteúdo" />
      <input name="author" ref={register} placeholder="Autor" />

     

      <input type="submit" />
    </form>
    </>
  );
}