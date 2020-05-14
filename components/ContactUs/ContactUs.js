import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faMobileAlt, faBusinessTime } from "@fortawesome/free-solid-svg-icons";

const timeTable = [
  { day: "Monday", time: " 8 am – 8 pm" },
  { day: "Tuesday", time: "8 am – 8 pm" },
  { day: "Wednesday", time: " 8 am – 8 pm" },
  { day: "Thursday ", time: "8 am – 8 pm" },
  { day: "Friday", time: "8 am – 8 pm" },
  { day: "Saturday", time: "8 am – 8 pm" },
  { day: "Sunday", time: "Closed" },
];

export default () => (
  <>
    <div className="container">
      <h2 className="text-center">Contact Us</h2>
      <div className="columns">
        <div className="column col-md-12 col-6">
          <div className="column col-xl-12 col-8 col-mx-auto">
            <ContactForm />
          </div>
        </div>
        <div className="column col-md-12 col-6">
          <div className="column col-xl-12 col-8 col-mx-auto">
            <div className="columns address">
              <div className="column col-1">
                <FontAwesomeIcon className="form-icon" icon={faMapPin} />
              </div>
              <div className="column col-11">
                <span>3500 North 9th Street, Saint Louis, Missouri 63147, United States</span>
              </div>
            </div>
            <div className="columns address">
              <div className="column col-1">
                <FontAwesomeIcon className="form-icon" icon={faMobileAlt} />
              </div>
              <div className="column col-11">
                <a href="tel:1-562-867-5309">1-562-867-5309</a>
              </div>
            </div>
            <div className="columns address">
              <div className="column col-1">
                <FontAwesomeIcon className="form-icon" icon={faBusinessTime} />
              </div>
              <div className="column col-11">
                {timeTable.map(({ day, time }) => (
                  <div key={day}>
                    {day} {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        .address {
          align-items: center;
        }
      `}
    </style>
  </>
);
