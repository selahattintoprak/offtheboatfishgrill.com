import organization from "./organization";
import localBussinesData from "./localBussinesData";
import postalAddress from "./postalAddress";
import website from "./website";
import webpage from "./webpage";
import article from "./article";
import services from "./services";
import person from "./person";
import logoImage from "./logoImage";
import slideshowImage from "./slideshowImage";
import pirmaryImage from "./pirmaryImage";
import foodMenu from "./food-menu/foodMenu";
import restaurantData from "./restaurantData";
export default [
  website,
  webpage,
  article,
  organization,
  //localBussinesData,
  ...restaurantData,
  ...foodMenu,
  postalAddress,
  logoImage,
  slideshowImage,
  pirmaryImage,
];
