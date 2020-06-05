import Addon from "./Addon";
import Offers from "./Offers";
export default ({ menuItem }) => {
  const { name, description, offers, menuAddon } = menuItem;
  return (
    <div className="columns" style={{ alignItems: "center" }} key={"item-" + name}>
      <div className="column col-9">
        <strong>{name}</strong>
        <div style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{description}</div>
        {menuAddon && <Addon menuAddon={menuAddon} />}
      </div>
      <div className="column col-3 text-center">
        <div className="columns" style={{ alignItems: "center" }}>
          <Offers offers={offers} />
        </div>
      </div>
    </div>
  );
};
