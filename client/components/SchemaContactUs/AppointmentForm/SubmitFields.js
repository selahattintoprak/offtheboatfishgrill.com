export default () => (
  <fieldset className="flex-container-center">
    <input className="form-input btn btn-primary" type="submit" value="Send" />
    <div submit-success="">
      <template type="amp-mustache">Subscription successful!</template>
    </div>
    <div submit-error="">
      <template type="amp-mustache">Subscription failed!</template>
    </div>
  </fieldset>
);
