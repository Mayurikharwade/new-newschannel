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

const DUMMY_IMAGE = "https://placehold.co/1200x800/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 87,
    title: "అమీర్ పేట్ లో కంప్యూటర్ కోర్సులు",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    category: "అమీర్ పేట విజ్ఞానం",
    subcategory: "సాంకేతిక శిక్షణ సంస్థలు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "అమీర్ పేట్ హైదరాబాద్ లోని ప్రముఖ టెక్నికల్ ట్రైనింగ్ హబ్. ఇక్కడ దేశం నలుమూలల నుండి విద్యార్థులు సాఫ్ట్‌వేర్ కోర్సులు నేర్చుకోవడానికి వస్తారు.",
      "సాంకేతిక శిక్షణ సంస్థలు అనేక కోర్సులను అందిస్తున్నాయి - జావా, పైథాన్, డేటా సైన్స్, వెబ్ డెవలప్‌మెంట్, మొబైల్ యాప్ డెవలప్‌మెంట్.",
      "చాలా సంస్థలు అనుభవజ్ఞులైన ట్రైనర్లను కలిగి ఉంటాయి. వారు ప్రాక్టికల్ నాలెడ్జ్ అందిస్తారు.",
      "అమీర్ పేట్ లో వేలాది విద్యార్థులు ప్రతి సంవత్సరం శిక్షణ పూర్తి చేసి ప్రముఖ కంపెనీలలో ఉద్యోగాలు సంపాదిస్తున్నారు.",
      "సుమారు 500 కి పైగా ట్రైనింగ్ ఇన్‌స్టిట్యూట్‌లు ఇక్కడ ఉన్నాయి.",
      "ప్లేస్‌మెంట్ అసిస్టెన్స్ కూడా చాలా సంస్థలు అందిస్తున్నాయి."
    ]
  }
];

const shareOnSocial = (platform, title, url) => {
  const encodedUrl = encodeURIComponent(url || window.location.href);
  const encodedTitle = encodeURIComponent(title);
  
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle} ${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };
  
  window.open(shareUrls[platform], '_blank', 'width=600,height=400');
};

export default function TechnicalTrainingDetailPage() {
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
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  let cleanId = params.id;
  if (cleanId && cleanId.includes('.cv')) {
    cleanId = cleanId.replace('.cv', '');
  }
  const id = parseInt(cleanId);
  
  const article = posts.find(item => item.id === id);
  
  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>Article with ID: {params.id} does not exist</p>
        <button onClick={() => router.push('/news/Technical-Training-Institutions')}>
          Go Back
        </button>
      </div>
    );
  }

  // Mobile responsive styles
  const containerPadding = isMobile ? "10px" : "20px";
  const sidebarWidth = isMobile ? "100%" : (isTablet ? "280px" : "220px");
  const centerPadding = isMobile ? "0 15px" : "0 25px";
  const titleFontSize = isMobile ? "22px" : "28px";
  const imageHeight = isMobile ? "220px" : "380px";
  const contentFontSize = isMobile ? "14px" : "16px";

  return (
    <div
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        gap: isMobile ? "20px" : "30px",
        alignItems: "flex-start",
        paddingTop: "15px",
        paddingBottom: "40px",
        paddingLeft: containerPadding,
        paddingRight: containerPadding,
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap"
      }}
    >
      {/* LEFT SIDEBAR - Mobile pe top pe aayega */}
      <div style={{ 
        width: isMobile ? "100%" : sidebarWidth, 
        minWidth: isMobile ? "auto" : "200px", 
        flexShrink: 0,
        order: isMobile ? 0 : 0
      }}>
        <LeftSidebar />
      </div>

      {/* CENTER CONTENT */}
      <div style={{ 
        flex: 1, 
        minWidth: isMobile ? "auto" : "300px", 
        background: "#fff", 
        padding: centerPadding,
        order: isMobile ? 1 : 0
      }}>
        <h1 style={{ 
          color: "#e74c3c", 
          fontSize: titleFontSize, 
          lineHeight: "1.4", 
          marginBottom: "15px", 
          fontWeight: "700" 
        }}>
          {article.title}
        </h1>

        <div style={{ 
          width: "100%", 
          background: "#f5f5f5", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          overflow: "hidden" 
        }}>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={380}
            style={{ 
              width: "100%", 
              height: imageHeight, 
              objectFit: "cover", 
              display: "block" 
            }}
            unoptimized
          />
        </div>

        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          padding: "15px 0", 
          fontSize: isMobile ? "11px" : "13px", 
          color: "#777", 
          flexWrap: "wrap", 
          borderBottom: "1px solid #eee" 
        }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
          <span>/</span>
          <span>{article.subcategory}</span>
          <span>/</span>
          <span>{article.time}</span>
          <span>/</span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <FaFacebookF color="#1877f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('facebook', article.title, currentUrl)} />
            <FaTwitter color="#1da1f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('twitter', article.title, currentUrl)} />
            <FaWhatsapp color="#25d366" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('whatsapp', article.title, currentUrl)} />
            <FaTelegramPlane color="#229ED9" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('telegram', article.title, currentUrl)} />
            <MdEmail color="#666" size={isMobile ? 18 : 20} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('email', article.title, currentUrl)} />
          </div>
        </div>

        <div style={{ 
          fontSize: contentFontSize, 
          lineHeight: "1.8", 
          color: "#444", 
          padding: "15px 0" 
        }}>
          {article.fullContent.map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: "15px" }}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR - Mobile pe bottom pe aayega */}
      <div style={{ 
        width: isMobile ? "100%" : "300px", 
        minWidth: isMobile ? "auto" : "260px", 
        flexShrink: 0,
        order: isMobile ? 2 : 0
      }}>
        <RightSidebar />
      </div>
    </div>
  );
}