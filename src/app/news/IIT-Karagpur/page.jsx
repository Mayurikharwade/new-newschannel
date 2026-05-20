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
    title: "మీ వాచ్ మీ పర్సే.. టోలి కాంటాక్ట్‌లెస్ పేమెంట్ వాచ్ టైటన్ పే",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1589192300_so.jpg",
    category: "కొత్త ఉత్పత్తులు",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "టైటన్ కంపెనీ విడుదల చేసిన కొత్త స్మార్ట్ వాచ్ ఇప్పుడు కాంటాక్ట్‌లెస్ పేమెంట్స్ సపోర్ట్ చేస్తోంది.",
  },
  {
    id: 2,
    title: "లావా Z61 ప్రో.. బడ్జెట్ ధరలో మేడ్ ఇన్ ఇండియా స్మార్ట్‌ఫోన్",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "బడ్జెట్ ధరలో లావా కంపెనీ తీసుకొచ్చిన ఈ ఫోన్ మంచి ఫీచర్లతో ఆకట్టుకుంటోంది.",
  },
  {
    id: 3,
    title: "ప్రివ్యూ - ఆలివ్‌పామ్ రైతుల కోసం 3F ఆయిల్ పామ్ యాప్",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "రైతులకు ఉపయోగపడే కొత్త మొబైల్ యాప్ గురించి పూర్తి వివరాలు.",
  },
  {
    id: 4,
    title: "కరోనా కాలంలో భారతీయులు ఫోన్లతో ఎలా గడుపుతున్నారు.. ఒక విశ్లేషణ",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    category: "వార్తా విశ్లేషణ",
    time: "6 సంవత్సరాల క్రితం",
    desc:
      "కరోనా సమయంలో మొబైల్ వినియోగం ఎలా పెరిగిందో ఈ కథనం చెబుతోంది.",
  },
  {
    id: 5,
    title: "కొత్త ఫోన్లు కొనాలనుకుంటున్నారా? మీకోసం బెస్ట్ గైడ్",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599492692_vivo.jpg",
    category: "మార్గదర్శిని",
    time: "6 సంవత్సరాల క్రితం",
    desc:
      "కొత్త ఫోన్ కొనేముందు తప్పకుండా తెలుసుకోవాల్సిన విషయాలు.",
  },
  {
    id: 6,
    title: "తెలుగు రాష్ట్రాల్లో కొత్త బ్యాంకింగ్ సేవలు ప్రారంభం",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1589192300_so.jpg",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "6 సంవత్సరాల క్రితం",
    desc:
      "కొత్త బ్యాంకింగ్ సర్వీసులు ప్రజలకు ఎలా ఉపయోగపడతాయో తెలుసుకోండి.",
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

export default function IITKaragpurListingPage() {
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
    <div
      style={{
        background: "#efefef",
        minHeight: "100vh",
        padding: padding,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gap: gap,
        }}
      >
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
    <div
      style={{
        background: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => !isMobile && setHover(false)}
    >
      <Link
        href={`/news/IIT-Karagpur/${post.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={260}
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

        <div
          style={{
            padding: isMobile ? "12px" : "18px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1d5fd1",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: isMobile ? "24px" : "28px",
              fontWeight: "bold",
              marginBottom: "12px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: isMobile ? "48px" : "56px",
            }}
          >
            {post.title}
          </h2>

          <div
            style={{
              color: "#999",
              fontSize: isMobile ? "11px" : "13px",
              marginBottom: "12px",
            }}
          >
            {post.category}
            <span style={{ margin: "0 10px" }}>/</span>
            {post.time}
          </div>

          {/* Social Icons */}
          <div
            style={{
              marginBottom: "14px",
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? "10px" : "12px",
            }}
          >
            <FaFacebookF
              color="#1877f2"
              size={isMobile ? 16 : 18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("facebook", post.title, window.location.href);
              }}
            />
            <FaTwitter
              color="#1da1f2"
              size={isMobile ? 16 : 18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("twitter", post.title, window.location.href);
              }}
            />
            <FaWhatsapp
              color="#25d366"
              size={isMobile ? 16 : 18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("whatsapp", post.title, window.location.href);
              }}
            />
            <FaTelegramPlane
              color="#229ED9"
              size={isMobile ? 16 : 18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("telegram", post.title, window.location.href);
              }}
            />
            <MdEmail
              color="#666"
              size={isMobile ? 16 : 18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("email", post.title, window.location.href);
              }}
            />
          </div>

          <p
            style={{
              color: "#666",
              fontSize: isMobile ? "13px" : "14px",
              lineHeight: isMobile ? "22px" : "24px",
              textAlign: "left",
              marginBottom: "0",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: isMobile ? "66px" : "72px",
            }}
          >
            {post.desc}
          </p>
        </div>

        {/* GREEN HOVER LINE - Only on Desktop */}
        {!isMobile && (
          <div
            style={{
              height: "4px",
              background: "#7ac000",
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              opacity: hover ? 1 : 0,
              transition: "0.3s",
            }}
          />
        )}
      </Link>
    </div>
  );
}