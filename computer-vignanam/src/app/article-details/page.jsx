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

const DUMMY_IMAGE = "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const allPosts = [
  {
    id: 1,
    title: "అమరావతి రాజధాని నిర్మాణంలో సాంకేతికత",
    image: "https://images.unsplash.com/photo-1598905242497-06b5ee5ee98d?w=800",
    category: "ఆంధ్ర ప్రదేశ్",
    date: "1 రోజు క్రితం",
    fullContent: [
      "అమరావతి రాజధాని నిర్మాణంలో ఆధునిక సాంకేతికతను విస్తృతంగా ఉపయోగిస్తున్నారు. డ్రోన్ సర్వేలు, 3D మ్యాపింగ్, GIS టెక్నాలజీతో నిర్మాణ పనులు శరవేగంగా జరుగుతున్నాయి.",
      "స్మార్ట్ సిటీ కాన్సెప్ట్‌తో అన్ని మౌలిక సదుపాయాలు డిజిటల్‌గా అనుసంధానం చేయబడుతున్నాయి. భవిష్యత్తులో ఇది దేశంలోనే అత్యంత ఆధునిక రాజధానిగా నిలుస్తుందని నిపుణులు అభిప్రాయపడుతున్నారు.",
      "ఈ ప్రాజెక్ట్‌లో భాగంగా స్మార్ట్ రోడ్లు, ఇంటిగ్రేటెడ్ ట్రాఫిక్ మేనేజ్‌మెంట్ సిస్టమ్, సోలార్ విద్యుత్ వ్యవస్థ, మరియు హై-స్పీడ్ ఇంటర్నెట్ కనెక్టివిటీ వంటి సౌకర్యాలు ఏర్పాటు చేయబడుతున్నాయి.",
      "ప్రభుత్వం ఈ ప్రాజెక్ట్ కోసం రూ. 50,000 కోట్లకు పైగా నిధులు కేటాయించింది. అంతర్జాతీయ సంస్థలు కూడా ఈ ప్రాజెక్ట్‌లో పెట్టుబడులు పెట్టడానికి ఆసక్తి చూపుతున్నాయి."
    ]
  },
  {
    id: 2,
    title: "విశాఖపట్నం ఐటీ హబ్‌గా అభివృద్ధి",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    category: "ఆంధ్ర ప్రదేశ్",
    date: "2 రోజుల క్రితం",
    fullContent: [
      "విశాఖపట్నం సిటీ ఐటీ హబ్‌గా వేగంగా అభివృద్ధి చెందుతోంది. TCS, Wipro, Infosys వంటి పెద్ద కంపెనీలు ఇక్కడ క్యాంపస్‌లు ఏర్పాటు చేశాయి.",
      "రాష్ట్ర ప్రభుత్వం ఐటీ పాలసీతో మరిన్ని కంపెనీలను ఆకర్షిస్తోంది. విశాఖ ఐటీ సెజ్‌లో 50,000+ ఉద్యోగాలు లభించే అవకాశం ఉంది.",
      "మధురవాడ, రుషికొండ ప్రాంతాల్లో కొత్త ఐటీ పార్కులు నిర్మించబడుతున్నాయి. ఇవి పూర్తయితే మరో 1 లక్ష మందికి ఉద్యోగ అవకాశాలు లభిస్తాయి.",
      "విశాఖలో స్టార్టప్ ఎకోసిస్టమ్ కూడా వేగంగా అభివృద్ధి చెందుతోంది. ప్రభుత్వం స్టార్టప్‌లకు ప్రత్యేక ప్రోత్సాహకాలు అందిస్తోంది."
    ]
  },
  {
    id: 3,
    title: "తిరుపతి స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800",
    category: "ఆంధ్ర ప్రదేశ్",
    date: "3 రోజుల క్రితం",
    fullContent: [
      "తిరుపతి స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు శరవేగంగా జరుగుతున్నాయి. స్మార్ట్ రోడ్లు, WiFi జోన్‌లు, సీసీటీవీ నెట్‌వర్క్ ఏర్పాటు చేయబడుతున్నాయి.",
      "ప్రాజెక్ట్ పూర్తయితే తిరుపతి దక్షిణ భారతదేశంలోనే మోడల్ స్మార్ట్ సిటీగా నిలుస్తుంది. పార్కింగ్ మేనేజ్‌మెంట్, ట్రాఫిక్ కంట్రోల్ పూర్తిగా డిజిటలైజ్ చేయనున్నారు.",
      "తిరుపతి స్మార్ట్ సిటీలో భాగంగా 24/7 వాటర్ సప్లై, అండర్‌గ్రౌండ్ డ్రైనేజీ సిస్టమ్, మరియు సోలార్ స్ట్రీట్ లైట్లు ఏర్పాటు చేయబడుతున్నాయి.",
      "ఈ ప్రాజెక్ట్ ద్వారా తిరుపతి నగరం పర్యాటకులకు మరింత ఆకర్షణీయంగా మారనుంది. నగరంలోని ప్రధాన దేవాలయాల చుట్టూ ప్రత్యేక సౌకర్యాలు కూడా ఏర్పాటు చేయనున్నారు."
    ]
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

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const id = parseInt(params.id);
  const article = allPosts.find((item) => item.id === id);

  if (!article) {
    return (
      <div style={{ maxWidth: "1340px", margin: "0 auto", display: "flex", gap: "30px", padding: "15px 20px 40px", flexWrap: "wrap" }}>
        <div style={{ width: "220px", flexShrink: 0 }}><LeftSidebar /></div>
        <div style={{ flex: 1, textAlign: "center", padding: "50px", background: "#fff" }}>
          <h2>Article not found!</h2>
          <p>ID: {params.id}</p>
          <button onClick={() => router.push("/")}>Go Home</button>
        </div>
        <div style={{ width: "300px", flexShrink: 0 }}><RightSidebar /></div>
      </div>
    );
  }

  const relatedArticles = allPosts.filter((item) => item.id !== id).slice(0, 4);
  const prevArticle = allPosts.find((item) => item.id === id - 1);
  const nextArticle = allPosts.find((item) => item.id === id + 1);
  const currentIndex = allPosts.findIndex((item) => item.id === id) + 1;
  const totalPosts = allPosts.length;

  return (
    <div style={{ maxWidth: "1340px", width: "100%", margin: "0 auto", display: "flex", gap: "30px", alignItems: "flex-start", paddingTop: "15px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px", flexWrap: "wrap" }}>
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}><LeftSidebar /></div>
      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 25px 25px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>{article.title}</h1>
        
        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={380}
            style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            unoptimized
            onError={(e) => { e.target.src = DUMMY_IMAGE; }}
          />
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 0", fontSize: "13px", color: "#777", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
          <span>/</span>
          <span>📅 {article.date}</span>
          <span>/</span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <FaFacebookF color="#1877f2" size={18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('facebook', article.title, currentUrl)} />
            <FaTwitter color="#1da1f2" size={18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('twitter', article.title, currentUrl)} />
            <FaWhatsapp color="#25d366" size={18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('whatsapp', article.title, currentUrl)} />
            <FaTelegramPlane color="#229ED9" size={18} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('telegram', article.title, currentUrl)} />
            <MdEmail color="#666" size={20} style={{ cursor: "pointer" }} onClick={() => shareOnSocial('email', article.title, currentUrl)} />
          </div>
        </div>
        
        <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", padding: "15px 0" }}>
          {article.fullContent.map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: "15px" }}>{paragraph}</p>
          ))}
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0", padding: "15px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          {prevArticle ? (
            <button onClick={() => router.push(`/article/${prevArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>← వెనక్కి</button>
          ) : <div style={{ width: "80px" }} />}
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          {nextArticle ? (
            <button onClick={() => router.push(`/article/${nextArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>మరిన్ని →</button>
          ) : <div style={{ width: "80px" }} />}
        </div>
        
        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>జన రంజకమైన వార్తలు</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/article/${related.id}`)}>
              <Image src={related.image} alt={related.title} width={280} height={160}
                style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} unoptimized
                onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
              <h3 style={{ color: "#1a5cb0", fontSize: "14px", lineHeight: "1.4", marginTop: "10px", marginBottom: "10px", padding: "0 10px", fontWeight: "600" }}>{related.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "300px", minWidth: "260px", flexShrink: 0 }}><RightSidebar /></div>
    </div>
  );
}