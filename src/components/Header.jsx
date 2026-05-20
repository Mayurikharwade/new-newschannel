'use client'
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenu(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="header-v8 header-sticky">
      
      {/* TOP BAR - Black */}
      <div
        className="blog-topbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          background: "#000",
        }}
      >
        <div className="container nav-container-custom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ padding: '6px 10px' }}>
              <Link href="/">
                <Image
                  src="https://computervignanam.net/assets/img/8/cvnewslogo.png"
                  height={40}
                  width={150}
                  alt="logo"
                  unoptimized
                  style={{ height: "40px", width: "auto" }}
                />
              </Link>
            </div>

            <ul className="topbar-list">
              <li
                style={{
                  marginRight: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "6px",
                    padding: "0 6px 0 4px",
                    height: "38px",
                    gap: "0px",
                  }}
                >
                  <span
                    style={{
                      color: "#00bcd4",
                      fontSize: "16px",
                    }}
                  >
                    🌐
                  </span>

                  <select
                    onChange={(e) => {
                      const lang = e.target.value;
                      const combo = document.querySelector(".goog-te-combo");
                      if (combo) {
                        combo.value = lang;
                        combo.dispatchEvent(new Event("change"));
                      }
                    }}
                    className="language-select notranslate"
                  >
                    <option value="te" className="notranslate">తెలుగు</option>
                    <option value="en" className="notranslate">English</option>
                    <option value="hi" className="notranslate">Hindi</option>
                    <option value="ta" className="notranslate">Tamil</option>
                    <option value="kn" className="notranslate">Kannada</option>
                    <option value="ml" className="notranslate">Malayalam</option>
                  </select>
                </div>
                <div
                  id="google_translate_element"
                  style={{ display: "none" }}
                ></div>
              </li>

              {!isMobile && (
                <li className="home hide-on-devices">
                  <a href="https://www.facebook.com/ComputerVignanam" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://computervignanam.net/assets/img/t.png"
                      width={24}
                      height={24}
                      alt="FB"
                      unoptimized
                    />
                  </a>
                  <a href="https://twitter.com/computervignanm" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://computervignanam.net/assets/img/f.png"
                      width={24}
                      height={24}
                      alt="TW"
                      unoptimized
                    />
                  </a>
                  <a href="https://www.instagram.com/computervignanam" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://computervignanam.net/assets/img/instagram.png"
                      width={24}
                      height={24}
                      alt="IG"
                      unoptimized
                    />
                  </a>
                  <a href="https://www.youtube.com/channel/UCu-4QjT1z4qMoWIBog327yA" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://computervignanam.net/assets/img/youtube-metro.png"
                      width={24}
                      height={24}
                      alt="YT"
                      unoptimized
                    />
                  </a>
                </li>
              )}

              <li className="mobile-menu-icon">
                <button
                  className="mobile-menu-btn"
                  onClick={() => setMobileMenu(true)}
                >
                  ☰
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NAVBAR - Grey */}
      <div
        className="navbar mega-menu"
        style={{
          position: "fixed",
          top: "58px",
          left: 0,
          width: "100%",
          zIndex: 9998,
          background: "#5b5b5b",
          height: "24px",
          minHeight: "24px",    
        }}
      >
        <div className="nav-container-custom">
          <ul className="navbar-nav custom-navbar">
            <li className="dropdown home active"><Link href="/">హోమ్</Link></li>
            <li className="dropdown nav-logo-item">
              <Link href="#">క్యాంపస్ విజ్ఞానం <b className="caret"></b></Link>
              <ul className="dropdown-menu">
                <li><Link href="/news/Engineering-Colleges">ఇంజనీరింగ్ కాలేజీలు</Link></li>
                <li><Link href="/news/Universities">యూనివర్సిటీలు</Link></li>
                <li className="dropdown-submenu">
                  <Link href="/news/IIT">ఐ . ఐ . టీ లు</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/news/IIT-Tirupati">తిరుపతి</Link></li>
                    <li><Link href="/news/IIT-Gauhathi">గౌహతి</Link></li>
                    <li><Link href="/news/IIT-Hyderabad">హైదరాబాద్</Link></li>
                    <li><Link href="/news/IIT-Mumbai">ముంబై</Link></li>
                    <li><Link href="/news/Ahmedabad">అహమదాబాద్</Link></li>
                    <li><Link href="/news/IIT-Karagpur">ఖరగ్ పుర్</Link></li>
                    <li><Link href="/news/IIT-KANPUR">కాన్పూర్</Link></li>
                    <li><Link href="/news/IIT-Delhi">ఢిల్లీ</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link href="/news/IIT">ఐ . ఐ . ఐ . టీ లు</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/news/BASARA-IIIT">బాసర</Link></li>
                    <li><Link href="/news/NUZIVEEDU-IIIT">నూజివీడు</Link></li>
                    <li><Link href="/news/Edupulapaaya-IIIT">ఇడుపులపాయ</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">అమీర్ పేట విజ్ఞానం <b className="caret"></b></Link>
              <ul className="dropdown-menu">
                <li><Link href="/news/Technical-Training-Institutions">సాంకేతిక శిక్షణ సంస్థలు</Link></li>
                <li><Link href="/news/Hostel-Facility">హాస్టల్ వసతి</Link></li>
                <li><Link href="/news/Meals">భోజన వసతి</Link></li>
                <li><Link href="/news/Students-Experiance">విద్యార్థుల అనుభవాలు</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">ఉద్యోగ విజ్ఞానం <b className="caret"></b></Link>
              <ul className="dropdown-menu">
                <li><Link href="/news/Google">గూగుల్</Link></li>
                <li><Link href="/news/Facebook">పేస్ బుక్</Link></li>
                <li><Link href="/news/Microsoft">మైక్రో సాఫ్ట్</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">టెక్ జీవన విజ్ఞానం <b className="caret"></b></Link>
              <ul className="dropdown-menu">
                <li><Link href="/news/Editors">సంపాదకుడు</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#" id="lastmenuitem">
                <Image className="printlogo" src="https://computervignanam.net/assets/img/cvnewlogo2.png" alt="logo" width={24} height={24} unoptimized style={{ width: "auto", height: "auto" }} />
                <b className="caret"></b>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/news/News-Analysys">వార్తా విశ్లేషణ</Link></li>
                <li><Link href="/news/Guide">మార్గదర్శిని ( గైడ్ )</Link></li>
                <li><Link href="/news/Reviews">రివ్యూ</Link></li>
                <li><Link href="/news/Preview">ప్రివ్యూ</Link></li>
                <li><Link href="/news/How">ఎలా?</Link></li>
                <li><Link href="/news/Tips-and-Tricks">టిప్స్ అండ్ ట్రిక్స్</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE MENU - COMPLETE WITH ALL SUBMENUS */}
      <div className={`mobile-sidebar ${mobileMenu ? "active" : ""}`}>
        <div className="mobile-sidebar-header">
          <Image
            src="https://computervignanam.net/assets/img/8/cvnewslogo.png"
            width={120}
            height={35}
            alt="logo"
            unoptimized
          />
          <button className="close-btn" onClick={() => setMobileMenu(false)}>✕</button>
        </div>

        <ul className="mobile-menu-list">
          <li><Link href="/">హోమ్</Link></li>

          {/* CAMPUS - Main Dropdown */}
          <li>
            <div className="mobile-dropdown-title" onClick={() => toggleMenu("campus")}>
              క్యాంపస్ విజ్ఞానం
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>
                {openMenu.campus ? "−" : "+"}
              </span>
            </div>
            <ul className={`mobile-submenu ${openMenu.campus ? "show" : ""}`}>
              <li><Link href="/news/Engineering-Colleges">ఇంజనీరింగ్ కాలేజీలు</Link></li>
              <li><Link href="/news/Universities">యూనివర్సిటీలు</Link></li>
              
              {/* IIT Submenu */}
              <li>
                <div className="mobile-dropdown-title submenu-title" onClick={(e) => { e.stopPropagation(); toggleMenu("iit"); }}>
                  ఐ.ఐ.టీ లు
                  <span style={{ fontSize: "20px", fontWeight: "bold", color: "#e74c3c" }}>
                    {openMenu.iit ? "−" : "+"}
                  </span>
                </div>
                <ul className={`mobile-submenu ${openMenu.iit ? "show" : ""}`}>
                  <li><Link href="/news/IIT-Tirupati">తిరుపతి</Link></li>
                  <li><Link href="/news/IIT-Gauhathi">గౌహతి</Link></li>
                  <li><Link href="/news/IIT-Hyderabad">హైదరాబాద్</Link></li>
                  <li><Link href="/news/IIT-Mumbai">ముంబై</Link></li>
                  <li><Link href="/news/Ahmedabad">అహమదాబాద్</Link></li>
                  <li><Link href="/news/IIT-Karagpur">ఖరగ్ పుర్</Link></li>
                  <li><Link href="/news/IIT-KANPUR">కాన్పూర్</Link></li>
                  <li><Link href="/news/IIT-Delhi">ఢిల్లీ</Link></li>
                </ul>
              </li>
              
              {/* IIIT Submenu */}
              <li>
                <div className="mobile-dropdown-title submenu-title" onClick={(e) => { e.stopPropagation(); toggleMenu("iiit"); }}>
                  ఐ.ఐ.ఐ.టీ లు
                  <span style={{ fontSize: "20px", fontWeight: "bold", color: "#e74c3c" }}>
                    {openMenu.iiit ? "−" : "+"}
                  </span>
                </div>
                <ul className={`mobile-submenu ${openMenu.iiit ? "show" : ""}`}>
                  <li><Link href="/news/BASARA-IIIT">బాసర</Link></li>
                  <li><Link href="/news/NUZIVEEDU-IIIT">నూజివీడు</Link></li>
                  <li><Link href="/news/Edupulapaaya-IIIT">ఇడుపులపాయ</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* AMEERPET */}
          <li>
            <div className="mobile-dropdown-title" onClick={() => toggleMenu("ameerpet")}>
              అమీర్ పేట విజ్ఞానం
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>
                {openMenu.ameerpet ? "−" : "+"}
              </span>
            </div>
            <ul className={`mobile-submenu ${openMenu.ameerpet ? "show" : ""}`}>
              <li><Link href="/news/Technical-Training-Institutions">సాంకేతిక శిక్షణ సంస్థలు</Link></li>
              <li><Link href="/news/Hostel-Facility">హాస్టల్ వసతి</Link></li>
              <li><Link href="/news/Meals">భోజన వసతి</Link></li>
              <li><Link href="/news/Students-Experiance">విద్యార్థుల అనుభవాలు</Link></li>
            </ul>
          </li>

          {/* JOBS */}
          <li>
            <div className="mobile-dropdown-title" onClick={() => toggleMenu("jobs")}>
              ఉద్యోగ విజ్ఞానం
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>
                {openMenu.jobs ? "−" : "+"}
              </span>
            </div>
            <ul className={`mobile-submenu ${openMenu.jobs ? "show" : ""}`}>
              <li><Link href="/news/Google">గూగుల్</Link></li>
              <li><Link href="/news/Facebook">పేస్ బుక్</Link></li>
              <li><Link href="/news/Microsoft">మైక్రో సాఫ్ట్</Link></li>
            </ul>
          </li>

          {/* TECH */}
          <li>
            <div className="mobile-dropdown-title" onClick={() => toggleMenu("tech")}>
              టెక్ జీవన విజ్ఞానం
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>
                {openMenu.tech ? "−" : "+"}
              </span>
            </div>
            <ul className={`mobile-submenu ${openMenu.tech ? "show" : ""}`}>
              <li><Link href="/news/Editors">సంపాదకుడు</Link></li>
            </ul>
          </li>

          {/* MORE */}
          <li>
            <div className="mobile-dropdown-title" onClick={() => toggleMenu("more")}>
              మరిన్ని
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>
                {openMenu.more ? "−" : "+"}
              </span>
            </div>
            <ul className={`mobile-submenu ${openMenu.more ? "show" : ""}`}>
              <li><Link href="/news/News-Analysys">వార్తా విశ్లేషణ</Link></li>
              <li><Link href="/news/Guide">మార్గదర్శిని ( గైడ్ )</Link></li>
              <li><Link href="/news/Reviews">రివ్యూ</Link></li>
              <li><Link href="/news/Preview">ప్రివ్యూ</Link></li>
              <li><Link href="/news/How">ఎలా?</Link></li>
              <li><Link href="/news/Tips-and-Tricks">టిప్స్ అండ్ ట్రిక్స్</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      <div className={`mobile-overlay ${mobileMenu ? "active" : ""}`} onClick={() => setMobileMenu(false)}></div>

      {/* Google Translate Scripts */}
      <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'te',
                includedLanguages: 'en,hi,te,ta,kn,ml',
                autoDisplay: false
              },
              'google_translate_element'
            );
          }
        `}
      </Script>

      <style jsx>{`
        .submenu-title {
          padding-left: 20px !important;
          background: #f5f5f5;
        }
        .mobile-submenu .mobile-submenu {
          padding-left: 15px;
        }
        @media (max-width: 768px) {
          .navbar.mega-menu {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}