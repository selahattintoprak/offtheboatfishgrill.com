import Quotes from "../components/Quotes/Quotes";
import SinglePage from "../components/SinglePage/SinglePage";
import MenuPrices from "../components/MenuPrices/MenuPrices";

export const config = { amp: true };

export default () => (
  <>
    <SinglePage title="Greg's Truck Repair" description="Greg's Truck Repair">
      <section className="section section-slideshow">
        <div className="container">
          <div className="columns">
            <div className="column col-md-12 col-12 col-mx-auto col-my-auto">
              <h1
                className="text-center"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  color: "white",
                  marginTop: "4rem",
                }}
              >
                GREG'S TRUCK REPAIR IS OPEN ! ESSENTIAL BUSINESS MAINTAINING SUPPLY CHAIN
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-menu-prices">
        <div className="container">
          <div className="columns">
            <div className="column col-md-12 col-10 col-mx-auto">
              <div className="">
                <MenuPrices id="menu-prices" menuPrices={menuPrices} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SinglePage>
    <style jsx global>
      {`
        .app-content {
          flex: 1 1 auto;
          padding: 0 0;
        }
        body {
          background: #3dc2ff;
        }
        .quotes-form {
          padding: 16px;
          border-radius: 0.2rem;
          background: #ffffff;
          margin-bottom: 4rem;
        }
        .section-slideshow {
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url("/static/images/slideshow.jpg");
          min-height: 400px; /* You must set a specified height */
          background-position: center; /* Center the image */
          background-repeat: no-repeat; /* Do not repeat the image */
          background-size: cover; /* Resize the background image to cover the entire container */
        }
      `}
    </style>
  </>
);
const menuPrices = [
  {
    title: "Garage Labor Rates",
    subTitle: "Worked performed on site",
    items: [
      { title: "All Classes of Trucks, Trailers", subTitle: "", price: "$115/hr" },
      { title: "Buses and RVs", subTitle: "", price: "$135/hr" },
    ],
    footer:
      "Additional charges for those using third party maintenance vendors such as ARI, Element, GE Capital, ect..",
  },
  {
    title: "Emergency Roadside Service",
    subTitle: "Work performed roadside or at your location",
    items: [
      { title: "Service Truck Fee", subTitle: "Applied to all service calls", price: "$70" },
      {
        title: "Emergency Road Service Labor Rate",
        subTitle: "Weekends and Holidays 3 Hour Minimum",
        price: "$145/hr",
      },
    ],
    footer: (
      <>
        <h4 style={{ color: "red" }} className="text-center">**24 / 7 / 365 Available for our Fleet Clients**</h4> Our Fleet clients can rest
        assured we have their backs at all times, any time of day, any day of the year including weekends and Holidays!
        (Above Rates Apply)
      </>
    ),
  },
  {
    title: "Inspections",
    subTitle: "Pricing does not include repairs if required",
    items: [
      { title: "Federal DOT Inspection", subTitle: "", price: "$115" },
      { title: "Missouri State Safety Inspection", subTitle: "", price: "$12" },
      { title: "GVIP Emissions Test", subTitle: "", price: "$24" },
      { title: "IDOD Inspection", subTitle: "", price: "$1O" },
      { title: "Pre-Buy Inspection", subTitle: "", price: "$115" },
    ],
  },
  {
    title: "",
    subTitle: "",
    items: [{ title: "", subTitle: "", price: "" }],
  },
  {
    title: "",
    subTitle: "",
    items: [{ title: "", subTitle: "", price: "" }],
  },
  {
    title: "",
    subTitle: "",
    items: [{ title: "", subTitle: "", price: "" }],
  },
  {
    title: "",
    subTitle: "",
    items: [{ title: "", subTitle: "", price: "" }],
  },
];
