import footerScss from "./footer.scss";
import Copyright from "../../Copyright/Copyright";
export default () => (
  <>
    <Copyright year="2020" name="iSquad Repair" />
    <style jsx global>
      {footerScss}
    </style>
  </>
);
