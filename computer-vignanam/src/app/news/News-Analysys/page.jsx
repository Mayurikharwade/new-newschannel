"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const cards = [
  {
    id: 0,
    title: "జియోఫోన్ మాదిరిగానే జియోఫోన్ నెక్స్ట్ కూడా సూపర్ హిట్టవుద్దా? ఓ విశ్లేషణ",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626337064_Is-JioPhone-Next-will-be-a-big-hit-as-its-predecessor.jpg",
    desc: "జియోఫోన్ నెక్స్ట్ గురించి పూర్తి విశ్లేషణ మరియు ఫీచర్ల వివరాలు.",
    fullContent: [
      "జియో ఫోన్ మొబైల్ నెట్వర్క్స్ కంపెనీ రిలయన్స్ జియో తన వినియోగదారుల కోసం తయారుచేసిన ఫీచర్ ఫోన్.",
      "జియోఫోన్ నెక్స్ట్ అనేది కొత్త జనరేషన్ ఫీచర్ ఫోన్."
    ]
  },
  {
    id: 1,
    title: "వాట్సాప్ ప్రైవసీ పాలసీపై కోర్టుకెళ్లిన ప్రభుత్వం.. ఏం జరుగుతోంది?",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1616659942_whatsapp-hc.jpg",
    desc: "వాట్సాప్ కొత్త ప్రైవసీ పాలసీపై పూర్తి వివరాలు.",
    fullContent: [
      "వాట్సాప్ కొత్త ప్రైవసీ పాలసీ వినియోగదారుల డేటాను ఫేస్బుక్తో షేర్ చేసుకునేలా ఉంది.",
      "దీంతో ప్రభుత్వం వెంటనే స్పందించి ఈ విషయాన్ని కోర్టుకు తీసుకెళ్లింది."
    ]
  },
  {
    id: 2,
    title: "2022 నాటికి ఇండియాలో 5జీ సేవలు వస్తాయంటున్న ప్రభుత్వం..",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1612880014_5G-Services-roll-out-in-india-in-starting-of-2020..-Govt.-tells-parliament.jpeg",
    desc: "2022 నాటికి దేశంలో 5జీ సేవలు ప్రారంభం అవుతాయి.",
    fullContent: [
      "5G సేవలు దేశంలో విప్లవాత్మకమైన మార్పులు తీసుకురానున్నాయి.",
      "చాలా వేగంగా డౌన్లోడ్, అప్లోడ్ స్పీడ్ లభిస్తుంది."
    ]
  },
  {
    id: 3,
    title: "వాట్సాప్ తొందరపాటు.. సిగ్నల్ పంట పండించిందా",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/whastapp-Signal-app-raise-in-late-night.jpg",
    desc: "వాట్సాప్ ప్రైవసీ పాలసీ వల్ల యూజర్లు సిగ్నల్ యాప్ వైపు మొగ్గు చూపుతున్నారు.",
    fullContent: [
      "వాట్సాప్ ప్రైవసీ పాలసీ వల్ల చాలా మంది యూజర్లు సిగ్నల్ యాప్కు మారుతున్నారు.",
      "సిగ్నల్ యాప్ డౌన్లోడ్‌లు రికార్డు స్థాయిలో పెరిగాయి."
    ]
  },
  {
    id: 4,
    title: "పేటీఎమ్‌కు ఏడో సంవత్సరమూ నష్టాలే.. కారణాలపై ఓ విశ్లేషణ",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1609308698_PayTm-losses-in-7th-consecutive-year..-what-is-the-resaon.jpg",
    desc: "పేటీఎమ్ వరుసగా ఏడో సంవత్సరం నష్టాలను చవిచూస్తోంది.",
    fullContent: [
      "పేటీఎమ్ నిరంతర నష్టాలకు కారణం పెరుగుతున్న పోటీ.",
      "గూగుల్ పే, ఫోన్ పే లాంటి యాప్స్ మార్కెట్‌లో ఆధిపత్యం చూపుతున్నాయి."
    ]
  },
  {
    id: 5,
    title: "ఇన్ బ్రాండ్‌తో మైక్రోమ్యాక్స్ సెకండ్ ఇన్నింగ్స్",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1604576448_Micromax-Micromax-re-entry-Micromax-smart-phones.jpeg",
    desc: "తిరిగి మార్కెట్‌లోకి వచ్చిన మైక్రోమ్యాక్స్ ఫోన్లు.",
    fullContent: [
      "మైక్రోమ్యాక్స్ తిరిగి ఇండియన్ మార్కెట్‌లోకి ప్రవేశించింది.",
      "కొత్త ఫోన్లు గ్రేట్ ఫీచర్లతో తక్కువ ధరలో వస్తున్నాయి."
    ]
  },
];

// Share function for social icons
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

export default function NewsAnalysisPage() {
  return (
    <div
      style={{
        background: "#ececec",
        minHeight: "100vh",
        padding: "25px 35px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "22px",
        }}
      >
        {cards.map((item) => (
          <Link
            href={`/news/News-Analysys/${item.id}`}
            key={item.id}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#f5f5f5",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <Image
                src={item.image}
                width={420}
                height={260}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
                unoptimized
              />

              <div style={{ padding: "18px 12px" }}>
                <h2
                  style={{
                    color: "#1357d8",
                    fontSize: "15px",
                    lineHeight: "28px",
                    marginBottom: "12px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "0 8px",
                    wordBreak: "break-word",
                  }}
                >
                  {item.title}
                </h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                    color: "#888",
                    fontSize: "13px",
                  }}
                >
                  <span>వార్తా విశ్లేషణ</span>
                  <span>/</span>
                  <span>5 సంవత్సరాల క్రితం</span>
                </div>

                {/* Working Social Icons - Like Detail Page */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    marginTop: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <FaFacebookF
                    color="#1877f2"
                    size={16}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      shareOnSocial('facebook', item.title, window.location.href);
                    }}
                  />
                  <FaTwitter
                    color="#1da1f2"
                    size={16}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      shareOnSocial('twitter', item.title, window.location.href);
                    }}
                  />
                  <FaWhatsapp
                    color="#25d366"
                    size={16}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      shareOnSocial('whatsapp', item.title, window.location.href);
                    }}
                  />
                  <FaTelegramPlane
                    color="#229ED9"
                    size={16}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      shareOnSocial('telegram', item.title, window.location.href);
                    }}
                  />
                  <MdEmail
                    color="#666"
                    size={16}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      shareOnSocial('email', item.title, window.location.href);
                    }}
                  />
                </div>

                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    lineHeight: "28px",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}