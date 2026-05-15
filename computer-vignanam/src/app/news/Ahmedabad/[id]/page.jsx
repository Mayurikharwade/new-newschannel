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
    id: 80,
    title: "అమీర్ పేట్ లో హాస్టళ్ళు",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "10 సంవత్సరాల క్రితం",
    fullContent: [
      "ఏటా రెండు తెలుగు రాష్ట్రాల నలుమూలల నుండీ సుమారు పదివేల మందికి పైగా విద్యార్థులు ఒక్క అమీర్ పేట్ లోనే మకాం పెడతారు.",
      "అమీర్ పేట్ లోని హాస్టళ్ళు విద్యార్థులకు చాలా సౌకర్యవంతంగా ఉంటాయి. 24x7 విద్యుత్ సరఫరా, తాగునీరు, వైఫై సౌకర్యం అందుబాటులో ఉంటాయి.",
      "బాలికల కోసం ప్రత్యేక హాస్టళ్ళు, సెక్యూరిటీ గార్డులు, సీసీ కెమెరాలు ఉండటం వలన సురక్షిత వాతావరణం ఉంటుంది.",
      "నెలకు రూ. 5,000 నుండి రూ. 10,000 వరకు హాస్టల్ ఫీజులు ఉంటాయి. వసతులు బట్టి ధరలు మారుతుంటాయి.",
    ]
  },
  {
    id: 81,
    title: "అమీర్ పేట్‌లో ఫీజు వివరాలు",
    image: "https://images.unsplash.com/photo-1523050854058-8df90910e683?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "8 సంవత్సరాల క్రితం",
    fullContent: [
      "అమీర్ పేట్‌లో వివిధ కోర్సుల ఫీజు వివరాలు, డిస్కౌంట్లు, స్కాలర్‌షిప్ అవకాశాలు గురించి తెలుసుకోండి.",
      "పైథాన్, జావా, డేటా సైన్స్ వంటి కోర్సుల ఫీజు రూ.10,000 నుండి రూ.30,000 వరకు ఉంటుంది.",
      "కొన్ని ఇన్స్టిట్యూట్లు ఉచిత డెమో క్లాసులు కూడా అందిస్తాయి.",
      "ఫీజు చెల్లించే ముందు ఇన్స్టిట్యూట్ రివ్యూలు తప్పకుండా చూసుకోండి.",
    ]
  },
  {
    id: 82,
    title: "అమీర్ పేట్‌లో బెస్ట్ ట్రైనింగ్ ఇన్స్టిట్యూట్స్",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "7 సంవత్సరాల క్రితం",
    fullContent: [
      "అమీర్ పేట్‌లో టాప్ సాఫ్ట్‌వేర్ ట్రైనింగ్ ఇన్స్టిట్యూట్స్ లిస్ట్ మరియు వాటి రేటింగ్స్.",
      "నరేష్ ఐటీ, డర్గా సాఫ్ట్, అశోక్ ఐటీ వంటి ప్రముఖ ఇన్స్టిట్యూట్లు ఇక్కడ ఉన్నాయి.",
      "ప్రతి ఇన్స్టిట్యూట్ ప్రత్యేకమైన బోధనా విధానం మరియు అనుభవజ్ఞులైన ఫ్యాకల్టీతో ఉంటాయి.",
      "విద్యార్థులు తమ అవసరాలకు తగిన ఇన్స్టిట్యూట్ ఎంచుకోవాలి.",
    ]
  },
  {
    id: 83,
    title: "అమీర్ పేట్ విద్యార్థుల అనుభవాలు",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "అమీర్ పేట్‌లో శిక్షణ పొందిన విద్యార్థుల అనుభవాలు, వారి సక్సెస్ స్టోరీలు.",
      "చాలా మంది విద్యార్థులు శిక్షణ తర్వాత MNC లలో ఉద్యోగాలు సంపాదించారు.",
      "కొంతమంది విద్యార్థులు సొంతంగా స్టార్టప్‌లు ప్రారంభించారు.",
      "అమీర్ పేట్ శిక్షణ వల్ల ప్రాక్టికల్ నాలెడ్జ్ బాగా పెరుగుతుందని విద్యార్థులు చెబుతున్నారు.",
    ]
  },
  {
    id: 84,
    title: "అమీర్ పేట్‌లో ప్లేస్‌మెంట్ అవకాశాలు",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "అమీర్ పేట్ ట్రైనింగ్ ఇన్స్టిట్యూట్స్ నుండి ప్లేస్‌మెంట్ అవకాశాలు, కంపెనీల వివరాలు.",
      "TCS, Infosys, Wipro, Cognizant వంటి కంపెనీలు క్యాంపస్ డ్రైవ్‌లు నిర్వహిస్తాయి.",
      "సగటు ప్యాకేజీ రూ.3-5 లక్షలు ఉంటుంది.",
      "ప్లేస్‌మెంట్ సెల్‌లు ప్రత్యేకంగా ట్రైనింగ్ ఇస్తాయి.",
    ]
  },
  {
    id: 85,
    title: "అమీర్ పేట్‌లో ఆన్‌లైన్ ట్రైనింగ్ సౌకర్యాలు",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    category: "ఐ . ఐ . టీ లు",
    time: "3 సంవత్సరాల క్రితం",
    fullContent: [
      "కరోనా తర్వాత అమీర్ పేట్‌లో ఆన్‌లైన్ ట్రైనింగ్ సౌకర్యాలు విస్తృతంగా అందుబాటులోకి వచ్చాయి.",
      "జూమ్, గూగుల్ మీట్ ద్వారా లైవ్ క్లాసులు నిర్వహిస్తున్నారు.",
      "రికార్డెడ్ వీడియోలు, LMS పోర్టల్స్ ద్వారా 24/7 యాక్సెస్ లభిస్తుంది.",
      "ఆన్‌లైన్ ట్రైనింగ్ వల్ల దూర ప్రాంతాల విద్యార్థులు కూడా లబ్ధి పొందుతున్నారు.",
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

export default function AhmedabadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const id = parseInt(params.id);
  const article = posts.find(item => item.id === id);
  
  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>ID: {params.id} | Available IDs: 80-85</p>
        <button onClick={() => router.push('/news/Ahmedabad')}>Go Back</button>
      </div>
    );
  }

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
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}>
        <LeftSidebar />
      </div>

      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 25px 25px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>
          {article.title}
        </h1>

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

        {/* PREV / NEXT BUTTONS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0", padding: "15px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          {prevArticle ? (
            <button onClick={() => router.push(`/news/Ahmedabad/${prevArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              ← వెనక్కి
            </button>
          ) : <div style={{ width: "80px" }} />}
          
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          
          {nextArticle ? (
            <button onClick={() => router.push(`/news/Ahmedabad/${nextArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              మరిన్ని →
            </button>
          ) : <div style={{ width: "80px" }} />}
        </div>

        {/* RELATED ARTICLES */}
        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>
          జన రంజకమైన వార్తలు
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} 
              style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/news/Ahmedabad/${related.id}`)}>
              <Image src={related.image} alt={related.title} width={280} height={160}
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} unoptimized
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