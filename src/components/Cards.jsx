import 'dayjs/locale/de';
import '../../src/utils/mockupData.json';
import Card from './Card';

const Cards = ({ eventData }) => {
  console.log('this is eventData for cards', eventData);
  const timestamp = 1696546800; // Replace with your timestamp value

  // Create a new Date object using the timestamp
  const date = new Date(timestamp);
  const dayOfWeek = date.getDay();
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  // Get the date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Add 1 to get the actual month (January is 0)
  const day = date.getDate();
  // const days = dayjs(date).get('day');

  // Format the date and time as per your requirements
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hour}:${minute}:${second}`;

  // Print the date and time
  // console.log("dfd", today);
  // console.log('Date:', formattedDate);
  // console.log('Time:', formattedTime);
  // console.log('Day:', days);

  return (
    <div className="custom-container">
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Vandaag</h3>
            </div>

            <div className="date">
              <h5 className="date">{formattedTime}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            {today ?(
            <div className="row double">
              <Card />
            </div>
            ) : null}
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
              <h5 className="date">{formattedDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            {dayOfWeek === 5 ? (
            <div className="row double">
              <Card />
            </div>
            ) : null}
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
              <h5 className="date">{formattedDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            {dayOfWeek === 6 ? (
            <div className="row double">
              <Card />
            </div>
            ) : null}
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
              <h5 className="date">{formattedDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            {dayOfWeek === 0 ? (
            <div className="row">
              <Card />
            </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="card-divider"></div>
    </div>
  );
};

export default Cards;
