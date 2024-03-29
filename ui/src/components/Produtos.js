import React from "react";
import EditProdutoModal from "./EditProdutoModal";

export const Produto = ({ produto, deleteProduto, ProdutoEdited }) => {
  console.log("Produto length:::", produto);
  if (Produto.length === 0) return null;

  const ProdutoRow = (produto, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{Produto.id}</td>
        <td>{Produto.nome}</td>
        <td>{Produto.unidade}</td>
        <td>
          <div className="row">
            <div className="col-md-6">{Produto.unidade}</div>
            <div className="col-md-3">
              <EditProdutoModal
                produto={produto}
                produtoEdited={ProdutoEdited}
              />
            </div>
            <div className="col-md-3">
              <button
                type="button"
                onClick={(e) => deleteProduto(Produto.id)}
                className="btn btn-danger right"
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  const produtoTable = Produto.map((produto, index) =>
    ProdutoRow(produto, index)
  );

  return (
    <div className="container">
      <h2>Produto</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Produto Id</th>
            <th>Produto Name</th>
            <th>Produto Quantidade</th>
            <th>Produto Unidade</th>
          </tr>
        </thead>
        <tbody>{produtoTable}</tbody>
      </table>
    </div>
  );
};
