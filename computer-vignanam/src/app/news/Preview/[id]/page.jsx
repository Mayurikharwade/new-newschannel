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

const posts = [
  {
    id: 165,
    title: "ఎమిటి ట్విట్టర్ స్పేసెస్?",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ట్విట్టర్ స్పేసెస్ ఇప్పుడు చాలా ప్రాచుర్యం పొందుతున్నాయి. ఇది వాయిస్ ఆధారిత చాట్ రూమ్ లాంటి ఫీచర్.",
      "ట్విట్టర్ స్పేసెస్ ద్వారా మీరు మీ ఫాలోవర్లతో ప్రత్యక్ష సంభాషణ చేయవచ్చు.",
      "స్పేసెస్ ను సృష్టించడానికి మీకు కనీసం 600 మంది ఫాలోవర్లు ఉండాలి.",
    ]
  },
  {
    id: 166,
    title: "సూళ్ల బస్సులో డీజిల్ ఆక్యుపేషన్ సమస్యయం.. ప్రయాణికులు కష్టాలు",
    image: "https://images.unsplash.com/photo-1564694202779-bc908c327862?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "బస్సు ప్రయాణంలో డీజిల్ ఆక్యుపేషన్ సమస్య ప్రయాణికులను ఇబ్బంది పెడుతుంది.",
      "ఈ సమస్య వల్ల ప్రయాణికులు ఊపిరి ఆడకపోవడం, తలనొప్పి వంటి ఆరోగ్య సమస్యలు ఎదుర్కొంటున్నారు.",
      "దీనికి పరిష్కారంగా విద్యుత్ బస్సులను ప్రవేశపెట్టాలని నిపుణులు సూచిస్తున్నారు.",
    ]
  },
  {
    id: 167,
    title: "బడ్జెట్ ధరలో సూపర్ ఫీచర్స్‌తో శాంసంగ్ గెలాక్సీ ఎం 12",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "శాంసంగ్ గెలాక్సీ ఎం 12 అద్భుతమైన ఫీచర్లతో తక్కువ ధరలో వచ్చింది.",
      "6.5 ఇంచ్ డిస్ప్లే, 48MP కెమెరా, 5000mAh బ్యాటరీ ఈ ఫోన్ ప్రత్యేకతలు.",
      "గేమింగ్ మరియు మల్టీ టాస్కింగ్ లో ఇది మంచి పనితీరు కనబరుస్తుంది.",
    ]
  },
  {
    id: 168,
    title: "అందమైన 12 కెమెరస్ ముందే బెస్ట్ ఫోన్లు?",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "కెమెరా ఫోన్లలో ఇప్పుడు పోటీ పెరిగింది. కొన్ని ఫోన్లలో 108MP కెమెరాలు కూడా వస్తున్నాయి.",
      "నైట్ మోడ్, అల్ట్రా వైడ్, మాక్రో వంటి ఫీచర్లు ఇప్పుడు ప్రామాణికంగా మారుతున్నాయి.",
      "సెల్ఫీ ప్రేమికులకు ఫ్రంట్ కెమెరా నాణ్యత కూడా మెరుగు పడింది.",
    ]
  },
  {
    id: 169,
    title: "2022 లో ఏమో కొత్త ఫోన్లు రానున్నాయా?",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "2022 లో ఫోల్డబుల్ ఫోన్లు విస్తృతంగా రానున్నాయి.",
      "5G సపోర్ట్ ఇప్పుడు ప్రామాణికంగా మారనుంది.",
      "బ్యాటరీ సాంకేతికతలో మెరుగుదలలు ఉంటాయి.",
    ]
  },
  {
    id: 170,
    title: "ఫ్లిప్ కార్ట్ లేటెస్ట్ ఆఫర్ రివ్యూస్",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
    category: "ప్రివ్యూ",
    time: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "ఫ్లిప్ కార్ట్ తాజా ఆఫర్లు కస్టమర్లను ఆకట్టుకుంటున్నాయి.",
      "బ్యాంక్ ఆఫర్లు, ఎక్స్‌చేంజ్ ఆఫర్లు అందుబాటులో ఉన్నాయి.",
      "సేల్ సమయంలో ప్రైమ్ విడియో సబ్స్క్రిప్షన్ కూడా ఫ్రీగా ఇస్తారు.",
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

export default function PreviewDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const id = parseInt(params.id);
  const article = posts.find(item => item.id === id);
  
  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>ID: {params.id} | Available: 165-170</p>
        <button onClick={() => router.push('/news/Preview')}>Go Back</button>
      </div>
    );
  }
  
  const relatedArticles = posts.filter(item => item.id !== id).slice(0, 4);
  const prevArticle = posts.find(item => item.id === id - 1);
  const nextArticle = posts.find(item => item.id === id + 1);
  const currentIndex = posts.findIndex(item => item.id === id) + 1;
  const totalPosts = posts.length;

  return (
    <div style={{ maxWidth: "1340px", width: "100%", margin: "0 auto", display: "flex", gap: "30px", alignItems: "flex-start", paddingTop: "15px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px", flexWrap: "wrap" }}>
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 25px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>
          {article.title}
        </h1>

        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <Image src={article.image} alt={article.title} width={800} height={380}
            style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }} unoptimized
            onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 0", fontSize: "13px", color: "#777", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
          <span>/</span><span>{article.time}</span><span>/</span>
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
            <button onClick={() => router.push(`/news/Preview/${prevArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              ← వెనక్కి
            </button>
          ) : <div />}
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          {nextArticle ? (
            <button onClick={() => router.push(`/news/Preview/${nextArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              మరిన్ని →
            </button>
          ) : <div />}
        </div>

        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>
          జన రంజకమైన వార్తలు
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} onClick={() => router.push(`/news/Preview/${related.id}`)}
              style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}>
              <Image src={related.image} alt={related.title} width={280} height={160}
                style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} unoptimized
                onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
              <h3 style={{ color: "#1a5cb0", fontSize: "14px", lineHeight: "1.4", marginTop: "10px", marginBottom: "10px", padding: "0 10px", fontWeight: "600" }}>
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