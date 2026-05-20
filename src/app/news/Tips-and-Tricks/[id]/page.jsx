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
    id: 124,
    title:
      "అనవసరమైన వాట్సాప్ గ్రూప్‌లో ఇబ్బందికరంగా ఉండటానికి ట్రిక్ ఇదిగో..",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "WhatsApp గ్రూప్స్‌లో unwanted మెసేజెస్ నివారించడానికి కొన్ని సులభమైన ట్రిక్స్ ఉన్నాయి.",
      "ముందుగా గ్రూప్ సెట్టింగ్స్ లోకి వెళ్ళి మ్యూట్ నోటిఫికేషన్స్ ఆప్షన్ ఎంచుకోవాలి.",
      "గ్రూప్ ఇన్ఫో లో ఎగ్జిట్ గ్రూప్ ఆప్షన్ కూడా ఉపయోగించవచ్చు.",
      "లేదా గ్రూప్ అడ్మిన్‌కు డైరెక్ట్‌గా మెసేజ్ చేసి సమస్యను తెలియజేయవచ్చు.",
    ],
  },
  {
    id: 125,
    title:
      "మీ ఫోటోలో బ్యాక్‌గ్రౌండ్ బ్లర్ చేయడానికి ఈజీ ట్రిక్స్",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "ఫోటో బ్యాక్‌గ్రౌండ్ బ్లర్ చేయడానికి చాలా సులభమైన యాప్స్ అందుబాటులో ఉన్నాయి.",
      "Snapseed, PicsArt, Adobe Lightroom వంటి యాప్స్ ఉపయోగించవచ్చు.",
      "పోర్ట్రెయిట్ మోడ్‌లో తీసిన ఫోటోలకు ఆటోమేటిక్‌గా బ్యాక్‌గ్రౌండ్ బ్లర్ వస్తుంది.",
      "ఆన్‌లైన్‌లో remove.bg వంటి టూల్స్ కూడా ఉచితంగా ఉపయోగించవచ్చు.",
    ],
  },
  {
    id: 126,
    title:
      "మీ బేబీని లైవ్‌లో మానిటర్ చేసే స్మార్ట్ ట్రిక్స్",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "Smart baby monitoring కోసం అనేక యాప్స్ మరియు డివైసెస్ అందుబాటులో ఉన్నాయి.",
      "Baby Monitor 3G, Dormi, BabyCam వంటి యాప్స్ మీ పాత ఫోన్‌ను బేబీ మానిటర్‌గా మారుస్తాయి.",
      "WiFi కెమెరాలతో లైవ్ వీడియో స్ట్రీమింగ్ చూడవచ్చు.",
      "కొన్ని స్మార్ట్ డివైసెస్ బేబీ శ్వాస, టెంపరేచర్ కూడా ట్రాక్ చేస్తాయి.",
    ],
  },
  {
    id: 127,
    title:
      "వాట్సాప్ వెబ్ మెసేజెస్ బ్లర్ చేయడానికి సింపుల్ ట్రిక్",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "WhatsApp Web privacy కోసం blur extension చాలా ఉపయోగకరంగా ఉంటుంది.",
      "Chrome Web Store లో 'WA Web Plus' లేదా 'Privacy Extension for WhatsApp Web' సెర్చ్ చేయండి.",
      "ఎక్స్‌టెన్షన్ ఇన్‌స్టాల్ చేసిన తర్వాత మెసేజెస్ ఆటోమేటిక్‌గా బ్లర్ అవుతాయి.",
      "మీరు మెసేజ్ పై హోవర్ చేస్తేనే కనిపిస్తుంది, చుట్టూ ఉన్నవారు చూడలేరు.",
    ],
  },
  {
    id: 128,
    title:
      "PDF ఫైల్ సైజ్ తగ్గించడానికి సింపుల్ ట్రిక్స్",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "PDF size compress చేయడానికి చాలా online tools ఉచితంగా అందుబాటులో ఉన్నాయి.",
      "Smallpdf, iLovePDF, Adobe Acrobat Online వంటి వెబ్‌సైట్లు ఉపయోగించవచ్చు.",
      "PDF ఫైల్ అప్‌లోడ్ చేయగానే ఆటోమేటిక్‌గా కంప్రెస్ అవుతుంది.",
      "ఎటువంటి సాఫ్ట్‌వేర్ ఇన్‌స్టాల్ చేయాల్సిన అవసరం లేదు.",
    ],
  },
  {
    id: 129,
    title:
      "గూగుల్ మ్యాప్స్‌లో లోకేషన్ షేర్ చేయడానికి ఓ ట్రిక్",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
    category: "టిప్స్ అండ్ ట్రిక్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "Google Maps live location sharing చాలా సింపుల్ మరియు సేఫ్.",
      "Google Maps ఓపెన్ చేసి, మీ ప్రొఫైల్ పిక్చర్ పై క్లిక్ చేసి 'Location Sharing' ఎంచుకోవాలి.",
      "ఎవరితో షేర్ చేయాలో ఎంచుకుని, ఎంత సేపు షేర్ చేయాలో టైమర్ సెట్ చేయవచ్చు.",
      "షేర్ చేసిన వ్యక్తులు మీ రియల్ టైమ్ లోకేషన్ Google Maps లో చూడగలరు.",
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

export default function TipsAndTricksDetailPage() {
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
          ID: {params.id} | Available IDs: 124, 125, 126, 127, 128, 129
        </p>
        <button onClick={() => router.push("/news/Tips-and-Tricks")}>
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
                  router.push(`/news/Tips-and-Tricks/${prevArticle.id}`)
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
                  router.push(`/news/Tips-and-Tricks/${nextArticle.id}`)
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
                  router.push(`/news/Tips-and-Tricks/${related.id}`)
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