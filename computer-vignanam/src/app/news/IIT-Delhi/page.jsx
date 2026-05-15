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
    id: 83,
    title:
      "వాట్సాప్ ప్రైవసీ పాలసీపై కొత్తతెల్లి ప్రభుత్వం.. ఏం జరగబోతోంది?",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    category: "వార్తా విశ్లేషణ",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "వాట్సాప్ కొత్త ప్రైవసీ పాలసీ కారణంగా కేంద్ర ప్రభుత్వం కీలక నిర్ణయాలు తీసుకునే అవకాశం ఉంది.",
  },
  {
    id: 84,
    title:
      "కోవిడ్ రోగుల వారి కుటుంబ సభ్యులతో మాట్లాడించే వీల రోబోట్",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "కరోనా బాధితులకు సహాయం చేసేందుకు ప్రత్యేక రోబోట్‌ను ఆసుపత్రుల్లో వినియోగిస్తున్నారు.",
  },
  {
    id: 85,
    title:
      "డెబిట్ కార్డ్ మోసాలు ఇంటర్నెట్ మోసాల కంటే.. ఎలా పని చేస్తుంది?",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "డిజిటల్ పేమెంట్స్ పెరుగుతున్న నేపథ్యంలో డెబిట్ కార్డ్ మోసాలు కూడా ఎక్కువవుతున్నాయి.",
  },
  {
    id: 86,
    title:
      "శాంసంగ్ 4జీ స్మార్ట్ వాచ్ విడుదల.. ఫీచర్స్ ఏంటంటే",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    category: "కొత్త ఉత్పత్తులు",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "శాంసంగ్ ఇండియాలో సరికొత్త 4జీ స్మార్ట్ వాచ్ విడుదల చేసింది.",
  },
  {
    id: 87,
    title:
      "వర్క్ ఫ్రం హోమ్ చేసేవారికి BSNL బంపర్ ఆఫర్",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "ఉపాధి",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "ఇంటినుంచి పని చేసేవారి కోసం BSNL కొత్త డేటా ఆఫర్లు అందుబాటులోకి తెచ్చింది.",
  },
  {
    id: 88,
    title:
      "వరల్డ్ యంగెస్ట్ గేమ్ డెవలపర్ ఎవరో తెలుసా?",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    category: "సాంకేతికం",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "చిన్న వయసులోనే గేమ్ డెవలపర్‌గా ప్రపంచ గుర్తింపు పొందిన బాలిక కథ.",
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

export default function IITDelhiListingPage() {
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
        href={`/news/IIT-Delhi/${post.id}`}
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