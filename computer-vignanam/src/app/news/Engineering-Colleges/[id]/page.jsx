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
    title: "సాంకేతిక విద్య మాత్రమే కాదు –సామాజిక సేవలోనూ ముందు మా VVIT నంబూరు",
    image: "http://www.computervignanam.net/admin/menupageimage/vvi1.jpg",
    category: "ఇంజనీరింగ్ కాలేజీలు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "మూడున్నర శతాబ్దాల క్రితం కృష్ణా తీర ప్రాంతాన్ని పరిపాలించిన జమీందార్ శ్రీ వాసిరెడ్డి విద్యా సాగర్. ఆయన సంతానం శ్రీ వాసిరెడ్డి విద్యాసాగర్ దాతృత్వంతో VVIT నంబూరు ఏర్పాటు చేయబడింది.",
      "VVIT నంబూరు కళాశాల సాంకేతిక విద్యతో పాటు సామాజిక సేవలోను ముందంజలో ఉంది. ఇక్కడ విద్యార్థులకు నాణ్యమైన విద్య అందించడంతోపాటు సామాజిక కార్యక్రమాల్లోనూ ప్రోత్సహిస్తారు.",
      "కళాశాలలో అత్యాధునిక ప్రయోగశాలలు, గ్రంథాలయం, కంప్యూటర్ ల్యాబ్లు ఉన్నాయి. విద్యార్థులకు చదువుతోపాటు నైపుణ్యాభివృద్ధికి కూడా ప్రాధాన్యత ఇస్తారు.",
      "VVIT నంబూరులో సుమారు 70% మంది విద్యార్థులకు ప్రతి సంవత్సరం ప్రముఖ కంపెనీలలో ప్లేస్మెంట్లు లభిస్తాయి. TCS, Infosys, Wipro, Tech Mahindra లాంటి కంపెనీలు ఇక్కడికి వస్తాయి.",
      "సామాజిక సేవలో భాగంగా కళాశాల విద్యార్థులు గ్రామీణ ప్రాంతాల్లో అవగాహన కార్యక్రమాలు, రక్తదాన శిబిరాలు, విద్యా సహాయ కార్యక్రమాలు నిర్వహిస్తారు."
    ]
  },
  {
    id: 2,
    title: "ప్లేస్ మెంట్ ల కాలేజ్ మా P.V.P సిద్దార్థ ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ",
    image: "http://www.computervignanam.net/admin/menupageimage/pvp1.jpg",
    category: "ఇంజనీరింగ్ కాలేజీలు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "నేడు రాష్ట్రం లోని టాప్ టెన్ కళాశాలల్లో ఒకటి మా పివిపి సిద్దార్థ ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ. ఈ కళాశాల ప్లేస్మెంట్లలో రాష్ట్ర స్థాయిలో అగ్రగామిగా ఉంది.",
      "ప్రతి సంవత్సరం 500కి పైగా విద్యార్థులు ప్రముఖ కంపెనీలలో ఉద్యోగాలు సంపాదిస్తున్నారు. మైక్రోసాఫ్ట్, అమెజాన్, గూగుల్, డెలాయిట్ లాంటి కంపెనీలు ఇక్కడికి విస్తృతంగా వస్తాయి.",
      "కళాశాలలో సీఎస్ఈ, ఐటీ, ఈసీఈ, మెకానికల్, సివిల్, ఈఈఈ విభాగాలు ఉన్నాయి. ప్రతి విభాగంలో అనుభవజ్ఞులైన అధ్యాపకులు బోధన చేస్తారు.",
      "పీవీపీ కళాశాలలో ఇండస్ట్రీ-ఇన్స్టిట్యూట్ ఇంటరాక్షన్కు ప్రాధాన్యత ఇస్తారు. విద్యార్థులు ప్రాజెక్ట్ వర్క్, ఇంటర్న్షిప్ల ద్వారా ప్రాక్టికల్ నాలెడ్జ్ పొందుతారు.",
      "విద్యార్థులకు ప్లేస్మెంట్ శిక్షణ, ఏప్టిట్యూడ్ టెస్ట్లు, సాఫ్ట్ స్కిల్స్, రెజ్యూమ్ బిల్డింగ్ కోసం ప్రత్యేక తరగతులు నిర్వహిస్తారు. ఈ రకమైన తయారీ వలన విద్యార్థులు సులువుగా ఉద్యోగాలు సంపాదిస్తున్నారు."
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

export default function EngineeringCollegesDetailPage() {
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
        <button onClick={() => router.push('/news/Engineering-Colleges')}>
          Go Back
        </button>
      </div>
    );
  }
  
  const relatedArticles = posts.filter(item => item.id !== id).slice(0, 4);
  const totalPosts = posts.length;
  const currentIndex = posts.findIndex(item => item.id === id) + 1;

  return (
    <div
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection:
  typeof window !== "undefined" && window.innerWidth < 768
    ? "column"
    : "row",
        gap: "30px",
        alignItems: "flex-start",
        paddingTop: "15px",
        paddingBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
        flexWrap: "wrap",
        rowGap: "20px"

        
      }}
      
    >

      
      {/* LEFT SIDEBAR */}
      <div
  style={{
    width: "220px",
    minWidth: "0",
    flexShrink: 0
  }}
  className="detail-left-sidebar"
>
        <LeftSidebar />
      </div>

      {/* CENTER CONTENT */}
      <div
  style={{
    flex: 1,
    minWidth: "0",
    background: "#fff",
    padding: "0 25px"
  }}
  className="detail-center-content"
>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>
          {article.title}
        </h1>

        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={380}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            unoptimized
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
          {id > 1 ? (
            <button 
              onClick={() => router.push(`/news/Engineering-Colleges/${id - 1}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}
            >
              ← వెనక్కి
            </button>
          ) : <div style={{ width: "80px" }} />}
          
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          
          {id < totalPosts ? (
            <button 
              onClick={() => router.push(`/news/Engineering-Colleges/${id + 1}`)} 
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
         gridTemplateColumns:
  typeof window !== "undefined" && window.innerWidth < 768
    ? "1fr"
    : "repeat(auto-fit,minmax(280px,1fr))",
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
              onClick={() => router.push(`/news/Engineering-Colleges/${related.id}`)}
            >
             <Image 
  src={related.image} 
  alt={related.title}
  width={280}
  height={160}
  style={{
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block"
  }}
  unoptimized
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
      <div
  style={{
    width: "300px",
    minWidth: "260px",
    flexShrink: 0
  }}
  className="detail-right-sidebar"
>
        <RightSidebar />
      </div>
    </div>
  );
}