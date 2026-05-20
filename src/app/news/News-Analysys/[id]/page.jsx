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

// Same data as listing page
const cards = [
  {
    id: 0,
    title: "జియోఫోన్ మాదిరిగానే జియోఫోన్ నెక్స్ట్ కూడా సూపర్ హిట్టవుద్దా? ఓ విశ్లేషణ",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626337064_Is-JioPhone-Next-will-be-a-big-hit-as-its-predecessor.jpg",
    desc: "జియోఫోన్ నెక్స్ట్ గురించి పూర్తి విశ్లేషణ.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "జియో ఫోన్ మొబైల్ నెట్వర్క్స్ కంపెనీ రిలయన్స్ జియో తన వినియోగదారుల కోసం తయారుచేసిన ఫీచర్ ఫోన్.",
      "జియోఫోన్ నెక్స్ట్ అనేది కొత్త జనరేషన్ ఫీచర్ ఫోన్.",
      "ఇందులో 4G సపోర్ట్, వాట్సాప్, యూట్యూబ్ ప్రీ-ఇన్స్టాల్ చేయబడి ఉంటాయి."
    ]
  },
  {
    id: 1,
    title: "వాట్సాప్ ప్రైవసీ పాలసీపై కోర్టుకెళ్లిన ప్రభుత్వం.. ఏం జరుగుతోంది?",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1616659942_whatsapp-hc.jpg",
    desc: "వాట్సాప్ ప్రైవసీ పాలసీపై పూర్తి వివరాలు.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "వాట్సాప్ కొత్త ప్రైవసీ పాలసీ వినియోగదారుల డేటాను ఫేస్బుక్తో షేర్ చేసుకునేలా ఉంది.",
      "దీంతో ప్రభుత్వం వెంటనే స్పందించి ఈ విషయాన్ని కోర్టుకు తీసుకెళ్లింది.",
      "ప్రస్తుతం కేసు విచారణలో ఉంది."
    ]
  },
  {
    id: 2,
    title: "2022 నాటికి ఇండియాలో 5జీ సేవలు వస్తాయంటున్న ప్రభుత్వం..",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1612880014_5G-Services-roll-out-in-india-in-starting-of-2020..-Govt.-tells-parliament.jpeg",
    desc: "2022 నాటికి 5జీ సేవలు ప్రారంభం.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "5G సేవలు దేశంలో విప్లవాత్మకమైన మార్పులు తీసుకురానున్నాయి.",
      "చాలా వేగంగా డౌన్లోడ్, అప్లోడ్ స్పీడ్ లభిస్తుంది.",
      "2022 నాటికి ప్రముఖ నగరాల్లో 5G సేవలు ప్రారంభం కానున్నాయి."
    ]
  },
  {
    id: 3,
    title: "వాట్సాప్ తొందరపాటు.. సిగ్నల్ పంట పండించిందా",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/whastapp-Signal-app-raise-in-late-night.jpg",
    desc: "సిగ్నల్ యాప్ వైపు మొగ్గు.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "వాట్సాప్ ప్రైవసీ పాలసీ వల్ల చాలా మంది యూజర్లు సిగ్నల్ యాప్కు మారుతున్నారు.",
      "సిగ్నల్ యాప్ డౌన్లోడ్‌లు రికార్డు స్థాయిలో పెరిగాయి.",
      "వాట్సాప్ ఇప్పుడు తన ప్రైవసీ పాలసీని పునర్విచారణ చేస్తుంది."
    ]
  },
  {
    id: 4,
    title: "పేటీఎమ్‌కు ఏడో సంవత్సరమూ నష్టాలే",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1609308698_PayTm-losses-in-7th-consecutive-year..-what-is-the-resaon.jpg",
    desc: "పేటీఎమ్ వరుసగా ఏడో సంవత్సరం నష్టాలు.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "పేటీఎమ్ నిరంతర నష్టాలకు కారణం పెరుగుతున్న పోటీ.",
      "గూగుల్ పే, ఫోన్ పే లాంటి యాప్స్ మార్కెట్‌లో ఆధిపత్యం చూపుతున్నాయి."
    ]
  },
  {
    id: 5,
    title: "ఇన్ బ్రాండ్‌తో మైక్రోమ్యాక్స్ సెకండ్ ఇన్నింగ్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1604576448_Micromax-Micromax-re-entry-Micromax-smart-phones.jpeg",
    desc: "మైక్రోమ్యాక్స్ తిరిగి మార్కెట్‌లోకి.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "మైక్రోమ్యాక్స్ తిరిగి ఇండియన్ మార్కెట్‌లోకి ప్రవేశించింది.",
      "కొత్త ఫోన్లు గ్రేట్ ఫీచర్లతో తక్కువ ధరలో వస్తున్నాయి."
    ]
  }
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
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };
  
  window.open(shareUrls[platform], '_blank', 'width=600,height=400');
};

export default function NewsAnalysisDetailPage() {
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
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  let cleanId = params.id;
  if (cleanId && cleanId.includes('.cv')) {
    cleanId = cleanId.replace('.cv', '');
  }
  const id = parseInt(cleanId);
  const article = cards.find(item => item.id === id);
  
  // Get previous and next articles
  const currentIndex = cards.findIndex(item => item.id === id);
  const prevArticle = currentIndex > 0 ? cards[currentIndex - 1] : null;
  const nextArticle = currentIndex < cards.length - 1 ? cards[currentIndex + 1] : null;
  const totalPosts = cards.length;
  
  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>Article with ID: {params.id} does not exist</p>
        <button onClick={() => router.push('/news/News-Analysys')}>
          Go Back
        </button>
      </div>
    );
  }
  
  const relatedArticles = cards.filter(item => item.id !== id).slice(0, 4);

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
              height={450}
              style={{
                width: "100%",
                height: imageHeight,
                objectFit: "cover",
                display: "block",
              }}
              unoptimized
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
            <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
            <span>/</span>
            <span>{article.date}</span>
            <span>/</span>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <FaFacebookF color="#1877f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('facebook', article.title, currentUrl)} />
              <FaTwitter color="#1da1f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('twitter', article.title, currentUrl)} />
              <FaWhatsapp color="#25d366" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('whatsapp', article.title, currentUrl)} />
              <FaTelegramPlane color="#229ED9" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('telegram', article.title, currentUrl)} />
              <MdEmail color="#666" size={isMobile ? 18 : 20} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('email', article.title, currentUrl)} />
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
              <p key={idx} style={{ marginBottom: "15px" }}>{paragraph}</p>
            ))}
          </div>

          {/* Previous / Next Buttons - ADDED NOW */}
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
                onClick={() => router.push(`/news/News-Analysys/${prevArticle.id}`)}
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
              {currentIndex + 1} / {totalPosts}
            </span>

            {nextArticle ? (
              <button
                onClick={() => router.push(`/news/News-Analysys/${nextArticle.id}`)}
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
                onClick={() => router.push(`/news/News-Analysys/${related.id}`)}
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