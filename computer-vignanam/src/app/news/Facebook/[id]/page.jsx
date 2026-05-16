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
    title: "ఫేస్బుక్ ప్రైవసీ సెట్టింగ్స్ ఎలా మార్చాలి?",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "ఫేస్బుక్ అకౌంట్ ప్రైవసీ సెట్టింగ్స్ సులభంగా ఎలా మార్చుకోవాలో తెలుసుకోండి.",
      "ముందుగా ఫేస్బుక్ ఓపెన్ చేసి, సెట్టింగ్స్ & ప్రైవసీ ఆప్షన్ పై క్లిక్ చేయాలి.",
      "ప్రైవసీ సెట్టింగ్స్ లో మీ పోస్ట్ లను ఎవరు చూడగలరు అనే ఆప్షన్ ఎంచుకోవచ్చు.",
      "పబ్లిక్, ఫ్రెండ్స్, ఓన్లీ మీ వంటి ఆప్షన్లు అందుబాటులో ఉంటాయి.",
    ],
  },
  {
    id: 2,
    title: "ఫేస్బుక్ మార్కెట్ప్లేస్ ఉపయోగాలు",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ఫేస్బుక్ మార్కెట్ప్లేస్ ద్వారా వస్తువులు కొనడం మరియు అమ్మడం చాలా సులభం.",
      "మీ స్థానిక ప్రాంతంలో కొనుగోలుదారులు మరియు అమ్మకందారులతో కనెక్ట్ అవ్వవచ్చు.",
      "ఫోటోలు అప్‌లోడ్ చేసి, ధర నిర్ణయించి, వివరాలు జోడించి లిస్టింగ్ క్రియేట్ చేయవచ్చు.",
      "మెసెంజర్ ద్వారా కొనుగోలుదారులతో నేరుగా సంప్రదింపులు జరపవచ్చు.",
    ],
  },
  {
    id: 3,
    title: "ఫేస్బుక్ గ్రూప్స్ క్రియేట్ చేయడం",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "3 సంవత్సరాల క్రితం",
    fullContent: [
      "ఫేస్బుక్ గ్రూప్స్ ద్వారా కమ్యూనిటీని ఎలా బిల్డ్ చేయాలో తెలుసుకోండి.",
      "గ్రూప్స్ ట్యాబ్ పై క్లిక్ చేసి, క్రియేట్ న్యూ గ్రూప్ ఆప్షన్ ఎంచుకోవాలి.",
      "గ్రూప్ పేరు, ప్రైవసీ సెట్టింగ్ (పబ్లిక్/ప్రైవేట్) ఎంచుకుని క్రియేట్ చేయండి.",
      "మెంబర్లను ఇన్వైట్ చేసి, పోస్ట్లు షేర్ చేస్తూ యాక్టివ్ గ్రూప్ నిర్వహించవచ్చు.",
    ],
  },
  {
    id: 4,
    title: "ఫేస్బుక్ పేజీ వెరిఫికేషన్ ప్రాసెస్",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "2 సంవత్సరాల క్రితం",
    fullContent: [
      "ఫేస్బుక్ పేజీని వెరిఫై చేయించుకోవడం ద్వారా బ్లూ టిక్ పొందవచ్చు.",
      "సెట్టింగ్స్ → జనరల్ → పేజీ వెరిఫికేషన్ లో అప్లై చేయాలి.",
      "బిజినెస్ డాక్యుమెంట్లు, ఫోన్ నంబర్ వెరిఫికేషన్ అవసరం.",
      "వెరిఫైడ్ పేజీకి ఎక్కువ క్రెడిబిలిటీ మరియు రీచ్ లభిస్తుంది.",
    ],
  },
  {
    id: 5,
    title: "ఫేస్బుక్ మెసెంజర్ సీక్రెట్ కన్వర్సేషన్",
    image:
      "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "1 సంవత్సరం క్రితం",
    fullContent: [
      "మెసెంజర్ లో సీక్రెట్ కన్వర్సేషన్ ఫీచర్ ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్ అందిస్తుంది.",
      "చాట్ తెరిచి, వ్యక్తి పేరు పై క్లిక్ చేసి 'గో టు సీక్రెట్ కన్వర్సేషన్' ఎంచుకోవాలి.",
      "మెసేజ్ లు స్వయంగా డిలీట్ అయ్యే టైమర్ సెట్ చేయవచ్చు.",
      "స్క్రీన్ షాట్ నోటిఫికేషన్లు కూడా వస్తాయి.",
    ],
  },
  {
    id: 6,
    title: "ఫేస్బుక్ అడ్వర్టైజింగ్ బిగినర్స్ గైడ్",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
    category: "పేస్ బుక్",
    time: "6 నెలల క్రితం",
    fullContent: [
      "ఫేస్బుక్ యాడ్స్ ద్వారా మీ బిజినెస్ ను ప్రమోట్ చేసుకోవచ్చు.",
      "యాడ్స్ మేనేజర్ లో క్యాంపెయిన్ క్రియేట్ చేసి, ఆబ్జెక్టివ్ ఎంచుకోవాలి.",
      "టార్గెట్ ఆడియన్స్, బడ్జెట్, యాడ్ క్రియేటివ్ సెట్ చేసి లాంచ్ చేయండి.",
      "రిజల్ట్స్ ట్రాక్ చేస్తూ యాడ్స్ ఆప్టిమైజ్ చేయవచ్చు.",
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

export default function FacebookDetailPage() {
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
          ID: {params.id} | Available IDs: 1, 2, 3, 4, 5, 6
        </p>
        <button onClick={() => router.push("/news/Facebook")}>
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
  const centerPadding = isMobile ? "0 15px 25px" : "0 25px 25px";
  const titleFontSize = isMobile ? "22px" : "28px";
  const contentFontSize = isMobile ? "14px" : "16px";
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
          width: isMobile ? "100%" : (isTablet ? "280px" : "220px"),
          flexShrink: 0
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

          {/* Main Image - Fixed size like Google page */}
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
                height: isMobile ? "220px" : "380px",
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

          {/* Previous / Next Buttons - Fixed like Google page */}
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
                  router.push(`/news/Facebook/${prevArticle.id}`)
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
                  router.push(`/news/Facebook/${nextArticle.id}`)
                }
               style={{
  padding: isMobile ? "8px 12px" : "8px 16px",
  background: "transparent",
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
                onClick={() =>
                  router.push(`/news/Facebook/${related.id}`)
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
          flexShrink: 0
        }}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}