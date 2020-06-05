export default ({menuAddon}) => {
  const { name, description, price } = menuAddon;
  return Array.isArray(menuAddon) ? (
    menuAddon.map(({ name, description, offers }) => (
      <p>
        {name}-{description}-{price}
      </p>
    ))
  ) : (
    <p>
      {name}-{description}-{price}
    </p>
  );
};
