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

const DUMMY_IMAGE = "https://placehold.co/1200x800/1a5cb0/white?text=Computer+Vignanam";

const posts = [
  {
    id: 1,
    title: "పర్వే : అంతే ఏమిటి, ఎలా పనిచేస్తుంది",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "పర్వే అనేది మైక్రోసాఫ్ట్ యొక్క కొత్త టెక్నాలజీ. ఇది డేటా విశ్లేషణ మరియు ప్రాసెసింగ్ కోసం ఉపయోగపడుతుంది.",
      "పర్వే ద్వారా మీరు పెద్ద మొత్తంలో డేటాను త్వరగా విశ్లేషించవచ్చు.",
    ]
  },
  {
    id: 2,
    title: "ఫేక్ ఫోన్లను కనిపెట్టండి ఇలా",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "నకిలీ ఫోన్లను గుర్తించడం చాలా ముఖ్యం.",
      "IMEI నంబర్ ను చెక్ చేయడం ద్వారా మీరు నకిలీ ఫోన్లను గుర్తించవచ్చు.",
    ]
  },
  {
    id: 3,
    title: "ఆండ్రాయిడ్ 12 ఫీచర్స్ ముందే ఎలా చూడాలా ?",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ఆండ్రాయిడ్ 12 లో కొత్త ఫీచర్లను బీటా వెర్షన్ ద్వారా ముందుగానే టెస్ట్ చేసుకోవచ్చు.",
      "గూగుల్ వెబ్‌సైట్ ద్వారా మీరు ఆండ్రాయిడ్ 12 బీటాను డౌన్‌లోడ్ చేసుకోవచ్చు.",
    ]
  },
  {
    id: 4,
    title: "2022 లో కెమెరా ఫోన్స్ ఎలా ఉంటాయి ?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "2022 లో కెమెరా ఫోన్లు మరింత అడ్వాన్స్ గా ఉంటాయి.",
      "పెరిస్కోప్ జూమ్, నైట్ మోడ్ ప్రామాణికమవుతాయి.",
    ]
  },
  {
    id: 5,
    title: "విన్స్టన్ స్నోబ్లైండ్ మరచిపోయారు.. గమ్మత్తు విషయం!",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "విన్స్టన్ స్నోబ్లైండ్ ఒక ప్రసిద్ధ టెక్ నిపుణుడు.",
      "స్మార్ట్ ఫోన్లు భవిష్యత్తులో మరింత స్మార్ట్ గా మారతాయి.",
    ]
  },
  {
    id: 6,
    title: "ఎమిటి టిట్లర్ స్పెసల్?",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    category: "మైక్రో సాఫ్ట్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "టిట్లర్ స్పెసల్ అనేది ఒక ప్రత్యేక టెక్నాలజీ.",
      "ఈ టెక్నాలజీని మైక్రోసాఫ్ట్ అభివృద్ధి చేసింది.",
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

export default function MicrosoftDetailPage() {
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
        <button onClick={() => router.push('/news/Microsoft')}>Go Back</button>
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
              onError={(e) => { e.target.src = DUMMY_IMAGE; }}
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
              <FaFacebookF
                color="#1877f2"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() => shareOnSocial('facebook', article.title, currentUrl)}
              />
              <FaTwitter
                color="#1da1f2"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() => shareOnSocial('twitter', article.title, currentUrl)}
              />
              <FaWhatsapp
                color="#25d366"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() => shareOnSocial('whatsapp', article.title, currentUrl)}
              />
              <FaTelegramPlane
                color="#229ED9"
                size={isMobile ? 16 : 18}
                style={{ cursor: "pointer" }}
                onClick={() => shareOnSocial('telegram', article.title, currentUrl)}
              />
              <MdEmail
                color="#666"
                size={isMobile ? 18 : 20}
                style={{ cursor: "pointer" }}
                onClick={() => shareOnSocial('email', article.title, currentUrl)}
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
                onClick={() => router.push(`/news/Microsoft/${prevArticle.id}`)}
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
                e.currentTarget.style.border = "1px solid #7ac000";
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
                onClick={() => router.push(`/news/Microsoft/${nextArticle.id}`)}
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
  e.currentTarget.style.background = "#7ac000";
  e.currentTarget.style.color = "#fff";
  e.currentTarget.style.border = "1px solid #7ac000";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.background = "transparent";
  e.currentTarget.style.color = "#555";
  e.currentTarget.style.border = "1px solid #ccc";
}}
              >
                <span>మరిన్ని</span>
                <span>→</span>
              </button>
            ) : (
              <div style={{ width: isMobile ? "70px" : "85px" }} />
            )}
          </div>

          {/* Related Articles */}
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
                onClick={() => router.push(`/news/Microsoft/${related.id}`)}
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