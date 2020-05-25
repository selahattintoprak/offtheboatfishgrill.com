import Quotes from "../components/Quotes/Quotes";
import SinglePage from "../components/SinglePage/SinglePage";
import MenuPrices from "../components/MenuPrices/MenuPrices";
import iphoneRepairServices from "../src/data/client/iphone_repair_services";
import ipadRepairervices from "../src/data/client/ipad_repair_services";
import samsungRepairServices from "../src/data/client/samsung_repair_services";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Content from "../src/data/content";
import AppointmentForm from "../components/AppointmentForm";
export const config = { amp: true };

let hCss = {
  fontWeight: "bold",
  color: "white",
  textShadow: "2px 2px 8px black",
  marginTop: "4rem",
};
export default () => (
  <>
    <SinglePage title="Cell Phone Repair Temecula" description="Cell Phone Repair Temecula">
      <Section name="slideshow">
        <h1 className="text-center" style={{ ...hCss, fontSize: "1.75rem" }}>
          Cell Phone Repair in Temecula
        </h1>
        <h3 className="text-center" style={{ ...hCss, fontSize: "1.25rem" }}>
          We Specialize in Cell phone repair including iPhone Repair, iPad Repair, Samsung Galaxy Repair, Computer and
          Macbook Repair
        </h3>
      </Section>
      {/*  <Section name="content">
        <div className="content">{Content}</div>
      </Section> */}
      <Section name="menu-price">
        <div className="container">
          <div className="columns">
            <div className="column col-lg-12 col-8 col-mx-auto">
              <h2>iPhone Repair</h2>
              <MenuPrices id="menu-prices" menuPrices={iphoneRepairServices} />
              <h2>iPad Repair</h2>
              <MenuPrices id="menu-prices" menuPrices={ipadRepairervices} />
              <h2>Samsung Repair</h2>
              <MenuPrices id="menu-prices" menuPrices={samsungRepairServices} />
              <amp-img alt="about us" src="/static/images/new-van-1.png" layout="responsive" height="295" width="624" />
            </div>
            <div className="column col-lg-12 col-4 col-mx-auto">
              <h2>Book Appointment</h2>

              <AppointmentForm />
            </div>
          </div>
        </div>
      </Section>
      <Section name="about-us">
        <AboutUs />
      </Section>
      <Section name="contact-us">
        <ContactUs />
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
        <div className="column col-lg-12 col-10 col-mx-auto">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  </section>
);
