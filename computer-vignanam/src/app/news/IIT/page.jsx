"use client";

import { useState } from "react";
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
    id: 1,
    title: "కాగ్నిజెంట్ లో 23 వేల క్యాంపస్ రిక్రూట్మెంట్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1607671801_cognigent-hiring-freshers-IT-Employees.png",
    category: "సాంకేతిక ఉపాధి",
    time: "5 సంవత్సరాల క్రితం",
    desc: "కాగ్నిజెంట్ కంపెనీ భారీ స్థాయిలో ఫ్రెషర్స్ నియామకాలు చేపట్టింది. 23 వేల మందిని క్యాంపస్ ప్లేస్మెంట్స్ ద్వారా ఎంపిక చేసుకుంది.",
  },
  {
    id: 2,
    title: "20వేల లోపు బెస్ట్ 8GB స్మార్ట్ ఫోన్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1606724417_Best-8-gb-Ram-Smart-Phones-under-20000-price-range.jpg",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc: "20 వేల రూపాయల లోపు 8GB RAM తో అద్భుతమైన స్మార్ట్ ఫోన్లు అందుబాటులో ఉన్నాయి.",
  },
  {
    id: 3,
    title: "వైఫై కంటే 100 రెట్లు స్పీడైన లైఫై",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599497382_lifi1.jpg",
    category: "కొత్త ఉత్పత్తులు",
    time: "5 సంవత్సరాల క్రితం",
    desc: "లైఫై టెక్నాలజీ వైఫై కంటే 100 రెట్లు వేగంగా డేటా ట్రాన్స్ఫర్ చేయగలదు.",
  },
  {
    id: 4,
    title: "బటన్ లేని ఫోన్లు వస్తున్నాయ్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599496182_bp-less.jpg",
    category: "టెక్ న్యూస్",
    time: "5 సంవత్సరాల క్రితం",
    desc: "భవిష్యత్తులో పూర్తిగా బటన్లు లేని స్మార్ట్ఫోన్లు మార్కెట్లోకి రానున్నాయి.",
  },
  {
    id: 5,
    title: "రంగులు మార్చే ఫోన్ వచ్చేస్తోంది",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599492692_vivo.jpg",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc: "వెనుక భాగం రంగులు మార్చగలిగే సరికొత్త స్మార్ట్ఫోన్ విడుదల కానుంది.",
  },
  {
    id: 6,
    title: "ఐటీ కంపెనీలు తెరుచుకోమన్న ప్రభుత్వం",
    image: "http://graphics.computervignanam.net/images/uploads/web/8/705300_1589192300_so.jpg",
    category: "సాంకేతిక ఉపాధి",
    time: "5 సంవత్సరాల క్రితం",
    desc: "కరోనా సమయంలో ఐటీ కంపెనీలు తెరుచుకోవాలని ప్రభుత్వం సూచించింది.",
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

export default function IITListingPage() {
  return (
    <div style={{ background: "#efefef", minHeight: "100vh", padding: "30px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "34px" }}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function Card({ post }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: "#f7f7f7", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "520px", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Link href={`/news/IIT/${post.id}`} style={{ textDecoration: "none" }}>
        <div style={{ position: "relative" }}>
          <Image src={post.image} alt={post.title} width={400} height={275}
            style={{ width: "100%", height: "275px", objectFit: "cover", display: "block" }} unoptimized
            onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
          <Image src="https://computervignanam.net/assets/img/cvnewlogo2.png" alt="logo" width={72} height={30}
            style={{ position: "absolute", top: "10px", right: "10px", width: "72px", height: "auto" }} unoptimized />
        </div>
        <div style={{ padding: "18px", textAlign: "center" }}>
          <h2 style={{ color: "#1e5bd7", fontSize: "18px", lineHeight: "30px", fontWeight: "normal", margin: "0 0 8px 0" }}>{post.title}</h2>
          <div style={{ marginTop: "8px", marginBottom: "8px", display: "flex", justifyContent: "center", gap: "5px", color: "#a0a0a0", fontSize: "13px" }}>
            {post.category}<span style={{ margin: "0 10px" }}>/</span>{post.time}
          </div>
          <div style={{ marginTop: "16px", marginBottom: "16px", display: "flex", justifyContent: "center", gap: "12px" }}>
            <FaFacebookF color="#1877f2" size={18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('facebook', post.title, window.location.href); }} />
            <FaTwitter color="#1da1f2" size={18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('twitter', post.title, window.location.href); }} />
            <FaWhatsapp color="#25d366" size={18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('whatsapp', post.title, window.location.href); }} />
            <FaTelegramPlane color="#229ED9" size={18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('telegram', post.title, window.location.href); }} />
            <MdEmail color="#666" size={18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('email', post.title, window.location.href); }} />
          </div>
          <p style={{ color: "#777", fontSize: "15px", lineHeight: "28px", textAlign: "left", margin: "8px 0 0 0" }}>{post.desc}</p>
        </div>
        <div style={{ height: "4px", background: "#7ac000", width: "100%", position: "absolute", bottom: 0, left: 0, opacity: hover ? 1 : 0, transition: "0.3s" }} />
      </Link>
    </div>
  );
}