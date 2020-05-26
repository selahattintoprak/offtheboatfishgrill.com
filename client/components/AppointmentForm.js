import { TabsStyles } from "../ui-styles/styles";
import AmpDatePicker from "./amp/AmpDatePicker";
import { faMapMarkerAlt, faMapPin, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <>
    <ul className="tab tab-block">
      <li className="tab-item active" data-amp-bind-class={`appointment == 'mobile' ? 'tab-item  active' : 'tab-item'`}>
        <a style={{ cursor: "pointer" }} on={`tap:AMP.setState({appointment: "mobile"})`}>
          Mobile Appointment
        </a>
      </li>
      <li className="tab-item" data-amp-bind-class={`appointment == 'walkin' ? 'tab-item  active' : 'tab-item'`}>
        <a style={{ cursor: "pointer" }} className="" on={`tap:AMP.setState({appointment: "walkin"})`}>
          Walkin Appointment
        </a>
      </li>
    </ul>
    <form
      className="form-group"
      method="post"
      action-xhr="https://us-central1-temecula.cloudfunctions.net/api/v1/mail/send"
      target="_top"
    >
      <fieldset>
        <label className="form-label" for="name">
          Name <span className="forms-req-symbol">*</span>
        </label>
        <input className="form-input" placeholder="Enter Your Name" type="text" name="name" required />
        <div data-amp-bind-hidden={`appointment != 'mobile'`}>
          <label className="form-label" for="address">
            Address <span className="forms-req-symbol">*</span>
          </label>
          <input
            className="form-input"
            placeholder="Enter Your Address"
            type="text"
            name="address"
            data-amp-bind-required={`appointment == 'mobile' ? true : false`}
          />
          <label className="form-label" for="zipCode">
            Zip Code <span className="forms-req-symbol">*</span>
          </label>
          <input
            className="form-input"
            placeholder="Enter Your Zip Code"
            type="number"
            name="zipCode"
            data-amp-bind-required={`appointment == 'mobile' ? true : false`}
          />
        </div>
        <label className="form-label" for="email">
          Email Address <span className="forms-req-symbol">*</span>
        </label>
        <input className="form-input" placeholder="Enter Your Email Address" type="email" name="email" required />
        <label className="form-label" for="phone">
          Phone Number <span className="forms-req-symbol">*</span>
        </label>
        <input className="form-input" placeholder="Enter Your Phone Number" type="text" name="phone" required />
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
        <label className="form-label" for="date">
          Date <span className="forms-req-symbol">*</span>
        </label>
        {/* <input className="form-input" name="date" type="date" value="" /> */}
        <AmpDatePicker
          id="date"
          name="date"
          icon={{ name: faCalendarAlt, side: "left" }}
          placeholder="Pick a move date"
        />
        <label className="form-label" for="time">
          Time <span className="forms-req-symbol">*</span>
        </label>
        <select className="form-select form-input" name="time" required>
          <option value=" " selected="selected" disabled="true">
            Select Time
          </option>
          <option value="09:00">9:00 AM</option>
          <option value="09:30">9:30 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="10:30">10:30 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="11:30">11:30 AM</option>
          <option value="12:00">12:00 AM</option>
          <option value="12:30">12:30 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="13:30">1:30 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="14:30">2:30 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="15:30">3:30 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="16:30">4:30 PM</option>
          <option value="17:00">5:00 PM</option>
          <option value="17:30">5:30 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="18:30">6:30 PM</option>
        </select>
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
        <label className="form-label" for="message">
          Message <span className="forms-req-symbol">*</span>
        </label>
        <textarea className="form-input" name="message" cols="30" rows="3"></textarea>
      </fieldset>

      <fieldset className="flex-container-center">
        <input className="form-input btn btn-primary" type="submit" value="Send" />
        <div submit-success="">
          <template type="amp-mustache">Subscription successful!</template>
        </div>
        <div submit-error="">
          <template type="amp-mustache">Subscription failed!</template>
        </div>
      </fieldset>
    </form>
    <TabsStyles />
  </>
);
