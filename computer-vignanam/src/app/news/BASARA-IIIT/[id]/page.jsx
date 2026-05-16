"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
    id: 84,
    title: "ట్రిపుల్ ఐటి లు-ఒక పరిచయం",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . ఐ . టీ లు - బాసర",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "తెలంగాణాలో ఏర్పాటు చేసిన ట్రిపుల్ ఐటి విద్య డిగ్రీ తో ప్రారంభం అవుతుంది.",
      "దీనివల్ల విద్యార్థులకు మాత్రమే ఐటి పరిజ్ఞానం అందించడమే కాకుండా ఉద్యోగ అవకాశాలు కూడా మెరుగవుతాయి.",
      "బాసర ట్రిపుల్ ఐటీ 2008లో స్థాపించబడింది మరియు ఇది దేశంలోని ప్రముఖ ఐఐఐటీలలో ఒకటి.",
      "ఇక్కడ బీటెక్, ఎంటెక్, పీహెచ్‌డీ కోర్సులు అందుబాటులో ఉన్నాయి.",
    ],
  },
  {
    id: 85,
    title: "బాసర ట్రిపుల్ ఐటీ క్యాంపస్ సౌకర్యాలు",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . ఐ . టీ లు - బాసర",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "బాసర ట్రిపుల్ ఐటీ క్యాంపస్‌లో విద్యార్థులకు అన్ని ఆధునిక సౌకర్యాలు అందుబాటులో ఉన్నాయి.",
      "లైబ్రరీ, ల్యాబ్స్, స్పోర్ట్స్ కాంప్లెక్స్, హాస్టల్ సౌకర్యాలు అన్నీ ప్రపంచ స్థాయి ప్రమాణాలతో ఉన్నాయి.",
      "క్యాంపస్ మొత్తం WiFi సౌకర్యంతో అనుసంధానించబడి ఉంది.",
      "విద్యార్థులకు 24/7 మెడికల్ సెంటర్ కూడా అందుబాటులో ఉంది.",
    ],
  },
  {
    id: 86,
    title: "ట్రిపుల్ ఐటీ బాసరలో ప్రవేశ ప్రక్రియ",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . ఐ . టీ లు - బాసర",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ట్రిపుల్ ఐటీ బాసరలో ప్రవేశానికి JEE మెయిన్స్ స్కోర్ ఆధారంగా అడ్మిషన్లు జరుగుతాయి.",
      "JoSAA కౌన్సెలింగ్ ద్వారా సీట్ల కేటాయింపు జరుగుతుంది.",
      "ప్రతి సంవత్సరం 300+ సీట్లు వివిధ బ్రాంచ్‌లలో అందుబాటులో ఉంటాయి.",
      "SC/ST/OBC విద్యార్థులకు రిజర్వేషన్ సౌకర్యం ఉంది.",
    ],
  },
  {
    id: 87,
    title: "బాసర ఐఐఐటీ ప్లేస్‌మెంట్ రికార్డు",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . ఐ . టీ లు - బాసర",
    time: "3 సంవత్సరాల క్రితం",
    fullContent: [
      "బాసర ట్రిపుల్ ఐటీలో ప్లేస్‌మెంట్స్ ప్రతి ఏడాది మెరుగవుతున్నాయి.",
      "గత సంవత్సరం సగటు ప్యాకేజీ 12 లక్షలు కాగా, అత్యధిక ప్యాకేజీ 45 లక్షలు.",
      "అమెజాన్, మైక్రోసాఫ్ట్, TCS, ఇన్ఫోసిస్ వంటి కంపెనీలు క్యాంపస్ నియామకాలు నిర్వహిస్తాయి.",
      "90% పైగా విద్యార్థులకు ప్లేస్‌మెంట్ లభిస్తుంది.",
    ],
  },
  {
    id: 88,
    title: "ట్రిపుల్ ఐటీ బాసరలో కొత్త కోర్సులు",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . ఐ . టీ లు - బాసర",
    time: "2 సంవత్సరాల క్రితం",
    fullContent: [
      "AI మరియు మెషీన్ లెర్నింగ్‌లో కొత్త బీటెక్ కోర్సులు ప్రారంభించారు.",
      "డేటా సైన్స్ మరియు సైబర్ సెక్యూరిటీలో కూడా స్పెషలైజేషన్ అందుబాటులోకి వచ్చింది.",
      "ఈ కోర్సులు ఇండస్ట్రీ 4.0 అవసరాలకు అనుగుణంగా రూపొందించబడ్డాయి.",
      "విద్యార్థులకు ఇంటర్న్‌షిప్ అవకాశాలు కూడా పెరిగాయి.",
    ],
  },
  {
    id: 89,
    title: "బాసర ఐఐఐటీ విద్యార్థుల ఆవిష్కరణలు",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . ఐ . టీ లు - బాసర",
    time: "1 సంవత్సరం క్రితం",
    fullContent: [
      "బాసర విద్యార్థులు రూపొందించిన స్మార్ట్ అగ్రికల్చర్ ప్రాజెక్ట్ జాతీయ అవార్డు గెలుచుకుంది.",
      "డ్రోన్ టెక్నాలజీ, IoT ఆధారిత ప్రాజెక్ట్‌లు ప్రశంసలు పొందాయి.",
      "హ్యాకథాన్‌లలో బాసర టీమ్‌లు ప్రతి సంవత్సరం టాప్ 10లో నిలుస్తున్నాయి.",
      "ప్రభుత్వం నుంచి రీసెర్చ్ గ్రాంట్‌లు కూడా లభిస్తున్నాయి.",
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

export default function BasaraIIITDetailPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 992);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
          ID: {params.id} | Available IDs: 84, 85, 86, 87, 88, 89
        </p>
        <button onClick={() => router.push("/news/BASARA-IIIT")}>
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

  // Mobile responsive styles
  const containerPadding = isMobile ? "10px" : "20px";
  const sidebarWidth = isMobile ? "100%" : (isTablet ? "280px" : "220px");
  const centerPadding = isMobile ? "0 15px 25px" : "0 25px";
  const titleFontSize = isMobile ? "22px" : "28px";
  const contentFontSize = isMobile ? "14px" : "16px";
  const imageHeight = isMobile ? "220px" : "380px";
  const relatedGridColumns = isMobile ? 1 : 2;

  return (
    <div
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: "0 auto",
        paddingTop: "15px",
        paddingBottom: "40px",
        paddingLeft: containerPadding,
        paddingRight: containerPadding,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "30px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDEBAR */}
        <div style={{ 
          width: isMobile ? "100%" : sidebarWidth, 
          minWidth: isMobile ? "auto" : "200px", 
          flexShrink: 0,
          order: isMobile ? 0 : 0
        }}>
          <LeftSidebar />
        </div>

        {/* CENTER CONTENT */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            background: "#fff",
            padding: centerPadding,
            order: isMobile ? 1 : 0
          }}
        >
          <h1
            style={{
              color: "#e74c3c",
              fontSize: titleFontSize,
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
                height: imageHeight,
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
              fontSize: isMobile ? "11px" : "13px",
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
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("facebook", article.title, currentUrl)
                }
              />
              <FaTwitter
                color="#1da1f2"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("twitter", article.title, currentUrl)
                }
              />
              <FaWhatsapp
                color="#25d366"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("whatsapp", article.title, currentUrl)
                }
              />
              <FaTelegramPlane
                color="#229ED9"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("telegram", article.title, currentUrl)
                }
              />
              <MdEmail
                color="#666"
                size={isMobile ? 18 : 20}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  shareOnSocial("email", article.title, currentUrl)
                }
              />
            </div>
          </div>

          <div
            style={{
              fontSize: contentFontSize,
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

          {/* Previous / Next Buttons - Fixed in Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "30px 0",
              padding: "15px 0",
              borderTop: "1px solid #eee",
              borderBottom: "1px solid #eee",
              flexDirection: "row",
              gap: "10px",
              flexWrap: "nowrap",
            }}
          >
            {prevArticle ? (
              <button
                onClick={() =>
                  router.push(`/news/BASARA-IIIT/${prevArticle.id}`)
                }
                style={{
                  padding: isMobile ? "8px 12px" : "8px 16px",
                  background: "#fff",
                  color: "#555",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  fontSize: isMobile ? "12px" : "13px",
                  transition: "0.2s",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#7ac000";
                  e.target.style.color = "#fff";
                  e.target.style.border = "1px solid #7ac000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.color = "#555";
                  e.target.style.border = "1px solid #ccc";
                }}
              >
                <span>←</span>
                <span>వెనక్కి</span>
              </button>
            ) : (
              <div style={{ width: isMobile ? "70px" : "85px" }} />
            )}

            <span style={{ fontSize: isMobile ? "12px" : "13px", color: "#888", whiteSpace: "nowrap" }}>
              {currentIndex} / {totalPosts}
            </span>

            {nextArticle ? (
              <button
                onClick={() =>
                  router.push(`/news/BASARA-IIIT/${nextArticle.id}`)
                }
                style={{
                  padding: isMobile ? "8px 12px" : "8px 16px",
                  background: "#fff",
                  color: "#555",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  fontSize: isMobile ? "12px" : "13px",
                  transition: "0.2s",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#7ac000";
                  e.target.style.color = "#fff";
                  e.target.style.border = "1px solid #7ac000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.color = "#555";
                  e.target.style.border = "1px solid #ccc";
                }}
              >
                <span>మరిన్ని</span>
                <span>→</span>
              </button>
            ) : (
              <div style={{ width: isMobile ? "70px" : "85px" }} />
            )}
          </div>

          <h2
            style={{
              color: "#e74c3c",
              fontSize: isMobile ? "18px" : "22px",
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
              gridTemplateColumns: `repeat(${relatedGridColumns}, 1fr)`,
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
                  router.push(`/news/BASARA-IIIT/${related.id}`)
                }
              >
                <div style={{ position: "relative", width: "100%", height: isMobile ? "180px" : "160px" }}>
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    style={{
                      objectFit: "cover",
                      display: "block",
                    }}
                    unoptimized
                    onError={(e) => {
                      e.target.src = DUMMY_IMAGE;
                    }}
                  />
                </div>
                <h3
                  style={{
                    color: "#1a5cb0",
                    fontSize: isMobile ? "13px" : "14px",
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
        <div style={{ 
          width: isMobile ? "100%" : "300px", 
          minWidth: isMobile ? "auto" : "260px", 
          flexShrink: 0,
          order: isMobile ? 2 : 0
        }}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}