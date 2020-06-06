export default ({ menuAddon }) => {
  const { name, description, price } = menuAddon || {};
  console.log(menuAddon)
  return menuAddon ? (
    Array.isArray(menuAddon) ? (
      menuAddon.map(({ name, description, offers }, index) => (
        <p key={index}>
          {name}-{description}-{price}
        </p>
      ))
    ) : (
      <p>
        {name}-{description}-{price}
      </p>
    )
  ) : null;
};
