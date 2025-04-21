import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { navList } from "@/src/utils/constants";

import NavLink from "./nav-links";



import styles from './header.module.scss';

export default function Header() {

    return(
        <div className={`${styles.header} container-fluid`}>
            <div className={`container ${styles.headerWrap}`}>
                <a href="/" className={styles.logo}>
                    <Image 
                        src={logo}
                        alt="Logo"
                        className={styles.logoImage}
                        width={155}
                        height={50}
                        priority
                    />
                </a>

                <nav className={styles.nav}>
                    <ul>
                        {navList.map((item, index) => {
                            return(
                                <li key={index}>
                                     <NavLink href={item.path}>{item.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <a href="tel:+1-4085209754" className={styles.tollFree}>
                    +1-4085209754
                </a>
            </div>
        </div>
    );
}