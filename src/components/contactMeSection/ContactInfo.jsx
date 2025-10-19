import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo 
        text="iambinhage17@gmail.com" 
        Image={HiOutlineMail} 
        link="mailto:iambinhage17@gmail.com"
        type="email"
      />
      <SingleInfo 
        text="+84 XXX XXX XXX" 
        Image={FiPhone} 
        link="tel:+84XXXXXXXXX"
        type="phone"
      />
      <SingleInfo 
        text="Ho Chi Minh City, Vietnam" 
        Image={IoLocationOutline} 
        link="https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam"
        type="location"
      />
    </div>
  );
};

export default ContactInfo;
