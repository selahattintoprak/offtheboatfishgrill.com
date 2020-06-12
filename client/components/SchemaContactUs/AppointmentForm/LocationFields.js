export default () => (
  <div data-amp-bind-hidden={`appointment == 'mobile'`}>
    <label className="form-label" for="location">
      Location <span className="forms-req-symbol">*</span>
    </label>
    <select
      className="form-select form-input"
      name="location"
      data-amp-bind-required={`appointment == 'walkin' ? true : false`}
    >
      <option value=" " selected="selected" disabled="true">
        Select a Location
      </option>
      <option value="Santee">Santee</option>
      <option value="Mission Valley">Mission Valley</option>
      <option value="San Diego (Miramar)">San Diego (Miramar)</option>
      <option value="Carlsbad">Carlsbad</option>
      <option value="El Cajon">El Cajon</option>
      <option value="Encinitas">Encinitas</option>
      <option value="Mobile Service">Mobile Service</option>
    </select>
  </div>
);
