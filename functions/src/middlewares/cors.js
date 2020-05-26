module.exports = function(req, res, next) {
  const unauthorized = "Unauthorized Request";
  const allowedOrigins = [
    "capacitor://localhost",
    "ionic://localhost",
    "http://localhost",
    "localhost:5001",
    "http://127.0.0.1:5500",
    "http://localhost:5005",
    "http://localhost:5500",
    "http://localhost:8080",
    "http://localhost:8100",
    "http://localhost:3000",
    "https://temecula.web.app",
    "https://temecula.firebaseapp.com",
  ];
  let origin; // = req.headers.origin || req.query.__amp_source_origin || req.headers.host;
  if (allowedOrigins.indexOf(req.headers.origin) !== -1 || allowedOrigins.indexOf(req.headers.host) !== -1) {
    // Check if the requesting CORS origin is in the allowed set.
    origin = req.headers.origin || req.headers.host;
  } else if (req.headers["amp-same-origin"] === "true") {
    // Check if same origin (only a same-origin request can set a
    // custom header).
    origin = req.protocol + "://" + req.headers.host;
  } else {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: unauthorized,
      },
      403
    );
  }
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To, Accept");
  //res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
  //res.setHeader('AMP-Redirect-To', origin + '/thankyou.html');
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("AMP-Access-Control-Allow-Source-Origin", origin);
  next();
};
