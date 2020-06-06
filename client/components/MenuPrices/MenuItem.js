import Addon from "./Addon";
import Offers from "./Offers";
export default ({ menuItem }) => {
  const { name, description, offers, menuAddon } = menuItem;

  return (
    <>
      <div
        className="columns centerFlex"
        style={{ alignItems: "center" }}
        key={"item-" + name}
        style={{ borderBottom: "1px solid #dfdfdf" }}
      >
        <div className="col-12">{menuAddon && <Addon menuAddon={menuAddon} />}</div>
        <div className="column col-8">
          <div>
            {name && (
              <div>
                <strong>{name}</strong>
              </div>
            )}
            {description && <div style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{description}</div>}
          </div>
        </div>
        <div className="column col-4 text-center">
          <div className="columns" style={{ alignItems: "center" }}>
            <Offers offers={offers} />
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .centerFlex {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};
