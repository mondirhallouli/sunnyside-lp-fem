import { useState } from "react"

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleMobileMenu = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };

    return (
        <header className="w-full h-[70vh] px-5 bg-headerBgImg-mobile bg-no-repeat bg-cover bg-center overflow-x-hidden md:h-screen md:bg-headerBgImg-desktop">

            <nav className="w-full relative py-10 mb-16 flex justify-between items-center md:container md:mx-auto md:mb-32">

                <a href="/">
                    <img src="/images/logo.svg" alt="Sunnyside agency's logo" />
                </a>

                {/* MENU(desktop and mobile) */}
                <ul className={`w-full absolute z-50 ${open ? 'left-0' : 'left-[9999px]'} top-32 pt-5 pb-12 font-barlowFont text-lg text-center bg-white transition-all duration-300 md:static md:w-auto md:bg-transparent md:p-0 md:flex md:justify-between md:items-center md:gap-12 before:content-[''] before:block before:w-0 before:h-0 before:top-[-40px] before:right-0 before:absolute before:border-[20px] before:border-white before:border-t-transparent before:border-l-transparent before:md:none`}>
                    <li>
                        <a href="#" className="inline-block py-4 font-semibold text-darkGrayishBlue md:text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block py-4 font-semibold text-darkGrayishBlue md:text-white">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block py-4 mb-5 font-semibold text-darkGrayishBlue md:mb-0 md:text-white">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block py-4 px-8 font-frauncesFont font-bold uppercase text-base text-darkDesatBlue bg-yellow rounded-full md:bg-white md:hover:bg-white/30 md:hover:text-white md:transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>

                <button onClick={handleMobileMenu} className="md:hidden">
                    <img src="/images/icon-hamburger.svg" alt="mobile menu button icon" />
                </button>
            </nav>

            <div className="container mx-auto text-center">
                <h2 className="mb-12 font-frauncesFont text-white text-5xl font-black tracking-widest leading-tight md:text-6xl md:mb-24">
                    WE ARE CREATIVES
                </h2>

                <span className="inline-block animate-bounce">
                    <img src="/images/icon-arrow-down.svg" alt="down arrow icon to indicate scrolling" />
                </span>
            </div>
        </header>
    )
}