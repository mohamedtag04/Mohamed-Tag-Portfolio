"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isSticky || isMenuOpen ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          MT
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#summary">Professional Summary</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4 shadow-lg">
          <div className="container mx-auto px-4 space-y-2">
            <MobileNavLink href="#home" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>
              About Me
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="#summary" onClick={toggleMenu}>
              Professional Summary
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-white hover:text-gray-300 transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link href={href} className="block py-2 text-white hover:text-gray-300 transition-colors" onClick={onClick}>
      {children}
    </Link>
  )
}

