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
    id: 1,
    title: "అమరావతి రాజధాని నిర్మాణంలో సాంకేతికత",
    image:
      "https://images.unsplash.com/photo-1598905242497-06b5ee5ee98d?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "1 సంవత్సరం క్రితం",
    desc:
      "అమరావతి రాజధాని నిర్మాణంలో ఆధునిక సాంకేతికత వినియోగం గురించి తెలుసుకోండి.",
  },
  {
    id: 2,
    title: "ఏపీలో డిజిటల్ క్లాస్ రూమ్‌ల ఏర్పాటు",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "2 సంవత్సరాల క్రితం",
    desc:
      "ఆంధ్ర ప్రదేశ్ ప్రభుత్వం ప్రభుత్వ పాఠశాలల్లో డిజిటల్ క్లాస్ రూమ్‌లు ఏర్పాటు చేస్తోంది.",
  },
  {
    id: 3,
    title: "విశాఖపట్నం ఐటీ హబ్‌గా అభివృద్ధి",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "3 సంవత్సరాల క్రితం",
    desc:
      "విశాఖపట్నం సిటీ ఐటీ హబ్‌గా వేగంగా అభివృద్ధి చెందుతోంది.",
  },
  {
    id: 4,
    title: "తిరుపతిలో స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "4 సంవత్సరాల క్రితం",
    desc:
      "తిరుపతి స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు శరవేగంగా జరుగుతున్నాయి.",
  },
  {
    id: 5,
    title: "కర్నూలు జిల్లాలో సోలార్ విద్యుత్ ప్లాంట్",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "కర్నూలు జిల్లాలో భారీ సోలార్ విద్యుత్ ప్లాంట్ నిర్మాణం పూర్తయింది.",
  },
  {
    id: 6,
    title: "గోదావరి జిల్లాల్లో డిజిటల్ వ్యవసాయం",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "6 నెలల క్రితం",
    desc:
      "గోదావరి జిల్లాల్లో రైతులు డిజిటల్ వ్యవసాయ పద్ధతులు అవలంబిస్తున్నారు.",
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

export default function AndhraPradeshListingPage() {
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
        href={`/news/Andhra-Pradesh/${post.id}`}
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