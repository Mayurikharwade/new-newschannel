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

// Same data as listing page
const cards = [
  {
    id: 0,
    title: "జియోఫోన్ మాదిరిగానే జియోఫోన్ నెక్స్ట్ కూడా సూపర్ హిట్టవుద్దా? ఓ విశ్లేషణ",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626337064_Is-JioPhone-Next-will-be-a-big-hit-as-its-predecessor.jpg",
    desc: "జియోఫోన్ నెక్స్ట్ గురించి పూర్తి విశ్లేషణ.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "జియో ఫోన్ మొబైల్ నెట్వర్క్స్ కంపెనీ రిలయన్స్ జియో తన వినియోగదారుల కోసం తయారుచేసిన ఫీచర్ ఫోన్.",
      "జియోఫోన్ నెక్స్ట్ అనేది కొత్త జనరేషన్ ఫీచర్ ఫోన్.",
      "ఇందులో 4G సపోర్ట్, వాట్సాప్, యూట్యూబ్ ప్రీ-ఇన్స్టాల్ చేయబడి ఉంటాయి."
    ]
  },
  {
    id: 1,
    title: "వాట్సాప్ ప్రైవసీ పాలసీపై కోర్టుకెళ్లిన ప్రభుత్వం.. ఏం జరుగుతోంది?",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1616659942_whatsapp-hc.jpg",
    desc: "వాట్సాప్ ప్రైవసీ పాలసీపై పూర్తి వివరాలు.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "వాట్సాప్ కొత్త ప్రైవసీ పాలసీ వినియోగదారుల డేటాను ఫేస్బుక్తో షేర్ చేసుకునేలా ఉంది.",
      "దీంతో ప్రభుత్వం వెంటనే స్పందించి ఈ విషయాన్ని కోర్టుకు తీసుకెళ్లింది.",
      "ప్రస్తుతం కేసు విచారణలో ఉంది."
    ]
  },
  {
    id: 2,
    title: "2022 నాటికి ఇండియాలో 5జీ సేవలు వస్తాయంటున్న ప్రభుత్వం..",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1612880014_5G-Services-roll-out-in-india-in-starting-of-2020..-Govt.-tells-parliament.jpeg",
    desc: "2022 నాటికి 5జీ సేవలు ప్రారంభం.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "5G సేవలు దేశంలో విప్లవాత్మకమైన మార్పులు తీసుకురానున్నాయి.",
      "చాలా వేగంగా డౌన్లోడ్, అప్లోడ్ స్పీడ్ లభిస్తుంది.",
      "2022 నాటికి ప్రముఖ నగరాల్లో 5G సేవలు ప్రారంభం కానున్నాయి."
    ]
  },
  {
    id: 3,
    title: "వాట్సాప్ తొందరపాటు.. సిగ్నల్ పంట పండించిందా",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/whastapp-Signal-app-raise-in-late-night.jpg",
    desc: "సిగ్నల్ యాప్ వైపు మొగ్గు.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "వాట్సాప్ ప్రైవసీ పాలసీ వల్ల చాలా మంది యూజర్లు సిగ్నల్ యాప్కు మారుతున్నారు.",
      "సిగ్నల్ యాప్ డౌన్లోడ్‌లు రికార్డు స్థాయిలో పెరిగాయి.",
      "వాట్సాప్ ఇప్పుడు తన ప్రైవసీ పాలసీని పునర్విచారణ చేస్తుంది."
    ]
  },
  {
    id: 4,
    title: "పేటీఎమ్‌కు ఏడో సంవత్సరమూ నష్టాలే",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1609308698_PayTm-losses-in-7th-consecutive-year..-what-is-the-resaon.jpg",
    desc: "పేటీఎమ్ వరుసగా ఏడో సంవత్సరం నష్టాలు.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "పేటీఎమ్ నిరంతర నష్టాలకు కారణం పెరుగుతున్న పోటీ.",
      "గూగుల్ పే, ఫోన్ పే లాంటి యాప్స్ మార్కెట్‌లో ఆధిపత్యం చూపుతున్నాయి."
    ]
  },
  {
    id: 5,
    title: "ఇన్ బ్రాండ్‌తో మైక్రోమ్యాక్స్ సెకండ్ ఇన్నింగ్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1604576448_Micromax-Micromax-re-entry-Micromax-smart-phones.jpeg",
    desc: "మైక్రోమ్యాక్స్ తిరిగి మార్కెట్‌లోకి.",
    category: "వార్తా విశ్లేషణ",
    date: "4 సంవత్సరాల క్రితం",
    fullContent: [
      "మైక్రోమ్యాక్స్ తిరిగి ఇండియన్ మార్కెట్‌లోకి ప్రవేశించింది.",
      "కొత్త ఫోన్లు గ్రేట్ ఫీచర్లతో తక్కువ ధరలో వస్తున్నాయి."
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

export default function NewsAnalysisDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  let cleanId = params.id;
  if (cleanId && cleanId.includes('.cv')) {
    cleanId = cleanId.replace('.cv', '');
  }
  const id = parseInt(cleanId);
  const article = cards.find(item => item.id === id);
  
  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Article not found!</h2>
        <p>Article with ID: {params.id} does not exist</p>
        <button onClick={() => router.push('/news/News-Analysys')}>
          Go Back
        </button>
      </div>
    );
  }
  
  const relatedArticles = cards.filter(item => item.id !== id).slice(0, 4);

  return (
    <div
      style={{
        maxWidth: "1340px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        gap: "18px",
        alignItems: "flex-start",
        paddingTop: "15px",
        paddingBottom: "40px",
        flexWrap: "wrap"
      }}
    >
      <div style={{ width: "220px", minWidth: "200px" }}>
        <LeftSidebar />
      </div>

      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 15px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>
          {article.title}
        </h1>

        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "contain", display: "block" }}
            unoptimized
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 0", fontSize: "13px", color: "#777", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span>
          <span>/</span>
          <span>{article.date}</span>
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

        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>
          జన రంజకమైన వార్తలు
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div 
              key={related.id} 
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onClick={() => router.push(`/news/News-Analysys/${related.id}`)}
            >
              <Image 
                src={related.image} 
                alt={related.title} 
                width={280}
                height={180}
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px" }}
                unoptimized
              />
              <h3 style={{ color: "#1a5cb0", fontSize: "16px", lineHeight: "1.4", marginTop: "10px", fontWeight: "600" }}>{related.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "300px", minWidth: "260px" }}>
        <RightSidebar />
      </div>
    </div>
  );
}