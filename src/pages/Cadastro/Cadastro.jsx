import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "components/Store/Context";
import UIButton from "components/UI/Button/Button";
import { Link } from "react-router-dom";
import logo from "image/logo.svg";
import "./Cadastro.css";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const Cadastro = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push("/home");
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="background">
      <div className="user-login">
        <div className="App">
          <section className="NavBar"></section>

          <img src={logo} className="Logo" align="center" alt=""></img>
        </div>

        <h1 className="user-login__title">Cadastro</h1>
        <h2 className="user-login__subtitle">Cadastre-se para Marcar Reuniões.</h2>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Email</label>
            <input
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
            
          </div>
          {error && <div className="user-login__error">{error}</div>}
          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Entrar
          </UIButton>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
