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

const posts = [
  {
    id: 166,
    title: "ఏమిటీ వాట్సాప్ వ్యూ వన్స్ ఫీచర్.. ఎలా వాడుకోవాలో చెప్పే గైడ్",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "4 సంవత్సరాల క్రితం",
    desc: "వాట్సాప్ లో కొత్త ఫీచర్స్ ఎలా వాడాలో తెలుసుకోవడానికి ఈ గైడ్ ఉపయోగపడుతుంది.",
  },
  {
    id: 167,
    title: "మీ పాన్ కార్డ్ సొంతంగా మార్పులు చేసుకోవడానికి సింపుల్ గైడ్",
    image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "4 సంవత్సరాల క్రితం",
    desc: "పాన్ కార్డ్ లో మీ వివరాలు సులభంగా మార్చుకోవచ్చు.",
  },
  {
    id: 168,
    title: "ఏమిటీ ట్విటర్ వాయిస్ ట్వీట్స్.. ఎలా వాడుకోవాలో చెప్పే గైడ్ మీకోసం",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ట్విటర్ లో వాయిస్ ట్వీట్ ఎలా చేయాలో పూర్తి వివరాలు.",
  },
  {
    id: 169,
    title: "కరోనా టీకా వేయించడానికి కోవిన్ పోర్టల్ ద్వారా రిజిస్ట్రేషన్ చేసుకోవడానికి సింపుల్ గైడ్",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    desc: "కోవిన్ పోర్టల్ ద్వారా టీకా రిజిస్ట్రేషన్ చేసుకోవచ్చు.",
  },
  {
    id: 170,
    title: "గూగుల్ క్రోమ్ బ్రౌజర్ క్యాష్‌ను సింపుల్‌గా రిమూవ్ చేయడానికి గైడ్",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    desc: "బ్రౌజర్ స్లోగా ఉంటే క్యాష్ క్లియర్ చేయడం మంచిది.",
  },
  {
    id: 171,
    title: "ఏమిటీ బాల ఆధార్? ఎవరికి ఇస్తారు? ఎలా తీసుకోవాలో.. తెలుసుకోండి గైడ్ ఇక్కడ",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    desc: "పిల్లలకు ఆధార్ ఎలా తీసుకోవాలో తెలుసుకోండి.",
  },
];

// Share function for social icons
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

export default function GuideListingPage() {
  return (
    <div
      style={{
        background: "#efefef",
        minHeight: "100vh",
        padding: "40px 35px 30px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}
      >
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
    <div
      style={{
        background: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={`/news/Guide/${post.id}`}
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
            height: "260px",
            objectFit: "cover",
            display: "block",
          }}
          unoptimized
        />

        <div
          style={{
            padding: "18px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1d5fd1",
              fontSize: "18px",
              lineHeight: "28px",
              fontWeight: "bold",
              marginBottom: "12px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: "56px",
            }}
          >
            {post.title}
          </h2>

          <div
            style={{
              color: "#999",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            {post.category}
            <span style={{ margin: "0 10px" }}>/</span>
            {post.time}
          </div>

          {/* Working Social Icons - Like Detail Page */}
          <div
            style={{
              marginBottom: "14px",
              display: "flex",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <FaFacebookF
              color="#1877f2"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                shareOnSocial('facebook', post.title, window.location.href);
              }}
            />
            <FaTwitter
              color="#1da1f2"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                shareOnSocial('twitter', post.title, window.location.href);
              }}
            />
            <FaWhatsapp
              color="#25d366"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                shareOnSocial('whatsapp', post.title, window.location.href);
              }}
            />
            <FaTelegramPlane
              color="#229ED9"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                shareOnSocial('telegram', post.title, window.location.href);
              }}
            />
            <MdEmail
              color="#666"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                shareOnSocial('email', post.title, window.location.href);
              }}
            />
          </div>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "left",
              marginBottom: "0",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: "72px",
            }}
          >
            {post.desc}
          </p>
        </div>

        {/* GREEN HOVER LINE */}
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
      </Link>
    </div>
  );
}