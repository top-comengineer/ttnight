import { useEffect, useState } from 'react';
import clsx from 'clsx';

import {
  LogoSvg,
  StarSvg,
  TrendingCheckSvg,
  TrendingStarSvg,
} from '../../utils/svg';
import './Home.css';

import AmsterdamIcon from '../../assets/image svg/Amsterdam.svg';
import RotterdamIcon from '../../assets/image svg/Rotterdam.svg';
import Cards from '../../components/Cards';
import DiscoverEvent from '../../components/DiscoverEvent';
import Carousel from '../../components/Carousel';
import { API_URL } from '../../utils/config';

const Home = ({ token }) => {
  const [tab, setTab] = useState(1);
  const [searchForm, setSearchForm] = useState(false);
  const [smSearchForm, setSmSearchFrom] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform search logic here and update the searchResults state accordingly
    // You can use APIs, filter data, or any other search mechanism

    // For example, let's assume you have a list of items to search from
    const items = [
      { title: 'Charlee-Lovelee', description: '8 Juni 23:00 + Gastenlijst' },
      { title: 'Freaky-Supperclud', description: '8 Juni 23:00 + Gastenlijst' },
      { title: 'Mimi-Chin Chin', description: '8 Juni 23:00 + Gastenlijst' },
      { title: 'Super Social-Chicago Social Club', description: '8 Juni 23:00 + Vriendenligst' },
    ];

    const filteredResults = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    console.log(searchResults);
  };

  useEffect(() => {
    getEventData(token);
    console.log('this is user token', token);
  }, [token]);
  
  async function getEventData(token) {
    const data = {
      token: token,
    };
    try {
      const result = await fetch(`${API_URL}read.php`, {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const resData = await result.json();
      setEventData(resData.items);
      console.log('result--->', resData);
    } catch (err) {
      console.log('Error===>', err);
    }
  }
  return (
    <div className="">
      <div className="hero-section">
        <div className="custom-container">
          <div className="logo-img flex justify-center">
            <a href="/">
              <LogoSvg />
            </a>
          </div>

          <div
            className={clsx(
              'hero-content tab-content tab',
              tab === 1 ? 'block  tab-active' : 'hidden'
            )}
            data-id="tab1"
          >
            <h1 className="text-white text-center" id="heading">
              Gastenlijst Amsterdam
            </h1>
          </div>
          <div
            className={clsx(
              'hero-content tab-content tab',
              tab === 2 ? 'block  tab-active' : 'hidden'
            )}
            data-id="tab2"
          >
            <h1 className="text-white text-center" id="heading">
              Gastenlijst Rotterdam
            </h1>
          </div>

          <div className="hero-search-bar">
            <form className="hero-form">
              <button type="submit">
                <StarSvg />
              </button>
              <input
                type="text"
                placeholder="Zoek een evenement, clubavond of festival"
                autoComplete="off"
                name="search"
                id="showModalBtnbottom"
                value={searchQuery}
                onFocus={() => setSearchForm(true)}
                onBlur={() => setSearchForm(false)}
                onClick={() => setSmSearchFrom(true)}
                onChange={handleSearch}
              />
            </form>
            <div className={clsx('search-information-box desktop', searchForm ? 'active':'')}>
              <div className='main-box'>
                {searchResults.map((result, index) => (
                <a href='/single-event'>
                  <div className='search-information-service search-info row'>
                    <div className="search-information-image">
                      <TrendingStarSvg />
                    </div>
                    <div key={index} className="search-information-content">
                      <h5>{result.title}</h5>
                      <p>{result.description}</p>
                    </div>
                  </div>
                </a>
                ))}
              </div>
            </div>
            <div
              id="modals"
              className={clsx('modals', smSearchForm ? 'h-full' : 'h-0')}
            >
              <span className="closes" onClick={() => setSmSearchFrom(false)}>
                X
              </span>
              <div className="modal-contents">
                <div className="hero-search-bar">
                  <form className="hero-form">
                    <button type="submit">
                      <StarSvg />
                    </button>
                    <input
                      id="showModalBtnbottom"
                      type="text"
                      placeholder="Zoek een evenement, clubavond of festival"
                      autoComplete="off"
                      name="search"
                      onFocus={() => setSmSearchFrom(true)}
                    />
                  </form>
                  <div
                    className={clsx(
                      'search-information-box mobile',
                      searchForm ? 'active' : ''
                    )}
                  >
                    <div className="main-box">
                      <a href="/single-event">
                        <div className="search-information-service serach-info">
                          <h6>Trending</h6>

                          <div className="row">
                            <div className="search-information-image">
                              <TrendingCheckSvg />
                            </div>

                            <div className="search-information-content">
                              <h5>Charlee-Lovelee</h5>
                              <p>8 Juni 23:00 + Gastenlijst</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/single-event">
                        <div className="search-information-service">
                          <div className="row">
                            <div className="search-information-image">
                              <TrendingStarSvg />
                            </div>

                            <div className="search-information-content">
                              <h5>Freaky-Supperclud</h5>
                              <p>8 Juni 23:00 + Gastenlijst</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/single-event">
                        <div className="search-information-service">
                          <div className="row">
                            <div className="search-information-image">
                              <TrendingCheckSvg />
                            </div>

                            <div className="search-information-content">
                              <h5>Mimi-Chin Chin</h5>
                              <p>8 Juni 23:00 + Gastenlijst</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/single-event">
                        <div className="search-information-service social-club-information">
                          <div className="row">
                            <div className="search-information-image">
                              <TrendingStarSvg />
                            </div>
                            <div className="search-information-content">
                              <h5>Super Social-Chicago Social Club</h5>
                              <p>8 Juni 23:00 + Vriendenligst</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tabs">
              <div className="row justify-content-between">
                <div
                  className={clsx(
                    'amsterdam-tab cursor-pointer',
                    tab === 1 ? 'active' : ''
                  )}
                >
                  <div
                    className={clsx('tab-a', tab === 1 ? 'active-a' : '')}
                    data-id="tab1"
                    onClick={() => setTab(1)}
                  >
                    <img
                      src={AmsterdamIcon}
                      alt="amsterdam"
                      className="amsterdam"
                    />
                    <h5 className="text-white">Amsterdam</h5>
                  </div>
                </div>

                <div
                  className={clsx(
                    'rotterdam-tab cursor-pointer',
                    tab === 2 ? 'active' : ''
                  )}
                >
                  <div
                    className={clsx('tab-a', tab === 2 ? 'active-a' : '')}
                    data-id="tab2"
                    onClick={() => setTab(2)}
                  >
                    <img
                      src={RotterdamIcon}
                      alt="roterdam"
                      className="Rotterdam"
                    />
                    <h5 className="text-white">Rotterdam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section>
        <DiscoverEvent />
      </section>

      <section className="zoek-evenementen">
        <Cards eventData={eventData} />
      </section>

      <section>
        <div className="custom-container">
          <h2 className="binnenkort">Binnenkort online</h2>
          <p className="text-white text-p">
            Zorg ervoor dat jij er als eerst bij bent!
          </p>
        </div>
      </section>
      <section className="mb-[44px]">
        <Carousel />
      </section>
    </div>
  );
};
export default Home;
