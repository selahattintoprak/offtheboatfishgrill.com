export default () => (
  <>
    <label className="form-label" for="deviceType">
      Type of Device <span className="forms-req-symbol">*</span>
    </label>
    <select className="form-select form-input" name="deviceType" required>
      <option value=" " selected="selected" disabled="true">
        Select Type of Device for Repair
      </option>
      <option value="iphone">iPhone</option>
      <option value="ipad">iPad</option>
      <option value="samsung-galaxy-phone">Samsung Galaxy Phone</option>
    </select>
  </>
);
