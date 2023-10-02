import 'dayjs/locale/de';
import '../../src/utils/mockupData.json';
import Card from './Card';

const Cards = (props) => {
  const items = props.eventData
  const formattedItems = items.map(item => {
    const originDate = item.EventDate;
    const date = new Date(originDate * 1000);
    
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  
    const dayOfWeek = date.getDay(); // Get the day of the week as a number (0-6)
    return { ...item, EventDate: formattedDate, DayOfWeek: dayOfWeek };
  });
  
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const todayDate = `${hour}:${minute}:${second}`;
  const fridayDate = formattedItems.find(item => item.DayOfWeek === 5)?.EventDate;
  const saturdayDate = formattedItems.find(item => item.DayOfWeek === 6)?.EventDate;
  const sundayDate = formattedItems.find(item => item.DayOfWeek === 0)?.EventDate;
  console.log(today);

  return (
    <div className="custom-container">
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Vandaag</h3>
            </div>

            <div className="date">
              <h5 className="date">{todayDate}</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            {formattedItems.map(item => (
              item.DayOfWeek === 1 && (
                <div className="row double">
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
          <div className="event-box">
            {formattedItems.map(item => (
              item.DayOfWeek === 5 && (
                <div className="row double">
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
          <div className="event-box">
            {formattedItems.map(item => (
              item.DayOfWeek === 6 && (
                <div className="row double">
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
          <div className="event-box">
            {formattedItems.map(item => (
              item.DayOfWeek === 0 && (
                <div className="row double">
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
