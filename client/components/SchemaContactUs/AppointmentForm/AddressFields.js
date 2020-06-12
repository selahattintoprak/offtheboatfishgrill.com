import InputField from "./InputField";

export default () => (
  <div data-amp-bind-hidden={`appointment != 'mobile'`}>
    <InputField
      label="Address"
      name="address"
      placeholder="Enter Your Address"
      type="text"
      data-amp-bind-required={`appointment == 'mobile' ? true : false`}
    />
    <InputField
      label="Zip Code"
      name="zipCode"
      placeholder="Enter Your Zip Code"
      type="number"
      data-amp-bind-required={`appointment == 'mobile' ? true : false`}
    />
  </div>
);
