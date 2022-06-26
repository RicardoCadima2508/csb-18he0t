import React from "react";
import { useForm } from "react-hook-form";
import { createProduto } from "../services/ProdutoService";

export default function CreateProduto(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    createProduto(data).then((response) => {
      props.produtoCreated();
      e.target.reset();
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mrgnbtm">
          <h2>Produto List</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mrgnbtm">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">Produto</label>
                <input
                  {...register("Nome")}
                  placeholder="Create a Produto"
                  className="form-control"
                  name="Nome"
                  id="Nome"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1">quantidade</label>
                <input
                  {...register("quantidade")}
                  placeholder="quantidade"
                  className="form-control"
                  name="quantidade"
                  id="quantidade"
                />
              </div>
            </div>
            <div className="row mrgnbtm">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail1">Unidade:</label>
                <select className="form-control" {...register("unidade")}>
                  <option>KG</option>
                  <option>UN</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <input type="submit" className="btn btn-danger mrgnbtm" />
          </form>
        </div>
      </div>
    </div>
  );
}
