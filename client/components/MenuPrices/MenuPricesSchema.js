import menu from "../../src/data/schema/menu/menu";

export const HasMenu = ({ children }) => {
  console.log("menu", menu);

  return (
    <>
      {menu
        .filter(({ "@type": type }) => type == "Menu")
        .map(({ "@type": type, name, description, hasMenuItem = [], hasMenuSection = [] }) => {
          const items = hasMenuItem.map(({ name, description, offers: { price } }) => ({
            title: name,
            description,
            price,
          }));
          let menuPrices = [
            {
              title: name,
              description,
              items,
              footer: "",
            },
          ];
          let menuSection = [];
          if (Array.isArray(hasMenuSection) && hasMenuSection.length > 0) {
            menuSection = hasMenuSection.map(({ "@id": hasMenuSectionId, "@type": hasMenuSectionType }) => {
              return (
                hasMenuSectionId &&
                !hasMenuSectionType &&
                menu.find(({ "@id": menuSectionId, "@type": menuSectionType }) => menuSectionId == hasMenuSectionId)
              );
            });
            console.log("isArray menusection", menuSection);
          } else {
            const { "@id": hasMenuSectionId, "@type": hasMenuSectionType } = hasMenuSection;
            if (hasMenuSectionId && !hasMenuSectionType) {
              menuSection = {
                ...menu.find(({ "@id": menuId }) => menuId == menuSectionId),
              };
            } else {
              menuSection = hasMenuSection;
            }
          }
          if (menuSection) {
            console.log("menusectoin", menuSection);
          }
          /*  hasMenuItem ? (
          <MenuPrices id="menu-prices" menuPrices={menuPrices}>
            <HasMenu />
          </MenuPrices>
        ) : hasMenuSection ? (
          <MenuPrices id="menu-prices" menuPrices={menuPrices}>
            <HasMenu />
          </MenuPrices>
        ) : null; */
        })}
      {children}
    </>
  );
};

const MenuPrices = ({ id, menuPrices, children }) => (
  <>
    <amp-accordion id={id} className="amp-accordion-container" disable-session-states="" animate="">
      {menuPrices.map(({ title, description, items, footer, link }, index) => (
        <section className="amp-accordion" key={id + index}>
          <h2 className="amp-accordion-header" style={{ fontSize: "1rem", padding: "0.3rem" }}>
            {title}
            <i className="icon icon-arrow-right"></i>
          </h2>
          <div className="amp-accordion-body my-2">
            <div className="container">
              {description}
              {children}
              {items.map(({ title, description, price }, index) => (
                <div className="columns" style={{ alignItems: "center" }} key={"col" + index}>
                  <div className="column col-9">
                    <strong>{title}</strong> <br></br>
                    <span style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{description}</span>
                  </div>
                  <div className="column col-3 text-center">
                    <strong>{price}</strong>
                  </div>
                </div>
              ))}
              {footer}
            </div>
          </div>
        </section>
      ))}
    </amp-accordion>
    <style jsx global>
      {`
        .amp-accordion {
          margin-bottom: 6px;
        }
        .amp-accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background-color: white;
          outline: none;
          color: #b75b0a;
        }
        .amp-accordion-body {
        }
        .amp-accordion .amp-accordion-header .icon {
          float: right;
          transform: rotate(90deg);
          transition: transform 0.25s;
        }
        .amp-accordion[expanded] .amp-accordion-header .icon {
          transform: rotate(-90deg);
        }
      `}
    </style>
  </>
);

export default MenuPrices;
