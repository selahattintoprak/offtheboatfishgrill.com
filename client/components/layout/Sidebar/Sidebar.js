import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import sidebarScss from "./sidebar.scss";
import ActiveLink from "../../ActiveLink";
import { AmpIncludeAmpSidebar } from "../../amp/AmpCustomElement";

const Nested = ({ sidebarItems, navbarActions }) => (
  <amp-nested-menu layout="fill">
    <ul>
      {sidebarItems.map(({ title, link, on, columns, back }, index) => (
        <React.Fragment key={index}>
          {!columns && (
            <li className="menu-item">
              <HrefActiveLink title={title} link={link} on={on} />
            </li>
          )}
          {columns && (
            <>
              <li className="menu-item">
                <HrefActiveLink title={title} link={link} on={on} />
                <h4 className="btn" amp-nested-submenu-open="">
                  {/* <i className="icon icon-caret"></i> */}
                  <FontAwesomeIcon className="icon" icon={faCaretDown} />
                </h4>
                <div amp-nested-submenu="">
                  <ul className="menu" style={{ display: "block" }}>
                    {back && (
                      <li className="menu-item">
                        <h6
                          amp-nested-submenu-close=""
                          className="btn btn-link"
                          style={{ margin: 0 }}
                        >
                          {/* <i className="icon icon-arrow-left"></i> */}
                          <FontAwesomeIcon
                            className="mr-1"
                            icon={faCaretLeft}
                          />
                          {back}
                        </h6>
                      </li>
                    )}
                    <div
                      className="columns"
                      style={{ flexDirection: "column" }}
                    >
                      {columns.map(({ divider, items }, index) => (
                        <React.Fragment key={index}>
                          <Column
                            divider={divider}
                            items={items}
                            index={index}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </ul>
                </div>
              </li>
            </>
          )}{" "}
        </React.Fragment>
      ))}
      {navbarActions && <li className="sidebar-actions">{navbarActions}</li>}
    </ul>
  </amp-nested-menu>
);
const Sidebar = ({ sidebarItems, navbarActions }) => (
  <>
    <AmpIncludeAmpSidebar />
    <amp-sidebar
      className="app-sidebar"
      id="app-sidebar"
      layout="nodisplay"
      side="left"
    >
      <Nested sidebarItems={sidebarItems} navbarActions={navbarActions} />
    </amp-sidebar>
    <style jsx global>
      {sidebarScss}
    </style>
  </>
);
const Column = ({ items, index, divider }) => (
  <>
    <div className="column">
      <li className="divider" data-content={divider}></li>
      {items.map(({ title, ...rest }) => (
        <React.Fragment key={title}>
          <Item title={title} {...rest} />
        </React.Fragment>
      ))}
    </div>
  </>
);
const Item = ({ title, link, on, divider }) => (
  <>
    {divider && <li className="divider" data-content={divider}></li>}
    <li className="menu-item">
      <HrefActiveLink title={title} link={link} on={on} />
    </li>
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

export default Sidebar;
