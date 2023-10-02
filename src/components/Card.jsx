import React from "react";
import { InfoSvg } from '../utils/svg';

const Card = (props) => {
  
  return (
    <>
      {props.items.map((item, index) => (
        <div className="event-content text-white" key={index} style={{ width: "264.38px",height:"132px" }}>
          <a href="/single-event">
            <h5 className="Charlee">{item.TheClub}</h5>
            <h6 className="text-light-gray">{item.CityName}</h6>
            {item.OutofStock.sold_out ==='true' ? (
              <div className="sold Out">
                <span>Sold out</span>
              </div>
            ) : (
              <div className="tooltipss">
                <span>{item.EventDate}</span>
                <span>{item.MinimalAge}</span>
                <div className="tool">
                  <span className="gen">{item.EventCategorie}</span>
                  <span className="tooltips">
                    {' '}
                    <InfoSvg />
                    <span className="tooltiptext tooltipText wa Vriendenticket">
                      {item.GenreList}
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