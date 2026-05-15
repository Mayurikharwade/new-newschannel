// app/page.jsx
"use client";
import Banner from '../components/Banner'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import NewsCard from '../components/NewsCard'
import ShortsSlider from '../components/ShortsSlider'
//import { useTranslation } from "react-i18next";
 // Sirf yeh line add karo

const postsData = [
  {
    id: 1,
    title: "ఏమిటీ వాట్సాప్ వ్యూ వన్స్ ఫీచర్.. ఎలా వాడుకోవాలో చెప్పే గైడ్",
    slug: "whatsapp-view-once",
    excerpt: "మెసేజింగ్ రూపురేఖలు మార్చేసిన యాప్.. వాట్సాప్ . చదువురానివారు కూడా మెసేజ్ చేయగలిగేలా దీనిలో ఉండే ఐకాన్స్, సింబల్స్, ఫోటో, వీడియో, ఆడియో సపోర్ట్ దీన్ని టాప్ ప్లేస్లో నిలబెట్టాయి.",
    category: "మార్గదర్శిని ( గైడ్ )",
    categorySlug: "guide",
    hasLogo: true,
    date: "12 నిముషాల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1628141290_WhatsApp-Image-2021-08-05-at-10.39.01-AM.jpeg"
  },
  {
    id: 2,
    title: "మీ పాన్ కార్డ్లో సొంతంగా మార్పులు చేసుకోవడానికి సింపుల్ గైడ్",
    slug: "pan-card-guide",
    excerpt: "మనం ప్రస్తుతం ఎలాంటి ఫైనాన్షియల్ ట్రాన్సాక్షన్లు చేయాలన్నా, ఐటీ ఫైల్ చేయాలన్నా అన్నింటికీ పాన్ కావాలి.",
    category: "మార్గదర్శిని ( గైడ్ )",
    categorySlug: "guide",
    hasLogo: true,
    date: "7 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1627462817_How-to-edit-Pan-Card-on-your-own..-Here-is-the-guide-for-You.jpg"
  },
  {
    id: 3,
    title: "3వేల నుంచి 5వేల లోపు ధరలో స్మార్ట్వాచ్ కావాలా? ఇవి చూసేయండి..",
    slug: "smartwatch-budget",
    excerpt: "సెల్ఫోన్ వచ్చి వాచీకి బైబై చెప్పేసింది. కానీ ఇప్పుడు మళ్లీ వాచ్ సందడి చేస్తోంది.",
    category: "కొత్త ఉత్పత్తులు",
    categorySlug: "new-products",
    hasLogo: false,
    date: "14 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626855917_5-Best-Smart-Watches-Below-5000-Price-Range.jpg"
  },
  {
    id: 4,
    title: "జియోఫోన్ మాదిరిగానే జియోఫోన్ నెక్స్ట్ కూడా సూపర్ హిట్టవుద్దా?",
    slug: "jiophone-next",
    excerpt: "జియో ఫోన్. మొబైల్ నెట్వర్క్ కంపెనీ రిలయన్స్ జియో తన యూజర్ల కోసం తయారుచేసిన ఫీచర్ ఫోన్.",
    category: "వార్తా విశ్లేషణ",
    categorySlug: "analysis",
    hasLogo: true,
    date: "20 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626337064_Is-JioPhone-Next-will-be-a-big-hit-as-its-predecessor.jpg"
  },
  {
    id: 5,
    title: "కరోనా వ్యాక్సినేషన్ కోసం ఆరోగ్యసేతు యాప్లో రిజిస్టర్ కావడం ఎలా ?",
    slug: "vaccine-registration",
    excerpt: "మే 1 నుండి, COVID-19 టీకా కోసం రిజిస్ట్రేషన్ భారతదేశంలోని 18-44 సంవత్సరాల మధ్య ప్రతి వ్యక్తికి అందుబాటులోకి వచ్చింది.",
    category: "ఎలా?",
    categorySlug: "how-to",
    hasLogo: true,
    date: "2 నెలల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1622179084_How-to-reschedule-an-appointment.jpg"
  }
];

export default function HomePage() {
    
  return (
    <>

      
      <Banner />

      <ShortsSlider />
      
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="col-md-container">
          
          {/* LEFT SIDEBAR */}
          <div className="col-md-2">
            <LeftSidebar />
          </div>

          {/* CENTER COLUMN */}
          <div className="col-md-7">
            
            {/* ===== FEATURED VIDEO - SIRF YEH ADD KIYA ===== */}
            
            
            {/* NEWS HEADER - BILKUL SAME */}
            <h1 className="title-v4 news-title-v4">
  తాజా వార్తలు
</h1>
            
            {/* NEWS CARDS - BILKUL SAME, KOI CHANGE NAHI */}
            {postsData.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}

            <ul className="pager">
              <li className="previous"><a href="#">← వెనక్కి</a></li>
              <li className="next margin-right-10"><a href="#">మరిన్ని →</a></li>
            </ul>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-md-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  )
}