import { LogoSvg } from '../../utils/svg';
// import './Login.css';
import ProtectImg from '../../assets/image svg/lock.svg';
import chatMsgImg from '../../assets/new-icons/chat-messages.svg';

const Login = () => {
  return (
    <header className="login">
      <div className="row">
        <div className="logo-log">
          <a href="/">
            <LogoSvg />
          </a>
        </div>
      </div>
      <div className="login_form">
        <form
          className="form"
          name="f1"
          // onsubmit="return validate()"
          method="post"
        >
          <div className="lg">
            <div className="">
              <p className="flex protected">
                <img src={ProtectImg} alt="protected" className="protected" />
                <span className="ml-1">Protected Page</span>
              </p>
              <div>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Wachtwoord"
                  // onInput="validateOnInput()"
                />
                <div id="namelocation"></div>
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-primarys"
                  value="Inloggen"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="chat-img">
              <img src={chatMsgImg} alt="chat message" className="mice " />{' '}
            </div>
            <div className="chat-text">
              <p className="login-text">
                Je kunt toegang krijgen tot onze events via de{' '}
                <a className="community" href="#">
                  community chat
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Login;
