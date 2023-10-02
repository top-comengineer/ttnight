import 'dayjs/locale/de';
import '../../src/utils/mockupData.json';
import DatumIcon from '../assets/image svg/Calendar-N.svg';
import CategoryIcon from '../assets/image svg/party.svg';
import GenreIcon from '../assets/image svg/Music.svg';
import UserIcon from '../assets/image svg/User.svg';

import ArrowDownIcon from '../assets/image svg/chevron down.svg';
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Card from './Card';

const discoveryMenus = {
  datum: ['Vandaag','Morgen','Deze week','Volgende week','Deze maand','Alle datums'],
  categorie: ['Dag event', 'Nacht event', 'Festival', 'Alle events'],
  genre: ['Amapiano','Classics','Hip-hop','Hitjes','House','disco','techno'],
  leeftijd: ['18', '21', '23', 'Alle leeftijden'],
};

const Cards = (props) => {
  const [resultItems, setResultItems] = useState([]);
  const [discovery, setDiscovery] = useState({
    datum: 'Datum',
    categorie: 'Categorie',
    genre: 'Genre',
    leeftijd: 'Leeftijd',
  });
  const [genreList, setGenreList] = useState([]);
  const items = props.eventData
  // format items according to the dayofweek
  const formattedItems = items.map(item => {
    const originDate = item.EventDate;
    const date = new Date(originDate * 1000);
    
    const formattedDate = date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  
    const dayOfWeek = date.getDay(); // Get the day of the week as a number (0-6)
    return { ...item, EventDate: formattedDate, DayOfWeek: dayOfWeek };
  });
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const todayDate = `${month}/${day}/${year}`;
  const todayTime = `${hour}:${minute}:${second}`;
  const fridayDate = formattedItems.find(item => item.DayOfWeek === 5)?.EventDate;
  const saturdayDate = formattedItems.find(item => item.DayOfWeek === 6)?.EventDate;
  const sundayDate = formattedItems.find(item => item.DayOfWeek === 0)?.EventDate;
  
  const genreChange = e => {
    setGenreList(e);
  };
  console.log(discovery, genreList);
  // filter items by 4 options
  useEffect(() => {
    const newFilteredItems = formattedItems.filter(item => {
      return (
        item.EventDate === discovery.datum ||
        item.timeofday === discovery.categorie ||
        item.GenreList === discovery.genre ||
        item.MinimalAge === discovery.leeftijd
      );
    });
  
    setResultItems(newFilteredItems);
  }, [discovery]);

  console.log(resultItems, todayDate);

  return (
    <div className="custom-container">
      <div className="filter-section">
        <h2 className="text-white ontdek">Ontdek evenementen</h2>
        <div className="wrapper">
          <div className="external-dropdown">
            <div className="outer">
              <div className="side">
                <Menu>
                  <MenuButton
                    as={Button}
                    className="btn btn-dropdown dropdown-toggle"
                    leftIcon={<img src={DatumIcon} alt="datum" />}
                    rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                  >
                    <span className="selectedOption" id="button1Text">
                      {discovery.datum}
                    </span>
                  </MenuButton>
                  <MenuList className="menu-list" pos="absolute" top="8" left="0">
                    <MenuOptionGroup
                      className=""
                      defaultValue="Vandaag"
                      type="radio"
                    >
                      {discoveryMenus.datum.map((item, index) => (
                        <MenuItemOption
                          key={index}
                          onClick={() =>
                            setDiscovery({ ...discovery, datum: item })
                          }
                          value={item}
                        >
                          {item}
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </div>
              <div className="side">
                <Menu>
                  <MenuButton
                    as={Button}
                    className="btn btn-dropdown dropdown-toggle"
                    leftIcon={<img src={CategoryIcon} alt="datum" />}
                    rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                  >
                    <span className="selectedOption" id="button1Text">
                      {discovery.categorie}
                    </span>
                  </MenuButton>
                  <MenuList className="menu-list" pos="absolute" top="8" left="0">
                    <MenuOptionGroup
                      className=""
                      defaultValue="Dag event"
                      type="radio"
                    >
                      {discoveryMenus.categorie.map((item, index) => (
                        <MenuItemOption
                          key={index}
                          onClick={() =>
                            setDiscovery({ ...discovery, categorie: item })
                          }
                          value={item}
                        >
                          {item}
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </div>
              <div className="side">
                <Menu closeOnSelect={false}>
                  <MenuButton
                    as={Button}
                    className="btn btn-dropdown dropdown-toggle"
                    leftIcon={<img src={GenreIcon} alt="datum" />}
                    rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                  >
                    <span className="selectedOption" id="button1Text">
                      {discovery.genre}
                    </span>
                  </MenuButton>
                  <MenuList
                    className="menu-list menu-checkbox-list"
                    pos="absolute"
                    top="8"
                    left="0"
                  >
                    <MenuOptionGroup
                      className=""
                      type="checkbox"
                      value={genreList}
                      aria-multiselectable
                      onChange={genreChange}
                    >
                      {discoveryMenus.genre.map((item, index) => (
                        <MenuItemOption 
                          key={index} 
                          value={item} 
                          onClick={()=>
                            setDiscovery({ ...discovery, genre: item })}
                        >
                          {item}
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </div>
              <div className="side">
                <Menu>
                  <MenuButton
                    as={Button}
                    className="btn btn-dropdown dropdown-toggle"
                    leftIcon={<img src={UserIcon} alt="datum" />}
                    rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                  >
                    <span className="selectedOption" id="button1Text">
                      {discovery.leeftijd}
                    </span>
                  </MenuButton>
                  <MenuList className="menu-list" pos="absolute" top="8" left="0">
                    <MenuOptionGroup className="" defaultValue="18+" type="radio">
                      {discoveryMenus.leeftijd.map((item, index) => (
                        <MenuItemOption
                          key={index}
                          onClick={() =>
                            setDiscovery({ ...discovery, leeftijd: item })
                          }
                          value={item}
                        >
                          {item}
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Vandaag</h3>
            </div>

            <div className="date">
              <h5 className="date">{todayTime}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="row event-box">
            {resultItems.map(item => (
              item.EventDate === todayDate && (
                <div className="mb-[44px]">
                  <Card items={[item]} />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Vrijdag</h3>
            </div>

            <div className="date">
              <h5 className="date">{fridayDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="row event-box">
            {resultItems.map(item => (
              item.DayOfWeek === 5 && (
                <div className="mb-[44px]">
                  <Card items={[item]} />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Zaterdag</h3>
            </div>

            <div className="date">
              <h5 className="date">{saturdayDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="row event-box">
            {resultItems.map(item => (
              item.DayOfWeek === 6 && (
                <div className="mb-[44px]">
                  <Card items={[item]} />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Zondag</h3>
            </div>

            <div className="date">
              <h5 className="date">{sundayDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="row event-box">
            {resultItems.map(item => (
              item.DayOfWeek === 0 && (
                <div className="mb-[44px]">
                  <Card items={[item]} />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="card-divider"></div>
    </div>
  );
};

export default Cards;
