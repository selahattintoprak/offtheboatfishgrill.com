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
      <option value="Tustin">Tustin</option>
      <option value="Placentia">Placentia</option>
    </select>
  </div>
);
