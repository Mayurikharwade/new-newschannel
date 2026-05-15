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
    title: "నగదు రహిత వ్యవస్థకు దారి ఎటు దూరం? ఎండ్ కష్టం? ఎండ్ మేలు?",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "సంపాదకుడు",
    time: "9 సంవత్సరాల క్రితం",
    fullContent: [
      "ఇండియా డిజిటల్ రూపం తాలూకు ప్రయాణంలో నగదు రహిత వ్యవస్థపై విస్తృత చర్చ కొనసాగుతోంది. ముఖ్యంగా ఆర్థిక రంగంలో సాంకేతికత అనగా క్యాష్ లెస్ గా మారడానికి సమయాయుతమవుతోంది.",
      "నగదు రహిత వ్యవస్థ వలన లావాదేవీలు సులభతరం అవుతాయి. ఆన్లైన్ పేమెంట్లు వేగంగా జరుగుతాయి. నకిలీ నోట్ల సమస్య తగ్గుతుంది.",
      "కానీ గ్రామీణ ప్రాంతాల్లో ఇంటర్నెట్ సౌకర్యం లేని వారికి ఇది సవాలుగా మారుతుంది. డిజిటల్ సాక్షరత పెంచడం చాలా ముఖ్యం.",
      "ప్రభుత్వం, ప్రైవేటు సంస్థలు కలిసి డిజిటల్ పేమెంట్లను ప్రోత్సహిస్తే భవిష్యత్తులో భారత్ పూర్తిగా నగదు రహితంగా మారగలదు."
    ]
  },
  {
    id: 2,
    title: "డెబ్బై సంవత్సరాల స్వతంత్ర భారత్..... ఇరవై సంవత్సరాల కంప్యూటర్ విజ్ఞానం",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "సంపాదకుడు",
    time: "9 సంవత్సరాల క్రితం",
    fullContent: [
      "డిజిటల్ భారతం నుండి కంప్యూటర్ విజ్ఞానం వరకు అనేక మార్పులు చోటుచేసుకున్నాయి.",
      "కంప్యూటర్ విజ్ఞానం తెలుగు భాషలో సాంకేతిక సాహిత్యానికి కొత్త ఒరవడి నిచ్చింది.",
      "గత ఇరవై సంవత్సరాలలో కంప్యూటర్ విజ్ఞానం లక్షలాది మందికి సాంకేతిక పరిజ్ఞానాన్ని అందించింది.",
      "స్వతంత్ర భారత్ లో సాంకేతిక రంగం చాలా ఎదుగుదల సాధించింది. ఇప్పుడు భారత్ ఐటీ రంగంలో ప్రపంచంలోనే ముందంజలో ఉంది."
    ]
  },
  {
    id: 3,
    title: "కేవలం 10 శాతం మాత్రమే ఖర్చయ్యే కంప్యూటర్ విజ్ఞానం వెబ్ సైట్",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    category: "సంపాదకుడు",
    time: "9 సంవత్సరాల క్రితం",
    fullContent: [
      "తెలుగు సాంకేతిక సాహిత్యంలో కంప్యూటర్ విజ్ఞానం ప్రత్యేక స్థానాన్ని సంపాదించింది.",
      "కేవలం 10 శాతం ఖర్చుతో నాణ్యమైన సాంకేతిక సమాచారాన్ని అందిస్తున్న ఈ వెబ్ సైట్ విద్యార్థులకు ఎంతగానో ఉపయోగపడుతుంది.",
      "తెలుగులో సాంకేతిక విషయాలు అందించడం వలన గ్రామీణ ప్రాంత విద్యార్థులు కూడా సులభంగా అర్థం చేసుకోగలుగుతున్నారు.",
      "ఇలాంటి ప్రయత్నాలు భారత్ ను నిజంగా డిజిటల్ గా మార్చడంలో సహాయపడతాయి."
    ]
  },
  {
    id: 4,
    title: "రాజకీయ సాంకేతిక రాజమేళబోతుందా?...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    category: "సంపాదకుడు",
    time: "9 సంవత్సరాల క్రితం",
    fullContent: [
      "సాంకేతికత మరియు రాజకీయాల మధ్య సంబంధం పెరుగుతోంది.",
      "ఎన్నికల్లో ఇప్పుడు సోషల్ మీడియా, డేటా అనాలిసిస్ కీలక పాత్ర పోషిస్తున్నాయి.",
      "ప్రచారాలకు వాట్సాప్, ట్విటర్, ఫేస్బుక్ వాడకం చాలా పెరిగింది.",
      "సాంకేతికత రాజకీయాల్లో నిబద్ధత, ప్రజల భాగస్వామ్యం పెంచడంలో సహాయపడుతుంది."
    ]
  },
  {
    id: 5,
    title: "తెలుగు సాంకేతిక సాహిత్యానికి ఆద్యుడు ఎవరు?",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "సంపాదకుడు",
    time: "9 సంవత్సరాల క్రితం",
    fullContent: [
      "తెలుగు భాషలో కంప్యూటర్ సాహిత్యానికి పునాది వేసిన ప్రముఖుల గురించిన విశేషాలు.",
      "వారి కృషి వలననే ఈనాడు తెలుగులో సాంకేతిక విషయాలు అందుబాటులో ఉన్నాయి.",
      "తెలుగు మీడియం విద్యార్థులు కూడా సాంకేతిక రంగంలో రాణించడానికి ఇది దోహదపడింది.",
      "వారి సేవలను గుర్తించి, కొనసాగించడం మనందరి బాధ్యత."
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

export default function EditorsDetailPage() {
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
        <p>Available IDs: 1, 2, 3, 4, 5</p>
        <button onClick={() => router.push('/news/Editors')}>
          Go Back
        </button>
      </div>
    );
  }
  
  // Get 4 related articles
  const relatedArticles = posts.filter(item => item.id !== id).slice(0, 4);
  
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
              onClick={() => router.push(`/news/Editors/${prevArticle.id}`)} 
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
              onClick={() => router.push(`/news/Editors/${nextArticle.id}`)} 
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
              onClick={() => router.push(`/news/Editors/${related.id}`)}
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