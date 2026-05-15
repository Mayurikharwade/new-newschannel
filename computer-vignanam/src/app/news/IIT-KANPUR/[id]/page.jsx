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
    id: 82,
    title: "అమీర్ పేట కార్నర్",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు - కాన్పూర్",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "హైదరాబాద్ లోని అమీర్‌పేట్ ప్రాంతం ఐటీ శిక్షణకు ప్రసిద్ధి చెందింది.",
      "ఆంధ్రప్రదేశ్, తెలంగాణా రాష్ట్రాలలో డిగ్రీ కానీ బి. టెక్ గానీ పూర్తి చేసిన 90% మంది విద్యార్థులు ఇక్కడ శిక్షణ పొందుతారు.",
      "వివిధ సాఫ్ట్‌వేర్ కోర్సులతో పాటు ఉద్యోగ నైపుణ్యాల శిక్షణ కూడా ఇక్కడ లభిస్తుంది.",
      "అమీర్‌పేట్ కార్నర్ అనేది ఐటీ శిక్షణ కేంద్రాలకు ప్రసిద్ధి చెందిన స్థలం.",
    ],
  },
  {
    id: 83,
    title: "ఐఐటీ కాన్పూర్ క్యాంపస్ ప్లేస్‌మెంట్స్ 2024",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90910e683?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు - కాన్పూర్",
    time: "1 సంవత్సరం క్రితం",
    fullContent: [
      "ఐఐటీ కాన్పూర్‌లో ఈ ఏడాది ప్లేస్‌మెంట్స్ రికార్డు స్థాయిలో జరిగాయి.",
      "సగటు ప్యాకేజీ 30 లక్షలకు పైగా ఉంది.",
      "గూగుల్, మైక్రోసాఫ్ట్, అమెజాన్ వంటి కంపెనీలు భారీగా నియామకాలు చేశాయి.",
      "ఈ సంవత్సరం మొదటి విడతలోనే 85% విద్యార్థులకు ఉద్యోగాలు లభించాయి.",
    ],
  },
  {
    id: 84,
    title: "కాన్పూర్ ఐఐటీలో కొత్త రీసెర్చ్ సెంటర్ ప్రారంభం",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు - కాన్పూర్",
    time: "2 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ కాన్పూర్‌లో అత్యాధునిక రీసెర్చ్ సెంటర్‌ను ప్రారంభించారు.",
      "ఈ సెంటర్‌లో AI, రోబోటిక్స్, మరియు సస్టైనబుల్ ఎనర్జీపై పరిశోధనలు జరుగుతాయి.",
      "కేంద్ర ప్రభుత్వం ఈ సెంటర్ కోసం రూ. 500 కోట్ల నిధులు కేటాయించింది.",
      "విద్యార్థులు మరియు పరిశోధకులకు ప్రపంచ స్థాయి సౌకర్యాలు అందుబాటులో ఉంటాయి.",
    ],
  },
  {
    id: 85,
    title: "IIT కాన్పూర్ నుంచి స్టార్టప్‌లకు ప్రోత్సాహం",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు - కాన్పూర్",
    time: "3 సంవత్సరాల క్రితం",
    fullContent: [
      "IIT కాన్పూర్ ఇంక్యుబేషన్ సెంటర్ ద్వారా స్టార్టప్‌లకు మద్దతు లభిస్తోంది.",
      "ఇప్పటి వరకు 200కు పైగా స్టార్టప్‌లు ఇక్కడి నుంచి ఆవిష్కృతమయ్యాయి.",
      "ఫండింగ్, మెంటార్‌షిప్, నెట్‌వర్కింగ్ అవకాశాలు కల్పిస్తున్నారు.",
      "పలు స్టార్టప్‌లు జాతీయ, అంతర్జాతీయ అవార్డులు గెలుచుకున్నాయి.",
    ],
  },
  {
    id: 86,
    title: "ఐఐటీ కాన్పూర్ విద్యార్థుల ఆవిష్కరణలు",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు - కాన్పూర్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "IIT కాన్పూర్ విద్యార్థులు రూపొందించిన ఆవిష్కరణలు జాతీయ స్థాయిలో గుర్తింపు పొందాయి.",
      "లో-కాస్ట్ వాటర్ ప్యూరిఫైయర్, స్మార్ట్ అగ్రికల్చర్ టూల్స్ వంటి ప్రాజెక్ట్‌లు ప్రశంసలు పొందాయి.",
      "టెక్నాలజీ ఫెస్ట్‌లలో ఈ ప్రాజెక్ట్‌లు ప్రదర్శించబడుతున్నాయి.",
      "ప్రభుత్వం మరియు పరిశ్రమల నుంచి నిధులు లభిస్తున్నాయి.",
    ],
  },
  {
    id: 87,
    title: "కాన్పూర్ ఐఐటీలో కొత్త కోర్సులు ప్రవేశపెట్టిన విధానం",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు - కాన్పూర్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "AI మరియు డేటా సైన్స్‌లో కొత్త కోర్సులు ప్రారంభించారు.",
      "ఈ కోర్సులు ఇండస్ట్రీ డిమాండ్ దృష్ట్యా రూపొందించబడ్డాయి.",
      "UG మరియు PG స్థాయిలలో ఈ కోర్సులు తీసుకోవచ్చు.",
      "ప్రాక్టికల్ శిక్షణకు ప్రత్యేక ప్రాధాన్యత ఇవ్వబడింది.",
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

export default function IITKanpurDetailPage() {
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
          ID: {params.id} | Available IDs: 82, 83, 84, 85, 86, 87
        </p>
        <button onClick={() => router.push("/news/IIT-KANPUR")}>
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
      {/* Left Sidebar */}
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

      {/* Main Content */}
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

        {/* Featured Image */}
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

        {/* Meta + Social Share */}
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

        {/* Full Content */}
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
                router.push(`/news/IIT-KANPUR/${prevArticle.id}`)
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
                router.push(`/news/IIT-KANPUR/${nextArticle.id}`)
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
                router.push(`/news/IIT-KANPUR/${related.id}`)
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

      {/* Right Sidebar */}
      <div style={{ width: "300px", minWidth: "260px", flexShrink: 0 }}>
        <RightSidebar />
      </div>
    </div>
  );
}