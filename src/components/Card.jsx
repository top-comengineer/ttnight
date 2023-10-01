import React from "react";
import { InfoSvg } from '../utils/svg';

const Card = () => {
 
  const items = [
    {
      name: 'Happy feelings 16:00',
      location: 'Thuishaven, Amsterdam',
      soldOut: true,
    },
    {
      name: 'Happy feelings 16:00',
      location: 'Thuishaven, Amsterdam',
      time: '16:00',
      ageRestriction: '18+',
      tooltipText: 'We zetten jouw naam op de gastenlijst, zodat je gratis of goedkoper naar binnen kan.',
      tooltipType: 'Gastenlijst',
    },
    // Add more event objects as needed
  ];

  return (
    <>
      {items.map((item, index) => (
        <div className="event-content text-white doubles" key={index}>
          <a href="/single-event">
            <h5 className="Charlee">{item.name}</h5>
            <h6 className="text-light-gray">{item.location}</h6>
            {item.soldOut ? (
              <div className="sold Out">
                <span>Sold out</span>
              </div>
            ) : (
              <div className="tooltipss">
                <span>{item.time}</span>
                <span>{item.ageRestriction}</span>
                <div className="tool">
                  <span className="gen">{item.tooltipType}</span>
                  <span className="tooltips">
                    {' '}
                    <InfoSvg />
                    <span className="tooltiptext tooltipText wa Vriendenticket">
                      {item.tooltipText}
                    </span>
                  </span>
                </div>
              </div>
            )}
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;