export default ({ isLabel }) => (
  <>
    <form className="form-group" method="post" action-xhr="https://us-central1-nestjs-ionic-form-i.cloudfunctions.net/api/v1/forms" target="_top">
      {isLabel && (
        <label className="form-label" htmlFor="input-name">
          Name
        </label>
      )}
      <input className="form-input" type="text" id="input-name" name="name" placeholder="Name" />
      {isLabel && (
        <label className="form-label" htmlFor="input-name">
          Email
        </label>
      )}
      <input className="form-input" type="email" id="input-email" name="email" placeholder="Email" />
      {isLabel && (
        <label className="form-label" htmlFor="input-message">
          Message
        </label>
      )}
      <textarea className="form-input" id="input-message" placeholder="Message" rows="3"></textarea>
      <input type="submit" value="Submit" className="btn btn-primary my-2" />
      <div submit-success="">
        <template type="amp-mustache">Subscription successful!</template>
      </div>
      <div submit-error="">
        <template type="amp-mustache">Subscription failed!</template>
      </div>
    </form>
    <style jsx global>
      {`
        .form-input {
          margin-bottom: 12px;
        }
      `}
    </style>
  </>
);
