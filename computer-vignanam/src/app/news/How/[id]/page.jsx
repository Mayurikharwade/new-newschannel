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
    id: 125,
    title:
      "మీ దగ్గర్లో వ్యాక్సినేషన్ సెంటర్‌ని గూగుల్ మ్యాప్ ద్వారా తెలుసుకోవడం ఎలా ?",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "భారతదేశంలో COVID-19 కోసం వ్యాక్సిన్ కేంద్రాలను సులభంగా తెలుసుకోవచ్చు.",
      "గూగుల్ మ్యాప్స్ ఓపెన్ చేసి 'Vaccination Center Near Me' అని సెర్చ్ చేయండి.",
      "మీ లోకేషన్ ఆధారంగా దగ్గర్లోని వ్యాక్సినేషన్ సెంటర్లు మ్యాప్‌లో చూపిస్తుంది.",
      "సెంటర్ పేరు, టైమింగ్స్, అందుబాటులో ఉన్న వ్యాక్సిన్ల వివరాలు కూడా చూడవచ్చు.",
    ],
  },
  {
    id: 126,
    title:
      "వ్యాక్సిన్ అపాయింట్మెంట్ ని రీ షెడ్యూల్ చేసుకోవడం ఎలా ?",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "వ్యాక్సిన్ బుకింగ్ తేదీ మార్చుకోవడం చాలా సులభం.",
      "కోవిన్ పోర్టల్ లేదా ఆరోగ్యసేతు యాప్ లో లాగిన్ చేయండి.",
      "మీ అపాయింట్మెంట్ డిటైల్స్ లో 'Reschedule' ఆప్షన్ క్లిక్ చేయండి.",
      "కొత్త తేదీ మరియు సమయం ఎంచుకుని కన్ఫర్మ్ చేయండి.",
    ],
  },
  {
    id: 127,
    title:
      "కోవిడ్ వ్యాక్సిన్ సర్టిఫికేట్ డౌన్‌లోడ్ చేయడం ఎలా ?",
    image:
      "https://images.unsplash.com/photo-1618961734760-466979ce35b0?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "కోవిడ్ వ్యాక్సిన్ సర్టిఫికేట్ ను చాలా సులభంగా డౌన్‌లోడ్ చేసుకోవచ్చు.",
      "కోవిన్ పోర్టల్ లేదా DigiLocker యాప్ ఓపెన్ చేయండి.",
      "మీ రిజిస్టర్డ్ మొబైల్ నంబర్ తో లాగిన్ చేసి Certificate ట్యాబ్ పై క్లిక్ చేయండి.",
      "PDF ఫార్మాట్‌లో సర్టిఫికేట్ డౌన్‌లోడ్ చేసుకోవచ్చు.",
    ],
  },
  {
    id: 128,
    title:
      "అమెజాన్ యూత్ ఆఫర్ 499పై ప్రైమ్ సబ్‌స్క్రిప్షన్ పొందడం ఎలా?",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "Amazon Prime Youth Offer కేవలం రూ. 499 లో అందుబాటులో ఉంది.",
      "18-24 సంవత్సరాల మధ్య వయస్సు ఉన్నవారు ఈ ఆఫర్‌కు అర్హులు.",
      "Amazon App లో 'Prime' సెక్షన్ కి వెళ్ళి Youth Offer ఎంచుకోండి.",
      "వెరిఫికేషన్ కోసం age proof document అప్‌లోడ్ చేయాలి.",
    ],
  },
  {
    id: 129,
    title:
      "వాట్సాప్ వీడియో కాల్స్ చేసుకోవడం ఎలా?",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "WhatsApp వీడియో కాలింగ్ చాలా సింపుల్ మరియు ఫ్రీ.",
      "చాట్ ఓపెన్ చేసి, టాప్ రైట్ కార్నర్ లో ఉన్న వీడియో కెమెరా ఐకాన్ పై క్లిక్ చేయండి.",
      "గ్రూప్ వీడియో కాల్ కోసం గ్రూప్ చాట్ లో కూడా ఇదే విధానం.",
      "8 మంది వరకు ఒకేసారి వీడియో కాల్ లో పాల్గొనవచ్చు.",
    ],
  },
  {
    id: 130,
    title:
      "మీ గూగుల్ ఫోటోస్‌లో మెమరీ స్టోరేజ్ సేవ్ చేసుకోవడం ఎలా?",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "ఎలా?",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "Google Photos స్టోరేజ్ సేవ్ చేసుకోవడానికి కొన్ని టిప్స్.",
      "High Quality ఆప్షన్ ఎంచుకుంటే అన్‌లిమిటెడ్ స్టోరేజ్ (కంప్రెస్డ్) లభిస్తుంది.",
      "డూప్లికేట్ ఫోటోలు, బ్లర్ ఫోటోలు డిలీట్ చేయండి.",
      "Google One సబ్‌స్క్రిప్షన్ తీసుకుంటే ఎక్కువ స్టోరేజ్ పొందవచ్చు.",
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

export default function HowDetailPage() {
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
          ID: {params.id} | Available IDs: 125, 126, 127, 128, 129, 130
        </p>
        <button onClick={() => router.push("/news/How")}>
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
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

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
                router.push(`/news/How/${prevArticle.id}`)
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
                router.push(`/news/How/${nextArticle.id}`)
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
                router.push(`/news/How/${related.id}`)
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

      <div style={{ width: "300px", minWidth: "260px", flexShrink: 0 }}>
        <RightSidebar />
      </div>
    </div>
  );
}