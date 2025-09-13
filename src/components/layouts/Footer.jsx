import Logo from "./Logo.jsx";
import SocialMediaIcons from "./SocialMediaIcons.jsx";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#1c1c1c] px-[40px] py-[50px] border-t border-[#606060]">
            <div className="flex justify-between items-center pb-[50px]">
                <Logo />
                <SocialMediaIcons />
            </div>
            <div className="flex justify-between items-center text-xs text-[#ffffff80]">
                <p>&copy; CirriNote 2025</p>
                <p>Crafted with passion by CreoWis</p>
            </div>
        </footer>
    );
};

export default Footer;