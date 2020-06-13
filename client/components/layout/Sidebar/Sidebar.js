import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import sidebarScss from "./sidebar.scss";
import ActiveLink from "../../ActiveLink";
import { AmpIncludeAmpSidebar } from "../../amp/AmpCustomElement";
const NestedSubMenu = ({ title, link, on, columns, back }, index) => (
  <>
    {columns && (
      <>
        <li className="menu-item">
          <HrefActiveLink title={title} link={link} on={on} />
          <h4
            className="btn"
            amp-nested-submenu-open=""
            on={on}
            role="button"
            tabIndex={index}
          >
            {/* <i className="icon icon-caret"></i> */}
            <FontAwesomeIcon className="icon" icon={faCaretDown} />
          </h4>
          <div amp-nested-submenu="">
            <ul>
              {back && (
                <li className="menu-item">
                  <h6
                    amp-nested-submenu-close=""
                    className="btn btn-link"
                    style={{ margin: 0 }}
                  >
                    {/* <i className="icon icon-arrow-left"></i> */}
                    <FontAwesomeIcon className="mr-1" icon={faCaretLeft} />
                    {back}
                  </h6>
                </li>
              )}
              <div className="columns" style={{ flexDirection: "column" }}>
                {columns.map(({ divider, items }, index) => (
                  <React.Fragment key={index}>
                    <Column divider={divider} items={items} index={index} />
                  </React.Fragment>
                ))}
              </div>
            </ul>
          </div>
        </li>
      </>
    )}{" "}
  </>
);
const Nested = ({ sidebarItems, navbarActions }) => (
  <amp-nested-menu layout="fill" className="sidebar-menu">
    <ul>
      {sidebarItems.map(({ title, link, on, columns, ...rest }, index) => (
        <React.Fragment key={index}>
          {!columns && (
            <li className="menu-item">
              <HrefActiveLink title={title} link={link} on={on} />
            </li>
          )}
          {columns && (
            <NestedSubMenu
              title={title}
              link={link}
              on={on}
              columns={columns}
              {...rest}
            />
          )}
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
const Item = ({ title, columns, link, on, divider, ...rest }) => (
  <>
    {divider && <li className="divider" data-content={divider}></li>}

    {columns ? (
      <NestedSubMenu
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

export default Sidebar;
