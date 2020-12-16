import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';

const ADD_POST = gql`
  mutation CreatePost($data: PostInput!) {
    createPost(data: $data){
      _id
      title
    }
  }
`;

const GET_USERS = gql`
  query{
  users{
    _id
    fullName
  }
}
`;


export default function CreatePost() {
  const { register, handleSubmit } = useForm();
  const [createPost, dataPost] = useMutation(ADD_POST);  
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <><p>Loading...</p></>;
  if (error) return <><p>Error :(</p></>;
  console.log("users", data);

  const onSubmit = (dataPost) => {    
    createPost({ variables: { data: dataPost } });
  }

  return (
    <>
    <h2>Novo Post</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" ref={register} placeholder="Título" />

      <textarea name="content" ref={register} placeholder="Conteúdo" />
      <select name="author" ref={register}>
      {data && (data.users.map((user)=> {
        return <option value="5fd22a2a24645724a4145c3d" key={user._id}>{user.fullName}</option>
      }))}
      
      </select>

     

      <input type="submit" />
    </form>
    </>
  );
}