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
    id: 1,
    title: "పర్వే : అంతే ఏమిటి, ఎలా పనిచేస్తుంది",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "పర్వే అనేది మైక్రోసాఫ్ట్ యొక్క కొత్త టెక్నాలజీ. డేటా విశ్లేషణ మరియు ప్రాసెసింగ్ కోసం ఉపయోగపడుతుంది.",
  },
  {
    id: 2,
    title: "ఫేక్ ఫోన్లను కనిపెట్టండి ఇలా",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "నకిలీ ఫోన్లను గుర్తించడానికి సాధారణ టిప్స్. IMEI నంబర్ చెక్ చేయడం, బాక్స్ మీద సీరియల్ నంబర్ వెరిఫై చేయడం.",
  },
  {
    id: 3,
    title: "ఆండ్రాయిడ్ 12 ఫీచర్స్ ముందే ఎలా చూడాలా ?",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "ఆండ్రాయిడ్ 12 లో కొత్త ఫీచర్లను బీటా వెర్షన్ ద్వారా ముందుగానే టెస్ట్ చేసుకోండి.",
  },
  {
    id: 4,
    title: "2022 లో కెమెరా ఫోన్స్ ఎలా ఉంటాయి ?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "2022 లో కెమెరా ఫోన్లు మరింత అడ్వాన్స్ గా ఉంటాయి. 108MP కెమెరాలు, పెరిస్కోప్ జూమ్.",
  },
  {
    id: 5,
    title: "విన్స్టన్ స్నోబ్లైండ్ మరచిపోయారు.. గమ్మత్తు విషయం!",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "విన్స్టన్ స్నోబ్లైండ్ చేసిన కొన్ని ప్రిడిక్షన్స్ నిజమయ్యాయి. స్మార్ట్ ఫోన్ల భవిష్యత్తు.",
  },
  {
    id: 6,
    title: "ఎమిటి టిట్లర్ స్పెసల్?",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    desc: "టిట్లర్ స్పెసల్ అనేది ఒక ప్రత్యేక టెక్నాలజీ. డేటా ప్రాసెసింగ్ ను వేగంగా చేస్తుంది.",
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

export default function MicrosoftListingPage() {
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
        href={`/news/Microsoft/${post.id}`}
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