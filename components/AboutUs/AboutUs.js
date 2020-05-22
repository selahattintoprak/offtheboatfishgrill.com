export default () => (
  <>
    <div className="container">
      <div className="columns about-us">
        <div className="column col-md-12 col-6 col-mx-auto">
          <div className="">
            <h2>About Us</h2>
            <h5>Speedy Repairs</h5>
            <p>Most Devices Fixed within one hour, You may wait while we fix it</p>
            <h5>#1 Trusted Technicians</h5>
            <p>Offering screen repair, battery replacement and camera replacement </p>
            <h5>We stand behind our work!</h5>
            <p>Join the thousands of other satisfied customers who rely on us for expert iPhone repair.</p>
          </div>
        </div>
        <div className="column col-md-12 col-6 col-mx-auto">
          <div className="" style={{borderRadius: "10%"}}>
            <amp-img alt="about us" src="/static/images/main.jpg" layout="responsive" height="467" width="700" style={{borderRadius: "3%"}} />
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
