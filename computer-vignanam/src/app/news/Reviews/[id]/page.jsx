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
    id: 126,
    title: "సోనీ ఆండ్ మూవీ, ఎలా పనిస్తుంది..",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "2 సంవత్సరాల క్రితం",
    fullContent: [
      "సోనీ ఆండ్ మూవీ అనేది ప్రముఖ ఆడియో మరియు వీడియో సాఫ్ట్‌వేర్. ఇది ప్రొఫెషనల్ మరియు ప్రారంభకులకు చాలా ఉపయోగకరంగా ఉంటుంది.",
      "దీనిలో మీరు ఆడియో మరియు వీడియో ఫైళ్లను ఎడిట్ చేయవచ్చు, ఎఫెక్ట్స్ జోడించవచ్చు, మరియు వివిధ ఫార్మాట్లలో ఎక్స్‌పోర్ట్ చేయవచ్చు.",
      "సోనీ ఆండ్ మూవీ యొక్క ప్రత్యేకత ఏమిటంటే ఇది యూజర్ ఫ్రెండ్లీ ఇంటర్ఫేస్ను కలిగి ఉంటుంది. ఎవరైనా సులభంగా నేర్చుకోగలరు.",
      "మీరు వీడియో ఎడిటింగ్ ప్రారంభించాలనుకుంటే, సోనీ ఆండ్ మూవీ ఒక అద్భుతమైన ఎంపిక."
    ]
  },
  {
    id: 127,
    title: "ఐఓఎస్ 14 అప్డేట్.. ఇండియాలో యాపిల్ యూజర్లకు చక్కని ఫీచర్స్",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఓఎస్ 14 అప్డేట్ యాపిల్ యూజర్లకు చాలా కొత్త ఫీచర్లను తీసుకువచ్చింది. హోమ్ స్క్రీన్ విడ్జెట్లు, యాప్ లైబ్రరీ, మరియు పిక్చర్ ఇన్ పిక్చర్ ముఖ్యమైన ఫీచర్లు.",
      "ప్రైవసీ మెరుగుదలలు కూడా ఈ అప్డేట్ లో ఉన్నాయి. యాప్స్ మీ లొకేషన్ యాక్సెస్ చేసినప్పుడు మీకు తెలుస్తుంది.",
      "మరో ముఖ్యమైన ఫీచర్ ట్రాన్స్‌లేషన్ యాప్, ఇది 11 భాషల్లో అనువాదం చేస్తుంది.",
      "ఐఓఎస్ 14 ని iPhone 6s మరియు కొత్త మోడళ్లలో ఇన్‌స్టాల్ చేసుకోవచ్చు."
    ]
  },
  {
    id: 128,
    title: "రియల్‌మీ 12 సిరీస్ ధరలో మార్కెట్లో మంచి ఫోన్ స్మార్ట్‌ఫోన్స్ ఇవి?",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "రియల్‌మీ 12 సిరీస్ తక్కువ ధరలో మంచి ఫీచర్లను అందిస్తుంది. ఇందులో 48MP కెమెరా, 5000mAh బ్యాటరీ, మరియు 6.5 ఇంచ్ డిస్‌ప్లే ఉన్నాయి.",
      "ఈ ఫోన్ మీడియాటెక్ ప్రాసెసర్ తో వస్తుంది, ఇది రోజువారీ పనులకు చాలా సరిపోతుంది.",
      "4GB RAM మరియు 64GB స్టోరేజ్ మోడల్ చాలా స్థోమతగల ధరలో లభిస్తుంది.",
      "మొత్తంమీద, రియల్‌మీ 12 సిరీస్ బడ్జెట్ లో మంచి ఫోన్ కావాలనుకునే వారికి అద్భుతమైన ఎంపిక."
    ]
  },
  {
    id: 129,
    title: "రియల్‌మీ 43 ఇంచుల ఎల్ఈడి టీవీ 4కే లో",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "7 సంవత్సరాల క్రితం",
    fullContent: [
      "రియల్‌మీ 43 ఇంచుల 4K ఎల్ఈడి టీవీ అద్భుతమైన పిక్చర్ క్వాలిటీని అందిస్తుంది. 4K రిజల్యూషన్ చాలా క్లియర్ గా ఉంటుంది.",
      "ఇందులో ఆండ్రాయిడ్ టీవీ OS ఉంది, మీరు నేరుగా ప్లే స్టోర్ నుండి యాప్స్ డౌన్‌లోడ్ చేసుకోవచ్చు.",
      "బిల్ట్-ఇన్ క్రోమ్‌కాస్ట్ ఉంది, మీరు మొబైల్ నుండి నేరుగా టీవీలో స్క్రీన్ మిర్రర్ చేయవచ్చు.",
      "ఈ టీవీ ధర దాదాపు రూ. 35,000 ఉంటుంది, ఇది ఈ ఫీచర్లకు చాలా బాగుంది."
    ]
  },
  {
    id: 130,
    title: "మొబైల్ బ్యాటరీ ఎక్కువ సేపు ఉండటానికి బెస్ట్ టిప్స్",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "7 సంవత్సరాల క్రితం",
    fullContent: [
      "మీ ఫోన్ బ్యాటరీ ఎక్కువ సేపు ఉండాలంటే కొన్ని టిప్స్ ఫాలో అవ్వండి. బ్యాటరీని 20% నుండి 80% మధ్యలో చార్జ్ చేయడం మంచిది.",
      "ఓవర్‌నైట్ చార్జింగ్ ను అవాయిడ్ చేయండి. ఇది బ్యాటరీ జీవితకాలాన్ని తగ్గిస్తుంది.",
      "బ్రైట్‌నెస్ ను తగ్గించండి మరియు బ్లూటూత్, Wi-Fi ను అవసరం లేనప్పుడు ఆఫ్ చేయండి.",
      "బ్యాక్‌గ్రౌండ్ యాప్స్ ను క్లోజ్ చేయండి. ఇవి బ్యాటరీని త్వరగా ఖాళీ చేస్తాయి."
    ]
  },
  {
    id: 131,
    title: "రియల్‌మీ-శాంసంగ్ ఎం 30",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "7 సంవత్సరాల క్రితం",
    fullContent: [
      "శాంసంగ్ ఎం30 అనేది బడ్జెట్ సెగ్మెంట్ లో మంచి ఫోన్. ఇందులో 5000mAh బ్యాటరీ, 48MP కెమెరా, మరియు 6.4 ఇంచ్ డిస్‌ప్లే ఉన్నాయి.",
      "ఈ ఫోన్ ఎక్సినోస్ ప్రాసెసర్ తో వస్తుంది, ఇది రోజువారీ పనులకు చాలా సరిపోతుంది.",
      "4GB RAM మరియు 64GB స్టోరేజ్ మోడల్ లభిస్తుంది, విస్తరించదగిన స్టోరేజ్ కూడా ఉంది.",
      "ధర దాదాపు రూ. 10,000 ఉంటుంది, ఇది ఈ ఫీచర్లకు చాలా బాగుంది."
    ]
  },
  {
    id: 132,
    title: "రియల్‌మీ - జియో ఫోన్స్ ఎయిర్‌టెల్",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "జియో మరియు ఎయిర్‌టెల్ మధ్య పోటీ రోజురోజుకు పెరుగుతోంది. రెండు కంపెనీలూ మంచి ఆఫర్లు ఇస్తున్నాయి.",
      "జియో వారి ప్లాన్స్ లో నెట్‌ఫ్లిక్స్, అమెజాన్ ప్రైమ్ లాంటి ఓటీటీ సబ్‌స్క్రిప్షన్లు ఇస్తుంది.",
      "ఎయిర్‌టెల్ వారి ప్లాన్స్ లో డేటా రోల్ ఓవర్ ఫీచర్ ఉంది, ఇది చాలా మందికి నచ్చుతుంది.",
      "మీ వినియోగానికి ఏది బెస్ట్ ఓ అనేది మీరు నిర్ణయించుకోవాలి."
    ]
  },
  {
    id: 133,
    title: "లాక్‌డౌన్ సమయంలో గూగుల్ సెర్చింగ్ ట్రెండ్స్ ఎలా మారిపోయాయి..",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "లాక్‌డౌన్ సమయంలో గూగుల్ సెర్చ్ ట్రెండ్స్ పూర్తిగా మారిపోయాయి. హోమ్ వర్క్ అవుట్, కుకింగ్ రెసిపీస్, ఆన్‌లైన్ క్లాసులు ఎక్కువగా సెర్చ్ చేయబడ్డాయి.",
      "వర్క్ ఫ్రమ్ హోమ్ టూల్స్ జూమ్, గూగుల్ మీట్ కోసం సెర్చ్ వాల్యూమ్ నాటకీయంగా పెరిగింది.",
      "హెల్త్ మరియు ఫిట్‌నెస్ కోసం సెర్చ్ చేసేవారు చాలా ఎక్కువయ్యారు.",
      "మొత్తంమీద, ఇంటర్నెట్ వినియోగం ఇంతకు ముందెన్నడూ లేనంతగా పెరిగింది."
    ]
  },
  {
    id: 134,
    title: "యాపిల్ ఐ ఫోన్ ఎస్ఈ 2 వర్సెస్ ఐఫోన్ 11.. ఏది బెస్ట్?",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop",
    category: "రివ్యూ",
    time: "6 సంవత్సరాల క్రితం",
    fullContent: [
      "ఐఫోన్ SE2 మరియు ఐఫోన్ 11 మధ్య పోలిక చాలా మందికి ఆసక్తికరంగా ఉంటుంది. SE2 చిన్న సైజు, తక్కువ ధర, మరియు A13 బయోనిక్ చిప్ కలిగి ఉంది.",
      "ఐఫోన్ 11 పెద్ద స్క్రీన్, ద్వంద్వ కెమెరా, మరియు ఎక్కువ బ్యాటరీ లైఫ్ కలిగి ఉంది.",
      "మీకు చిన్న ఫోన్ కావాలంటే SE2 మంచి ఎంపిక. మీకు పెద్ద స్క్రీన్ మరియు మంచి కెమెరా కావాలంటే ఐఫోన్ 11 తీసుకోండి.",
      "రెండు ఫోన్లూ ఇప్పటికీ iOS అప్‌డేట్లు పొందుతాయి, కనుక ఇవి ఇప్పటికీ మంచి ఎంపికలే."
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

export default function ReviewsDetailPage() {
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
        <button onClick={() => router.push('/news/Reviews')}>
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
              onClick={() => router.push(`/news/Reviews/${prevArticle.id}`)} 
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
              onClick={() => router.push(`/news/Reviews/${nextArticle.id}`)} 
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
              onClick={() => router.push(`/news/Reviews/${related.id}`)}
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