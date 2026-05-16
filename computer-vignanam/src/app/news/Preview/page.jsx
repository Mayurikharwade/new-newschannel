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
    id: 165,
    title: "ఎమిటి ట్విట్టర్ స్పేసెస్?",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ట్విట్టర్ స్పేసెస్ ద్వారా మీరు మీ ఫాలోవర్లతో ప్రత్యక్ష సంభాషణ చేయవచ్చు.",
  },
  {
    id: 166,
    title: "సూళ్ల బస్సులో డీజిల్ ఆక్యుపేషన్ సమస్యయం..",
    image: "https://images.unsplash.com/photo-1564694202779-bc908c327862?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    desc: "బస్సు ప్రయాణంలో డీజిల్ ఆక్యుపేషన్ సమస్య ప్రయాణికులను ఇబ్బంది పెడుతుంది.",
  },
  {
    id: 167,
    title: "బడ్జెట్ ధరలో శాంసంగ్ గెలాక్సీ ఎం 12",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc: "శాంసంగ్ గెలాక్సీ ఎం 12 అద్భుతమైన ఫీచర్లతో తక్కువ ధరలో వచ్చింది.",
  },
  {
    id: 168,
    title: "అందమైన 12 కెమెరస్ ముందే బెస్ట్ ఫోన్లు?",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    desc: "కెమెరా ఫోన్లలో ఇప్పుడు పోటీ పెరిగింది. 108MP కెమెరాలు వస్తున్నాయి.",
  },
  {
    id: 169,
    title: "2022 లో ఏమో కొత్త ఫోన్లు రానున్నాయా?",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    desc: "2022 లో ఫోల్డబుల్ ఫోన్లు విస్తృతంగా రానున్నాయి.",
  },
  {
    id: 170,
    title: "ఫ్లిప్ కార్ట్ లేటెస్ట్ ఆఫర్ రివ్యూస్",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ఫ్లిప్ కార్ట్ తాజా ఆఫర్లు కస్టమర్లను ఆకట్టుకుంటున్నాయి.",
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

export default function PreviewListingPage() {
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
      <Link href={`/news/Preview/${post.id}`} style={{ textDecoration: "none" }}>
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
        {/* Green Bar - Only on Desktop */}
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