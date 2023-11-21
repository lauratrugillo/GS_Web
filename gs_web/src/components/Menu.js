"use client"

import React, {useState} from "react";
import Link from "next/link";
import './Components.scss'

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <button className="menu-button" onClick={toggleMenu}></button>
        <div className={`navbar ${menuOpen ? 'open' : ''}`}>
            <Link href='/' className="link" onClick={closeMenu}>
                Link 1
            </Link>
            <Link href='/' className="link" onClick={closeMenu}>
                Link 2
            </Link>
        </div>
        </nav>
    )
}