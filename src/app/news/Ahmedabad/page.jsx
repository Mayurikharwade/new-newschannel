"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DUMMY_IMAGE = "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 80,
    title: "అమీర్ పేట్ లో హాస్టళ్ళు",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    desc: "ఏటా రెండు తెలుగు రాష్ట్రాల నలుమూలల నుండీ సుమారు పదివేల మందికి పైగా విద్యార్థులు ఒక్క అమీర్ పేట్ లోనే మకాం పెడతారు.",
  },
  {
    id: 81,
    title: "అమీర్ పేట్‌లో ఫీజు వివరాలు",
    image: "https://images.unsplash.com/photo-1523050854058-8df90910e683?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "8 సంవత్సరాల క్రితం",
    desc: "అమీర్ పేట్‌లో వివిధ కోర్సుల ఫీజు వివరాలు, డిస్కౌంట్లు, స్కాలర్‌షిప్ అవకాశాలు గురించి తెలుసుకోండి.",
  },
  {
    id: 82,
    title: "అమీర్ పేట్‌లో బెస్ట్ ట్రైనింగ్ ఇన్స్టిట్యూట్స్",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "7 సంవత్సరాల క్రితం",
    desc: "అమీర్ పేట్‌లో టాప్ సాఫ్ట్‌వేర్ ట్రైనింగ్ ఇన్స్టిట్యూట్స్ లిస్ట్ మరియు వాటి రేటింగ్స్.",
  },
  {
    id: 83,
    title: "అమీర్ పేట్ విద్యార్థుల అనుభవాలు",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "6 సంవత్సరాల క్రితం",
    desc: "అమీర్ పేట్‌లో శిక్షణ పొందిన విద్యార్థుల అనుభవాలు, వారి సక్సెస్ స్టోరీలు.",
  },
  {
    id: 84,
    title: "అమీర్ పేట్‌లో ప్లేస్‌మెంట్ అవకాశాలు",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "5 సంవత్సరాల క్రితం",
    desc: "అమీర్ పేట్ ట్రైనింగ్ ఇన్స్టిట్యూట్స్ నుండి ప్లేస్‌మెంట్ అవకాశాలు, కంపెనీల వివరాలు.",
  },
  {
    id: 85,
    title: "అమీర్ పేట్‌లో ఆన్‌లైన్ ట్రైనింగ్ సౌకర్యాలు",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "3 సంవత్సరాల క్రితం",
    desc: "కరోనా తర్వాత అమీర్ పేట్‌లో ఆన్‌లైన్ ట్రైనింగ్ సౌకర్యాలు విస్తృతంగా అందుబాటులోకి వచ్చాయి.",
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

export default function AhmedabadListingPage() {
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

  // Mobile responsive styles
  let gridColumns = 3;
  let gap = "32px";
  let padding = "40px 35px 30px";
  let imageHeight = "260px";
  
  if (isMobile) {
    gridColumns = 1;
    gap = "20px";
    padding = "16px 12px 30px";
    imageHeight = "220px";
  } else if (isTablet) {
    gridColumns = 2;
    gap = "24px";
    padding = "25px 20px 30px";
    imageHeight = "240px";
  }

  return (
    <div style={{ background: "#efefef", minHeight: "100vh", padding: padding }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: gap }}>
        {posts.map((post) => (
          <Card key={post.id} post={post} isMobile={isMobile} imageHeight={imageHeight} />
        ))}
      </div>
    </div>
  );
}

function Card({ post, isMobile, imageHeight }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: "#f5f5f5", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => !isMobile && setHover(true)} 
      onMouseLeave={() => !isMobile && setHover(false)}>
      <Link href={`/news/Ahmedabad/${post.id}`} style={{ textDecoration: "none" }}>
        <Image src={post.image} alt={post.title} width={400} height={260}
          style={{ width: "100%", height: imageHeight, objectFit: "cover", display: "block" }} unoptimized
          onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
        <div style={{ padding: isMobile ? "12px" : "18px", textAlign: "center" }}>
          <h2 style={{ 
            color: "#1d5fd1", 
            fontSize: isMobile ? "16px" : "18px", 
            lineHeight: isMobile ? "24px" : "28px", 
            fontWeight: "bold", 
            marginBottom: "12px",
            display: "-webkit-box", 
            WebkitLineClamp: 2, 
            WebkitBoxOrient: "vertical", 
            overflow: "hidden", 
            height: isMobile ? "48px" : "56px" 
          }}>
            {post.title}
          </h2>
          <div style={{ color: "#999", fontSize: isMobile ? "11px" : "13px", marginBottom: "12px" }}>
            {post.category}<span style={{ margin: "0 10px" }}>/</span>{post.time}
          </div>
          <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center", gap: isMobile ? "10px" : "12px" }}>
            <FaFacebookF color="#1877f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial("facebook", post.title, window.location.href); }} />
            <FaTwitter color="#1da1f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial("twitter", post.title, window.location.href); }} />
            <FaWhatsapp color="#25d366" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial("whatsapp", post.title, window.location.href); }} />
            <FaTelegramPlane color="#229ED9" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial("telegram", post.title, window.location.href); }} />
            <MdEmail color="#666" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial("email", post.title, window.location.href); }} />
          </div>
          <p style={{ 
            color: "#666", 
            fontSize: isMobile ? "13px" : "14px", 
            lineHeight: isMobile ? "22px" : "24px", 
            textAlign: "left", 
            marginBottom: "0",
            display: "-webkit-box", 
            WebkitLineClamp: 3, 
            WebkitBoxOrient: "vertical", 
            overflow: "hidden", 
            height: isMobile ? "66px" : "72px" 
          }}>
            {post.desc}
          </p>
        </div>
        {/* GREEN HOVER LINE - Only on Desktop */}
        {!isMobile && (
          <div style={{ 
            height: "4px", 
            background: "#7ac000", 
            width: "100%", 
            position: "absolute", 
            bottom: 0, 
            left: 0,
            opacity: hover ? 1 : 0, 
            transition: "0.3s" 
          }} />
        )}
      </Link>
    </div>
  );
}