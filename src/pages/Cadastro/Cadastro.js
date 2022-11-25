import './Cadastro.css'


function Cadastro () {
    return (
    
        <div className='background'>

        <div className="user-login">
    
        <div className='App'>
          <section className="NavBar"></section>
        
          <img src={logo} className="Logo" align="center"></img>
        </div>
    
          <h1 className="user-login__title">Welcome To Back</h1>
          <h2 className='user-login__subtitle'>Insira seu usuário e senha</h2>
          <form onSubmit={onSubmit}>
            <div className="user-login__form-control">
              <label htmlFor="user">Usuário</label>
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
              </form>
              </div>
              </div>
              
              
    );
}
export default Cadastro;