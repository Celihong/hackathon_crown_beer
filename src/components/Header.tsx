"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Linkedin,
  Github,
  Globe,
  Home as HomeIcon,
  Beer,
  Calendar,
  Award,
  Vote,
} from "lucide-react";
import Logo from "@/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Breweries", href: "/breweries", icon: Beer },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Awards", href: "/awards", icon: Award },
  ];

  return (
    <header className="bg-[#F8F9FA] font-inter text-[#212529] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            priority
            className="w-auto h-15"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-md text-[#1B4332] font-medium">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center space-x-2 relative group transition"
            >
              <Icon
                size={18}
                className="text-[#1B4332] group-hover:text-[#40916C] transition duration-200"
              />
              <span
                className="group-hover:text-[#40916C] transition duration-200
                  after:content-[''] after:absolute after:w-0 after:h-[2px]
                  after:bg-[#FFD166] after:left-0 after:bottom-[-4px]
                  group-hover:after:w-full after:transition-all after:duration-300"
              >
                {name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Vote button */}
        <Link
          href="/vote"
          className="hidden md:flex items-center space-x-2 font-semibold 
                     bg-yellow-600 text-white  px-5 py-2.5 rounded-full
                     shadow-md hover:shadow-lg transform hover:scale-105 hover:from-[#2D6A4F] hover:to-[#1B4332]
                     transition-all duration-300 ease-out group"
        >
          <Vote
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
          <span>Vote</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded bg-[#40916C] hover:bg-[#1B4332] text-white transition w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
          type="button"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute left-0 top-0 h-full w-72 text-[#1B4332] bg-white rounded-r-xl shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-1 rounded hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition"
              aria-label="Close Menu"
              type="button"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile nav */}
          <nav className="mt-6 flex flex-col space-y-6 px-6 text-lg font-medium">
            {navItems
              .concat({ name: "Vote", href: "/vote", icon: Vote })
              .map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 transition duration-200 ${
                    name === "Vote"
                      ? "bg-gradient-to-r from-[#40916C] to-[#2D6A4F] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:from-[#2D6A4F] hover:to-[#1B4332] transform ease-out"
                      : "hover:text-[#40916C]"
                  }`}
                >
                  <Icon size={20} />
                  <span>{name}</span>
                </Link>
              ))}
          </nav>

          {/* Social icons */}
          <div className="mt-auto flex justify-center space-x-6 p-6">
            {[Linkedin, Github, Globe].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="hover:text-[#40916C] transition duration-200"
              >
                <Icon size={22} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
