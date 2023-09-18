import { LogoSvg } from '../../utils/svg';
import ArrowImg from '../../assets/image svg/arrow-left.svg';
import LoodsImg from '../../assets/image svg/Loods1.svg';
import LocateImg from '../../assets/image svg/Locatie.svg';
import CalendarImg from '../../assets/image svg/Calendar-N.svg';
import GuestListImg from '../../assets/image svg/Guestlist.svg';
import UserImg from '../../assets/image svg/User.svg';
import MusicImg from '../../assets/image svg/Music.svg';
import GuestListSinImg from '../../assets/image svg/Guestlist-sin.svg';
import UserSinImg from '../../assets/image svg/User-sin.svg';
import WarningImg from '../../assets/image svg/Warning.svg';

import './SingleEvent.css';

const SingleEvent = () => {
  return (
    <div>
      <div className="hero-section-single">
        <div className="container-single">
          <div className="row">
            <div className="arrow">
              <a href="/">
                <img src={ArrowImg} alt="arrow" className="logo" />
              </a>
            </div>
            <div className="logo-Img">
              <a href="/">
                <LogoSvg />
              </a>
            </div>
          </div>
        </div>

        <div className="custom-container containers">
          <div className="event-img text-center">
            <img src={LoodsImg} alt="Loods1" />
          </div>
          <div className="event-heading">
            <h1 className="text-center text-whites">Fissa</h1>
          </div>
          <div className="event-information-box">
            <ul className="row gap">
              <li className="event date">
                <a className="text-white flex">
                  <img src={LocateImg} alt="Locatie" />
                  <span className="text-color">Oliva, Amsterdam</span>
                </a>
              </li>

              <li className="event date">
                <a className="text-white flex">
                  <img src={CalendarImg} alt="Calendar" />
                  <span className="text-color">25 aug — 23:00</span>
                </a>
              </li>

              <li className="event date">
                <a className="text-white flex">
                  <img src={GuestListImg} alt="Guestlist" />
                  <span className="text-color">Gastenlijst</span>
                </a>
              </li>
              <li className="event date">
                <a className="text-white flex">
                  <img src={UserImg} alt="User" />
                  <span className="text-color">21+</span>
                </a>
              </li>
              <li className="event date">
                <a className="text-white flex">
                  <img src={MusicImg} alt="Music" />
                  <span className="text-color">Hitjes, R&B, House</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="event-price-box first ">
            <div className="row justify-content-between">
              <div className="price-box text-white">
                <h3>€15,-</h3>
                <h6>in plaats van €25,-</h6>
              </div>

              <div className="price-button">
                <button className="button">Koop vriendenticket</button>
              </div>
            </div>
          </div>

          <div className="events-box">
            <div className="multipan-event-box vriendenticket">
              <div className="events-image">
                <img src={GuestListSinImg} alt="guest-list-sin" />
              </div>
              <div className="events-content">
                <h5 className="text-white">Gastenlijst</h5>
                <p className="text-light-gray event-content">
                  We zetten jouw naam op de gastenlijst, zodat je gratis of
                  goedkoper naar binnen kan.
                </p>
              </div>
            </div>

            <div className="multipan-event-box">
              <div className="events-image">
                <img src={UserSinImg} alt="user-sin" />
              </div>
              <div className="events-content">
                <h5 className="text-white">Minimale leeftijd 21+</h5>
              </div>
            </div>

            <div className="multipan-event-box">
              <div className="events-image">
                <img src={WarningImg} alt="warning" />
              </div>
              <div className="events-content">
                <h5 className="text-white">
                  Ticket refund- en resell niet mogelijk
                </h5>
              </div>
            </div>
          </div>
        </div>

        <section className="event-form-sec">
          <div className="custom-container containers">
            <div className="event-information-form">
              <h3 className="text-white form-heading">Jouw gegevens</h3>
              <form>
                <div className="first-name event-sec-forms">
                  <div className="col-md-6">
                    <input type="text" placeholder="Voornaam" className="sin" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Achternaam"
                      className="sin"
                    />
                  </div>
                </div>
                <div className="email event-sec-form">
                  <input
                    type="email"
                    name="email-input"
                    id="email"
                    placeholder="E-mail"
                    className="sin"
                  />
                </div>
                <div className="date event-sec-form">
                  <input
                    type="text"
                    maxLength="2"
                    id="date"
                    name="date"
                    inputMode="numeric"
                    className="sin"
                    placeholder="18"
                  />
                  <span>jaar</span>
                </div>
                <div className="geslacht event-sec-form sin">
                  <select
                    id="geslacht"
                    className="cx-ui-select"
                    name="geslacht"
                    size="1"
                    data-filter="false"
                    data-placeholder=""
                  >
                    <option value="gender">Geslacht</option>
                    <option value="Man">man</option>
                    <option value="Vrouw">Vrouw</option>
                    <option value="Onzijdig">Onzijdig</option>
                  </select>
                </div>

                <div className="hidden-field ">
                  <input
                    type="hidden"
                    name="token"
                    id="token"
                    placeholder="token"
                  />
                  <input
                    type="hidden"
                    name="event_id"
                    id="event_id"
                    placeholder="event_id"
                  />
                  <input
                    type="hidden"
                    name="event"
                    id="event"
                    placeholder="event"
                  />
                </div>
                <div className="checkbox">
                  <div className="check">
                    <input type="checkbox" name="" id="" />{' '}
                  </div>
                  <div className="texts">
                    <label className="text-white">
                      Ik ga akkoord met de <a href="#">algemene voorwaarden</a>{' '}
                      <span>van 22NIGHT</span>
                    </label>
                  </div>{' '}
                </div>

                <div className="event-price-box destop">
                  <div className="row justify-content-between">
                    <div className="price-box text-white">
                      <h3>€15,-</h3>
                      <h6>in plaats van €25,-</h6>
                    </div>

                    <div className="price-button">
                      <button className="button openPopupButtons" type="button">
                        Koop vriendenticket
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="popups" className="popups">
            <div className="popup-contents">
              <img
                src="assets/image svg/Illustration.svg"
                className="Illustration"
              />
              <p className="Hier">Hier is je community ticket</p>
              <p className="Je">
                Je ontvangt een e-mail van de organisatie zodra de betaling is
                afgerond.
              </p>
              <a href="index.html" className="Terug">
                Terug naar home
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleEvent;
