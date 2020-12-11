import * as React from "react";
import { useForm } from "react-hook-form";

export default function AddPost() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <>
    <h2>Novo Post</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} placeholder="First name" />

      <input name="lastName" ref={register} placeholder="Last name" />

      <select name="category" ref={register}>
        <option value="">Selecione...</option>
        <option value="Consignado">Consignado</option>
        <option value="Investimentos">Investimentos</option>
      </select>

      <input type="submit" />
    </form>
    </>
  );
}