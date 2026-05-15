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
    id: 124,
    title:
      "అనవసరమైన వాట్సాప్ గ్రూప్‌లో ఇబ్బందికరంగా ఉండటానికి ట్రిక్ ఇదిగో..",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "WhatsApp గ్రూప్స్‌లో unwanted మెసేజెస్ నివారించడానికి ట్రిక్.",
  },
  {
    id: 125,
    title:
      "మీ ఫోటోలో బ్యాక్‌గ్రౌండ్ బ్లర్ చేయడానికి ఈజీ ట్రిక్స్",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "ఫోటో బ్యాక్‌గ్రౌండ్ బ్లర్ చేసే సులభమైన టిప్స్.",
  },
  {
    id: 126,
    title:
      "మీ బేబీని లైవ్‌లో మానిటర్ చేసే స్మార్ట్ ట్రిక్స్",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "Smart baby monitoring కోసం ఉపయోగకరమైన యాప్స్.",
  },
  {
    id: 127,
    title:
      "వాట్సాప్ వెబ్ మెసేజెస్ బ్లర్ చేయడానికి సింపుల్ ట్రిక్",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "WhatsApp Web privacy కోసం blur extension ట్రిక్.",
  },
  {
    id: 128,
    title:
      "PDF ఫైల్ సైజ్ తగ్గించడానికి సింపుల్ ట్రిక్స్",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "PDF size compress చేయడానికి online tools.",
  },
  {
    id: 129,
    title:
      "గూగుల్ మ్యాప్స్‌లో లోకేషన్ షేర్ చేయడానికి ఓ ట్రిక్",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    desc:
      "Google Maps live location sharing ఎలా చేయాలో తెలుసుకోండి.",
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

export default function TipsAndTricksListingPage() {
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
        href={`/news/Tips-and-Tricks/${post.id}`}
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