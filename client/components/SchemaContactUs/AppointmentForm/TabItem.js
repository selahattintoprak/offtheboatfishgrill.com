export default ({ type, name, active }) => (
  <li
    className={`tab-item ${active ? "active" : ""}`}
    data-amp-bind-class={`appointment == '${type}' ? 'tab-item  active' : 'tab-item'`}
  >
    <a
      style={{ cursor: "pointer" }}
      on={`tap:AMP.setState({appointment: "${type}"})`}
    >
      {name}
    </a>
  </li>
);
