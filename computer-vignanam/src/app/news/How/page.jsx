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

const DUMMY_IMAGE =
  "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 125,
    title:
      "మీ దగ్గర్లో వ్యాక్సినేషన్ సెంటర్‌ని గూగుల్ మ్యాప్ ద్వారా తెలుసుకోవడం ఎలా ?",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc:
      "భారతదేశంలో COVID-19 కోసం వ్యాక్సిన్ కేంద్రాలను సులభంగా తెలుసుకోవచ్చు.",
  },
  {
    id: 126,
    title:
      "వ్యాక్సిన్ అపాయింట్మెంట్ ని రీ షెడ్యూల్ చేసుకోవడం ఎలా ?",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc:
      "వ్యాక్సిన్ బుకింగ్ తేదీ మార్చుకోవడం ఎలా తెలుసుకోండి.",
  },
  {
    id: 127,
    title:
      "కోవిడ్ వ్యాక్సిన్ సర్టిఫికేట్ డౌన్‌లోడ్ చేయడం ఎలా ?",
    image:
      "https://images.unsplash.com/photo-1618961734760-466979ce35b0?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    desc:
      "కోవిడ్ వ్యాక్సిన్ సర్టిఫికేట్ ను డౌన్‌లోడ్ చేసుకునే విధానం.",
  },
  {
    id: 128,
    title:
      "అమెజాన్ యూత్ ఆఫర్ 499పై ప్రైమ్ సబ్‌స్క్రిప్షన్ పొందడం ఎలా?",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "Amazon Prime ప్రత్యేక ఆఫర్ గురించి తెలుసుకోండి.",
  },
  {
    id: 129,
    title:
      "వాట్సాప్ వీడియో కాల్స్ చేసుకోవడం ఎలా?",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "WhatsApp వీడియో కాలింగ్ పూర్తి గైడ్.",
  },
  {
    id: 130,
    title:
      "మీ గూగుల్ ఫోటోస్‌లో మెమరీ స్టోరేజ్ సేవ్ చేసుకోవడం ఎలా?",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "Google Photos స్టోరేజ్ సేవ్ చేసుకునే టిప్స్.",
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

export default function HowListingPage() {
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
        href={`/news/How/${post.id}`}
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
          onError={(e) => {
            e.target.src = DUMMY_IMAGE;
          }}
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

          {/* Working Social Icons */}
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
                e.stopPropagation();
                shareOnSocial("facebook", post.title, window.location.href);
              }}
            />
            <FaTwitter
              color="#1da1f2"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("twitter", post.title, window.location.href);
              }}
            />
            <FaWhatsapp
              color="#25d366"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("whatsapp", post.title, window.location.href);
              }}
            />
            <FaTelegramPlane
              color="#229ED9"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial("telegram", post.title, window.location.href);
              }}
            />
            <MdEmail
              color="#666"
              size={18}
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