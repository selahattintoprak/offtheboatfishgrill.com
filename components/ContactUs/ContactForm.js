export default ({ isLabel }) => (
  <>
    <div class="form-group">
      {isLabel && (
        <label class="form-label" for="input-name">
          Name
        </label>
      )}
      <input class="form-input" type="text" id="input-name" name="name" placeholder="Name" />
      {isLabel && (
        <label class="form-label" for="input-name">
          Email
        </label>
      )}
      <input class="form-input" type="email" id="input-email" name="email" placeholder="Email" />
      {isLabel && (
        <label class="form-label" for="input-message">
          Message
        </label>
      )}
      <textarea class="form-input" id="input-message" placeholder="Message" rows="3"></textarea>
      <input type="submit" value="Submit" class="btn btn-primary my-2" />
      <div submit-success>
        <template type="amp-mustache">Subscription successful!</template>
      </div>
      <div submit-error>
        <template type="amp-mustache">Subscription failed!</template>
      </div>
    </div>
    <style jsx global>
      {`
        .form-input {
          margin-bottom: 12px;
        }
      `}
    </style>
  </>
);
