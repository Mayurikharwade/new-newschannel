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
    id: 1,
    title:
      "మీ వాచ్ మీ పర్సే.. టోలి కాంటాక్ట్‌లెస్ పేమెంట్ వాచ్ టైటన్ పే",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1607666937_titan-pay-watch.jpg",
    category: "కొత్త ఉత్పత్తులు",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "టైటన్ కంపెనీ విడుదల చేసిన కొత్త స్మార్ట్ వాచ్ ఇప్పుడు కాంటాక్ట్‌లెస్ పేమెంట్స్ సపోర్ట్ చేస్తోంది.",
      "ఈ వాచ్ ద్వారా మీరు మీ బ్యాంక్ ఖాతా లింక్ చేసి టచ్‌లెస్ పేమెంట్స్ చేయవచ్చు.",
      "ఇది NFS టెక్నాలజీపై ఆధారపడి పనిచేస్తుంది.",
      "టైటన్ పే వాచ్ వల్ల కార్డ్‌లు, ఫోన్ క్యారీ చేయాల్సిన అవసరం ఉండదు.",
    ],
  },
  {
    id: 2,
    title: "లావా Z61 ప్రో.. బడ్జెట్ ధరలో మేడ్ ఇన్ ఇండియా స్మార్ట్‌ఫోన్",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1607671801_lava-z61-pro.jpg",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "బడ్జెట్ ధరలో లావా కంపెనీ తీసుకొచ్చిన ఈ ఫోన్ మంచి ఫీచర్లతో ఆకట్టుకుంటోంది.",
      "5.45-అంగుళాల HD+ డిస్ప్లే, 1.4 GHz ఆక్టా-కోర్ ప్రాసెసర్ వంటి విశేషాలు.",
      "3100 mAh బ్యాటరీ, 2 GB RAM, 16 GB స్టోరేజీతో వస్తుంది.",
      "మేడ్ ఇన్ ఇండియా కావడం విశేషం.",
    ],
  },
  {
    id: 3,
    title: "ప్రివ్యూ - ఆలివ్‌పామ్ రైతుల కోసం 3F ఆయిల్ పామ్ యాప్",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1607674417_3f-oil-palm.jpg",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "రైతులకు ఉపయోగపడే కొత్త మొబైల్ యాప్ గురించి పూర్తి వివరాలు.",
      "ఈ యాప్ ఆయిల్ పామ్ సాగులో అన్ని దశల్లో రైతులకు మార్గదర్శనం చేస్తుంది.",
      "మార్కెట్ ధరలు, వాతావరణ సూచన, పంట సలహాలు యాప్‌లో అందుబాటులో ఉంటాయి.",
      "ఉచితంగా డౌన్‌లోడ్ చేసుకోవచ్చు.",
    ],
  },
  {
    id: 4,
    title:
      "కరోనా కాలంలో భారతీయులు ఫోన్లతో ఎలా గడుపుతున్నారు.. ఒక విశ్లేషణ",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1606724417_kids-mobile.jpg",
    category: "వార్తా విశ్లేషణ",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "కరోనా సమయంలో మొబైల్ వినియోగం ఎలా పెరిగిందో ఈ కథనం చెబుతోంది.",
      "లాక్‌డౌన్ కాలంలో ఆన్‌లైన్ క్లాసులు, వర్క్ ఫ్రం హోమ్ పెరగడంతో స్క్రీన్ టైమ్ బాగా పెరిగింది.",
      "సోషల్ మీడియా, ఓటీటీ ప్లాట్‌ఫామ్‌ల వాడకం రికార్డు స్థాయికి చేరింది.",
      "పిల్లల్లో మొబైల్ వ్యసనం గురించి నిపుణులు ఆందోళన వ్యక్తం చేశారు.",
    ],
  },
  {
    id: 5,
    title: "కొత్త ఫోన్లు కొనాలనుకుంటున్నారా? మీకోసం బెస్ట్ గైడ్",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599492692_vivo.jpg",
    category: "మార్గదర్శిని",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "కొత్త ఫోన్ కొనేముందు తప్పకుండా తెలుసుకోవాల్సిన విషయాలు.",
      "బడ్జెట్, ప్రాసెసర్, కెమెరా, బ్యాటరీ లాంటి ముఖ్యమైన ఫీచర్లను ఎలా ఎంచుకోవాలి.",
      "మీ అవసరాలకు తగిన ఫోన్ ఎంపిక చేసుకునే విధానం వివరించబడింది.",
      "వివిధ బ్రాండ్‌ల పోలిక, ధరల వివరాలు కూడా ఇవ్వబడ్డాయి.",
    ],
  },
  {
    id: 6,
    title: "తెలుగు రాష్ట్రాల్లో కొత్త బ్యాంకింగ్ సేవలు ప్రారంభం",
    image:
      "https://graphics.computervignanam.net/images/uploads/web/8/705300_1589192300_so.jpg",
    category: "ఆంధ్ర ప్రదేశ్",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "కొత్త బ్యాంకింగ్ సర్వీసులు ప్రజలకు ఎలా ఉపయోగపడతాయో తెలుసుకోండి.",
      "ఏపీ, తెలంగాణాలో డిజిటల్ బ్యాంకింగ్ సేవలు విస్తరిస్తున్నాయి.",
      "గ్రామీణ ప్రాంతాల్లో కూడా ఆన్‌లైన్ ట్రాన్సాక్షన్లు పెరిగాయి.",
      "కొత్త బ్యాంకింగ్ కియోస్క్‌లు, మొబైల్ వాన్‌లు ప్రారంభించబడ్డాయి.",
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

export default function TechNewsDetailPage() {
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
          ID: {params.id} | Available IDs: 1,2,3,4,5,6
        </p>
        <button onClick={() => router.push("/news/IIT-Karagpur")}>
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

        {/* Previous / Next Buttons */}
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
                router.push(`/news/IIT-Karagpur/${prevArticle.id}`)
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
                router.push(`/news/IIT-Karagpur/${nextArticle.id}`)
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
                router.push(`/news/IIT-Karagpur/${related.id}`)
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