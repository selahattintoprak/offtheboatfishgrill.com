import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import navbarItemsScss from "./navbar-items.scss";
import ActiveLink from "../../ActiveLink";

export default ({ navbarItems }) => (
  <>
    {navbarItems.map(({ columns, ...rest }, index) => (
      <React.Fragment key={index}>
        {!columns && <MenuItem columns={columns} {...rest} />}
        {columns && <SubmenuItem columns={columns} {...rest} />}
      </React.Fragment>
    ))}

    <style jsx global>
      {navbarItemsScss}
    </style>
  </>
);

const SubmenuItem = ({ title, link, on, columns }) => (
  <>
    <li className="menu-item">
      <HrefActiveLink title={title} link={link} on={on} />
    </li>
    <li className="menu-item">
      <a href="#" className="btn" role="button">
        {/* <i className="icon icon-caret"></i> */}
        <FontAwesomeIcon icon={faCaretDown} />
      </a>

      <div role="dialog">
        <ul className="menu" style={{ display: "block" }}>
          <div className="columns">
            {columns.map(({ divider, items, ...rest }, index) => (
              <Column
                key={index}
                divider={divider}
                items={items}
                index={index}
                {...rest}
              />
            ))}
          </div>
        </ul>
      </div>
    </li>
  </>
);
let rowStyle = {
  display: "flex",
  justifyContent: "space-between",
};
const DropDownMenuItem = ({ title, link, on, columns, index }) => (
  <>
    <div class="dropdown">
      <div class="btn-group " style={{ ...rowStyle, flexDirection: "column" }}>
        <li style={{ ...rowStyle, flexDirection: "row" }}>
          {" "}
          <a className="btn btn-link" on={on}>
            {title}
          </a>
          <a href="#" className="btn dropdown-toggle" tabIndex={index}>
            {/* <i className="icon icon-caret"></i> */}
            <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </li>

        <ul className="menu">
          <div className="columns">
            {columns.map(({ divider, items, ...rest }, index) => (
              <Column
                key={index}
                divider={divider}
                items={items}
                index={index}
                {...rest}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
    <style jsx global>
      {`
        .dropdown:hover .menu {
          display: block;
        }
      `}
    </style>
  </>
);
const Column = ({ items, index, divider }) => (
  <>
    {index != 0 && divider && <div className="divider-vert"></div>}
    <div className="column">
      {divider && <li className="divider" data-content={divider}></li>}
      {items.map(({ title, ...rest }, index) => (
        <Item key={title} title={title} {...rest} index={index} />
      ))}
    </div>
  </>
);
const Item = ({ title, link, columns, on, divider, ...rest }) => (
  <>
    {divider && <li className="divider" data-content={divider}></li>}
    {columns ? (
      <DropDownMenuItem
        title={title}
        link={link}
        on={on}
        columns={columns}
        {...rest}
      />
    ) : (
      <li className="menu-item">
        <HrefActiveLink title={title} link={link} on={on} />
      </li>
    )}
  </>
);
const HrefActiveLink = ({ title, link, on }) =>
  link ? (
    <ActiveLink activeClassName="active" href={link} on={on}>
      <a className="btn btn-link">{title}</a>
    </ActiveLink>
  ) : (
    <a className="btn btn-link" on={on}>
      {title}
    </a>
  );
const MenuItem = ({ title, link, on, index }) => (
  <li key={index} className="menu-item">
    <HrefActiveLink title={title} link={link} on={on} />
  </li>
);
