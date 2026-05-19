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
    id: 1,
    title: "ఫేక్ ఫోనీసను కనిపెట్టే జాలా",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "నకిలీ ఫోన్‌లను సులభంగా గుర్తించడానికి కొన్ని చిట్కాలు ఉన్నాయి.",
      "IMEI నంబర్ చెక్ చేయడం ద్వారా ఫోన్ అసలైనదా కాదా అని తెలుసుకోవచ్చు.",
      "ఫోన్ బిల్డ్ క్వాలిటీ, డిస్ప్లే రిజల్యూషన్, కెమెరా పెర్ఫార్మెన్స్ వంటివి పరిశీలించాలి.",
      "అధికారిక వెబ్‌సైట్ నుండి మాత్రమే ఫోన్ కొనుగోలు చేయడం మంచిది.",
    ],
  },
  {
    id: 2,
    title: "ఆండ్రాయిడ్ 12 ఫీచర్లను ముందే టెస్ట్ చేయాలా ?",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "గూగుల్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ఆండ్రాయిడ్ 12 బీటా వెర్షన్ ద్వారా కొత్త ఫీచర్లను టెస్ట్ చేయవచ్చు.",
      "గూగుల్ పిక్సెల్ ఫోన్లలో బీటా ప్రోగ్రామ్‌లో రిజిస్టర్ చేసుకోవాలి.",
      "కొత్త మెటీరియల్ యూ డిజైన్, ప్రైవసీ డ్యాష్‌బోర్డ్ వంటి ఫీచర్లు ఉన్నాయి.",
      "బీటా వెర్షన్‌లో బగ్స్ ఉండే అవకాశం ఉన్నందున జాగ్రత్తగా వాడాలి.",
    ],
  },
  {
    id: 3,
    title: "2022 లో కేవలం ఫోన్లు ఎలా ఉంటాయి ?",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "2022 లో స్మార్ట్‌ఫోన్లు మరింత శక్తివంతమైన ప్రాసెసర్‌లతో వస్తాయి.",
      "5G టెక్నాలజీ ప్రధాన ఆకర్షణగా ఉంటుంది.",
      "ఫోల్డబుల్ డిస్ప్లేలు, అండర్ డిస్ప్లే కెమెరాలు ట్రెండ్‌లో ఉంటాయి.",
      "బ్యాటరీ లైఫ్ మరియు ఫాస్ట్ ఛార్జింగ్‌లో భారీ మెరుగుదలలు ఉంటాయి.",
    ],
  },
  {
    id: 4,
    title: "జియోఫోన్ మారితేన జియోఫోన్ నెక్స్ట్",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "వార్తా విశ్లేషణ",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "జియో తన కొత్త స్మార్ట్‌ఫోన్ 'జియోఫోన్ నెక్స్ట్' ను విడుదల చేసింది.",
      "ఇది పూర్తి టచ్‌స్క్రీన్ డిస్ప్లేతో వస్తుంది మరియు 4G సపోర్ట్ చేస్తుంది.",
      "వాట్సాప్, యూట్యూబ్, ఫేస్‌బుక్ వంటి యాప్‌లు రన్ చేయగలదు.",
      "ధర కేవలం రూ. 1,999 మాత్రమే కావడం విశేషం.",
    ],
  },
  {
    id: 5,
    title: "కరోనా వ్యాక్సిన్ అలర్ట్స్ రిజిస్ట్రేషన్",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "న్యూస్ రూమ్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "కరోనా వ్యాక్సిన్ కోసం కోవిన్ పోర్టల్‌లో రిజిస్టర్ చేసుకోవచ్చు.",
      "మొబైల్ నంబర్, ఆధార్ కార్డ్ వివరాలు అవసరం.",
      "రిజిస్ట్రేషన్ తర్వాత వ్యాక్సినేషన్ సెంటర్ మరియు స్లాట్ ఎంచుకోవచ్చు.",
      "వ్యాక్సిన్ తీసుకున్న తర్వాత సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోవచ్చు.",
    ],
  },
  {
    id: 6,
    title: "కరోనా వ్యాక్సిన్ కోసం ఆరోగ్యసేతు యాప్",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ఆరోగ్యసేతు యాప్ ద్వారా కూడా కోవిడ్ వ్యాక్సిన్ కోసం రిజిస్టర్ చేసుకోవచ్చు.",
      "యాప్‌లోని 'కో-విన్' ట్యాబ్ ద్వారా రిజిస్ట్రేషన్ ప్రక్రియ పూర్తి చేయాలి.",
      "సెల్ఫ్ అసెస్‌మెంట్ టెస్ట్ కూడా యాప్‌లో అందుబాటులో ఉంది.",
      "యాప్ బ్లూటూత్ ద్వారా కాంటాక్ట్ ట్రేసింగ్ కూడా చేస్తుంది.",
    ],
  },
  {
    id: 7,
    title: "మీ దగ్గర్లో వ్యాక్సిన్ సెంటర్",
    image:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "మీ సమీపంలోని వ్యాక్సినేషన్ సెంటర్‌ను సులభంగా కనుగొనవచ్చు.",
      "కోవిన్ పోర్టల్‌లో పిన్ కోడ్ ద్వారా సెర్చ్ చేయాలి.",
      "గూగుల్ మ్యాప్స్‌లో కూడా 'Vaccination Center Near Me' అని సెర్చ్ చేయవచ్చు.",
      "సెంటర్ టైమింగ్స్, వ్యాక్సిన్ స్టాక్ వివరాలు ఆన్‌లైన్‌లో చూడవచ్చు.",
    ],
  },
  {
    id: 8,
    title: "ఈ 5 ఫేక్ కోవిడ్ వ్యాక్సిన్ యాప్స్",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "న్యూస్ రూమ్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "కోవిడ్ వ్యాక్సిన్ పేరుతో చాలా ఫేక్ యాప్‌లు సర్క్యులేట్ అవుతున్నాయి.",
      "ఈ యాప్‌లు మీ వ్యక్తిగత డేటాను చోరీ చేస్తాయి.",
      "కోవిన్ మరియు ఆరోగ్యసేతు మాత్రమే ప్రభుత్వ అధికారిక యాప్‌లు.",
      "అనుమానాస్పద యాప్‌లు కనిపిస్తే వెంటనే సైబర్ క్రైమ్‌కు రిపోర్ట్ చేయాలి.",
    ],
  },
  {
    id: 9,
    title: "గూగుల్ క్రోమ్ బ్రౌజర్‌లో క్యాష్",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "గూగుల్ క్రోమ్ బ్రౌజర్‌లో క్యాష్ క్లియర్ చేయడం చాలా సులభం.",
      "సెట్టింగ్స్ → ప్రైవసీ → క్లియర్ బ్రౌజింగ్ డేటా ఆప్షన్ ఎంచుకోవాలి.",
      "క్యాష్ క్లియర్ చేయడం వల్ల బ్రౌజర్ స్పీడ్ మెరుగవుతుంది.",
      "ప్రతి 2-3 వారాలకు ఒకసారి క్యాష్ క్లియర్ చేయడం మంచి అలవాటు.",
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

export default function GoogleDetailPage() {
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
        <p>ID: {params.id} | Available IDs: 1-9</p>
        <button onClick={() => router.push("/news/Google")}>Go Back</button>
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

  // Mobile responsive styles - EXACTLY like Facebook page
  const containerPadding = isMobile ? "10px" : "20px";
  const sidebarWidth = isMobile ? "100%" : (isTablet ? "280px" : "220px");
  const centerPadding = isMobile ? "0 15px 25px" : "0 25px 25px";
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

        {/* CENTER CONTENT - EXACT Facebook style */}
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

          {/* Main Image */}
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

          {/* Previous / Next Buttons - EXACT Facebook style */}
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
            }}
          >
            {prevArticle ? (
              <button
                onClick={() =>
                  router.push(`/news/Google/${prevArticle.id}`)
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
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#7ac000";
                  e.target.style.color = "#fff";
                  e.target.style.border = "none";
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

            <span style={{ fontSize: isMobile ? "12px" : "13px", color: "#888" }}>
              {currentIndex} / {totalPosts}
            </span>

            {nextArticle ? (
              <button
                onClick={() =>
                  router.push(`/news/Google/${nextArticle.id}`)
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
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#7ac000";
                  e.target.style.color = "#fff";
                  e.target.style.border = "none";
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
                  router.push(`/news/Google/${related.id}`)
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
          flexShrink: 0,
          order: isMobile ? 2 : 0
        }}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}