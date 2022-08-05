import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import "./listContact.css";
import logo from "../../image/avatar.png";
import { Button, Form, Input, Modal } from "antd";
import { Link } from "react-router-dom";
const { Item } = Form;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const ListContact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [error, setError] = useState(false);
  const baseUrl = "http://localhost:8800/api/contacts/";
  const [contact, setContact] = useState({
    nom: "",
    prenom: "",
    numero: "",
    email: "",
  });
  const [query, setQuery] = useState("");

  const updateContact = async () => {
    await axios
      .put(baseUrl + contact._id, contact)
      .then((response) => {
        let getData = data;
        getData.map((item) => {
          if (item._id === contact._id) {
            item.nom = contact.nom;
            item.prenom = contact.prenom;
            item.numero = contact.numero;
            item.email = contact.email;
          }
        });
        setData(getData);
        toggleModalEdit();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const selectioncontact = async (id, type) => {
    if (type === "Edit") {
      try {
        const res = await axios.get(baseUrl + `find/${id}`);
        setContact(res.data);
        toggleModalEdit();
      } catch (err) {
        setError(err);
      }
    } else {
      try {
        const res = await axios.get(baseUrl + `find/${id}`);
        setContact(res.data);
        toggleModalDelete();
      } catch (err) {
        setError(err);
      }
    }
  };
  const getContact = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const deleteContact = async () => {
    await axios
      .delete(baseUrl + "/" + contact._id)
      .then((response) => {
        setData(data.filter((item) => item._id !== contact._id));
        toggleModalDelete();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getContact();
  }, []);

  const keys = ["nom", "prenom"];
  return (
    <div style={{ flex: 1 }}>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <Input
            name="nom"
            placeholder="Rechercher"
            className="headerSearchInput"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="pList">
        {loading ? (
          "Changement..."
        ) : (
          <>
            {query.length >= 1 && query
              ? data
                  .filter((items) =>
                    keys.some((key) =>
                      items[key].toLowerCase().includes(query.toLowerCase())
                    )
                  )
                  .map((item) => (
                    <div className="pListItem" key={item._id}>
                      <img src={logo} alt="" className="pListImg" />
                      <div className="pListTitles">
                        <h2>Nom: {item.nom}</h2>
                        <h2>Prenom: {item.prenom}</h2>
                        <h2>Téléphone: {item.numero}</h2>
                        <h2>Email: {item.email}</h2>
                      </div>
                      <div className="pButton">
                        <Link to={`/contact/${item._id}`}>
                          <Button className="">Voir</Button>
                        </Link>
                        <Button
                          className="Listbuton"
                          type="primary"
                          onClick={() => selectioncontact(item._id, "Edit")}
                        >
                          Modifier
                        </Button>
                        <Button
                          className="Listbuton"
                          type="primary"
                          danger
                          onClick={() => selectioncontact(item._id, "delete")}
                        >
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  ))
              : data?.map((item) => (
                  <div className="pListItem" key={item._id}>
                    <img src={logo} alt="" className="pListImg" />
                    <div className="pListTitles">
                      <h2>Nom: {item.nom}</h2>
                      <h2>Prenom: {item.prenom}</h2>
                      <h2>Téléphone: {item.numero}</h2>
                      <h2>Email: {item.email}</h2>
                    </div>
                    <div className="pButton">
                      <Link to={`/contact/${item._id}`}>
                        <Button className="">Voir</Button>
                      </Link>
                      <Button
                        className="Listbuton"
                        type="primary"
                        onClick={() => selectioncontact(item._id, "Edit")}
                      >
                        Modifier
                      </Button>
                      <Button
                        className="Listbuton"
                        type="primary"
                        danger
                        onClick={() => selectioncontact(item._id, "delete")}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </div>
                ))}

            <Modal
              visible={modalEdit}
              title="Modifier un contact"
              onCancel={toggleModalEdit}
              centered
              footer={[
                <Button onClick={toggleModalEdit}>Retour</Button>,
                <Button type="primary" onClick={updateContact}>
                  Edit
                </Button>,
              ]}
            >
              <Form {...layout}>
                <Item label="Nom">
                  <Input
                    name="nom"
                    onChange={handleChange}
                    value={contact?.nom}
                  />
                </Item>

                <Item label="Prenom">
                  <Input
                    name="prenom"
                    onChange={handleChange}
                    value={contact?.prenom}
                  />
                </Item>

                <Item label="Telephone">
                  <Input
                    name="numero"
                    onChange={handleChange}
                    value={contact?.numero}
                  />
                </Item>
                <Item label="Email">
                  <Input
                    name="email"
                    onChange={handleChange}
                    value={contact?.email}
                  />
                </Item>
              </Form>
            </Modal>
            <Modal
              visible={modalDelete}
              onCancel={toggleModalDelete}
              centered
              footer={[
                <Button onClick={toggleModalDelete}>Non</Button>,
                <Button type="primary" danger onClick={deleteContact}>
                  Oui
                </Button>,
              ]}
            >
              Voulez-vous vraiment supprimer le contact <b>{contact?.prenom}</b>{" "}
              <b>{contact?.nom}</b>?
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default ListContact;
