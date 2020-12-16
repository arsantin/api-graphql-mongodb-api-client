import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <h2 style={{color: '#666'}}>CRIAR CONTA</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nome" name="Nome" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Sobrenome" name="Sobrenome" ref={register({required: true, maxLength: 100})} />
      <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="submit" />
    </form>
    </>
  );
}