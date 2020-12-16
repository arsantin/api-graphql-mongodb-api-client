import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
    <h2 style={{color: '#666'}}>Login do Usuário</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Usuário" name="Usuário" ref={register({ required: true, maxLength: 80 })} />
        <input type="text" placeholder="Senha" name="Senha" ref={register({ required: true, maxLength: 100 })} />

        <input type="submit" />
      </form>
      <div className="criar-conta">
        <Link href="/login/novo-usuario" as="/login/novo-usuario">
          <a className="apagar">CRIAR NOVA CONTA</a>
        </Link>
      </div>
    </>
  );
}