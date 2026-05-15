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
    id: 78,
    title: "ఐఐటీ హైదరాబాద్ - ప్రతిష్టాత్మక సాంకేతిక సంస్థ",
    image: "https://images.unsplash.com/photo-1572177812156-58036b8d9f5d?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    desc: "ఐఐటీ హైదరాబాద్ తెలంగాణాలోని ప్రముఖ సాంకేతిక సంస్థ. ఇక్కడ విద్యార్థులు వివిధ సాంకేతిక రంగాలలో శిక్షణ పొందుతారు. ప్లేస్మెంట్ అవకాశాలు చాలా బాగుంటాయి.",
  },
  {
    id: 79,
    title: "ఐఐటీ హైదరాబాద్ క్యాంపస్ లైఫ్",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "9 సంవత్సరాల క్రితం",
    desc: "ఐఐటీ హైదరాబాద్ క్యాంపస్ చాలా అందంగా ఉంటుంది. ఇక్కడ విద్యార్థులకు అన్ని సౌకర్యాలు అందుబాటులో ఉంటాయి.",
  },
  {
    id: 80,
    title: "ఐఐటీ హైదరాబాద్ లో పరిశోధన అవకాశాలు",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "8 సంవత్సరాల క్రితం",
    desc: "ఐఐటీ హైదరాబాద్ పరిశోధనలో ముందంజలో ఉంది. ఇక్కడి అధ్యాపకులు అనేక పరిశోధన ప్రాజెక్టులలో పాల్గొంటున్నారు.",
  },
  {
    id: 81,
    title: "ఐఐటీ హైదరాబాద్ లో ప్లేస్మెంట్ రికార్డు",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "7 సంవత్సరాల క్రితం",
    desc: "ప్లేస్మెంట్ అవకాశాలు చాలా బాగుంటాయి. గూగుల్, మైక్రోసాఫ్ట్, అమెజాన్ లాంటి ప్రముఖ కంపెనీలు ఇక్కడికి వస్తాయి.",
  },
  {
    id: 82,
    title: "ఐఐటీ హైదరాబాద్ ప్రవేశ ప్రక్రియ",
    image: "https://images.unsplash.com/photo-1580582932707-520a8d0b4a7e?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    desc: "ప్రవేశాలు JEE Advanced పరీక్ష ద్వారా జరుగుతాయి. ప్రతిభావంతులైన విద్యార్థులు మాత్రమే ఇక్కడ చేరతారు.",
  },
  {
    id: 83,
    title: "ఐఐటీ హైదరాబాద్ అలుమ్ని నెట్‌వర్క్",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "6 సంవత్సరాల క్రితం",
    desc: "ఐఐటీ హైదరాబాద్ అలుమ్ని నెట్‌వర్క్ చాలా బలంగా ఉంది. అలుమ్ని వివిధ రంగాలలో విజయవంతంగా ఉన్నారు.",
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

export default function IITHyderabadPage() {
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
        href={`/news/IIT-Hyderabad/${post.id}`}
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
                e.stopPropagation();
                shareOnSocial('facebook', post.title, window.location.href);
              }}
            />
            <FaTwitter
              color="#1da1f2"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial('twitter', post.title, window.location.href);
              }}
            />
            <FaWhatsapp
              color="#25d366"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial('whatsapp', post.title, window.location.href);
              }}
            />
            <FaTelegramPlane
              color="#229ED9"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                shareOnSocial('telegram', post.title, window.location.href);
              }}
            />
            <MdEmail
              color="#666"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
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