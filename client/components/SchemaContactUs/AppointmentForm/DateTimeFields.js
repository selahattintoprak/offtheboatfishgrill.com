import AmpDatePicker from "../../amp/AmpDatePicker";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <>
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
  </>
);
