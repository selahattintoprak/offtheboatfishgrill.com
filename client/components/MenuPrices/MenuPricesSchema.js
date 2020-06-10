import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { findReplaceSchemaById, filterMenu } from "../../lib/schema/index";

import Addon from "./Addon";
import MenuItem from "./MenuItem";

const hasChildren = ({ children }) => children && children.length;

export const HasMenu = ({ menus = null, children }) => {
  //.log("menu", menus);
  let newmenu = JSON.stringify(menus, findReplaceSchemaById(menus));
  let newMenuParsed = JSON.parse(newmenu);
  const filteredMenus = filterMenu("Menu", newMenuParsed);
  const menuSection = filterMenu("MenuSection", newMenuParsed);
  return <MenuTree menus={filteredMenus} />;
};
const MenuTree = ({ menus, menus: { hasMenuSection, hasMenuItem } }) => {
  return Array.isArray(menus) ? (
    menus.map((menu, index) => (
      <MenuPrices menu={menu} key={index}>
        {menu.hasMenuSection && <MenuTree menus={menu.hasMenuSection} />}
      </MenuPrices>
    ))
  ) : (
    <MenuPrices menu={menus}>{hasMenuSection && <MenuTree menus={hasMenuSection} />}</MenuPrices>
  );
};
export const MenuPrices = ({ id, menu, children }) => {
  console.log("MenuPrices menu", menu);
  const { name, description, hasMenuItem, hasMenuSection, menuAddon, footer, link } = menu;
  return (
    <>
      <amp-accordion id={id} className="amp-accordion-container" disable-session-states="" animate="">
        <section className="amp-accordion" key={id}>
          <h2 className="amp-accordion-header" style={{ fontSize: "1rem", padding: "0.3rem" }}>
            {name}
            {/* <i className="icon icon-arrow-right"></i> */}
            <FontAwesomeIcon className="amp-accordion-icon" icon={faChevronDown} />
          </h2>
          <div className="amp-accordion-body my-2 p-2">
            <div className="container">
              {description && <div className="mb-2">{description}</div>}
              {children}
              {hasMenuItem ? (
                Array.isArray(hasMenuItem) ? (
                  hasMenuItem.map((menuItem, index) => <MenuItem menuItem={menuItem} key={index} />)
                ) : (
                  <MenuItem menuItem={hasMenuItem} />
                )
              ) : null}

              {footer}
            </div>
          </div>
        </section>
      </amp-accordion>
    </>
  );
};

export default MenuPrices;
