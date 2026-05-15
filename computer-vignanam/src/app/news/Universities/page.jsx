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
    id: 73,
    title: "స్వర్ణాంధ్ర కాలేజ్ KLU",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "10 సంవత్సరాల క్రితం",
    desc:
      "విద్యార్థులకు మంచి అవకాశాలు అందిస్తున్న ప్రముఖ యూనివర్సిటీ...",
  },
  {
    id: 74,
    title: "ఆంధ్ర యూనివర్సిటీ క్యాంపస్ ప్లేస్‌మెంట్స్",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90910e683?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "ఆంధ్ర యూనివర్సిటీలో ఈ సంవత్సరం రికార్డు స్థాయిలో ప్లేస్‌మెంట్స్ జరిగాయి.",
  },
  {
    id: 75,
    title: "ఉస్మానియా యూనివర్సిటీ కొత్త కోర్సులు",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "3 సంవత్సరాల క్రితం",
    desc:
      "ఉస్మానియా యూనివర్సిటీ AI మరియు డేటా సైన్స్‌లో కొత్త కోర్సులు ప్రారంభించింది.",
  },
  {
    id: 76,
    title: "SVU టిరుపతి రీసెర్చ్ సెంటర్ ప్రారంభం",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "2 సంవత్సరాల క్రితం",
    desc:
      "శ్రీ వెంకటేశ్వర యూనివర్సిటీలో అత్యాధునిక రీసెర్చ్ సెంటర్ ప్రారంభించబడింది.",
  },
  {
    id: 77,
    title: "JNTU హైదరాబాద్ విద్యార్థుల ఆవిష్కరణలు",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "1 సంవత్సరం క్రితం",
    desc:
      "JNTU విద్యార్థుల స్మార్ట్ సిటీ ప్రాజెక్ట్ జాతీయ స్థాయిలో గుర్తింపు పొందింది.",
  },
  {
    id: 78,
    title: "డిజిటల్ లైబ్రరీ సౌకర్యంతో యూనివర్సిటీలు",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "6 నెలల క్రితం",
    desc:
      "రాష్ట్రంలోని అన్ని యూనివర్సిటీలకు డిజిటల్ లైబ్రరీ సౌకర్యం కల్పించనున్నారు.",
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

export default function UniversitiesListingPage() {
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
        href={`/news/Universities/${post.id}`}
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

          {/* Social Icons */}
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