export default () => (
  <>
    <label className="form-label" for="message">
      Message <span className="forms-req-symbol">*</span>
    </label>
    <textarea
      className="form-input"
      name="message"
      cols="30"
      rows="3"
    ></textarea>
  </>
);
