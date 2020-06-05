import footerScss from "./footer.scss";
import Copyright from "../../Copyright/Copyright";
export default () => (
  <>
    <Copyright year="2020" name="Fresh Off The Boat Fish Grill" />
    <style jsx global>
      {footerScss}
    </style>
  </>
);
