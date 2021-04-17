import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="describe">
        <h1>Telefones</h1>
        <p>+55 (11) 3088-0757</p>
        <h1>E-mail</h1>
        <p>renee@reneetrajar.com.br</p>
        <h1>Atendimento Personalizado</h1>
        <button>Clique aqui!</button>
      </div>
      <div className="formContact">
          <h1>Contato</h1>
        <input placeholder="Nome"/>
        <input  placeholder="Email"/>
        <input  placeholder="Mensagem"/>
        <button>Enviar Mensagem</button>
      </div>
    </div>
  );
}
