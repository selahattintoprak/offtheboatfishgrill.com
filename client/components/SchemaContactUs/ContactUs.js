import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faMobileAlt,
  faBusinessTime,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import {
  findReplaceSchemaById,
  filterSchemaByType,
  time24To12,
} from "../../lib/schema/index";

const timeTable = [
  { day: "Monday", time: " 11 am – 9 pm" },
  { day: "Tuesday", time: "11 am – 9 pm" },
  { day: "Wednesday", time: " 11 am – 9 pm" },
  { day: "Thursday ", time: "11 am – 9 pm" },
  { day: "Friday", time: "11 am – 9 pm" },
  { day: "Saturday", time: "11 am – 9 pm" },
  { day: "Sunday", time: "Closed" },
];

export default ({ schema = null, children }) => {
  //.log("menu", menus);
  let newSchema = JSON.stringify(schema, findReplaceSchemaById(schema));
  let newSchemaParsed = JSON.parse(newSchema);
  const filteredSchema = filterSchemaByType("Restaurant", newSchemaParsed);
  console.log("fil Res", filteredSchema);
  return <Locations locations={filteredSchema} />;
};
export const Locations = ({ locations }) => (
  <>
    <div className="container">
      <div className="columns">
        {/* <div className="column col-md-12 col-4">
          <div className="column col-xl-12 col-12 col-mx-auto">
            <h2 className="text-center">Make a Reservation</h2>
            <AppointmentForm appointmentTypes={["walkin"]} />
          </div>
        </div> */}
        <div className="column col-md-12 col-12">
          <div className="columns">
            {locations ? (
              Array.isArray(locations) ? (
                locations.map((location, index) => (
                  <Location
                    location={location}
                    className={"col-" + 12 / locations.length}
                    key={"location-" + index}
                  />
                ))
              ) : (
                <Location location={locations} className="col-12" />
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </>
);
const Location = ({ location, className }) => {
  const {
    name,
    address: { streetAddress, addressLocality, addressRegion, postalCode },
    telephone,
    OpeningHoursSpecification: hours,
  } = location;
  return (
    <>
      <div className={`column col-sm-12 ${className} col-mx-auto `}>
        <h5>{name}</h5>
        <div className="columns address">
          <div className="column col-12">
            <FontAwesomeIcon
              size="lg"
              className="form-icon mr-2"
              icon={faMapPin}
            />
            <span>
              {`${streetAddress}, ${addressLocality}, ${addressRegion}, ${postalCode}`}
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
            <a href={`tel:${telephone}`}>{telephone}</a>
          </div>
        </div>
        <div className="columns address">
          <div className="column col-12 col-mx-auto">
            <div className="times">
              <FontAwesomeIcon
                size="lg"
                className="form-icon mr-2"
                icon={faClock}
              />
              <div>
                {hours.map(({ dayOfWeek, opens, closes }, index) => (
                  <div key={"hour-" + index}>
                    {dayOfWeek.map((day, index) => (
                      <div key={"day-" + index}>
                        {day.slice(0, 3)}{" "}
                        {time24To12(opens).toLocaleLowerCase()} -{" "}
                        {time24To12(closes).toLocaleLowerCase()}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .address {
          }
          .times {
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
    </>
  );
};
