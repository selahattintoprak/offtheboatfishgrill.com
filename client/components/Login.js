import Modal from "./ui/Modal";

const LoginForm = () => (
  <div className="content">
    <form method="post" action-xhr="https://example.com/subscribe" target="_top">
      <div className="form-group">
        <label className="form-label" htmlFor="input-login-name">
          Email
        </label>
        <input className="form-input" id="input-login-name" type="email" placeholder="Email" />
        <label className="form-label" htmlFor="input-login-password">
          Password
        </label>
        <input className="form-input" id="input-login-password" type="text" placeholder="Password" />
        <input type="submit" value="Submit" className="btn btn-primary my-2" />
      </div>
      <div submit-success>
        <template type="amp-mustache">Subscription successful!</template>
      </div>
      <div submit-error>
        <template type="amp-mustache">Subscription failed!</template>
      </div>
    </form>
  </div>
);

export default () => (
  <>
    <Modal id="login" title="Login" className="modal-sm" body={<LoginForm />} />
  </>
);
