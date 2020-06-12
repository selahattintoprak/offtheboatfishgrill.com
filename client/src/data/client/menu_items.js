import menusSchema from "../schema/menu/menu";
import {
  findReplaceSchemaById,
  filterSchemaByType,
} from "../../../lib/schema/index";

const toLowerCaseDash = (value) =>
  (value &&
    value
      .split(" ")
      .join("-")
      .toLocaleLowerCase()) ||
  "";

export let menuItems = [
  { title: "Home", link: "/" },
  /*    {
    title: "Menu",
    link: "#menu",
    back: "Menu",
    columns: [
      {
        divider: null,
        items: [
          { title: "Appetizers", link: "/#appetizers" },
          { title: "Salads", link: "#salads" },
          { title: "Plates", link: "#plates" },
          { title: "Soups", link: "#soups" },
          { title: "Sliders", link: "#sliders" },
          { title: "Tacos", link: "#tacos" },
          { title: "Pita Wraps", link: "#pita-wraps" },
          { title: "Baja Bowls", link: "#baja-bowls" },
          { title: "Family Platters", link: "#family-platters" },
          { title: "Proteins (a la carte)", link: "#proteins" },
          { title: "Kids Menu", link: "#kids-menu" },
          { title: "Sides", link: "#sides" },
          { title: "Deserts", link: "#deserts" },
        ],
      },
       {
        divider: "Storage",
        items: [
          { title: "Storage Services", link: "/storage-services" },
          { title: "Self Storage", link: "/storage-self" },
          { title: "Warehouse", link: "/storage-warehouse" },
          { title: "Moving Insurance", link: "/moving-insurance", divider: "Insurance" },
        ],
      },
    ],
  }, */
  { title: "Locations", link: "#locations" },
];
export const hasMenu = (menus) => {
  let newmenu = JSON.stringify(menus, findReplaceSchemaById(menus));
  let newMenuParsed = JSON.parse(newmenu);
  const filteredMenus = filterSchemaByType("Menu", newMenuParsed);
  const menuSection = filterSchemaByType("MenuSection", newMenuParsed);
  return menuTree(filteredMenus);
};

const menuTree = (menus, parentName) => {
  let menuTreeItems =
    Array.isArray(menus) &&
    menus.map((menu, index) => {
      const {
        name,
        description,
        hasMenuItem,
        hasMenuSection,
        menuAddon,
      } = menu;
      let link = `${toLowerCaseDash(parentName) &&
        toLowerCaseDash(parentName) + "-"}${toLowerCaseDash(name)}`;
      let columns = hasMenuSection && menuTree(hasMenuSection, name);
      return columns
        ? {
            title: name,
            link,
            back: name,
            columns: [{ items: columns }],
          }
        : { title: name, link };
    });
  return menuTreeItems;
};

console.log("hasMenu(menusSchema)", hasMenu(menusSchema));
export default [
  { title: "Home", link: "/" },
  ...hasMenu(menusSchema),
  { title: "Locations", link: "#locations" },
];
