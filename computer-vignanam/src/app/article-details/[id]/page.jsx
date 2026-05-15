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

const allPosts = [
  {
    id: 1,
    title: "ఏమిటీ వాట్సాప్ వ్యూ వన్స్ ఫీచర్.. ఎలా వాడుకోవాలో చెప్పే గైడ్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1628141290_WhatsApp-Image-2021-08-05-at-10.39.01-AM.jpeg",
    category: "మార్గదర్శిని ( గైడ్ )",
    date: "12 నిముషాల క్రితం",
    fullContent: [
      "మెసేజింగ్ రూపురేఖలు మార్చేసిన యాప్.. వాట్సాప్. చదువురానివారు కూడా మెసేజ్ చేయగలిగేలా దీనిలో ఉండే ఐకాన్స్, సింబల్స్, ఫోటో, వీడియో, ఆడియో సపోర్ట్ దీన్ని టాప్ ప్లేస్లో నిలబెట్టాయి.",
      "టెలిగ్రామ్ లాంటి ఇతర యాప్స్ వచ్చినా వాట్సాప్ క్రేజ్ ఏ మాత్రం తగ్గలేదు. ఎందుకంటే వాట్సాప్ సింపుల్, సేఫ్ మరియు ఫాస్ట్. ప్రతి నెలా 2 బిలియన్లకు పైగా యూజర్లు వాట్సాప్ ను వాడుతున్నారు.",
      "ఇప్పుడు వాట్సాప్ కొత్త ఫీచర్ తీసుకొచ్చింది - 'వ్యూ వన్స్'. ఈ ఫీచర్ ద్వారా మీరు పంపిన ఫోటో లేదా వీడియోను అవతలి వ్యక్తి ఒక్కసారి మాత్రమే చూడగలరు. స్క్రీన్‌షాట్ తీయడం లేదా రీప్లే చేయడం సాధ్యం కాదు.",
      "ఈ ఫీచర్ ఉపయోగించడానికి, వాట్సాప్ తెరిచి, చాట్ ఎంచుకుని, కెమెరా ఐకాన్ పై క్లిక్ చేసి, ఫోటో లేదా వీడియో సెలక్ట్ చేసిన తర్వాత '1' నంబర్ ఐకాన్ పై క్లిక్ చేయాలి. ఇప్పుడు సెండ్ చేసిన మీడియా ఒక్కసారి మాత్రమే చూడగలరు.",
    ]
  },
  {
    id: 2,
    title: "మీ పాన్ కార్డ్లో సొంతంగా మార్పులు చేసుకోవడానికి సింపుల్ గైడ్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1627462817_How-to-edit-Pan-Card-on-your-own..-Here-is-the-guide-for-You.jpg",
    category: "మార్గదర్శిని ( గైడ్ )",
    date: "7 రోజుల క్రితం",
    fullContent: [
      "మనం ప్రస్తుతం ఎలాంటి ఫైనాన్షియల్ ట్రాన్సాక్షన్లు చేయాలన్నా, ఐటీ ఫైల్ చేయాలన్నా అన్నింటికీ పాన్ కార్డ్ తప్పనిసరి. పాన్ కార్డ్ లో పేరు, చిరునామా, జన్మ తేదీ లాంటి వివరాలు ఉంటాయి.",
      "కాలక్రమేణా ఈ వివరాల్లో మార్పులు రావచ్చు. పెళ్లి తర్వాత పేరు మార్పు, చిరునామా మార్పు వంటివి సాధారణమే. అలాంటి సందర్భాల్లో పాన్ కార్డ్ లో మార్పులు చేసుకోవాల్సి ఉంటుంది.",
      "NSDL లేదా UTIITSL వెబ్‌సైట్ ద్వారా ఆన్‌లైన్ లోనే మార్పులు చేసుకోవచ్చు. మీ ఆధార్ కార్డ్, రిజిస్టర్డ్ మొబైల్ నంబర్ ఉంటే కేవలం కొన్ని నిమిషాల్లో మార్పులు చేసుకోవచ్చు.",
      "ముందుగా NSDL వెబ్‌సైట్‌కు వెళ్లి, 'Changes or Correction in PAN' ఆప్షన్ ఎంచుకోవాలి. తర్వాత ఆధార్ నంబర్, డేట్ ఆఫ్ బర్త్ ఎంటర్ చేసి OTP ద్వారా వెరిఫై చేయాలి. సవరించాల్సిన వివరాలు ఎంచుకుని సబ్మిట్ చేస్తే సరి.",
    ]
  },
  {
    id: 3,
    title: "3వేల నుంచి 5వేల లోపు ధరలో స్మార్ట్వాచ్ కావాలా? ఇవి చూసేయండి..",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626855917_5-Best-Smart-Watches-Below-5000-Price-Range.jpg",
    category: "కొత్త ఉత్పత్తులు",
    date: "14 రోజుల క్రితం",
    fullContent: [
      "సెల్ఫోన్ వచ్చి వాచీకి బైబై చెప్పేసింది. కానీ ఇప్పుడు మళ్లీ వాచ్ సందడి చేస్తోంది. స్మార్ట్వాచ్‌లు ఇప్పుడు చాలా పాపులర్ అవుతున్నాయి.",
      "రూ.3,000 నుండి రూ.5,000 లోపు బడ్జెట్‌లో మంచి స్మార్ట్వాచ్‌లు అందుబాటులో ఉన్నాయి. ఈ ధరలో హార్ట్ రేట్ మానిటర్, SpO2 ట్రాకింగ్, స్లీప్ మానిటరింగ్ వంటి ఫీచర్లు లభిస్తాయి.",
      "Amazfit Bip U Pro, Realme Watch 2 Pro, Redmi Watch 2 Lite, Noise ColorFit Pro 3, Boat Xtend వంటి వాచ్‌లు ఈ బడ్జెట్‌లో బెస్ట్ ఆప్షన్లు.",
      "ఇవి 7-14 రోజుల బ్యాటరీ లైఫ్, 1.4\" డిస్ప్లే, IP68 వాటర్ రెసిస్టెన్స్, 60+ స్పోర్ట్స్ మోడ్‌లు వంటి ఫీచర్లతో వస్తాయి. కొనుగోలు చేసేముందు మీ అవసరాలకు తగిన వాచ్ ఎంచుకోవడం మంచిది.",
    ]
  },
  {
    id: 4,
    title: "జియోఫోన్ మాదిరిగానే జియోఫోన్ నెక్స్ట్ కూడా సూపర్ హిట్టవుద్దా?",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626337064_Is-JioPhone-Next-will-be-a-big-hit-as-its-predecessor.jpg",
    category: "వార్తా విశ్లేషణ",
    date: "20 రోజుల క్రితం",
    fullContent: [
      "జియో ఫోన్. మొబైల్ నెట్వర్క్ కంపెనీ రిలయన్స్ జియో తన యూజర్ల కోసం తయారుచేసిన ఫీచర్ ఫోన్. తక్కువ ధరలో 4G సౌకర్యంతో విడుదలైన ఈ ఫోన్ భారీ విజయం సాధించింది.",
      "ఇప్పుడు జియో తన తదుపరి ఫోన్ 'జియోఫోన్ నెక్స్ట్' ను విడుదల చేయడానికి సిద్ధమవుతోంది. ఇది పూర్తి టచ్‌స్క్రీన్ ఫోన్‌గా వస్తుందని సమాచారం.",
      "జియోఫోన్ నెక్స్ట్ లో వాట్సాప్, యూట్యూబ్, ఫేస్‌బుక్ వంటి యాప్‌లు రన్ చేయగలదు. ధర కూడా చాలా తక్కువగా ఉంటుందని అంచనా.",
      "గూగుల్ తో భాగస్వామ్యంతో రూపొందించబడిన ఈ ఫోన్ ఆండ్రాయిడ్ ఆపరేటింగ్ సిస్టమ్‌తో వస్తుంది. ఇది జియో ఫోన్ మాదిరిగానే సూపర్ హిట్ అవుతుందా అనేది చూడాలి.",
    ]
  },
  {
    id: 5,
    title: "కరోనా వ్యాక్సినేషన్ కోసం ఆరోగ్యసేతు యాప్లో రిజిస్టర్ కావడం ఎలా ?",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1622179084_How-to-reschedule-an-appointment.jpg",
    category: "ఎలా?",
    date: "2 నెలల క్రితం",
    fullContent: [
      "మే 1 నుండి, COVID-19 టీకా కోసం రిజిస్ట్రేషన్ భారతదేశంలోని 18-44 సంవత్సరాల మధ్య ప్రతి వ్యక్తికి అందుబాటులోకి వచ్చింది.",
      "ఆరోగ్యసేతు యాప్ లేదా cowin.gov.in వెబ్‌సైట్ ద్వారా రిజిస్టర్ చేసుకోవచ్చు. మొబైల్ నంబర్, ఆధార్ కార్డ్ వివరాలు అవసరం.",
      "రిజిస్ట్రేషన్ తర్వాత వ్యాక్సినేషన్ సెంటర్ మరియు స్లాట్ ఎంచుకోవాలి. కో-విన్ పోర్టల్‌లో పిన్ కోడ్ ద్వారా దగ్గర్లోని సెంటర్‌ను కనుగొనవచ్చు.",
      "వ్యాక్సిన్ తీసుకున్న తర్వాత సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోవచ్చు. బూస్టర్ డోస్ కోసం కూడా ఇదే ప్రక్రియ ద్వారా రిజిస్టర్ చేసుకోవచ్చు.",
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

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const id = parseInt(params.id);
  const article = allPosts.find((item) => item.id === id);

  if (!article) {
    return (
      <div style={{ maxWidth: "1340px", margin: "0 auto", display: "flex", gap: "30px", padding: "15px 20px 40px", flexWrap: "wrap" }}>
        <div style={{ width: "220px", flexShrink: 0 }}><LeftSidebar /></div>
        <div style={{ flex: 1, textAlign: "center", padding: "50px", background: "#fff" }}>
          <h2>Article not found!</h2>
          <p>ID: {params.id}</p>
          <button onClick={() => router.push("/")}>Go Home</button>
        </div>
        <div style={{ width: "300px", flexShrink: 0 }}><RightSidebar /></div>
      </div>
    );
  }

  const relatedArticles = allPosts.filter((item) => item.id !== id).slice(0, 4);
  const prevArticle = allPosts.find((item) => item.id === id - 1);
  const nextArticle = allPosts.find((item) => item.id === id + 1);
  const currentIndex = allPosts.findIndex((item) => item.id === id) + 1;
  const totalPosts = allPosts.length;

  return (
    <div style={{ maxWidth: "1340px", width: "100%", margin: "0 auto", display: "flex", gap: "30px", alignItems: "flex-start", paddingTop: "15px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px", flexWrap: "wrap" }}>
      <div style={{ width: "220px", minWidth: "200px", flexShrink: 0 }}><LeftSidebar /></div>
      <div style={{ flex: 1, minWidth: "300px", background: "#fff", padding: "0 25px 25px" }}>
        <h1 style={{ color: "#e74c3c", fontSize: "28px", lineHeight: "1.4", marginBottom: "15px", fontWeight: "700" }}>{article.title}</h1>
        <div style={{ width: "100%", background: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <Image src={article.image} alt={article.title} width={800} height={380}
            style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} unoptimized
            onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 0", fontSize: "13px", color: "#777", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span><span>/</span><span>📅 {article.date}</span><span>/</span>
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
            <button onClick={() => router.push(`/article-details/${prevArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>← వెనక్కి</button>
          ) : <div style={{ width: "80px" }} />}
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          {nextArticle ? (
            <button onClick={() => router.push(`/article-details/${nextArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>మరిన్ని →</button>
          ) : <div style={{ width: "80px" }} />}
        </div>
        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>జన రంజకమైన వార్తలు</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/article-details/${related.id}`)}>
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