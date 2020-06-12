import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  findReplaceSchemaById,
  filterSchemaByType,
} from "../../lib/schema/index";
import { toLowerCaseDash } from "../../lib/helpers/index";
import MenuItem from "./MenuItem";

const hasChildren = ({ children }) => children && children.length;

export const HasMenu = ({ menus = null, children }) => {
  let newmenu = JSON.stringify(menus, findReplaceSchemaById(menus));
  let newMenuParsed = JSON.parse(newmenu);
  const filteredMenus = filterSchemaByType("Menu", newMenuParsed);
  const menuSection = filterSchemaByType("MenuSection", newMenuParsed);
  return <MenuTree id="schema-menu" menus={filteredMenus} />;
};

export const MenuTree = ({ id, menus, parentName, children }) => {
  console.log("MenuPrices menu", menus);
  return (
    Array.isArray(menus) &&
    menus.map((menu, index) => {
      const {
        name,
        description,
        hasMenuItem,
        hasMenuSection,
        menuAddon,
      } = menu;
      let link = `schema${toLowerCaseDash(parentName) &&
        toLowerCaseDash(parentName) + ""}${toLowerCaseDash(name)}`;
      let parent = toLowerCaseDash(parentName) || toLowerCaseDash(name);
      return (
        <amp-accordion
          id={parent}
          className="amp-accordion-container"
          disable-session-states=""
          animate=""
          key={index}
        >
          <section className="amp-accordion" key={id} id={link}>
            <h2
              className="amp-accordion-header"
              style={{ fontSize: "1rem", padding: "0.3rem" }}
            >
              {name}
              {/* <i className="icon icon-arrow-right"></i> */}
              <FontAwesomeIcon
                className="amp-accordion-icon"
                icon={faChevronDown}
              />
            </h2>
            <div className="amp-accordion-body my-2 p-1">
              <div className="container">
                {description && <div className="mb-2">{description}</div>}
                {children}
                {hasMenuItem ? (
                  Array.isArray(hasMenuItem) ? (
                    hasMenuItem.map((menuItem, index) => (
                      <MenuItem menuItem={menuItem} key={index} />
                    ))
                  ) : (
                    <MenuItem menuItem={hasMenuItem} />
                  )
                ) : null}
                {menuAddon ? (
                  Array.isArray(menuAddon) ? (
                    menuAddon.map((menuItem, index) => (
                      <MenuItem menuItem={menuItem} key={index} />
                    ))
                  ) : (
                    <MenuItem menuItem={menuAddon} />
                  )
                ) : null}

                {hasMenuSection && (
                  <MenuTree menus={hasMenuSection} parentName={name} />
                )}
              </div>
            </div>
          </section>
        </amp-accordion>
      );
    })
  );
};

export default HasMenu;
