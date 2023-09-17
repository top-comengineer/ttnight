import DatumIcon from '../assets/image svg/Calendar-N.svg';
import CategoryIcon from '../assets/image svg/party.svg';
import GenreIcon from '../assets/image svg/Music.svg';
import UserIcon from '../assets/image svg/User.svg';

import ArrowDownIcon from '../assets/image svg/chevron down.svg';

const DiscoverEvent = () => {
  return (
    <div className="custom-container">
      <h2 className="text-white ontdek">Ontdek evenementen</h2>
      <div className="wrapper">
        <div className="external-dropdown">
          <div className="outer">
            <div className="side">
              <div className="dropdown">
                <button
                  className="nextButton btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  <img src={DatumIcon} alt="datum" />{' '}
                  <span className="selectedOption" id="button1Text">
                    {' '}
                    Datum{' '}
                  </span>
                  <img src={ArrowDownIcon} alt="arrow down" />
                </button>
                <ul className="dropdown-menu  checkbox-dropdown-list border-none">
                  <li>
                    <input
                      id="vandaag"
                      className="radio-custom"
                      name="ontdek evenementen"
                      type="radio"
                      value="vandaag"
                      checked
                    />
                    <label htmlFor="vandaag" className="radio-custom-label">
                      Vandaag
                    </label>
                  </li>
                  <li>
                    <input
                      id="morgen"
                      className="radio-custom"
                      name="ontdek evenementen"
                      type="radio"
                      value="morgen"
                    />
                    <label htmlFor="morgen" className="radio-custom-label">
                      Morgen
                    </label>
                  </li>
                  <li>
                    <input
                      id="deze week"
                      className="radio-custom"
                      name="ontdek evenementen"
                      type="radio"
                      value="deze week"
                    />
                    <label htmlFor="deze week" className="radio-custom-label">
                      Deze week
                    </label>
                  </li>
                  <li>
                    <input
                      id="volgende week"
                      className="radio-custom"
                      name="ontdek evenementen"
                      type="radio"
                      value="volgende week"
                    />
                    <label
                      htmlFor="volgende week"
                      className="radio-custom-label"
                    >
                      Volgende week
                    </label>
                  </li>

                  <li>
                    <input
                      id="deze maand"
                      className="radio-custom"
                      name="ontdek evenementen"
                      type="radio"
                      value="deze maand"
                    />
                    <label htmlFor="deze maand" className="radio-custom-label">
                      Deze maand
                    </label>
                  </li>
                  <li>
                    <input
                      id="alle datums"
                      className="radio-custom"
                      name="ontdek evenementen"
                      type="radio"
                      value="alle datums"
                    />
                    <label htmlFor="alle datums" className="radio-custom-label">
                      Alle datums
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="side">
              <div className="dropdown">
                <button
                  className="nextButton btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  <img src={CategoryIcon} alt="category" />{' '}
                  <span className="selectedOption" id="button2Text">
                    {' '}
                    Categorie{' '}
                  </span>
                  <img src={ArrowDownIcon} alt="arrow down" />
                </button>
                <ul className="dropdown-menu checkbox-dropdown-list border-none">
                  <li>
                    <input
                      id="dag"
                      type="radio"
                      className="radio-custom"
                      value="dag event"
                      name="categorie"
                      checked
                    />
                    <label htmlFor="dag" className="radio-custom-label">
                      Dag event
                    </label>
                  </li>
                  <li>
                    <input
                      id="nacht"
                      type="radio"
                      className="radio-custom"
                      value="nacht event"
                      name="categorie"
                    />
                    <label htmlFor="nacht" className="radio-custom-label">
                      Nacht event
                    </label>
                  </li>
                  <li>
                    <input
                      id="festival"
                      type="radio"
                      className="radio-custom"
                      value="festival"
                      name="categorie"
                    />
                    <label htmlFor="festival" className="radio-custom-label">
                      Festival
                    </label>
                  </li>
                  <li>
                    <input
                      id="alle events"
                      type="radio"
                      className="radio-custom"
                      value="alle events"
                      name="categorie"
                    />
                    <label htmlFor="alle events" className="radio-custom-label">
                      Alle events
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="side">
              <div className="dropdown">
                <button
                  className="nextButton btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  <img src={GenreIcon} alt="genre" />
                  <span> Genre </span>
                  <img src={ArrowDownIcon} alt="arrow down" />
                </button>
                <ul className="dropdown-menu checkbox-dropdown-list">
                  <li>
                    {' '}
                    <label>
                      <input
                        type="checkbox"
                        value="amapiano"
                        name="amapiano"
                        checked
                      />
                      Amapiano
                    </label>
                  </li>
                  <li>
                    {' '}
                    <label>
                      {' '}
                      <input
                        type="checkbox"
                        value="classics"
                        name="classics"
                        checked
                      />
                      Classics
                    </label>
                  </li>
                  <li>
                    {' '}
                    <label>
                      {' '}
                      <input
                        type="checkbox"
                        value="hip-hop"
                        name="hip-hop"
                        checked
                      />
                      Hip-hop
                    </label>
                  </li>
                  <li>
                    {' '}
                    <label>
                      {' '}
                      <input
                        type="checkbox"
                        value="hitjes"
                        name="hitjes"
                        checked
                      />
                      Hitjes
                    </label>
                  </li>
                  <li>
                    {' '}
                    <label>
                      {' '}
                      <input
                        type="checkbox"
                        value="house"
                        name="house"
                        checked
                      />
                      House
                    </label>
                  </li>
                  <li>
                    {' '}
                    <label>
                      {' '}
                      <input
                        type="checkbox"
                        value="disco"
                        name="disco"
                        checked
                      />
                      Disco
                    </label>
                  </li>
                  <li>
                    {' '}
                    <label>
                      {' '}
                      <input
                        type="checkbox"
                        value="techno"
                        name="techno"
                        checked
                      />
                      Techno
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="side">
              <div className="dropdown">
                <button
                  className="nextButton btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  <img src={UserIcon} alt="user" />
                  <span className="selectedOption" id="button3Text">
                    {' '}
                    Leeftijd{' '}
                  </span>{' '}
                  <img src={ArrowDownIcon} alt="arrow down" />
                </button>
                <ul className="dropdown-menu checkbox-dropdown-list border-none">
                  <li>
                    <input
                      id="18"
                      className="radio-custom"
                      name="Age"
                      type="radio"
                      value="18"
                      checked
                    />
                    <label htmlFor="18" className="radio-custom-label">
                      18+
                    </label>
                  </li>
                  <li>
                    <input
                      id="21"
                      className="radio-custom"
                      name="Age"
                      type="radio"
                      value="21"
                    />
                    <label htmlFor="21" className="radio-custom-label">
                      21+
                    </label>
                  </li>
                  <li>
                    <input
                      id="Age-23"
                      className="radio-custom"
                      name="Age"
                      type="radio"
                      value="21"
                    />
                    <label htmlFor="Age-23" className="radio-custom-label">
                      23+
                    </label>
                  </li>
                  <li>
                    <input
                      id="Alle leeftijden"
                      className="radio-custom"
                      name="Age"
                      type="radio"
                      value="Alle leeftijden"
                    />
                    <label
                      htmlFor="Alle leeftijden"
                      className="radio-custom-label"
                    >
                      Alle leeftijden
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEvent;
