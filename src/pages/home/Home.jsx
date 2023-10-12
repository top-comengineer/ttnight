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
// import DiscoverEvent from '../../components/DiscoverEvent';
import Carousel from '../../components/Carousel';
import { API_URL } from '../../utils/config';

const Home = ({ token }) => {
  const [tab, setTab] = useState(1);
  const [searchForm, setSearchForm] = useState(false);
  const [smSearchForm, setSmSearchFrom] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [eventData, setEventData] = useState([
    {
      EventId: 32897,
      EvenName: 'MIMI',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Chin Chin',
      OnlineSoon: 'NO',
      Description:
        'Friends Guestlist | €10 in plaats van €15 | RnB, Hits & Classics',
      EventDate: '1696235108',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '21',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'false',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Dag event',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Amsterdam',
    },
    {
      EventId: 32897,
      EvenName: 'FISSA | Oliva',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Fissa',
      OnlineSoon: 'NO',
      Description:
        'Friends Guestlist | €10 in plaats van €15 | RnB, Hits & Classics',
      EventDate: '1696546800',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '18',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'false',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Festival',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Amsterdam',
    },
    {
      EventId: 32897,
      EvenName: 'MIMI',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Chin Chin',
      OnlineSoon: 'NO',
      Description:
        'Friends Guestlist | €10 in plaats van €15 | RnB, Hits & Classics',
      EventDate: '1696546800',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '18',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'false',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Alle event',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Amsterdam',
    },
    {
      EventId: 32897,
      EvenName: 'TROPICAL GARDEN | Tiwya',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Fissa',
      OnlineSoon: 'NO',
      Description:
        'Friends Guestlist | €10 in plaats van €15 | RnB, Hits & Classics',
      EventDate: '1696546800',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '21',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'false',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Nacht event',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Amsterdam',
    },
    {
      EventId: 32897,
      EvenName: 'NR. 133 | Chin Chin Club',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Chin Chin',
      OnlineSoon: 'NO',
      Description:
        'Friends Guestlist | €10 in plaats van €15 | RnB, Hits & Classics',
      EventDate: '1687647600',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '23',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'true',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Nacht event',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Rotterdam',
    },
    {
      EventId: 32897,
      EvenName: 'DIPSHIT | Chicago Social Club',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Fissa',
      OnlineSoon: 'NO',
      Description:
        'Friends Tickets | €7,5 in plaats van €10,5 | Hitjes, Meezingers & Confetti',
      EventDate: '1687906800',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '21',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'false',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Festival event',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Rotterdam',
    },
    {
      EventId: 32897,
      EvenName: 'LA FOLIE | Oliva',
      Trending: 'Yes',
      EvenementImages:
        ' https://staging3.22night.com/wp-content/uploads/2023/09/363763102_817905126787975_7757634089889255548_n-1.jpg ',
      OriginalPrice: '15',
      OurPrice: '10',
      TheClub: 'Chin Chin',
      OnlineSoon: 'NO',
      Description: 'Friends Ticket | €10 in plaats van €15 | Hitjes & House',
      EventDate: '1696204800',
      RegistrationFrom: '1695877200',
      RegistrationUntil: '1696546800',
      MinimalAge: '21',
      EventCategorie: 'Gastenlijst',
      TicketLink: '',
      OutofStock: {
        sold_out: 'true',
      },
      WhatsappLink: '',
      StelzLink: '',
      dporiginal: '',
      timeofday: 'Dag event',
      GenreList: 'Classics,Hitjes,House,RnB',
      CityName: 'Rotterdam',
    },
  ]);

  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform search logic here and update the searchResults state accordingly
    // You can use APIs, filter data, or any other search mechanism

    const filteredResults = eventData.filter(item =>
      item.EvenName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    console.log(searchResults);
  };

  useEffect(() => {
    getEventData(token);
    // console.log('this is user token', token);
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

            {/* search and search result modal */}
            <div className="hero-section">
              <div
                className={clsx(
                  'search-information-box desktop',
                  searchForm ? 'active' : ''
                )}
              >
                <div className="main-box search-information-service">
                  <h6>Trending</h6>
                  {searchResults.map((result, index) => (
                    <div className="row">
                      <div className="search-information-image">
                        <TrendingStarSvg />
                      </div>
                      <div key={index} className="search-information-content">
                        <h5>{result.EvenName}</h5>
                        <p>{result.Description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                      readOnly
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

      {/* <section>
        <DiscoverEvent eventData={eventData}/>
      </section> */}

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
