import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddUser() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <h2>Novo Usuário</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nome" name="Nome" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Sobrenome" name="Sobrenome" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <select name="Ativo" ref={register}>
        <option value="Sim">Sim</option>
        <option value="Nao">Não</option>
      </select>

      <input type="submit" />
    </form>
    </>
  );
}