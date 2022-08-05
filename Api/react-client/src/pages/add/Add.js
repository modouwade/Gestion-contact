import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./add.css";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
const baseUrl = "http://localhost:8800/api/contacts/";

function Add() {
  const [contact, setContact] = useState({
    nom: "",
    prenom: "",
    numero: "",
    email: "",
  });

  const [form] = Form.useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const postContact = async () => {
    // delete contact.id;
    await axios
      .post(baseUrl, contact)
      .then((response) => {
        alert("Vous avez ajouter un nouveu contact avec succés ");
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Navbar />
      <Header type="list" />
      <div id="contact" className="block contactBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Ajouter un contact</h2>
          </div>
          <Form form={form} onFinish={postContact}>
            <Form.Item
              name="nom"
              rules={[
                {
                  required: true,
                  message: "Entrer votre nom!",
                },
              ]}
            >
              <Input name="nom" onChange={handleChange} placeholder="Nom" />
            </Form.Item>
            <Form.Item
              name="prenom"
              rules={[
                {
                  required: true,
                  message: "Entrer votre prenom!",
                },
              ]}
            >
              <Input
                name="prenom"
                onChange={handleChange}
                placeholder="Prenom"
              />
            </Form.Item>
            <Form.Item
              name="numero"
              rules={[
                {
                  required: true,
                  message: "Entrer votre numero de telephone!",
                },
              ]}
            >
              <Input
                name="numero"
                onChange={handleChange}
                placeholder="Telephone"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Entrer un format email!",
                },
                {
                  required: true,
                  message: "Entrer votre email!",
                },
              ]}
            >
              <Input name="email" onChange={handleChange} placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Add;
