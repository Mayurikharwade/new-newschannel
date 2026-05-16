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

const DUMMY_IMAGE =
  "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 1,
    title: "ఫేస్బుక్ ప్రైవసీ సెట్టింగ్స్ ఎలా మార్చాలి?",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "5 సంవత్సరాల క్రితం",
    desc: "ఫేస్బుక్ అకౌంట్ ప్రైవసీ సెట్టింగ్స్ సులభంగా ఎలా మార్చుకోవాలో తెలుసుకోండి.",
  },
  {
    id: 2,
    title: "ఫేస్బుక్ మార్కెట్ప్లేస్ ఉపయోగాలు",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ఫేస్బుక్ మార్కెట్ప్లేస్ ద్వారా వస్తువులు కొనడం మరియు అమ్మడం ఎలా?",
  },
  {
    id: 3,
    title: "ఫేస్బుక్ గ్రూప్స్ క్రియేట్ చేయడం",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "3 సంవత్సరాల క్రితం",
    desc: "ఫేస్బుక్ గ్రూప్స్ ద్వారా కమ్యూనిటీని ఎలా బిల్డ్ చేయాలి?",
  },
  {
    id: 4,
    title: "ఫేస్బుక్ పేజీ వెరిఫికేషన్ ప్రాసెస్",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "2 సంవత్సరాల క్రితం",
    desc: "ఫేస్బుక్ పేజీని వెరిఫై చేయించుకోవడం ద్వారా బ్లూ టిక్ పొందవచ్చు.",
  },
  {
    id: 5,
    title: "ఫేస్బుక్ మెసెంజర్ సీక్రెట్ కన్వర్సేషన్",
    image:
      "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "1 సంవత్సరం క్రితం",
    desc: "మెసెంజర్ లో సీక్రెట్ కన్వర్సేషన్ ఫీచర్ ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్ అందిస్తుంది.",
  },
  {
    id: 6,
    title: "ఫేస్బుక్ అడ్వర్టైజింగ్ బిగినర్స్ గైడ్",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "6 నెలల క్రితం",
    desc: "ఫేస్బుక్ యాడ్స్ ద్వారా మీ బిజినెస్ ను ప్రమోట్ చేసుకోవచ్చు.",
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

export default function FacebookListingPage() {
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

  let gridColumns = 3;
  let gap = "32px";
  let padding = "40px 35px 30px";
  
  if (isMobile) {
    gridColumns = 1;
    gap = "20px";
    padding = "16px 12px 30px";
  } else if (isTablet) {
    gridColumns = 2;
    gap = "24px";
    padding = "25px 20px 30px";
  }

  return (
    <div style={{ background: "#efefef", minHeight: "100vh", padding: padding }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: gap }}>
        {posts.map((post) => (
          <Card key={post.id} post={post} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
}

function Card({ post, isMobile }) {
  const [hover, setHover] = useState(false);
  
  return (
    <div style={{ background: "#f5f5f5", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => !isMobile && setHover(true)} 
      onMouseLeave={() => !isMobile && setHover(false)}>
      <Link href={`/news/Facebook/${post.id}`} style={{ textDecoration: "none" }}>
        <Image src={post.image} alt={post.title} width={400} height={260}
          style={{ width: "100%", height: isMobile ? "220px" : "260px", objectFit: "cover", display: "block" }} unoptimized
          onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
        <div style={{ padding: isMobile ? "12px" : "18px", textAlign: "center" }}>
          <h2 style={{ color: "#1d5fd1", fontSize: isMobile ? "16px" : "18px", lineHeight: isMobile ? "24px" : "28px", 
            fontWeight: "bold", marginBottom: "12px",
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", height: isMobile ? "48px" : "56px" }}>
            {post.title}</h2>
          <div style={{ color: "#999", fontSize: isMobile ? "11px" : "13px", marginBottom: "12px" }}>
            {post.category}<span style={{ margin: "0 10px" }}>/</span>{post.time}</div>
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
          <p style={{ color: "#666", fontSize: isMobile ? "13px" : "14px", lineHeight: isMobile ? "22px" : "24px", 
            textAlign: "left", marginBottom: "0",
            display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", height: isMobile ? "66px" : "72px" }}>
            {post.desc}</p>
        </div>
        {/* Green Bar - Only on Desktop */}
        {!isMobile && (
          <div style={{ height: "4px", background: "#7ac000", width: "100%", position: "absolute", bottom: 0, left: 0,
            opacity: hover ? 1 : 0, transition: "0.3s" }} />
        )}
      </Link>
    </div>
  );
}