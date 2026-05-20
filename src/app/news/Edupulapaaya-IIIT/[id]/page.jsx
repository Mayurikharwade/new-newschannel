"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

const DUMMY_IMAGE =
  "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 86,
    title: "R.G.U.K.T ఇడుపులపాయ",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1459001814_iiit-idupulapaya.jpg",
    category: "ఐ . ఐ . ఐ . టీ లు - ఇడుపులపాయ",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "పదవ తరగతి పరీక్షలు మెరిట్ విద్యార్థి మనసులో మెదిలే ఒకే ఒక ప్రశ్న \"నేను ఏ కాలేజీలో చేరాలి?\" అలాంటివారికి మంచి అవకాశం.",
      "RGUKT (రాజీవ్ గాంధీ యూనివర్సిటీ ఆఫ్ నాలెడ్జ్ టెక్నాలజీస్) ఇడుపులపాయ ఆంధ్రప్రదేశ్ లోని కడప జిల్లాలో ఉంది.",
      "ఇది 6-సంవత్సరాల ఇంటిగ్రేటెడ్ బీటెక్ ప్రోగ్రామ్‌ను అందిస్తుంది, ఇందులో ఇంటర్మీడియట్ కూడా కలిసి ఉంటుంది.",
      "పదవ తరగతి తర్వాత నేరుగా ప్రవేశం పొందవచ్చు. ప్రవేశ పరీక్ష ద్వారా అడ్మిషన్లు జరుగుతాయి.",
    ],
  },
];

const shareOnSocial = (platform, title, url) => {
  if (typeof window === "undefined") return;
  const encodedUrl = encodeURIComponent(url || window.location.href);
  const encodedTitle = encodeURIComponent(title);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle} ${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };

  window.open(shareUrls[platform], "_blank", "width=600,height=400");
};

export default function EdupulapaayaIIITDetailPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 992);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const params = useParams();
  const router = useRouter();
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const id = parseInt(params.id);
  const article = posts.find((item) => item.id === id);

  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>ID: {params.id} | Available ID: 86</p>
        <button onClick={() => router.push("/news/Edupulapaaya-IIIT")}>
          Go Back
        </button>
      </div>
    );
  }

  // Mobile responsive styles
  const containerPadding = isMobile ? "10px" : "20px";
  const sidebarWidth = isMobile ? "100%" : (isTablet ? "280px" : "220px");
  const centerPadding = isMobile ? "0 12px 25px" : "0 25px";
  const titleFontSize = isMobile ? "20px" : "28px";
  const contentFontSize = isMobile ? "14px" : "16px";
  const imageHeight = isMobile ? "200px" : "380px";

  return (
    <div
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: "0 auto",
        paddingTop: "15px",
        paddingBottom: "40px",
        paddingLeft: containerPadding,
        paddingRight: containerPadding,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "15px" : "30px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDEBAR - Mobile pe top */}
        <div style={{ 
          width: isMobile ? "100%" : sidebarWidth, 
          minWidth: isMobile ? "auto" : "200px", 
          flexShrink: 0,
          order: isMobile ? 0 : 0
        }}>
          <LeftSidebar />
        </div>

        {/* CENTER CONTENT */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            background: "#fff",
            padding: centerPadding,
            order: isMobile ? 1 : 0
          }}
        >
          <h1
            style={{
              color: "#e74c3c",
              fontSize: titleFontSize,
              lineHeight: "1.3",
              marginBottom: "12px",
              fontWeight: "700",
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              width: "100%",
              background: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={380}
              style={{
                width: "100%",
                height: imageHeight,
                objectFit: "cover",
                display: "block",
              }}
              unoptimized
              onError={(e) => {
                e.target.src = DUMMY_IMAGE;
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 0",
              fontSize: isMobile ? "11px" : "13px",
              color: "#777",
              flexWrap: "wrap",
              borderBottom: "1px solid #eee",
            }}
          >
            <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
              {article.category}
            </span>
            <span>•</span>
            <span>{article.time}</span>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginLeft: isMobile ? "0" : "auto" }}>
              <FaFacebookF
                color="#1877f2"
                size={isMobile ? 15 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("facebook", article.title, currentUrl)
                }
              />
              <FaTwitter
                color="#1da1f2"
                size={isMobile ? 15 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("twitter", article.title, currentUrl)
                }
              />
              <FaWhatsapp
                color="#25d366"
                size={isMobile ? 15 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("whatsapp", article.title, currentUrl)
                }
              />
              <FaTelegramPlane
                color="#229ED9"
                size={isMobile ? 15 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("telegram", article.title, currentUrl)
                }
              />
              <MdEmail
                color="#666"
                size={isMobile ? 16 : 20}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("email", article.title, currentUrl)
                }
              />
            </div>
          </div>

          <div
            style={{
              fontSize: contentFontSize,
              lineHeight: "1.7",
              color: "#444",
              padding: "12px 0",
            }}
          >
            {article.fullContent.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: "12px" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR - Mobile pe bottom */}
        <div style={{ 
          width: isMobile ? "100%" : "300px", 
          minWidth: isMobile ? "auto" : "260px", 
          flexShrink: 0,
          order: isMobile ? 2 : 0
        }}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}