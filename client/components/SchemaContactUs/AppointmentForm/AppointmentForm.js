import { TabsStyles } from "../../../ui-styles/styles";
import InputField from "./InputField";
import TabItem from "./TabItem";
import AddressFields from "./AddressFields";
import LocationFields from "./LocationFields";
import DateTimeFields from "./DateTimeFields";
import SubmitFields from "./SubmitFields";
import DeviceTypeFields from "./DeviceTypeFields";
import MessageFields from "./MessageFields";

export default ({ appointmentType }) => (
  <>
    <ul className="tab tab-block">
      <TabItem type="mobile" name="Mobile Appointment" active={true} />
      <TabItem type="walkin" name="Walkin Appointment" />
    </ul>
    <form
      className="form-group"
      method="post"
      action-xhr="https://us-central1-temecula.cloudfunctions.net/api/v1/mail/send"
      target="_top"
    >
      <fieldset>
        <InputField
          label="Name"
          name="name"
          placeholder="Enter Your Name"
          type="text"
          required={true}
        />
        <AddressFields />
        <InputField
          label="Email Address"
          name="email"
          placeholder="Enter Your Email Address"
          type="email"
          required={true}
        />
        <InputField
          label="Phone Number "
          name="phone"
          placeholder="Enter Your Phone Number"
          type="text"
          required={true}
        />
        <LocationFields />
        <DateTimeFields />
        <DeviceTypeFields />
        <MessageFields />
      </fieldset>
      <SubmitFields />
    </form>
    <TabsStyles />
  </>
);
