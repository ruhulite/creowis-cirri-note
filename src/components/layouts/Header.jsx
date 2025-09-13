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
        const menuElement = document.getElementById('navigation');
        menuElement.classList.remove('active');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    return (
        <header
            id="header"
            className={`bg-black flex justify-between items-center md:px-[40px] md:py-[24px] ${isSticky ? 'is-sticky-header' : ''}`}>
            <Logo />
            <nav id="navigation">
                <ul className="flex md:justify-center md:items-center">
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