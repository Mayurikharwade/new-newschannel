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

const DUMMY_IMAGE = "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 76,
    title: "ఐఐటీ తిరుపతి - ప్రతిష్టాత్మక సాంకేతిక సంస్థ",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ తిరుపతి ఆంధ్రప్రదేశ్ లోని ప్రముఖ సాంకేతిక సంస్థ. ఇది 2015లో స్థాపించబడింది.",
      "ఇక్కడ B.Tech, M.Tech, PhD కోర్సులు అందుబాటులో ఉంటాయి. కంప్యూటర్ సైన్స్, ఎలక్ట్రికల్, మెకానికల్ విభాగాలు ఉన్నాయి.",
      "అత్యాధునిక ప్రయోగశాలలు, గ్రంథాలయం, క్రీడా సౌకర్యాలు విద్యార్థులకు అందుబాటులో ఉంటాయి.",
      "ప్రవేశాలు JEE Advanced పరీక్ష ద్వారా జరుగుతాయి. ప్రతిభావంతులైన విద్యార్థులు మాత్రమే ఇక్కడ చేరతారు.",
      "ప్లేస్మెంట్ అవకాశాలు చాలా బాగుంటాయి. ప్రముఖ కంపెనీలు ఇక్కడికి వచ్చి విద్యార్థులను ఎంపిక చేస్తాయి.",
      "ఐఐటీ తిరుపతి క్యాంపస్ చాలా అందంగా ఉంటుంది. చదువుకు అనువైన వాతావరణం ఇక్కడ ఉంటుంది.",
      "ఇక్కడి అధ్యాపకులు చాలా అనుభవజ్ఞులు. విద్యార్థులకు మంచి మార్గదర్శకత్వం అందిస్తారు."
    ]
  }
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
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };
  
  window.open(shareUrls[platform], '_blank', 'width=600,height=400');
};

export default function IITTirupatiDetailPage() {
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
        <p>ID: {params.id}</p>
        <button onClick={() => router.push('/news/IIT-Tirupati')}>Go Back</button>
      </div>
    );
  }

  // Mobile responsive styles
  const containerPadding = isMobile ? "10px" : "20px";
  const sidebarWidth = isMobile ? "100%" : (isTablet ? "280px" : "220px");
  const centerPadding = isMobile ? "0 15px 25px" : "0 25px";
  const titleFontSize = isMobile ? "22px" : "28px";
  const contentFontSize = isMobile ? "14px" : "16px";
  const imageHeight = isMobile ? "220px" : "380px";

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
          gap: isMobile ? "20px" : "30px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDEBAR */}
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
              lineHeight: "1.4",
              marginBottom: "15px",
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
              onError={(e) => { e.target.src = DUMMY_IMAGE; }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 0",
              fontSize: isMobile ? "11px" : "13px",
              color: "#777",
              flexWrap: "wrap",
              borderBottom: "1px solid #eee",
            }}
          >
            <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
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

          <div
            style={{
              fontSize: contentFontSize,
              lineHeight: "1.8",
              color: "#444",
              padding: "15px 0",
            }}
          >
            {article.fullContent.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: "15px" }}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
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