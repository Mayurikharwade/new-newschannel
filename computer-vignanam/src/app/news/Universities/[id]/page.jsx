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
    id: 73,
    title: "స్వర్ణాంధ్ర కాలేజ్ KLU",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "విద్యార్థులకు మంచి అవకాశాలు అందిస్తున్న ప్రముఖ యూనివర్సిటీ KLU (కోనేరు లక్ష్మయ్య యూనివర్సిటీ).",
      "ఇది ఆంధ్రప్రదేశ్ లోని గుంటూరు జిల్లాలో ఉంది మరియు UGC ద్వారా గుర్తింపు పొందిన డీమ్డ్ యూనివర్సిటీ.",
      "ఇంజనీరింగ్, మేనేజ్‌మెంట్, సైన్స్, ఆర్ట్స్ వంటి వివిధ కోర్సులు అందుబాటులో ఉన్నాయి.",
      "అత్యాధునిక ల్యాబ్‌లు, లైబ్రరీ, స్పోర్ట్స్ సౌకర్యాలు విద్యార్థులకు అందుబాటులో ఉన్నాయి.",
    ],
  },
  {
    id: 74,
    title: "ఆంధ్ర యూనివర్సిటీ క్యాంపస్ ప్లేస్‌మెంట్స్",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90910e683?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "ఆంధ్ర యూనివర్సిటీలో ఈ సంవత్సరం రికార్డు స్థాయిలో ప్లేస్‌మెంట్స్ జరిగాయి.",
      "85% పైగా విద్యార్థులకు క్యాంపస్ ప్లేస్‌మెంట్స్ ద్వారా ఉద్యోగాలు లభించాయి.",
      "గూగుల్, TCS, విప్రో వంటి టాప్ కంపెనీలు నియామకాలు చేశాయి.",
      "సగటు వార్షిక ప్యాకేజీ 8 లక్షలు కాగా, అత్యధికం 25 లక్షలు.",
    ],
  },
  {
    id: 75,
    title: "ఉస్మానియా యూనివర్సిటీ కొత్త కోర్సులు",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "3 సంవత్సరాల క్రితం",
    fullContent: [
      "ఉస్మానియా యూనివర్సిటీ AI మరియు డేటా సైన్స్‌లో కొత్త కోర్సులు ప్రారంభించింది.",
      "ఈ కోర్సులు పరిశ్రమ అవసరాలకు అనుగుణంగా రూపొందించబడ్డాయి.",
      "విద్యార్థులకు ప్రాక్టికల్ శిక్షణతో పాటు ఇంటర్న్‌షిప్ అవకాశాలు కూడా కల్పిస్తున్నారు.",
      "ఈ కోర్సులకు ప్రవేశానికి ప్రవేశ పరీక్ష నిర్వహించబడుతుంది.",
    ],
  },
  {
    id: 76,
    title: "SVU టిరుపతి రీసెర్చ్ సెంటర్ ప్రారంభం",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "2 సంవత్సరాల క్రితం",
    fullContent: [
      "శ్రీ వెంకటేశ్వర యూనివర్సిటీలో అత్యాధునిక రీసెర్చ్ సెంటర్ ప్రారంభించబడింది.",
      "ఈ సెంటర్‌లో నానోటెక్నాలజీ, బయోటెక్నాలజీ రంగాల్లో పరిశోధనలు జరుగుతాయి.",
      "కేంద్ర ప్రభుత్వం నుంచి రూ. 100 కోట్ల నిధులు మంజూరు చేయబడ్డాయి.",
      "పరిశోధక విద్యార్థులకు ఫెలోషిప్‌లు కూడా అందుబాటులో ఉంటాయి.",
    ],
  },
  {
    id: 77,
    title: "JNTU హైదరాబాద్ విద్యార్థుల ఆవిష్కరణలు",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "1 సంవత్సరం క్రితం",
    fullContent: [
      "JNTU విద్యార్థుల స్మార్ట్ సిటీ ప్రాజెక్ట్ జాతీయ స్థాయిలో గుర్తింపు పొందింది.",
      "IoT మరియు AI ఆధారిత ఈ ప్రాజెక్ట్ స్మార్ట్ ఇండియా హ్యాకథాన్‌లో విజేతగా నిలిచింది.",
      "ప్రభుత్వం ఈ ప్రాజెక్ట్‌ను అమలు చేయడానికి ఆసక్తి చూపుతోంది.",
      "విద్యార్థుల బృందానికి రూ. 10 లక్షల నగదు బహుమతి లభించింది.",
    ],
  },
  {
    id: 78,
    title: "డిజిటల్ లైబ్రరీ సౌకర్యంతో యూనివర్సిటీలు",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    category: "కాలేజస్ విజ్ఞానం - యూనివర్సిటీలు",
    time: "6 నెలల క్రితం",
    fullContent: [
      "రాష్ట్రంలోని అన్ని యూనివర్సిటీలకు డిజిటల్ లైబ్రరీ సౌకర్యం కల్పించనున్నారు.",
      "ఈ-బుక్స్, జర్నల్స్, రీసెర్చ్ పేపర్లు ఆన్‌లైన్‌లో అందుబాటులో ఉంటాయి.",
      "విద్యార్థులు ఎక్కడి నుంచైనా లాగిన్ అయ్యి చదువుకోవచ్చు.",
      "ఈ ప్రాజెక్ట్ ద్వారా గ్రామీణ విద్యార్థులకు కూడా నాణ్యమైన విద్యా వనరులు అందుబాటులోకి వస్తాయి.",
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

export default function UniversitiesDetailPage() {
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
        <p>
          ID: {params.id} | Available IDs: 73, 74, 75, 76, 77, 78
        </p>
        <button onClick={() => router.push("/news/Universities")}>
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
      {/* LEFT SIDEBAR */}
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

      {/* CENTER CONTENT */}
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
              height: "380px",
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

        {/* Previous / Next */}
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
                router.push(`/news/Universities/${prevArticle.id}`)
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
                router.push(`/news/Universities/${nextArticle.id}`)
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

        {/* Related Articles */}
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
                router.push(`/news/Universities/${related.id}`)
              }
            >
              <Image
                src={related.image}
                alt={related.title}
                width={280}
                height={160}
                style={{
                  width: "100%",
                  height: "160px",
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

      {/* RIGHT SIDEBAR */}
      <div style={{ width: "300px", minWidth: "260px", flexShrink: 0 }}>
        <RightSidebar />
      </div>
    </div>
  );
}