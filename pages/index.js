import Quotes from "../components/Quotes/Quotes";
import SinglePage from "../components/SinglePage/SinglePage";
import MenuPrices from "../components/MenuPrices/MenuPrices";
import menuPrices from "../src/data/client/menu_prices";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";

export const config = { amp: true };

export default () => (
  <>
    <SinglePage title="Greg's Truck Repair" description="Greg's Truck Repair">
      <section className="section section-slideshow">
        <div className="container">
          <div className="columns">
            <div className="column col-md-12 col-8 col-mx-auto col-my-auto">
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
            <div className="column col-md-12 col-8 col-mx-auto">
              <div className="">
                <h2>Services / Price List</h2>
                <MenuPrices id="menu-prices" menuPrices={menuPrices} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-about-us">
        <div className="container">
          <div className="columns">
            <div className="column col-md-12 col-8 col-mx-auto">
              <div className="">
                <AboutUs />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-contact-us">
        <div className="container">
          <div className="columns">
            <div className="column col-md-12 col-8 col-mx-auto">
              <div className="">
                <ContactUs />
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
