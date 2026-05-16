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
    id: 83,
    title:
      "వాట్సాప్ ప్రైవసీ పాలసీపై కొత్తతెల్లి ప్రభుత్వం.. ఏం జరగబోతోంది?",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    category: "వార్తా విశ్లేషణ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "వాట్సాప్ కొత్త ప్రైవసీ పాలసీ కారణంగా కేంద్ర ప్రభుత్వం కీలక నిర్ణయాలు తీసుకునే అవకాశం ఉంది.",
      "కొత్త పాలసీ ప్రకారం వాట్సాప్ యూజర్ల డేటాను ఫేస్‌బుక్‌తో షేర్ చేస్తుంది.",
      "ఈ నిర్ణయంపై భారత ప్రభుత్వం కఠినంగా స్పందించి, వాట్సాప్‌కు నోటీసు పంపింది.",
      "యూజర్ల ప్రైవసీ కోసం ప్రభుత్వం కొత్త చట్టాలు తీసుకురావచ్చని నిపుణులు భావిస్తున్నారు.",
    ],
  },
  {
    id: 84,
    title:
      "కోవిడ్ రోగుల వారి కుటుంబ సభ్యులతో మాట్లాడించే వీల రోబోట్",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "కరోనా బాధితులకు సహాయం చేసేందుకు ప్రత్యేక రోబోట్‌ను ఆసుపత్రుల్లో వినియోగిస్తున్నారు.",
      "ఈ రోబోట్ ద్వారా కోవిడ్ రోగులు తమ కుటుంబ సభ్యులతో వీడియో కాల్ ద్వారా మాట్లాడవచ్చు.",
      "డాక్టర్లు కూడా రోగులను రిమోట్‌గా పరీక్షించడానికి ఈ రోబోట్ ఉపయోగపడుతుంది.",
      "భారతదేశంలోని పలు ఆసుపత్రుల్లో ఈ టెక్నాలజీని అందుబాటులోకి తెచ్చారు.",
    ],
  },
  {
    id: 85,
    title:
      "డెబిట్ కార్డ్ మోసాలు ఇంటర్నెట్ మోసాల కంటే.. ఎలా పని చేస్తుంది?",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "డిజిటల్ పేమెంట్స్ పెరుగుతున్న నేపథ్యంలో డెబిట్ కార్డ్ మోసాలు కూడా ఎక్కువవుతున్నాయి.",
      "స్కిమ్మింగ్ డివైస్‌ల ద్వారా ఏటీఎంలలో డేటా చోరీ చేస్తున్నారు.",
      "ఫిషింగ్ కాల్స్ మరియు ఫేక్ SMSల ద్వారా OTPలు తెలుసుకుంటున్నారు.",
      "బ్యాంకులు మరియు RBI ఈ మోసాలపై ప్రజలను అప్రమత్తం చేస్తున్నాయి.",
    ],
  },
  {
    id: 86,
    title:
      "శాంసంగ్ 4జీ స్మార్ట్ వాచ్ విడుదల.. ఫీచర్స్ ఏంటంటే",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    category: "కొత్త ఉత్పత్తులు",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "శాంసంగ్ ఇండియాలో సరికొత్త 4జీ స్మార్ట్ వాచ్ విడుదల చేసింది.",
      "ఈ వాచ్‌లో 1.4 అంగుళాల AMOLED డిస్ప్లే, హార్ట్ రేట్ మానిటర్ ఉన్నాయి.",
      "eSIM సపోర్ట్ ఉన్నందున ఫోన్ లేకుండానే కాల్స్ చేయవచ్చు.",
      "వాటర్ రెసిస్టెంట్ మరియు 7 రోజుల బ్యాటరీ లైఫ్ ప్రత్యేకతలు.",
    ],
  },
  {
    id: 87,
    title:
      "వర్క్ ఫ్రం హోమ్ చేసేవారికి BSNL బంపర్ ఆఫర్",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "ఉపాధి",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "ఇంటినుంచి పని చేసేవారి కోసం BSNL కొత్త డేటా ఆఫర్లు అందుబాటులోకి తెచ్చింది.",
      "రోజుకు 5GB డేటాతో పాటు అన్‌లిమిటెడ్ కాలింగ్ సౌకర్యం.",
      "ఈ ప్లాన్ ధర కేవలం రూ. 199 మాత్రమే.",
      "దేశవ్యాప్తంగా అన్ని సర్కిల్స్‌లో ఈ ఆఫర్ వర్తిస్తుంది.",
    ],
  },
  {
    id: 88,
    title:
      "వరల్డ్ యంగెస్ట్ గేమ్ డెవలపర్ ఎవరో తెలుసా?",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    category: "సాంకేతికం",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "చిన్న వయసులోనే గేమ్ డెవలపర్‌గా ప్రపంచ గుర్తింపు పొందిన బాలిక కథ.",
      "కేవలం 8 సంవత్సరాల వయసులోనే ఆమె తొలి గేమ్ డెవలప్ చేసింది.",
      "గిన్నిస్ బుక్ ఆఫ్ వరల్డ్ రికార్డ్స్‌లో స్థానం సంపాదించింది.",
      "భారతదేశంలోని యువ ప్రతిభకు ఇది గొప్ప ఉదాహరణ.",
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

export default function IITDelhiDetailPage() {
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
          ID: {params.id} | Available IDs: 83, 84, 85, 86, 87, 88
        </p>
        <button onClick={() => router.push("/news/IIT-Delhi")}>
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

          {/* Previous / Next Buttons - STANDARD STYLE */}
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
                  router.push(`/news/IIT-Delhi/${prevArticle.id}`)
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
                  router.push(`/news/IIT-Delhi/${nextArticle.id}`)
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
                  router.push(`/news/IIT-Delhi/${related.id}`)
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