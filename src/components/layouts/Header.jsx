import TryNow from "../TryNow.jsx";
import Logo from "./Logo.jsx";
import {useEffect, useState} from "react";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {

        const isSticky = (e) => {
            const scrollTop = window.scrollY
            scrollTop >= 130 ? setIsSticky(true) : setIsSticky(false);
        }

        window.addEventListener("scroll", isSticky);

        return () => {
            window.removeEventListener("scroll", isSticky);
        }

    }, []);

    const navs = [
        {
            id: 0,
            title: 'About',
            url: 'about'
        },
        {
            id: 1,
            title: 'Features',
            url: 'features'
        },
        {
            id: 2,
            title: 'FAQs',
            url: 'footer'
        },
        {
            id: 3,
            title: 'Contact',
            url: 'footer'
        }
    ]

    const handleClick = (val) => {
        const element = document.getElementById(val);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    return (
        <header
            className={`bg-black flex justify-between items-center px-[40px] py-[24px] ${isSticky ? 'is-sticky-header' : ''}`}>
            <Logo />
            <nav>
                <ul className="flex justify-center items-center">
                    {navs.map((nav, index) => (
                        <li
                            className="px-6 cursor-pointer"
                            key={index}
                        >
                            <span
                                className="hover:text-[#00bb77]"
                                onClick={() => handleClick(nav.url)}
                            >{nav.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
            <TryNow />
        </header>
    );
};

export default Header;