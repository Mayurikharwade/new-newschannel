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
    id: 1,
    title: "కాగ్నిజెంట్ లో 23 వేల క్యాంపస్ రిక్రూట్మెంట్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1607671801_cognigent-hiring-freshers-IT-Employees.png",
    category: "సాంకేతిక ఉపాధి",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "కాగ్నిజెంట్ కంపెనీ భారీ స్థాయిలో ఫ్రెషర్స్ నియామకాలు చేపట్టింది. 23 వేల మందిని క్యాంపస్ ప్లేస్మెంట్స్ ద్వారా ఎంపిక చేసుకుంది.",
      "ఈ నియామకాల్లో ఇంజనీరింగ్ విద్యార్థులకు ప్రాధాన్యత ఇవ్వబడింది. కంపెనీ డిజిటల్ ట్రాన్స్ఫర్మేషన్ ప్రాజెక్ట్ల కోసం కొత్త ఉద్యోగులను తీసుకుంటోంది.",
      "కాగ్నిజెంట్ ప్రతి సంవత్సరం భారతదేశంలోని ప్రముఖ కళాశాలల నుండి విద్యార్థులను ఎంపిక చేస్తుంది.",
      "ఫ్రెషర్స్ కు సగటున రూ.4-6 లక్షల ప్యాకేజీ ఆఫర్ చేయబడుతుంది.",
    ]
  },
  {
    id: 2,
    title: "20వేల లోపు బెస్ట్ 8GB స్మార్ట్ ఫోన్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1606724417_Best-8-gb-Ram-Smart-Phones-under-20000-price-range.jpg",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "20 వేల రూపాయల లోపు 8GB RAM తో అద్భుతమైన స్మార్ట్ ఫోన్లు అందుబాటులో ఉన్నాయి.",
      "ఈ ధరలో Redmi, Realme, Samsung, Poco వంటి బ్రాండ్లు మంచి ఫోన్లను అందిస్తున్నాయి.",
      "8GB RAM వలన గేమింగ్, మల్టీ టాస్కింగ్ సులభంగా చేయవచ్చు.",
      "ప్రతి ఫోన్ కెమెరా, బ్యాటరీ, ప్రాసెసర్ ఆధారంగా ఎంపిక చేసుకోవాలి.",
    ]
  },
  {
    id: 3,
    title: "వైఫై కంటే 100 రెట్లు స్పీడైన లైఫై",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599497382_lifi1.jpg",
    category: "కొత్త ఉత్పత్తులు",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "లైఫై (LiFi) టెక్నాలజీ వైఫై కంటే 100 రెట్లు వేగంగా డేటా ట్రాన్స్ఫర్ చేయగలదు.",
      "ఇది కాంతి తరంగాల ద్వారా డేటా ట్రాన్స్మిషన్ చేస్తుంది, దీని వలన సెక్యూరిటీ కూడా ఎక్కువ.",
      "లైఫై టెక్నాలజీని ఆఫీసులు, హాస్పిటల్స్, ఎయిర్‌క్రాఫ్ట్‌లలో ఉపయోగించవచ్చు.",
      "భవిష్యత్తులో ఇది ఇంటర్నెట్ రంగంలో విప్లవాత్మక మార్పు తీసుకువస్తుంది.",
    ]
  },
  {
    id: 4,
    title: "బటన్ లేని ఫోన్లు వస్తున్నాయ్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599496182_bp-less.jpg",
    category: "టెక్ న్యూస్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "భవిష్యత్తులో పూర్తిగా బటన్లు లేని స్మార్ట్ఫోన్లు మార్కెట్లోకి రానున్నాయి.",
      "టచ్ స్క్రీన్, వాయిస్ కమాండ్, జెస్చర్ కంట్రోల్ ద్వారా పూర్తిగా నియంత్రించవచ్చు.",
      "యాపిల్, శాంసంగ్, షియోమీ వంటి కంపెనీలు ఈ టెక్నాలజీపై పనిచేస్తున్నాయి.",
      "ఈ ఫోన్లు మరింత స్లిమ్‌గా, వాటర్‌ప్రూఫ్‌గా ఉంటాయి.",
    ]
  },
  {
    id: 5,
    title: "రంగులు మార్చే ఫోన్ వచ్చేస్తోంది",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1599492692_vivo.jpg",
    category: "ప్రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "వెనుక భాగం రంగులు మార్చగలిగే సరికొత్త స్మార్ట్ఫోన్ విడుదల కానుంది.",
      "ఈ ఫోన్ వెనుక భాగం సూర్యకాంతి లేదా విద్యుత్ సిగ్నల్ ఆధారంగా రంగు మారుస్తుంది.",
      "వివో, శాంసంగ్ కంపెనీలు ఈ టెక్నాలజీపై పనిచేస్తున్నాయి.",
      "యూజర్లు తమ మూడ్ లేదా దుస్తులకు తగినట్లు ఫోన్ రంగు మార్చుకోవచ్చు.",
    ]
  },
  {
    id: 6,
    title: "ఐటీ కంపెనీలు తెరుచుకోమన్న ప్రభుత్వం",
    image: "http://graphics.computervignanam.net/images/uploads/web/8/705300_1589192300_so.jpg",
    category: "సాంకేతిక ఉపాధి",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "కరోనా సమయంలో ఐటీ కంపెనీలు తెరుచుకోవాలని ప్రభుత్వం సూచించింది.",
      "వ్యాక్సినేషన్ పూర్తి చేసుకున్న ఉద్యోగులు ఆఫీసులకు రావచ్చని ప్రకటించింది.",
      "ఐటీ కంపెనీలు హైబ్రిడ్ మోడల్ పని విధానాన్ని అమలు చేస్తున్నాయి.",
      "ఉద్యోగుల భద్రత కోసం కంపెనీలు ప్రత్యేక చర్యలు తీసుకున్నాయి.",
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
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };
  window.open(shareUrls[platform], "_blank", "width=600,height=400");
};

export default function IITDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const id = parseInt(params.id);
  const article = posts.find((item) => item.id === id);

  if (!article) {
    return (
      <div style={{ maxWidth: "1340px", margin: "0 auto", display: "flex", gap: "30px", padding: "15px 20px 40px", flexWrap: "wrap" }}>
        <div style={{ width: "220px", flexShrink: 0 }}><LeftSidebar /></div>
        <div style={{ flex: 1, textAlign: "center", padding: "50px", background: "#fff" }}>
          <h2>Article not found!</h2>
          <p>ID: {params.id} | Available IDs: 1-6</p>
          <button onClick={() => router.push('/news/IIT')}>Go Back</button>
        </div>
        <div style={{ width: "300px", flexShrink: 0 }}><RightSidebar /></div>
      </div>
    );
  }

  const relatedArticles = posts.filter((item) => item.id !== id).slice(0, 4);
  const prevArticle = posts.find((item) => item.id === id - 1);
  const nextArticle = posts.find((item) => item.id === id + 1);
  const currentIndex = posts.findIndex((item) => item.id === id) + 1;
  const totalPosts = posts.length;

  return (
    <div style={{ maxWidth: "1340px", width: "100%", margin: "0 auto", display: "flex", gap: "30px", alignItems: "flex-start", paddingTop: "15px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px", flexWrap: "wrap" }}>
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}><LeftSidebar /></div>
      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 25px 25px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>{article.title}</h1>
        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <Image src={article.image} alt={article.title} width={800} height={380}
            style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }} unoptimized
            onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 0", fontSize: "13px", color: "#777", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span><span>/</span><span>{article.time}</span><span>/</span>
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
            <button onClick={() => router.push(`/news/IIT/${prevArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>← వెనక్కి</button>
          ) : <div style={{ width: "80px" }} />}
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          {nextArticle ? (
            <button onClick={() => router.push(`/news/IIT/${nextArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>మరిన్ని →</button>
          ) : <div style={{ width: "80px" }} />}
        </div>
        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>జన రంజకమైన వార్తలు</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/news/IIT/${related.id}`)}>
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