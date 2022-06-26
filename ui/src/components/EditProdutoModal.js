import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { editProduto } from "../services/ProdutoService";

export default function EditProdutoModal({ produto, produtoEdited }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data["id"] = produto.id;
    editProduto(data).then((response) => {
      produtoEdited(response);
      setShow(false);
    });
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="produtoId">Id</label>
                <input
                  {...register("id")}
                  type="text"
                  className="form-control"
                  defaultValue={produto.id}
                  name="id"
                  id="id"
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="produto">Task</label>
                <input
                  {...register("produto")}
                  type="text"
                  className="form-control"
                  defaultValue={produto.produto}
                  name="produto"
                  id="produto"
                  placeholder="Create a produto"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="quantidade">Quantidade</label>
                <input
                  {...register("quantidade")}
                  type="text"
                  className="form-control"
                  defaultValue={produto.quantidade}
                  name="quantidade"
                  id="quantidade"
                  placeholder="Quantidade"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="ubidade">Unidade:</label>
                <select
                  {...register("unidade")}
                  name="unidade"
                  defaultValue={produto.unidade}
                  className="form-control"
                  id="unidade"
                >
                  <option>KG</option>
                  <option>UN</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div className="btncenter">
              <input type="submit" className="btn btn-danger" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
