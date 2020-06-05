export default () => (
  <>
    <div className="container">
      <div className="columns about-us">
        <div className="column col-md-12 col-6 col-mx-auto">
          <div className="">
            <h2>OUR VISION</h2>
            <h5>To introduce a new experience that fuses seafood, traditional Mexican and Mediterranean foods by utilizing the spices of Baja Mexico and the charm of the Mediterranean. </h5>
          
          </div>
        </div>
        <div className="column col-md-12 col-6 col-mx-auto">
          <div className="" style={{borderRadius: "10%"}}>
            <amp-img alt="about us" src="/static/images/primary.jpg" layout="responsive" height="467" width="700" style={{borderRadius: "3%"}} />
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
