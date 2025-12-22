'use client';

import React from 'react';
import './footer.scss';
import goodfirms from "@/image/Partner_Badge.svg"
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {

    return (
        <div className='footer'>
            <div className="clutch-badges">
                <div className="clutch-badge">
                    <iframe
                        src="https://clutch.co/share/badges/2454530/33784?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                        title="Top Clutch Financial Consulting Ukraine 2025"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="clutch-badge">
                    <iframe
                        src="https://clutch.co/share/badges/2454530/110898?utm_source=clutch_top_company_badge&utm_medium=image_embed"title="Top Clutch Tokenization Company Ukraine 2025"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="clutch-badge">
                    <iframe
                        src="https://clutch.co/share/badges/2454530/95385?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="clutch-badge">
                    <Link
                        href="https://www.goodfirms.co/company/icorna"
                        target="_blank"
                        rel="noopener noreferrer">
                    <Image
                        src={goodfirms}
                        alt="GoodFirms badge"
                        width={300}
                        height={300}
                        
                    />
                    </Link>
                </div>

            </div>

            <div className='footer__links'>
                <div className='footer__links-block'>
                    <div className='footer__links-link'>
                        <div>
                            <a href="#">Shares</a>
                            <a href="#">futures</a>
                            <a href="#">options</a>
                            <a href="#">investments</a>
                        </div>
                        <div>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Why we are better</a>
                            <a href="#">Our projects</a>
                        </div>

                    </div>
                    <div className='footer__links-icons'>
                        <a href="#">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_46_90)">
                                    <path
                                        d="M34.0285 24.1231C32.0082 24.1231 30.1143 23.2669 28.3928 21.8736L28.8108 19.9009L28.8255 19.8239C29.205 17.7284 30.382 14.2139 34.0303 14.2139C36.7657 14.2139 38.9858 16.4359 38.9858 19.1694C38.984 21.8993 36.7638 24.1231 34.0285 24.1231ZM34.0285 9.19977C29.3737 9.19977 25.7602 12.2229 24.2935 17.2041C22.0568 13.8418 20.3555 9.80477 19.3673 6.4021H14.3513V19.4408C14.3477 22.0184 12.2595 24.1084 9.68183 24.1121C7.106 24.1084 5.01967 22.0166 5.016 19.4408V6.4021H0V19.4408C0 24.7831 4.345 29.1629 9.68183 29.1629C15.0223 29.1629 19.3673 24.7831 19.3673 19.4408V17.2591C20.3372 19.2886 21.5343 21.3456 22.9863 23.1643L19.9192 37.5981H25.047L27.2708 27.1298C29.2197 28.3746 31.46 29.1629 34.0285 29.1629C39.5285 29.1629 44 24.6676 44 19.1713C44 13.6713 39.5285 9.19977 34.0285 9.19977Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_90">
                                        <rect width="44" height="44" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/icorna/?viewAsMember=true" target="_blank">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9166 14.6667C13.4354 14.6667 14.6666 13.4355 14.6666 11.9167C14.6666 10.398 13.4354 9.16675 11.9166 9.16675C10.3978 9.16675 9.16663 10.398 9.16663 11.9167C9.16663 13.4355 10.3978 14.6667 11.9166 14.6667Z"
                                    fill="white"/>
                                <path
                                    d="M9.16663 18.3333C9.16663 17.3208 9.98745 16.5 11 16.5H12.8333C13.8458 16.5 14.6666 17.3208 14.6666 18.3333V33C14.6666 34.0125 13.8458 34.8333 12.8333 34.8333H11C9.98745 34.8333 9.16663 34.0125 9.16663 33V18.3333Z"
                                    fill="white"/>
                                <path
                                    d="M20.1667 34.8333H22C23.0126 34.8333 23.8334 34.0125 23.8334 33V24.75C23.8334 22 29.3334 20.1667 29.3334 23.8333V33.0007C29.3334 34.0133 30.1542 34.8333 31.1667 34.8333H33C34.0126 34.8333 34.8334 34.0125 34.8334 33V22C34.8334 18.3333 32.0834 16.5 28.4167 16.5C24.75 16.5 23.8334 19.25 23.8334 19.25V18.3333C23.8334 17.3208 23.0126 16.5 22 16.5H20.1667C19.1542 16.5 18.3334 17.3208 18.3334 18.3333V33C18.3334 34.0125 19.1542 34.8333 20.1667 34.8333Z"
                                    fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M36.6667 1.83325C39.7044 1.83325 42.1667 4.29569 42.1667 7.33325V36.6666C42.1667 39.7042 39.7044 42.1666 36.6667 42.1666H7.33337C4.29582 42.1666 1.83337 39.7042 1.83337 36.6666V7.33325C1.83337 4.29569 4.29582 1.83325 7.33337 1.83325H36.6667ZM36.6667 5.49992C37.6793 5.49992 38.5 6.32074 38.5 7.33325V36.6666C38.5 37.6791 37.6793 38.4999 36.6667 38.4999H7.33337C6.32086 38.4999 5.50004 37.6791 5.50004 36.6666V7.33325C5.50004 6.32074 6.32086 5.49992 7.33337 5.49992H36.6667Z"
                                      fill="white"/>
                            </svg>
                        </a>
                        <a href="https://t.me/artem_icorna" target="_blank">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M42.3715 8.23998C42.9543 5.39874 40.1636 3.03761 37.4581 4.08292L4.29461 16.8961C1.27331 18.0634 1.13868 22.2883 4.07952 23.6455L11.3016 26.9789L14.7373 39.0035C14.9157 39.6281 15.4114 40.1118 16.0402 40.2748C16.669 40.4376 17.3371 40.2557 17.7964 39.7963L23.0887 34.504L30.5021 40.0641C32.6541 41.678 35.7535 40.5025 36.294 37.8674L42.3715 8.23998ZM5.61608 20.3164L38.7796 7.50319L32.7021 37.1308L24.0167 30.6166C23.2868 30.0691 22.2655 30.1417 21.6203 30.7869L19.3536 33.0536L20.0347 29.3079L33.3797 15.963C34.0293 15.3135 34.0978 14.2837 33.5403 13.5538C32.9828 12.8239 31.9713 12.6191 31.1738 13.0748L12.744 23.6061L5.61608 20.3164ZM14.9911 26.5451L16.1028 30.4362L16.5296 28.0886C16.5963 27.7217 16.7733 27.3839 17.037 27.1202L21.1068 23.0506L14.9911 26.5451Z"
                                      fill="white"/>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_46_83)">
                                    <path
                                        d="M31.8571 0H12.1421C5.44694 0 0 5.4472 0 12.1423V31.8574C0 38.5528 5.44694 43.9997 12.1421 43.9997H31.8571C38.5528 43.9997 43.9997 38.5525 43.9997 31.8574V12.1423C44 5.4472 38.5528 0 31.8571 0ZM40.0961 31.8574C40.0961 36.4002 36.4002 40.0959 31.8574 40.0959H12.1421C7.59953 40.0961 3.90387 36.4002 3.90387 31.8574V12.1423C3.90387 7.59979 7.59953 3.90387 12.1421 3.90387H31.8571C36.3999 3.90387 40.0959 7.59979 40.0959 12.1423V31.8574H40.0961Z"
                                        fill="white"/>
                                    <path
                                        d="M21.9999 10.6628C15.7482 10.6628 10.6622 15.7488 10.6622 22.0005C10.6622 28.2519 15.7482 33.3376 21.9999 33.3376C28.2515 33.3376 33.3375 28.2519 33.3375 22.0005C33.3375 15.7488 28.2515 10.6628 21.9999 10.6628ZM21.9999 29.4334C17.901 29.4334 14.5661 26.099 14.5661 22.0002C14.5661 17.9011 17.9008 14.5665 21.9999 14.5665C26.0989 14.5665 29.4336 17.9011 29.4336 22.0002C29.4336 26.099 26.0987 29.4334 21.9999 29.4334Z"
                                        fill="white"/>
                                    <path
                                        d="M33.813 7.35254C33.0609 7.35254 32.322 7.65704 31.7908 8.19057C31.257 8.7215 30.9502 9.46063 30.9502 10.2154C30.9502 10.9678 31.2573 11.7067 31.7908 12.2402C32.3218 12.7711 33.0609 13.0782 33.813 13.0782C34.5678 13.0782 35.3043 12.7711 35.8378 12.2402C36.3714 11.7067 36.6759 10.9675 36.6759 10.2154C36.6759 9.46063 36.3714 8.7215 35.8378 8.19057C35.3069 7.65704 34.5678 7.35254 33.813 7.35254Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_83">
                                        <rect width="44" height="44" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className='footer__links-mail'>
                        <a href="mailto:artem.okhotnyk@icorna.org">artem.okhotnyk@icorna.org</a>
                    </div>
                </div>
                <div className='footer__links-text'>Update your
                    <span> business </span>
                    now!
                </div>
            </div>
            <div className='footer_privacy'>
                <div>
                    Copyright © 2022-2025 IcornA
                </div>
                <div>
                    Privacy & Security Privacy Notice Terms of Use
                </div>
            </div>
        </div>
    );
};

export default Footer;
