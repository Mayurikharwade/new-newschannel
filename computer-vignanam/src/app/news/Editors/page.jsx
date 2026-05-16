"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "నగదు రహిత వ్యవస్థకు దారి ఎటు దూరం? ఎండ్ కష్టం? ఎండ్ మేలు?",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "ఇండియా డిజిటల్ రూపం తాలూకు ప్రయాణంలో నగదు రహిత వ్యవస్థపై విస్తృత చర్చ కొనసాగుతోంది. ముఖ్యంగా ఆర్థిక రంగంలో సాంకేతికత అనగా క్యాష్ లెస్ గా మారడానికి సమయాయుతమవుతోంది.",
    bg: "#fff",
    reverse: false,
  },
  {
    id: 2,
    title: "డెబ్బై సంవత్సరాల స్వతంత్ర భారత్..... ఇరవై సంవత్సరాల కంప్యూటర్ విజ్ఞానం",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    desc: "డిజిటల్ భారతం నుండి కంప్యూటర్ విజ్ఞానం వరకు అనేక మార్పులు చోటుచేసుకున్నాయి.",
    bg: "#fff",
    reverse: true,
  },
  {
    id: 3,
    title: "కేవలం 10 శాతం మాత్రమే ఖర్చయ్యే కంప్యూటర్ విజ్ఞానం వెబ్ సైట్",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "తెలుగు సాంకేతిక సాహిత్యంలో కంప్యూటర్ విజ్ఞానం ప్రత్యేక స్థానాన్ని సంపాదించింది.",
    bg: "#3f9ddd",
    reverse: false,
  },
  {
    id: 4,
    title: "రాజకీయ సాంకేతిక రాజమేళబోతుందా?...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    desc: "సాంకేతికత మరియు రాజకీయాల మధ్య సంబంధం పెరుగుతోంది.",
    bg: "#fff",
    reverse: true,
  },
  {
    id: 5,
    title: "తెలుగు సాంకేతిక సాహిత్యానికి ఆద్యుడు ఎవరు?",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    desc: "తెలుగు భాషలో కంప్యూటర్ సాహిత్యానికి పునాది వేసిన ప్రముఖుల గురించిన విశేషాలు.",
    bg: "#3f9ddd",
    reverse: false,
  },
];

export default function EditorsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Mobile styles
  const containerPadding = isMobile ? "12px" : "18px";
  const titleFontSize = isMobile ? "16px" : "17px";
  const titleLineHeight = isMobile ? "24px" : "28px";
  const metaFontSize = isMobile ? "11px" : "14px";
  const descFontSize = isMobile ? "13px" : "14px";
  const descLineHeight = isMobile ? "22px" : "28px";
  const buttonPadding = isMobile ? "6px 14px" : "8px 18px";
  const buttonFontSize = isMobile ? "13px" : "15px";
  const imageHeight = isMobile ? "200px" : "200px";
  const marginBottom = isMobile ? "60px" : "80px";

  return (
    <div
      style={{
        background: "#ececec",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {articles.map((item, index) => (
        <div
          key={item.id}
          style={{
            background: item.bg,
            padding: containerPadding,
            borderTop: item.bg === "#3f9ddd" ? "5px solid #58b7f3" : "none",
            marginBottom: index === articles.length - 1 ? marginBottom : "0px",
          }}
        >
          {/* Mobile: column (image upar, content niche) | Desktop: row */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : (item.reverse ? "row-reverse" : "row"),
              gap: isMobile ? "15px" : "18px",
              alignItems: "center",
            }}
          >
            {/* Image Section */}
            <div style={{ 
              width: isMobile ? "100%" : "48%",
            }}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={200}
                style={{
                  width: "100%",
                  height: imageHeight,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "4px",
                }}
                unoptimized
              />
            </div>

            {/* Content Section */}
            <div style={{ 
              width: isMobile ? "100%" : "50%",
            }}>
              <h2
                style={{
                  color: "#1357d8",
                  fontSize: titleFontSize,
                  lineHeight: titleLineHeight,
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#777",
                  fontSize: metaFontSize,
                  marginBottom: "14px",
                  flexWrap: "wrap",
                }}
              >
                <span>టెక్ జీవన విజ్ఞానం - సంపాదకుడు</span>
                <span>/</span>
                <span>9 సంవత్సరాల క్రితం</span>
              </div>

              <p
                style={{
                  color: item.bg === "#3f9ddd" ? "#fff" : "#666",
                  fontSize: descFontSize,
                  lineHeight: descLineHeight,
                }}
              >
                {item.desc}
              </p>

              <Link href={`/news/Editors/${item.id}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    marginTop: "20px",
                    background: "#3498db",
                    border: "none",
                    color: "#fff",
                    padding: buttonPadding,
                    fontSize: buttonFontSize,
                    fontWeight: "bold",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#2980b9";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#3498db";
                  }}
                >
                  ⚡ ఇంకా చదవండి
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}