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
    id: 126,
    title: "సోనీ ఆండ్ మూవీ, ఎలా పనిస్తుంది..",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "2 సంవత్సరాల క్రితం",
    desc: "సోనీ ఆండ్ మూవీ గురించి పూర్తి వివరాలు ఈ రివ్యూ లో తెలుసుకోండి.",
  },
  {
    id: 127,
    title: "ఐఓఎస్ 14 అప్డేట్.. ఇండియాలో యాపిల్ యూజర్లకు చక్కని ఫీచర్స్",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc: "కొత్త iOS 14 లో వచ్చిన ఫీచర్స్ గురించి తెలుసుకోండి.",
  },
  {
    id: 128,
    title: "రియల్‌మీ 12 సిరీస్ ధరలో మార్కెట్లో మంచి ఫోన్ స్మార్ట్‌ఫోన్స్ ఇవి?",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc: "రియల్‌మీ సిరీస్ ఫోన్లపై పూర్తి రివ్యూ.",
  },
  {
    id: 129,
    title: "రియల్‌మీ 43 ఇంచుల ఎల్ఈడి టీవీ 4కే లో",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "7 సంవత్సరాల క్రితం",
    desc: "కొత్త టీవీ ఫీచర్స్ పై పూర్తి వివరాలు.",
  },
  {
    id: 130,
    title: "మొబైల్ బ్యాటరీ ఎక్కువ సేపు ఉండటానికి బెస్ట్ టిప్స్",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "7 సంవత్సరాల క్రితం",
    desc: "బ్యాటరీ బ్యాకప్ పెంచుకోవడానికి ఉపయోగకరమైన టిప్స్.",
  },
  {
    id: 131,
    title: "రియల్‌మీ-శాంసంగ్ ఎం 30",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "7 సంవత్సరాల క్రితం",
    desc: "శాంసంగ్ ఎం30 ఫోన్ పై పూర్తి రివ్యూ.",
  },
  {
    id: 132,
    title: "రియల్‌మీ - జియో ఫోన్స్ ఎయిర్‌టెల్",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc: "జియో ఫోన్, ఎయిర్‌టెల్ ప్లాన్స్ గురించి తెలుసుకోండి.",
  },
  {
    id: 133,
    title: "లాక్‌డౌన్ సమయంలో గూగుల్ సెర్చింగ్ ట్రెండ్స్ ఎలా మారిపోయాయి..",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "6 సంవత్సరాల క్రితం",
    desc: "లాక్‌డౌన్ లో ఇంటర్నెట్ వినియోగం ఎలా పెరిగిందో తెలుసుకోండి.",
  },
  {
    id: 134,
    title: "యాపిల్ ఐ ఫోన్ ఎస్ఈ 2 వర్సెస్ ఐఫోన్ 11.. ఏది బెస్ట్?",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "6 సంవత్సరాల క్రితం",
    desc: "ఐఫోన్ SE2 మరియు ఐఫోన్ 11 పోలిక.",
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

export default function ReviewsListingPage() {
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
        href={`/news/Reviews/${post.id}`}
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

          {/* Working Social Icons - Like Detail Page */}
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