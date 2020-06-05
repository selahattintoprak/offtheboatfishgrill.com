export default ({offers}) => {
  const { price, name } = offers;
  return Array.isArray(offers) ? (
    offers.map(({ price, name, eligibleQuantity }, index) => {
      return (
        <>
          <div className={"column text-center col-" + 12 / offers.length} key={"price-" + index}>
            {name && <strong>{name}</strong>}
            {eligibleQuantity && <strong>{eligibleQuantity.name}</strong>}
            <div style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{price}</div>
          </div>
        </>
      );
    })
  ) : (
    <>
      <div className={"column text-center col-12"} key={"price"}>
        {name && <strong>{name}</strong>}
        <div style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{price}</div>
      </div>
    </>
  );
};
