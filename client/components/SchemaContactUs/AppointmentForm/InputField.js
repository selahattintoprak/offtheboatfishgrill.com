export default ({
  label,
  name,
  placeholder,
  type,
  required = false,
  ...rest
}) => (
  <>
    <label className="form-label" for={name}>
      {label}
      {required && <span className="forms-req-symbol">*</span>}
    </label>
    <input
      className="form-input"
      placeholder={placeholder}
      type={type}
      name={name}
      required={required}
      {...rest}
    />
  </>
);
