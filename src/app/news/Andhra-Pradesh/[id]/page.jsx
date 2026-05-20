"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

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
    fullContent: [
      "అమరావతి రాజధాని నిర్మాణంలో ఆధునిక సాంకేతికతను విస్తృతంగా ఉపయోగిస్తున్నారు.",
      "డ్రోన్ సర్వేలు, 3D మ్యాపింగ్, GIS టెక్నాలజీతో నిర్మాణ పనులు జరుగుతున్నాయి.",
      "స్మార్ట్ సిటీ కాన్సెప్ట్‌తో అన్ని మౌలిక సదుపాయాలు డిజిటల్‌గా అనుసంధానం చేయబడుతున్నాయి.",
      "భవిష్యత్తులో ఇది దేశంలోనే అత్యంత ఆధునిక రాజధానిగా నిలుస్తుందని నిపుణులు అభిప్రాయపడుతున్నారు.",
    ],
  },
  {
    id: 2,
    title: "ఏపీలో డిజిటల్ క్లాస్ రూమ్‌ల ఏర్పాటు",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "2 సంవత్సరాల క్రితం",
    fullContent: [
      "ఆంధ్ర ప్రదేశ్ ప్రభుత్వం ప్రభుత్వ పాఠశాలల్లో డిజిటల్ క్లాస్ రూమ్‌లు ఏర్పాటు చేస్తోంది.",
      "స్మార్ట్ బోర్డులు, ప్రొజెక్టర్లు, ట్యాబ్‌లతో విద్యార్థులకు నాణ్యమైన విద్య అందించడమే లక్ష్యం.",
      "ఈ ప్రాజెక్ట్ ద్వారా 5000+ పాఠశాలలు లబ్ధి పొందనున్నాయి.",
      "BYJU's, Embibe వంటి ఎడ్‌టెక్ కంపెనీలతో భాగస్వామ్యం కుదుర్చుకుంది ప్రభుత్వం.",
    ],
  },
  {
    id: 3,
    title: "విశాఖపట్నం ఐటీ హబ్‌గా అభివృద్ధి",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "3 సంవత్సరాల క్రితం",
    fullContent: [
      "విశాఖపట్నం సిటీ ఐటీ హబ్‌గా వేగంగా అభివృద్ధి చెందుతోంది.",
      "ఐటీ సెజ్‌లు, స్టార్టప్ ఇంక్యుబేటర్లు, కో-వర్కింగ్ స్పేస్‌లు పెరుగుతున్నాయి.",
      "TCS, Wipro, Infosys వంటి పెద్ద కంపెనీలు ఇక్కడ క్యాంపస్‌లు ఏర్పాటు చేశాయి.",
      "రాష్ట్ర ప్రభుత్వం ఐటీ పాలసీతో మరిన్ని కంపెనీలను ఆకర్షిస్తోంది.",
    ],
  },
  {
    id: 4,
    title: "తిరుపతిలో స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "తిరుపతి స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు శరవేగంగా జరుగుతున్నాయి.",
      "స్మార్ట్ రోడ్లు, WiFi జోన్‌లు, సీసీటీవీ నెట్‌వర్క్ ఏర్పాటు చేయబడుతున్నాయి.",
      "పార్కింగ్ మేనేజ్‌మెంట్, ట్రాఫిక్ కంట్రోల్ పూర్తిగా డిజిటలైజ్ చేయనున్నారు.",
      "ప్రాజెక్ట్ పూర్తయితే తిరుపతి దక్షిణ భారతదేశంలోనే మోడల్ స్మార్ట్ సిటీగా నిలుస్తుంది.",
    ],
  },
  {
    id: 5,
    title: "కర్నూలు జిల్లాలో సోలార్ విద్యుత్ ప్లాంట్",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "కర్నూలు జిల్లాలో భారీ సోలార్ విద్యుత్ ప్లాంట్ నిర్మాణం పూర్తయింది.",
      "1000 మెగావాట్ల సామర్థ్యం కలిగిన ఈ ప్లాంట్ దేశంలోనే అతిపెద్ద సోలార్ పార్కుల్లో ఒకటి.",
      "ఈ ప్రాజెక్ట్ ద్వారా రాష్ట్రంలోని లక్షలాది ఇళ్లకు స్వచ్ఛమైన విద్యుత్ సరఫరా అవుతుంది.",
      "కేంద్ర ప్రభుత్వం నుంచి అనేక అవార్డులు కూడా పొందింది ఈ ప్రాజెక్ట్.",
    ],
  },
  {
    id: 6,
    title: "గోదావరి జిల్లాల్లో డిజిటల్ వ్యవసాయం",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "6 నెలల క్రితం",
    fullContent: [
      "గోదావరి జిల్లాల్లో రైతులు డిజిటల్ వ్యవసాయ పద్ధతులు అవలంబిస్తున్నారు.",
      "వాతావరణ సూచనలు, మార్కెట్ ధరలు, పంటల సలహాలు మొబైల్ యాప్‌ల ద్వారా పొందుతున్నారు.",
      "డ్రోన్లు, IoT సెన్సర్‌లతో పంటలను మానిటర్ చేస్తున్నారు.",
      "ఈ-నామ్ పోర్టల్ ద్వారా నేరుగా వ్యాపారులకు పంటలు విక్రయిస్తున్నారు రైతులు.",
    ],
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

export default function AndhraPradeshDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const id = parseInt(params.id);
  const article = posts.find((item) => item.id === id);

  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>ID: {params.id} | Available IDs: 1, 2, 3, 4, 5, 6</p>
        <button onClick={() => router.push("/news/Andhra-Pradesh")}>
          Go Back
        </button>
      </div>
    );
  }

  const relatedArticles = posts
    .filter((item) => item.id !== id)
    .slice(0, 4);
  const prevArticle = posts.find((item) => item.id === id - 1);
  const nextArticle = posts.find((item) => item.id === id + 1);
  const currentIndex = posts.findIndex((item) => item.id === id) + 1;
  const totalPosts = posts.length;

  return (
    <div
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        gap: "30px",
        alignItems: "flex-start",
        paddingTop: "15px",
        paddingBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "300px",
          background: "#fff",
          padding: "0 25px 25px",
        }}
      >
        <h1
          style={{
            color: "#e74c3c",
            fontSize: "28px",
            lineHeight: "1.4",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          {article.title}
        </h1>

        <div
          style={{
            width: "100%",
            background: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={380}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
            unoptimized
            onError={(e) => {
              e.target.src = DUMMY_IMAGE;
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px 0",
            fontSize: "13px",
            color: "#777",
            flexWrap: "wrap",
            borderBottom: "1px solid #eee",
          }}
        >
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
            {article.category}
          </span>
          <span>/</span>
          <span>{article.time}</span>
          <span>/</span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <FaFacebookF
              color="#1877f2"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() =>
                shareOnSocial("facebook", article.title, currentUrl)
              }
            />
            <FaTwitter
              color="#1da1f2"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() =>
                shareOnSocial("twitter", article.title, currentUrl)
              }
            />
            <FaWhatsapp
              color="#25d366"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() =>
                shareOnSocial("whatsapp", article.title, currentUrl)
              }
            />
            <FaTelegramPlane
              color="#229ED9"
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() =>
                shareOnSocial("telegram", article.title, currentUrl)
              }
            />
            <MdEmail
              color="#666"
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() =>
                shareOnSocial("email", article.title, currentUrl)
              }
            />
          </div>
        </div>

        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#444",
            padding: "15px 0",
          }}
        >
          {article.fullContent.map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: "15px" }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "30px 0",
            padding: "15px 0",
            borderTop: "1px solid #eee",
            borderBottom: "1px solid #eee",
          }}
        >
          {prevArticle ? (
            <button
              onClick={() =>
                router.push(`/news/Andhra-Pradesh/${prevArticle.id}`)
              }
              style={{
                padding: "6px 14px",
                background: "#fff",
                color: "#555",
                border: "1px solid #ccc",
                cursor: "pointer",
                fontSize: "13px",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#7ac000";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#fff";
                e.target.style.color = "#555";
              }}
            >
              ← వెనక్కి
            </button>
          ) : (
            <div style={{ width: "80px" }} />
          )}

          <span style={{ fontSize: "13px", color: "#888" }}>
            {currentIndex} / {totalPosts}
          </span>

          {nextArticle ? (
            <button
              onClick={() =>
                router.push(`/news/Andhra-Pradesh/${nextArticle.id}`)
              }
              style={{
                padding: "6px 14px",
                background: "#fff",
                color: "#555",
                border: "1px solid #ccc",
                cursor: "pointer",
                fontSize: "13px",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#7ac000";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#fff";
                e.target.style.color = "#555";
              }}
            >
              మరిన్ని →
            </button>
          ) : (
            <div style={{ width: "80px" }} />
          )}
        </div>

        <h2
          style={{
            color: "#e74c3c",
            fontSize: "22px",
            marginBottom: "20px",
            marginTop: "30px",
            paddingBottom: "10px",
            borderBottom: "2px solid #e74c3c",
          }}
        >
          జన రంజకమైన వార్తలు
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {relatedArticles.map((related) => (
            <div
              key={related.id}
              style={{
                cursor: "pointer",
                transition: "transform 0.2s",
                background: "#f9f9f9",
                borderRadius: "4px",
                overflow: "hidden",
              }}
              onClick={() =>
                router.push(`/news/Andhra-Pradesh/${related.id}`)
              }
            >
              <Image
                src={related.image}
                alt={related.title}
                width={280}
                height={160}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
                unoptimized
                onError={(e) => {
                  e.target.src = DUMMY_IMAGE;
                }}
              />
              <h3
                style={{
                  color: "#1a5cb0",
                  fontSize: "14px",
                  lineHeight: "1.4",
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "0 10px",
                  fontWeight: "600",
                }}
              >
                {related.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "300px", minWidth: "260px", flexShrink: 0 }}>
        <RightSidebar />
      </div>
    </div>
  );
}