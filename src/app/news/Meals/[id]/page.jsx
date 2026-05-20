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
    id: 89,
    title: "పేటీఎంకు పేమెంట్ బ్యాంక్ ఆర్డర్.. 5 లక్షల వరకు లోన్",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    category: "టెక్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "పేటీఎం యూజర్లకు కొత్త సర్వీసులు అందుబాటులోకి వచ్చాయి. పేమెంట్ బ్యాంక్ తరపున 5 లక్షల వరకు తక్షణ రుణం అందుబాటులోకి వచ్చింది.",
      "రుణం కోసం కేవలం కొన్ని క్లిక్‌లు మాత్రమే అవసరం. మీ KYC వివరాలు పూర్తి చేయడం ద్వారా రుణ మంజూరు అవుతుంది.",
      "వడ్డీ రేట్లు పోటీగా ఉంటాయి. రుణాన్ని EMI ల ద్వారా తిరిగి చెల్లించవచ్చు.",
      "ఈ ఫీచర్ చిన్న వ్యాపారాలకు చాలా ఉపయోగకరంగా ఉంటుంది."
    ]
  },
  {
    id: 90,
    title: "20వేల లోపు ధరలో బెస్ట్ స్మార్ట్ ఫోన్స్ పార్ట్ -1",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    category: "మొబైల్స్",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "20,000 రూపాయల లోపు ధరలో లభించే బెస్ట్ స్మార్ట్ ఫోన్ల జాబితా ఇది.",
      "ఈ ఫోన్లలో స్నాప్ డ్రాగన్ ప్రాసెసర్, 48MP కెమెరా, 5000mAh బ్యాటరీ, 6GB RAM వంటి ఫీచర్లు ఉంటాయి.",
      "గేమింగ్, ఫోటోగ్రఫీ, మల్టీ టాస్కింగ్ లకు ఈ ఫోన్లు అనువుగా ఉంటాయి."
    ]
  },
  {
    id: 91,
    title: "పేటీఎం పోస్ట్‌పెయిడ్ బిల్లులు.. ఇక ఈజీగా చెల్లించవచ్చు",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    category: "ఈ రాజ్యంలో",
    time: "5 సంవత్సరాల క్రితం",
    fullContent: [
      "పేటీఎం యాప్ ద్వారా పోస్ట్‌పెయిడ్ బిల్లులు చెల్లించడం మరింత సులభం అయ్యింది.",
      "యాప్ లో 'మొబైల్ రీఛార్జి' సెక్షన్‌లోకి వెళ్లి, పోస్ట్‌పెయిడ్ ఆప్షన్ ఎంచుకోండి.",
      "మీ ఫోన్ నంబర్ ను నమోదు చేసి, చెల్లించాల్సిన బిల్లు మొత్తాన్ని పే చేయండి."
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

export default function MealsDetailPage() {
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
        <button onClick={() => router.push('/news/Meals')}>Go Back</button>
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

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0", padding: "15px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          {prevArticle ? (
            <button onClick={() => router.push(`/news/Meals/${prevArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              ← వెనక్కి
            </button>
          ) : <div style={{ width: "80px" }} />}
          
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          
          {nextArticle ? (
            <button onClick={() => router.push(`/news/Meals/${nextArticle.id}`)} 
              style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>
              మరిన్ని →
            </button>
          ) : <div style={{ width: "80px" }} />}
        </div>

        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>
          జన రంజకమైన వార్తలు
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/news/Meals/${related.id}`)}>
              <Image src={related.image} alt={related.title} width={280} height={160} style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} unoptimized
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