import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "./Header";
import Produtos from "./Produtos";
import CreateProduto from "./CreateProduto";
import {
  getAllProdutos,
  deleteProduto,
  fetchSettings
} from "../services/ProdutoService";

function Home2() {
  const [produtos, setProdutos] = useState([]);
  const [numberOfProdutos, setNumberOfProdutos] = useState([]);
  const [isProdutoEdited, setProdutoEdited] = useState(false);

  useEffect(() => {
    getAllProdutos().then((produtos) => {
      console.log(produtos);
      setProdutos(produtos);
    });
  }, [numberOfProdutos, isProdutoEdited]);

  function delProduto(produtoId) {
    deleteProduto(produtoId).then((response) => {
      console.log(response);
      setNumberOfProdutos(numberOfProdutos - 1);
    });
  }

  function produtoCreated() {
    setNumberOfProdutos(numberOfProdutos + 1);
  }

  function produtoEdited(res) {
    setProdutoEdited(res);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
            <CreateProduto produtoCreated={produtoCreated}></CreateProduto>
          </div>
        </div>
      </div>
      <div className="container mrgnbtm">
        <Produtos
          produtos={produtos}
          deleteTask={delProduto}
          taskEdited={produtoEdited}
        ></Produtos>
      </div>
    </div>
  );
}

export default Home2;
