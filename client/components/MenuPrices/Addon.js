import Offers from "./Offers";

const Addon = ({ menuAddon }) => {
  const { name, description, offers } = menuAddon || {};
  console.log(menuAddon);
  return (
    <>
      <div className="menuAddon">
        {menuAddon ? (
          Array.isArray(menuAddon) ? (
            menuAddon.map(({ name, description, offers }, index) => (
              <div key={index}>
                {name && <div>{name}</div>}
                {description && <div>{description}</div>}
                {/* {menuAddon && <Addon menuAddon={menuAddon} />} */}
              </div>
            ))
          ) : (
            <div>
              {name && <div>{name}</div>}
              {description && <div>{description}</div>}
              <Offers offers={offers} />
            </div>
          )
        ) : null}
      </div>

      <style jsx global>
        {`
          .menuAddon {
            display: flex;
            flex-direction: row;
            align-items: start;
          }
        `}
      </style>
    </>
  );
};
export default Addon;
