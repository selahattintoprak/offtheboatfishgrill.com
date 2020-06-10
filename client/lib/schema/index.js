import findReplaceSchemaById from "./findReplaceSchemaById";
import safeJsonLdReplacer from "./safeJsonLdReplacer";
import jsonld from "./jsonld";

const filterMenu = (type, menu) => {
  return Array.isArray(menu) ? menu.filter(({ "@type": menuType }) => menuType == type) : [];
};
export { findReplaceSchemaById, safeJsonLdReplacer, jsonld, filterMenu };
