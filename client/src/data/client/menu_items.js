import menusSchema from "../schema/menu/menu";
import {
  findReplaceSchemaById,
  filterSchemaByType,
} from "../../../lib/schema/index";
import { toLowerCaseDash } from "../../../lib/helpers/index";

export const hasMenu = (menus) => {
  let newmenu = JSON.stringify(menus, findReplaceSchemaById(menus));
  let newMenuParsed = JSON.parse(newmenu);
  const filteredMenus = filterSchemaByType("Menu", newMenuParsed);
  const menuSection = filterSchemaByType("MenuSection", newMenuParsed);
  return menuTree(filteredMenus);
};

const menuTree = (menus, parentName, parentOn = "") => {
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
      let link = `schema${toLowerCaseDash(parentName) &&
        toLowerCaseDash(parentName) + ""}${toLowerCaseDash(name)}`;
      let parent = toLowerCaseDash(parentName) || toLowerCaseDash(name);
      let on = parentName
        ? parentOn
            .concat(`${parentOn && ","}${parent}.expand`)
            .concat(", ", `${parent}.expand(section='${link}')`)
            .concat(", ", `${link}.scrollTo(duration=200)`)
        : parentOn
            .concat(`${parentOn && ","}${parent}.expand`)
            .concat(", ", `${parent}.scrollTo(duration=200)`);
      let columns = hasMenuSection && menuTree(hasMenuSection, name, parentOn);
      return columns
        ? {
            title: name,
            link: "",
            back: name,
            columns: [{ items: columns }],
            on: "tap:" + on,
          }
        : { title: name, link: "", on: "tap:" + on };
    });
  return menuTreeItems;
};

console.log("hasMenu(menusSchema)", hasMenu(menusSchema));
export default [
  { title: "Home", link: "/" },
  ...hasMenu(menusSchema),
  { title: "Locations", link: "#locations" },
];
