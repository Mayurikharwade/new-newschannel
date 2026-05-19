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
    title: "ఫేక్ ఫోనీసను కనిపెట్టే జాలా",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ఫేక్ ఫోనీసను కనిపెట్టే జాలా.. ఫోనీస్.. ఇంటర్నెట్ యుగంలో పెరిగి టెక్నిక్ ఇప్పుడు. దీనిని వెతకడం సులభమే..",
  },
  {
    id: 2,
    title: "ఆండ్రాయిడ్ 12 ఫీచర్లను ముందే టెస్ట్ చేయాలా ?",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "గూగుల్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ఆండ్రాయిడ్ 12లో కొత్త ఫీచర్లు త్వరలో రానున్నాయి. గూగుల్ ఇప్పటికే కొన్ని ఫీచర్లను విడుదల చేసింది...",
  },
  {
    id: 3,
    title: "2022 లో కేవలం ఫోన్లు ఎలా ఉంటాయి ?",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc: "2021 ఏడాది చాలా ప్రయోగమైంది. ఇక ముందుకాలంలో మొబైల్ ఫోన్లు మరింత స్మార్ట్ గా మారనున్నాయి...",
  },
  {
    id: 4,
    title: "జియోఫోన్ మారితేన జియోఫోన్ నెక్స్ట్",
    image: "https://placehold.co/1200x800/1a5cb0/white?text=Jio+Phone+Next",
    category: "వార్తా విశ్లేషణ",
    time: "4 సంవత్సరాల క్రితం",
    desc: "జియో ఫోన్ నెక్స్ట్ ప్రత్యేకమైన ఫీచర్లతో విడుదలైంది. సాధారణ వినియోగదారులకు ఇది ఉపయోగపడుతుంది...",
  },
  {
    id: 5,
    title: "కరోనా వ్యాక్సిన్ అలర్ట్స్ రిజిస్ట్రేషన్",
    image: "https://images.unsplash.com/photo-1612832021023-7b3c5a2f1b22?q=80&w=1200&auto=format&fit=crop",
    category: "న్యూస్ రూమ్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "భారతదేశంలో వ్యాక్సిన్ డ్రైవ్ కొనసాగుతుంది. కోవిడ్-19 టీకా కోసం రిజిస్ట్రేషన్ ప్రక్రియ కొనసాగుతోంది...",
  },
  {
    id: 6,
    title: "కరోనా వ్యాక్సిన్ కోసం ఆరోగ్యసేతు యాప్",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ఆరోగ్యసేతు యాప్ ద్వారా వ్యాక్సిన్ స్లాట్ బుకింగ్ మరియు సమాచారం పొందవచ్చు...",
  },
  {
    id: 7,
    title: "మీ దగ్గర్లో వ్యాక్సిన్ సెంటర్",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc: "భారతదేశంలో COVID-19 టీకా కార్యక్రమం వేగంగా కొనసాగుతుంది. మీ దగ్గరలోని కేంద్రాన్ని కనుగొనండి...",
  },
  {
    id: 8,
    title: "ఈ 5 ఫేక్ కోవిడ్ వ్యాక్సిన్ యాప్స్",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "న్యూస్ రూమ్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "సైబర్ మోసగాళ్లు వ్యాక్సిన్ పేరుతో ఫేక్ యాప్స్ విడుదల చేస్తున్నారు. జాగ్రత్తగా ఉండాలి...",
  },
  {
    id: 9,
    title: "గూగుల్ క్రోమ్ బ్రౌజర్‌లో క్యాష్",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    desc: "గూగుల్ క్రోమ్ బ్రౌజర్‌లో క్యాష్ క్లియర్ చేయడం ఎలా? పనితీరు మెరుగుపరచడానికి ఇది ఉపయోగపడుతుంది...",
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
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };
  
  window.open(shareUrls[platform], '_blank', 'width=600,height=400');
};

export default function GoogleListingPage() {
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
      <Link href={`/news/Google/${post.id}`} style={{ textDecoration: "none" }}>
        <Image src={post.image} alt={post.title} width={400} height={275}
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
          <div style={{ height: "4px", background: "#7ac000", width: "100%", position: "absolute", bottom: 0, left: 0,
            opacity: hover ? 1 : 0, transition: "0.3s" }} />
        )}
      </Link>
    </div>
  );
}