// import Quotes from "../components/Quotes/Quotes";
import SinglePage from "../components/SinglePage/SinglePage";
//import MenuPrices from "../components/MenuPrices/MenuPrices";
import { HasMenu } from "../components/MenuPrices/MenuPricesSchema";
// import menuPrices from "../src/data/client/menu_prices";
// import ipadRepairervices from "../src/data/client/ipad_repair_services";
// import samsungRepairServices from "../src/data/client/samsung_repair_services";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/SchemaContactUs/ContactUs";
import Content from "../src/data/content";
import AppointmentForm from "../components/SchemaContactUs/AppointmentForm/AppointmentForm";
import ContactForm from "../components/ContactUs/ContactForm";

import menus from "../src/data/schema/menu/menu";
import schema from "../src/data/schema/schema";
import SchemaMenu from "../components/SchemaMenu/SchemaMenu";
export const config = { amp: true };

let hCss = {
  fontWeight: "bold",
  color: "white",
  textShadow: "2px 2px 8px black",
  marginTop: "4rem",
};
export default () => (
  <>
    <SinglePage
      title="Cell Phone Repair Temecula"
      description="Cell Phone Repair Temecula"
    >
      <Section name="slideshow">
        <h1 className="text-center" style={{ ...hCss, fontSize: "1.75rem" }}>
          Fresh Off The Boat
        </h1>
        <div className="container">
          <div className="columns">
            <div className="column col-3 col-mx-auto">
              <amp-img
                alt="off the boat fish grill logo"
                src="/static/images/logo.png"
                layout="responsive"
                height="200"
                width="200"
              />
            </div>
          </div>{" "}
        </div>
        <h3 className="text-center" style={{ ...hCss, fontSize: "1.25rem" }}>
          FROM THE COAST OF BAJA TO THE MEDITERRANEAN
        </h3>
      </Section>
      <Section>
        <div className="container">
          <div className="columns">
            <div className="column col-md-12 col-9 col-mx-auto">
              {/*  <Section name="content">
        <div className="content">{Content}</div>
      </Section> */}
              <Section name="menu-price">
                <h2>Menus</h2>
                <SchemaMenu menus={menus} />
              </Section>
              <Section name="about-us">
                <AboutUs />
              </Section>
              <Section name="contact-us">
                <ContactUs schema={schema} />
              </Section>
            </div>
            <div className="column col-md-12 col-3 col-mx-auto">
              <h2 className="text-center">Make a Reservation</h2>
              <AppointmentForm
                appointmentTypes={["walkin"]}
              />
            </div>
          </div>
        </div>
      </Section>
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
        .section-content .content {
          height: 200px;
          overflow-y: scroll;
        }
      `}
    </style>
  </>
);
const Section = ({ name, children }) => (
  <section className={`section section-${name}`}>
    <div className="container">
      <div className="columns">
        <div className="column col-md-12 col-xl-10 col-10 col-mx-auto">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  </section>
);
