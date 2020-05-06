export default () => (
  <>
    <div className="container">
      <div className="columns about-us">
        <div className="column col-md-12 col-6 col-mx-auto">
          <div className="">
            <h2>About Us</h2>
            <h5> Most Vehicles Diagnosed within one day</h5>
            <p>You may wait weeks at a dealership</p>
            <h5> ASE Certifed Technicians</h5>
            <p> Using the latest diagnostic tools and Scanners</p>
            <h5> We stand behind our work!</h5>
            <p> BBB Accredited A+ Rating</p>
          </div>
        </div>
        <div className="column col-md-12 col-6 col-mx-auto">
          <div className="">
            <amp-img alt="about us" src="/static/images/about-us.jpg" layout="responsive" height="467" width="700" />
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        .about-us {
          display: flex;
          align-items: center;
        }
      `}
    </style>
  </>
);
