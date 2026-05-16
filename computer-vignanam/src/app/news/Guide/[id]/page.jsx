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

const DUMMY_IMAGE = "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 166,
    title: "ఏమిటీ వాట్సాప్ వ్యూ వన్స్ ఫీచర్.. ఎలా వాడుకోవాలో చెప్పే గైడ్",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "మెసేజింగ్ రూపురేఖలు మార్చేసిన యాప్.. వాట్సాప్. చదువురానివారు కూడా మెసేజ్ చేయగలిగేలా దీనిలో ఉండే ఐకాన్స్, సింబల్స్, ఫోటో, వీడియో, ఆడియో సపోర్ట్ దీన్ని టాప్ ప్లేస్లో నిలబెట్టాయి.",
      "టెలిగ్రామ్ లాంటి ఇతర యాప్స్ వచ్చినా వాట్సాప్ క్రేజ్ ఏ మాత్రం తగ్గలేదు. ఎందుకంటే వాట్సాప్ సింపుల్, సేఫ్ మరియు ఫాస్ట్. ప్రతి నెలా 2 బిలియన్లకు పైగా యూజర్లు వాట్సాప్ ను వాడుతున్నారు.",
      "ఇప్పుడు వాట్సాప్ కొత్త ఫీచర్ తీసుకొచ్చింది - 'వ్యూ వన్స్'. ఈ ఫీచర్ ద్వారా మీరు పంపిన ఫోటో లేదా వీడియోను అవతలి వ్యక్తి ఒక్కసారి మాత్రమే చూడగలరు.",
      "ఈ ఫీచర్ ప్రైవసీ కోసం చాలా ఉపయోగకరమైనది. స్క్రీన్‌షాట్ తీయడం లేదా రీప్లే చేయడం సాధ్యం కాదు."
    ]
  },
  {
    id: 167,
    title: "మీ పాన్ కార్డ్ సొంతంగా మార్పులు చేసుకోవడానికి సింపుల్ గైడ్",
    image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "మనం ప్రస్తుతం ఎలాంటి ఫైనాన్షియల్ ట్రాన్సాక్షన్లు చేయాలన్నా, ఐటీ ఫైల్ చేయాలన్నా అన్నింటికీ పాన్ కార్డ్ తప్పనిసరి.",
      "పాన్ కార్డ్ లో పేరు, చిరునామా, జన్మ తేదీ లాంటి వివరాలు ఉంటాయి. కాలక్రమేణా ఈ వివరాల్లో మార్పులు రావచ్చు.",
      "NSDL లేదా UTIITSL వెబ్సైట్ ద్వారా ఆన్‌లైన్ లోనే మార్పులు చేసుకోవచ్చు.",
      "మీ ఆధార్ కార్డ్, రిజిస్టర్డ్ మొబైల్ నంబర్ ఉంటే కేవలం కొన్ని నిమిషాల్లో మార్పులు చేసుకోవచ్చు."
    ]
  },
  {
    id: 168,
    title: "ఏమిటీ ట్విటర్ వాయిస్ ట్వీట్స్.. ఎలా వాడుకోవాలో చెప్పే గైడ్ మీకోసం",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ట్విటర్ ఎప్పటికప్పుడు కొత్త కొత్త ఫీచర్లను తీసుకువస్తుంది. వాయిస్ ట్వీట్ చాలా ప్రత్యేకమైన ఫీచర్.",
      "ఇది మిమ్మల్ని మీ స్వంత గొంతుతో మీ ఆలోచనలను ప్రపంచంతో పంచుకోవడానికి అనుమతిస్తుంది.",
      "140 సెకన్ల వరకు ఆడియో రికార్డ్ చేసి ట్వీట్ చేయవచ్చు.",
      "ఈ ఫీచర్ ప్రస్తుతం iOS యూజర్లకు అందుబాటులో ఉంది, త్వరలో Android కి కూడా వస్తుంది."
    ]
  },
  {
    id: 169,
    title: "కరోనా టీకా వేయించడానికి కోవిన్ పోర్టల్ ద్వారా రిజిస్ట్రేషన్ చేసుకోవడానికి సింపుల్ గైడ్",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "కరోనా కాలంలో టీకా చాలా ముఖ్యమైనది.",
      "cowin.gov.in వెబ్సైట్ లేదా ఆరోగ్య సేతు యాప్ ద్వారా రిజిస్టర్ చేసుకోవచ్చు.",
      "మీ మొబైల్ నంబర్, ఆధార్ కార్డ్ తో నమోదు చేసుకోండి.",
      "టీకా వేసుకున్న తర్వాత, సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోవచ్చు."
    ]
  },
  {
    id: 170,
    title: "గూగుల్ క్రోమ్ బ్రౌజర్ క్యాష్‌ను సింపుల్‌గా రిమూవ్ చేయడానికి గైడ్",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "బ్రౌజర్ స్లోగా ఉంటే, క్యాష్ క్లియర్ చేయడం మంచిది.",
      "గూగుల్ క్రోమ్ లో క్యాష్ క్లియర్ చేయడం చాలా సింపుల్.",
      "కేవలం కొన్ని క్లిక్ లలో Chrome క్యాష్ క్లియర్ చేయండి.",
      "ప్రతి 2-3 వారాలకు ఒకసారి క్యాష్ క్లియర్ చేయడం మంచిది."
    ]
  },
  {
    id: 171,
    title: "ఏమిటీ బాల ఆధార్? ఎవరికి ఇస్తారు? ఎలా తీసుకోవాలో.. తెలుసుకోండి గైడ్ ఇక్కడ",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "మార్గదర్శిని ( గైడ్ )",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "బాల ఆధార్ - 5 సంవత్సరాల లోపు పిల్లలకు నీలి రంగు ఆధార్ కార్డ్.",
      "దీనిని 'బేబీ ఆధార్' అని కూడా అంటారు.",
      "బయోమెట్రిక్ వివరాలు ఉండవు (వేలిముద్రలు అభివృద్ధి చెందవు).",
      "స్కూల్ అడ్మిషన్, బ్యాంక్ ఖాతాకు ఉపయోగపడుతుంది."
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

export default function GuideDetailPage() {
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
  
  const article = posts.find(item => item.id === id);
  
  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>Article with ID: {params.id} does not exist</p>
        <button onClick={() => router.push('/news/Guide')}>
          Go Back
        </button>
      </div>
    );
  }
  
  const relatedArticles = posts.filter(item => item.id !== id).slice(0, 4);
  const prevArticle = posts.find(item => item.id === id - 1);
  const nextArticle = posts.find(item => item.id === id + 1);
  const currentIndex = posts.findIndex(item => item.id === id) + 1;
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
            <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
            <span>/</span>
            <span>{article.time}</span>
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
                onClick={() => router.push(`/news/Guide/${prevArticle.id}`)}
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
                onClick={() => router.push(`/news/Guide/${nextArticle.id}`)}
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
                onClick={() => router.push(`/news/Guide/${related.id}`)}
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