import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <SingleContactSocial link="https://github.com/thanhbinh21" Icon={FiGithub} label="GitHub" />
      <SingleContactSocial link="mailto:iambinhage17@gmail.com" Icon={HiOutlineMail} label="Email" />
      <SingleContactSocial link="https://www.linkedin.com/in/nguyen-thanh-binh" Icon={FaLinkedinIn} label="LinkedIn" />
      <SingleContactSocial link="https://www.facebook.com/profile.php?id=yourprofile" Icon={FaFacebook} label="Facebook" />
    </div>
  );
};

export default ContactSocial;
