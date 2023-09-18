import DatumIcon from '../assets/image svg/Calendar-N.svg';
import CategoryIcon from '../assets/image svg/party.svg';
import GenreIcon from '../assets/image svg/Music.svg';
import UserIcon from '../assets/image svg/User.svg';

import ArrowDownIcon from '../assets/image svg/chevron down.svg';
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';

const DiscoverEvent = () => {
  return (
    <div className="custom-container">
      <h2 className="text-white ontdek">Ontdek evenementen</h2>
      <div className="wrapper">
        <div className="external-dropdown">
          <div className="outer">
            <div className="side">
              <Menu>
                <MenuButton
                  as={Button}
                  className="nextButton btn btn-primary dropdown-toggle"
                  leftIcon={<img src={DatumIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    {' '}
                    Datum{' '}
                  </span>
                </MenuButton>
                <MenuList className="menu-list">
                  <MenuOptionGroup
                    className=""
                    defaultValue="vandaag"
                    type="radio"
                  >
                    <MenuItemOption value="vandaag">Vandaag</MenuItemOption>
                    <MenuItemOption value="morgen">Morgen</MenuItemOption>
                    <MenuItemOption value="deze week">Deze week</MenuItemOption>
                    <MenuItemOption value="volgende week">
                      Volgende week
                    </MenuItemOption>
                    <MenuItemOption value="deze maand">
                      Deze maand
                    </MenuItemOption>
                    <MenuItemOption value="alle datums">
                      Alle datums
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="side">
              <Menu>
                <MenuButton
                  as={Button}
                  className="nextButton btn btn-primary dropdown-toggle"
                  leftIcon={<img src={CategoryIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    Categorie
                  </span>
                </MenuButton>
                <MenuList className="menu-list">
                  <MenuOptionGroup
                    className=""
                    defaultValue="dag event"
                    type="radio"
                  >
                    <MenuItemOption value="dag event">Dag event</MenuItemOption>
                    <MenuItemOption value="nacht event">
                      Nacht event
                    </MenuItemOption>
                    <MenuItemOption value="festival">Festival</MenuItemOption>
                    <MenuItemOption value="alle events">
                      Alle events
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="side">
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  className="nextButton btn btn-primary dropdown-toggle"
                  leftIcon={<img src={GenreIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    Genre
                  </span>
                </MenuButton>
                <MenuList className="menu-list">
                  <MenuOptionGroup className="" type="checkbox">
                    <MenuItemOption isChecked={true} value="amapiano">
                      Amapiano
                    </MenuItemOption>
                    <MenuItemOption value="classics">Classics</MenuItemOption>
                    <MenuItemOption value="hip-hop">Hip-hop</MenuItemOption>
                    <MenuItemOption value="hitjes">Hitjes</MenuItemOption>
                    <MenuItemOption value="house">House</MenuItemOption>
                    <MenuItemOption value="disco">Disco</MenuItemOption>
                    <MenuItemOption value="techno">Techno</MenuItemOption>
                  </MenuOptionGroup>
                  {/* <MenuItem>
                    <Checkbox defaultChecked>Amapiano</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox defaultChecked>Classics</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox defaultChecked>Hip-hop</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox defaultChecked>Hitjes</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox defaultChecked>House</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox defaultChecked>Disco</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox defaultChecked>Techno</Checkbox>
                  </MenuItem> */}
                </MenuList>
              </Menu>
            </div>
            <div className="side">
              <Menu>
                <MenuButton
                  as={Button}
                  className="nextButton btn btn-primary dropdown-toggle"
                  leftIcon={<img src={UserIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    Leeftijd
                  </span>
                </MenuButton>
                <MenuList className="menu-list">
                  <MenuOptionGroup className="" defaultValue="18" type="radio">
                    <MenuItemOption value="18">18+</MenuItemOption>
                    <MenuItemOption value="21">21+</MenuItemOption>
                    <MenuItemOption value="23">23+</MenuItemOption>
                    <MenuItemOption value="alle leeftijden">
                      Alle leeftijden
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEvent;
