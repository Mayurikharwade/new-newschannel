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
    id: 88,
    title: "అమీర్ పేట్ లో హాస్టల్లు",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    category: "అమీర్ పేట విజ్ఞానం",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "ఏటా రెండు తెలుగు రాష్ట్రాల నలుమూలల నుండీ సుమారు పదివేల మందికి పైగా విద్యార్థులు ఒక్క అమీర్ పేట్ లోనే మకాం పెడతారు. వారికి సరైన వసతి కల్పించడానికి ఇక్కడ అనేక హాస్టళ్ళు, పీజీలు అందుబాటులో ఉన్నాయి.",
      "అమీర్ పేట్ లోని హాస్టళ్ళు విద్యార్థులకు చాలా సౌకర్యవంతంగా ఉంటాయి. 24x7 విద్యుత్ సరఫరా, తాగునీరు, వైఫై సౌకర్యం, భోజనం, లాండ్రీ సేవలు అందుబాటులో ఉంటాయి.",
      "బాలికల కోసం ప్రత్యేక హాస్టళ్ళు, సెక్యూరిటీ గార్డులు, సీసీ కెమెరాలు ఉండటం వలన సురక్షిత వాతావరణం ఉంటుంది.",
      "నెలకు రూ. 5,000 నుండి రూ. 10,000 వరకు హాస్టల్ ఫీజులు ఉంటాయి. వసతులు బట్టి ధరలు మారుతుంటాయి.",
      "విద్యార్థులు హాస్టల్ ఎంచుకునే ముందు వసతులు, భద్రత, ఫీజు, ఆహార నాణ్యతను తనిఖీ చేసుకోవడం మంచిది."
    ]
  }
];

const shareOnSocial = (platform, title, url) => {
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

export default function HostelFacilityDetailPage() {
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
        <button onClick={() => router.push('/news/Hostel-Facility')}>
          Go Back
        </button>
      </div>
    );
  }
  
  // Get 4 related articles with proper images
  const relatedArticles = [
    {
      id: 89,
      title: "అమీర్ పేట్ లో బాలికల హాస్టల్స్",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc1b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 90,
      title: "అమీర్ పేట్ లో రెంటింగ్ సౌకర్యాలు",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 91,
      title: "విద్యార్థుల కోసం అమీర్ పేట్ గైడ్",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 92,
      title: "అమీర్ పేట్ లో భోజన సౌకర్యాలు",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    }
  ];
  
  const prevArticle = posts.find(item => item.id === id - 1);
  const nextArticle = posts.find(item => item.id === id + 1);
  const currentIndex = 1;
  const totalPosts = 1;

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
        flexWrap: "wrap"
      }}
    >
      {/* LEFT SIDEBAR */}
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

      {/* CENTER CONTENT */}
      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 25px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>
          {article.title}
        </h1>

        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={380}
            style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
            unoptimized
            onError={(e) => {
              e.target.src = DUMMY_IMAGE;
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 0", fontSize: "13px", color: "#777", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
          <span>/</span>
          <span>{article.time}</span>
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

        {/* Previous / Next Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0", padding: "15px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          {prevArticle ? (
            <button 
              onClick={() => router.push(`/news/Hostel-Facility/${prevArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}
            >
              ← వెనక్కి
            </button>
          ) : <div style={{ width: "80px" }} />}
          
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          
          {nextArticle ? (
            <button 
              onClick={() => router.push(`/news/Hostel-Facility/${nextArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}
            >
              మరిన్ని →
            </button>
          ) : <div style={{ width: "80px" }} />}
        </div>

        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>
          జన రంజకమైన వార్తలు
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "20px", 
          marginBottom: "40px" 
        }}>
          {relatedArticles.map((related) => (
            <div 
              key={related.id} 
              style={{ 
                cursor: "pointer", 
                transition: "transform 0.2s",
                background: "#f9f9f9",
                borderRadius: "4px",
                overflow: "hidden"
              }}
              onClick={() => router.push(`/news/Hostel-Facility/${related.id}`)}
            >
              <Image 
                src={related.image} 
                alt={related.title} 
                width={280}
                height={160}
                style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
                unoptimized
                onError={(e) => {
                  e.target.src = DUMMY_IMAGE;
                }}
              />
              <h3 style={{ 
                color: "#1a5cb0", 
                fontSize: "14px", 
                lineHeight: "1.4", 
                marginTop: "10px", 
                marginBottom: "10px",
                padding: "0 10px",
                fontWeight: "600" 
              }}>
                {related.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div style={{ width: "300px", minWidth: "260px", flexShrink: 0 }}>
        <RightSidebar />
      </div>
    </div>
  );
}