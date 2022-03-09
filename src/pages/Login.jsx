import "./Login.scss";

const Login = () => {
  return (
    <div className="login_page">
      <h1 className="title_login_page"> Viens transpirer</h1>
      <div className="connexion">
        <h3>Connectez-vous</h3>
        <div className="connect">
          <div className="email">
            <p>EMAIL</p>
          </div>
          <div className="facebook">
            <p>FACEBOOK</p>
          </div>
          <div className="gmail">
            <p>GMAIL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
