import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faMobileAlt,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

const timeTable = [
  { day: "Monday", time: " 11 am – 9 pm" },
  { day: "Tuesday", time: "11 am – 9 pm" },
  { day: "Wednesday", time: " 11 am – 9 pm" },
  { day: "Thursday ", time: "11 am – 9 pm" },
  { day: "Friday", time: "11 am – 9 pm" },
  { day: "Saturday", time: "11 am – 9 pm" },
  { day: "Sunday", time: "Closed" },
];

export default () => (
  <>
    <div className="container">
      <h2 className="text-center">Contact Us</h2>
      <div className="columns">
        <div className="column col-md-12 col-6">
          <div className="column col-xl-12 col-12 col-mx-auto">
            <ContactForm />
          </div>
        </div>
        <div className="column col-md-12 col-6">
          <div className="column col-xl-12 col-12 col-mx-auto text-center">
            <div className="columns address">
              <div className="column col-12">
                <FontAwesomeIcon
                  size="lg"
                  className="form-icon mr-2"
                  icon={faMapPin}
                />
                <span>
                  17582 E 17th St. Suite 105 Tustin, CA 92780 <br></br>At the
                  Oak Tree Plaza, between Yorba & Prospect
                </span>
              </div>
            </div>
            <div className="columns address">
              <div className="column col-12">
                <FontAwesomeIcon
                  size="lg"
                  className="form-icon mr-2"
                  icon={faMobileAlt}
                />
                <a href="tel:1-714-544-1900">1-714-544-1900</a>
              </div>
            </div>
            <div className="columns address">
              <div className="column col-12 col-mx-auto">
                <div className="times">
                  <FontAwesomeIcon
                    size="lg"
                    className="form-icon mr-2"
                    icon={faBusinessTime}
                  />
                  <div>
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
      </div>
    </div>
    <style jsx global>
      {`
        .address {
          align-items: center;
          justify-content: center;
        }
        .times {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
  </>
);
