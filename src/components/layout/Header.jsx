"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Mail,
  Menu,
  X,
  Sparkles,
  ArrowBigDownDash,
  Code2,
  Codesandbox,
} from "lucide-react";
import { useResponsive } from "@/lib/responsive";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: User, href: "#" },
  { name: "Contact", icon: Mail, href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = useResponsive(windowWidth);
  const { isMobile, isTablet, getValue } = responsive;

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.5s ease",
    backgroundColor: "rgba(10, 10, 10, 0.95)",
    backdropFilter: getValue({
      xs: "blur(10px)",
      sm: "blur(10px)",
      md: "blur(12px)",
      lg: "blur(15px)",
      xl: "blur(15px)",
      "2xl": "blur(20px)",
    }),
    borderBottom: isScrolled
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
  };

  const containerStyle = {
    ...responsive.container,
    maxWidth: getValue({
      xs: "100%",
      sm: "100%",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    }),
  };

  // Updated nav style for centered layout
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Keep space-between for mobile
    height: getValue({
      xs: "60px",
      sm: "64px",
      md: "68px",
      lg: "72px",
      xl: "76px",
      "2xl": "80px",
    }),
    // For desktop, we'll use a different layout
    ...(isMobile
      ? {}
      : {
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }),
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: getValue({
      xs: "8px",
      sm: "10px",
      md: "12px",
      lg: "14px",
      xl: "16px",
      "2xl": "16px",
    }),
    textDecoration: "none",
    cursor: "pointer",
    // For desktop grid layout
    ...(isMobile
      ? {}
      : {
          justifySelf: "start",
        }),
  };

  const logoTextStyle = {
    fontSize: getValue({
      xs: "16px",
      sm: "18px",
      md: "20px",
      lg: "22px",
      xl: "24px",
      "2xl": "26px",
    }),
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: getValue({
      xs: "-0.3px",
      sm: "-0.4px",
      md: "-0.5px",
      lg: "-0.6px",
      xl: "-0.7px",
      "2xl": "-0.8px",
    }),
  };

  // Updated desktop nav style for centered layout
  const desktopNavStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: getValue({
      md: "4px",
      lg: "6px",
      xl: "8px",
      "2xl": "10px",
    }),
    // Center the navigation items
    justifySelf: "center",
  };

  const navItemStyle = {
    position: "relative",
    padding: getValue({
      md: "6px 10px",
      lg: "8px 14px",
      xl: "10px 16px",
      "2xl": "12px 18px",
    }),
    color: "#d1d5db",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: getValue({
      md: "4px",
      lg: "6px",
      xl: "8px",
      "2xl": "8px",
    }),
    borderRadius: getValue({
      md: "6px",
      lg: "8px",
      xl: "10px",
      "2xl": "12px",
    }),
    transition: "all 0.3s ease",
    fontSize: getValue({
      md: "14px",
      lg: "15px",
      xl: "16px",
      "2xl": "16px",
    }),
    fontWeight: "500",
  };

  // Updated CTA button style for right alignment in grid
  const ctaButtonStyle = {
    padding: getValue({
      md: "8px 18px",
      lg: "10px 24px",
      xl: "12px 28px",
      "2xl": "14px 32px",
    }),
    background: "transparent",
    color: "white",
    border: "1px solid #667eea",
    borderRadius: "50px",
    fontWeight: "500",
    fontSize: getValue({
      md: "13px",
      lg: "14px",
      xl: "15px",
      "2xl": "16px",
    }),
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: getValue({
      md: "6px",
      lg: "8px",
      xl: "8px",
      "2xl": "10px",
    }),
    transition: "all 0.3s ease",
    boxShadow: getValue({
      md: "0 3px 12px rgba(37, 99, 235, 0.25)",
      lg: "0 4px 15px rgba(37, 99, 235, 0.3)",
      xl: "0 6px 20px rgba(37, 99, 235, 0.35)",
      "2xl": "0 8px 25px rgba(37, 99, 235, 0.4)",
    }),
    // For desktop grid layout
    ...(isMobile
      ? {
          marginLeft: getValue({
            md: "12px",
            lg: "20px",
            xl: "24px",
            "2xl": "28px",
          }),
        }
      : {
          justifySelf: "end",
        }),
  };

  const mobileMenuButtonStyle = {
    display: isMobile ? "block" : "none",
    padding: "8px",
    background: "transparent",
    border: "none",
    color: "#d1d5db",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  };

  // Enhanced mobile menu style - now stays fixed at top with margin and rounded corners
  const mobileMenuStyle = {
    position: "fixed",
    top: getValue({
      xs: "70px", // Added 10px margin from header
      sm: "74px", // Added 10px margin from header
      md: "78px",
      lg: "82px",
      xl: "86px",
      "2xl": "90px",
    }),
    left: getValue({ xs: "12px", sm: "16px" }), // Added side margins
    right: getValue({ xs: "12px", sm: "16px" }), // Added side margins
    zIndex: 40, // Ensure it's below the header but above other content
    backgroundColor: "rgba(10, 10, 10, 0.98)",
    backdropFilter: getValue({
      xs: "blur(10px)",
      sm: "blur(12px)",
      md: "blur(12px)",
      lg: "blur(15px)",
      xl: "blur(15px)",
      "2xl": "blur(20px)",
    }),
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: getValue({ xs: "12px", sm: "16px" }), // Added rounded corners
    padding: getValue({ xs: "16px", sm: "20px" }),
    display: isMobileMenuOpen && isMobile ? "block" : "none",
    maxHeight: getValue({ 
      xs: "calc(100vh - 90px)",
      sm: "calc(100vh - 100px)" 
    }),
    overflowY: "auto",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
  };

  const mobileNavItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: getValue({ xs: "10px", sm: "12px" }),
    padding: getValue({ xs: "12px 14px", sm: "14px 16px" }),
    color: "#d1d5db",
    textDecoration: "none",
    borderRadius: getValue({ xs: "8px", sm: "10px" }),
    transition: "all 0.3s ease",
    marginBottom: getValue({ xs: "6px", sm: "8px" }),
    fontSize: getValue({ xs: "15px", sm: "16px" }),
    fontWeight: "500",
    backgroundColor: "transparent",
    border: "1px solid transparent",
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={headerStyle}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div style={containerStyle}>
          <nav style={navStyle}>
            {/* Logo */}
            <motion.a href="/" style={logoContainerStyle}>
              <motion.div
                className="flex items-center gap-2 text-xl font-bold text-blue-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
                  alt="Logo"
                  className="w-6 h-6 invert saturate-250 hue-rotate-180 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "linear",
                  }}
                />

                <motion.span
                  className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundSize: "200% 200%",
                    display: "inline-block",
                  }}
                >
                  Saumili
                </motion.span>
              </motion.div>
            </motion.a>

            {/* Desktop Navigation */}
            <div style={desktopNavStyle}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    style={navItemStyle}
                    whileHover={{
                      backgroundColor: "rgba(37, 99, 235, 0.15)",
                      color: "#ffffff",
                    }}
                  >
                    <Icon
                      style={{
                        width: isTablet ? "16px" : "18px",
                        height: isTablet ? "16px" : "18px",
                      }}
                    />
                    {!isTablet && item.name}
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Button - Right Aligned */}
            <motion.a
              href="./Saumili Haldar-Resume.pdf"
              download="Saumili Haldar-Resume.pdf"
              style={{
                ...ctaButtonStyle,
                textDecoration: "none",
                display: isMobile ? "none" : "flex",
              }}
              whileHover={{
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
              }}
            >
              <ArrowBigDownDash
                style={{
                  width: isTablet ? "16px" : "18px",
                  height: isTablet ? "16px" : "18px",
                }}
              />
              Download Resume
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              style={mobileMenuButtonStyle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X style={{ width: "24px", height: "24px" }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu style={{ width: "24px", height: "24px" }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            style={mobileMenuStyle}
            className="fixed top-[70px] sm:top-[74px] left-3 right-3 sm:left-4 sm:right-4 z-40 rounded-xl sm:rounded-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={mobileNavItemStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(37, 99, 235, 0.1)";
                    e.currentTarget.style.paddingLeft = "24px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.paddingLeft = "16px";
                  }}
                >
                  <Icon style={{ width: "20px", height: "20px" }} />
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
            <motion.a
              href="/Saumili Haldar-Resume.pdf"
              download="Saumili Haldar-Resume.pdf"
              style={{
                ...ctaButtonStyle,
                width: "100%",
                marginTop: "16px",
                marginLeft: 0,
                justifyContent: "center",
                textDecoration: "none",
              }}
              whileHover={{
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowBigDownDash style={{ width: "18px", height: "18px" }} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}