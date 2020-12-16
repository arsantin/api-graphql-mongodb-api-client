import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';

const ADD_POST = gql`
  mutation CreatePost($data: PostInput!) {
    createPost(data: $data){
      title
    }
  }
`;

export default function CreatePost() {
  const { register, handleSubmit } = useForm();

  const [createPost, data] = useMutation(ADD_POST);

  const onSubmit = (data) => {
    const dados = JSON.stringify(data)
    alert(data)
    createPost({ variables: { data: data } });
  }

  return (
    <>
    <h2>Novo Post</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" ref={register} placeholder="Título" />

      <textarea name="content" ref={register} placeholder="Conteúdo" />
      <input name="author" ref={register} placeholder="Autor" />

     

      <input type="submit" />
    </form>
    </>
  );
}