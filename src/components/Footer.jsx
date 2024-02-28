import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-footerBg px-7 py-16 flex flex-col justify-center items-center'>
            <a href="/" className='inline-block mb-8'>
                <img src="/images/footer-logo.svg" alt="sunnyside logo" />
            </a>

            <ul className='flex justify-center items-center gap-12 mb-20 font-barlowFont font-bold text-darkModCyan'>
                <li>
                    <a href="#" className='transition-all hover:text-white'>About</a>
                </li>
                <li>
                    <a href="#" className='transition-all hover:text-white'>Services</a>
                </li>
                <li>
                    <a href="#" className='transition-all hover:text-white'>Projects</a>
                </li>
            </ul>

            <ul className='flex justify-center items-center gap-4'>
                <li>
                    <a href="#">
                        <img src="/images/icon-facebook.svg" alt="sunnyside's facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/icon-instagram.svg" alt="sunnyside's instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/icon-twitter.svg" alt="sunnyside's twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/icon-pinterest.svg" alt="sunnyside's pinterest" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}