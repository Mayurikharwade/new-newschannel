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
    id: 78,
    title: "ఐఐటీ హైదరాబాద్ - ప్రతిష్టాత్మక సాంకేతిక సంస్థ",
    image: "https://images.unsplash.com/photo-1572177812156-58036b8d9f5d?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ హైదరాబాద్ తెలంగాణాలోని ప్రముఖ సాంకేతిక సంస్థ. ఇది 2008లో స్థాపించబడింది.",
      "ఇక్కడ B.Tech, M.Tech, PhD కోర్సులు అందుబాటులో ఉంటాయి.",
      "ఐఐటీ హైదరాబాద్ క్యాంపస్ చాలా అందంగా ఉంటుంది.",
      "ప్రవేశాలు JEE Advanced పరీక్ష ద్వారా జరుగుతాయి.",
      "ప్లేస్మెంట్ అవకాశాలు చాలా బాగుంటాయి."
    ]
  },
  {
    id: 79,
    title: "ఐఐటీ హైదరాబాద్ క్యాంపస్ లైఫ్",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "9 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ హైదరాబాద్ క్యాంపస్ విద్యార్థులకు అన్ని సౌకర్యాలు అందుబాటులో ఉంటాయి.",
      "హాస్టల్ సౌకర్యాలు, స్పోర్ట్స్ కాంప్లెక్స్, జిమ్ వంటి సౌకర్యాలు ఉన్నాయి.",
      "విద్యార్థులు వివిధ సాంస్కృతిక కార్యక్రమాలు నిర్వహిస్తారు."
    ]
  },
  {
    id: 80,
    title: "ఐఐటీ హైదరాబాద్ లో పరిశోధన అవకాశాలు",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "8 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ హైదరాబాద్ పరిశోధనలో ముందంజలో ఉంది.",
      "విద్యార్థులు AI, మెషిన్ లెర్నింగ్ వంటి రంగాలలో పరిశోధన చేయవచ్చు.",
      "ఇక్కడి అధ్యాపకులు అనేక పరిశోధన ప్రాజెక్టులలో పాల్గొంటున్నారు."
    ]
  },
  {
    id: 81,
    title: "ఐఐటీ హైదరాబాద్ లో ప్లేస్మెంట్ రికార్డు",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "7 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ హైదరాబాద్ ప్లేస్మెంట్ రికార్డు చాలా బాగుంది.",
      "ప్రతి సంవత్సరం 90% మంది విద్యార్థులు ప్లేస్మెంట్ పొందుతున్నారు.",
      "గూగుల్, మైక్రోసాఫ్ట్, అమెజాన్ లాంటి కంపెనీలు ఇక్కడికి వస్తాయి."
    ]
  },
  {
    id: 82,
    title: "ఐఐటీ హైదరాబాద్ ప్రవేశ ప్రక్రియ",
    image: "https://images.unsplash.com/photo-1580582932707-520a8d0b4a7e?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ హైదరాబాద్ ప్రవేశాలు JEE Advanced పరీక్ష ద్వారా జరుగుతాయి.",
      "JEE Main లో మంచి ర్యాంక్ సాధించిన విద్యార్థులు మాత్రమే JEE Advanced కు అర్హులు.",
      "JEE Advanced లో ఆల్ ఇండియా ర్యాంక్ ఆధారంగా ప్రవేశాలు కేటాయిస్తారు."
    ]
  },
  {
    id: 83,
    title: "ఐఐటీ హైదరాబాద్ అలుమ్ని నెట్‌వర్క్",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ.ఐ.టీ లు",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఐటీ హైదరాబాద్ అలుమ్ని నెట్‌వర్క్ చాలా బలంగా ఉంది.",
      "అలుమ్ని ప్రపంచవ్యాప్తంగా ప్రముఖ కంపెనీలలో పని చేస్తున్నారు.",
      "చాలా మంది అలుమ్ని స్వంత స్టార్టప్ లను స్థాపించారు."
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

export default function IITHyderabadDetailPage() {
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
        <p>ID: {params.id} | Available IDs: 78, 79, 80, 81, 82, 83</p>
        <button onClick={() => router.push('/news/IIT-Hyderabad')}>Go Back</button>
      </div>
    );
  }
  
  // Get 4 related articles (excluding current)
  const relatedArticles = posts.filter(item => item.id !== id).slice(0, 4);
  
  // Previous/Next articles
  const prevArticle = posts.find(item => item.id === id - 1);
  const nextArticle = posts.find(item => item.id === id + 1);
  const currentIndex = posts.findIndex(item => item.id === id) + 1;
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
        flexWrap: "wrap"
      }}
    >
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

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
            onError={(e) => { e.target.src = DUMMY_IMAGE; }}
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
            <button onClick={() => router.push(`/news/IIT-Hyderabad/${prevArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              ← వెనక్కి
            </button>
          ) : <div style={{ width: "80px" }} />}
          
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          
          {nextArticle ? (
            <button onClick={() => router.push(`/news/IIT-Hyderabad/${nextArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              మరిన్ని →
            </button>
          ) : <div style={{ width: "80px" }} />}
        </div>

        {/* 4 RELATED ARTICLES */}
        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>
          జన రంజకమైన వార్తలు
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div 
              key={related.id} 
              style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/news/IIT-Hyderabad/${related.id}`)}
            >
              <Image 
                src={related.image} 
                alt={related.title} 
                width={280}
                height={160}
                style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
                unoptimized
                onError={(e) => { e.target.src = DUMMY_IMAGE; }}
              />
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