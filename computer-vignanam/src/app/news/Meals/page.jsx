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
    id: 89,
    title: "పేటీఎంకు పేమెంట్ బ్యాంక్ ఆర్డర్.. 5 లక్షల వరకు లోన్",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    category: "టెక్",
    time: "5 సంవత్సరాల క్రితం",
    desc: "పేటీఎం యూజర్లకు కొత్త సర్వీసులు అందుబాటులోకి వచ్చాయి. ఇప్పుడు మరిన్ని ఫీచర్లు అందిస్తోంది.",
  },
  {
    id: 90,
    title: "20వేల లోపు ధరలో బెస్ట్ స్మార్ట్ ఫోన్స్ పార్ట్ -1",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "మొబైల్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc: "ఫోన్స్ అంటే ఇష్టపడే వారికి మంచి సెలక్షన్స్ ఇవి.",
  },
  {
    id: 91,
    title: "పేటీఎం పోస్ట్‌పెయిడ్ బిల్లులు.. ఇక ఈజీగా చెల్లించవచ్చు",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    category: "ఈ రాజ్యంలో",
    time: "5 సంవత్సరాల క్రితం",
    desc: "డిజిటల్ పేమెంట్స్ ఇప్పుడు మరింత సులభం అయ్యాయి.",
  },
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

export default function MealsListingPage() {
  return (
    <div
      style={{
        background: "#efefef",
        minHeight: "100vh",
        padding: "30px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "34px",
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
        background: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "520px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={`/news/Meals/${post.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={275}
            style={{
              width: "100%",
              height: "275px",
              objectFit: "cover",
              display: "block",
            }}
            unoptimized
          />
          <Image
            src="https://computervignanam.net/assets/img/cvnewlogo2.png"
            alt="logo"
            width={72}
            height={30}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "72px",
              height: "auto",
            }}
            unoptimized
          />
        </div>

        <div
          style={{
            padding: "18px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1e5bd7",
              fontSize: "18px",
              lineHeight: "30px",
              fontWeight: "normal",
              margin: 0,
              marginBottom: "8px",
            }}
          >
            {post.title}
          </h2>

          <div
            style={{
              marginTop: "8px",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {post.category}
            <span style={{ margin: "0 10px" }}>/</span>
            {post.time}
          </div>

          {/* Working Social Icons */}
          <div
            style={{
              marginTop: "16px",
              marginBottom: "16px",
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
              color: "#777",
              fontSize: "15px",
              lineHeight: "28px",
              textAlign: "left",
              margin: 0,
              marginTop: "8px",
            }}
          >
            {post.desc}
          </p>
        </div>

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