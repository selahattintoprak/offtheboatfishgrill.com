import navbarActionsScss from "./navbar-actions.scss";
export default ({ divider }) => (
  <div className="d-flex">
    <a href="tel:1-951-000-0000" className="btn btn-link">
      951-000-0000
    </a>
    {/* 
    {divider && <div className="divider-vert"></div>}
    <div>
      <a className="btn ml-1" href="#">
        Sign Up
      </a>
      <a className="btn btn-primary ml-1" href="#">
        Login
      </a>
    </div> */}

    <style jsx global>
      {navbarActionsScss}
    </style>
  </div>
);
