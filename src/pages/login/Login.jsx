import { useNavigate } from 'react-router-dom';
import { LogoSvg } from '../../utils/svg';
// import './Login.css';
import ProtectImg from '../../assets/image svg/lock.svg';
import chatMsgImg from '../../assets/new-icons/chat-messages.svg';
import ErrorSvg from '../../assets/image svg/error.svg';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import clsx from 'clsx';

const Login = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const validate = e => {
    e.preventDefault();
    setFlag(true);
    if (inputVal === 'xyz' && flag) {
      navigate('/');
    } else {
      setInputVal('');
    }
  };

  const validateOnInput = e => {
    setInputVal(e.target.value);
  };
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
        <form className="form" name="f1" onSubmit={validate} method="post">
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
                  className={clsx(
                    'form-control',
                    flag ? (inputVal ? '' : 'error-border') : ''
                  )}
                  id="validationCustom01"
                  placeholder="Wachtwoord"
                  value={inputVal}
                  onChange={validateOnInput}
                />
                {flag ? (
                  inputVal ? null : (
                    <div id="namelocation" className="flex items-center">
                      <img src={ErrorSvg} alt="error" className="danger" />
                      <span className="ml-1">
                        Geen geldige token. Probeer het opnieuw.
                      </span>
                    </div>
                  )
                ) : null}
              </div>
              <div>
                <Button type="submit" className="btn btn-primarys">
                  Inloggen
                </Button>
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
