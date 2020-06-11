import findReplaceSchemaById from "./findReplaceSchemaById";
import safeJsonLdReplacer from "./safeJsonLdReplacer";
import jsonld from "./jsonld";

const filterSchemaByType = (type, schema) => {
  return Array.isArray(schema)
    ? schema.filter(({ "@type": schemaType }) => schemaType == type)
    : [];
};
const time24To12 = (value) => {
  return new Date("1955-11-05T" + value + "Z").toLocaleTimeString("bestfit", {
    timeZone: "UTC",
    hour12: !0,
    hour: "numeric",
    minute: "numeric",
  });
};
export {
  findReplaceSchemaById,
  safeJsonLdReplacer,
  jsonld,
  filterSchemaByType,
  time24To12
};
