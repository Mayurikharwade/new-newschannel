'use client'
import { createContext, useState } from 'react'

export const LanguageContext = createContext()

const samplePosts = [
  {
    title: "ఏమిటీ వాట్సాప్ వ్యూ వన్స్ ఫీచర్.. ఎలా వాడుకోవాలో చెప్పే గైడ్",
    slug: "whatsapp-view-once",
    excerpt: "మెసేజింగ్ రూపురేఖలు మార్చేసిన యాప్.. వాట్సాప్ . చదువురానివారు కూడా మెసేజ్ చేయగలిగేలా దీనిలో ఉండే ఐకాన్స్, సింబల్స్, ఫోటో, వీడియో, ఆడియో సపోర్ట్ దీన్ని టాప్ ప్లేస్లో నిలబెట్టాయి. టెలిగ్రామ్...",
    category: "మార్గదర్శిని ( గైడ్ )",
    categorySlug: "Guide/166.cv",
    categoryIcon: true,
    date: "12 నిముషాల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1628141290_WhatsApp-Image-2021-08-05-at-10.39.01-AM.jpeg"
  },
  {
    title: "బీఎస్ఎన్ఎల్ నుంచి బ్రాడ్బ్యాండ్ ఆఫర్.. నెలకు 299 రూపాయలకే 100 జీబీ డేటా",
    slug: "bsnl-broadband-offer",
    excerpt: "ప్రభుత్వ రంగ టెలికం సంస్థ బీఎస్ఎన్ఎల్కు బ్రాడ్బ్యాండ్లో ఇప్పటికీ మంచి వాటానే ఉంది. డీఎస్ఎల్ బ్రాడ్బ్యాండ్ పేరుతో మార్కెట్లో ఉంది...",
    category: "టెలికం",
    categorySlug: "Telecom/110.cv",
    categoryIcon: false,
    date: "5 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1627706783_BSNL-Broadband-offer..-100-Gb-Data-wtih-one-month-Validity-on-299-pack.jpeg"
  },
  {
    title: "మీ పాన్ కార్డ్లో సొంతంగా మార్పులు చేసుకోవడానికి సింపుల్ గైడ్",
    slug: "pan-card-guide",
    excerpt: "మనం ప్రస్తుతం ఎలాంటి ఫైనాన్షియల్ ట్రాన్సాక్షన్లు చేయాలన్నా, ఐటీ ఫైల్ చేయాలన్నా అన్నింటికీ పాన్ కావాలి. పర్మినెంట్ అకౌంట్ నంబర్ (పాన్)లో ఏ మాత్రం తేడా ఉన్నా అది మీకు భవిష్యత్తులో...",
    category: "మార్గదర్శిని ( గైడ్ )",
    categorySlug: "Guide/166.cv",
    categoryIcon: true,
    date: "7 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1627462817_How-to-edit-Pan-Card-on-your-own..-Here-is-the-guide-for-You.jpg"
  },
  {
    title: "3వేల నుంచి 5వేల లోపు ధరలో స్మార్ట్వాచ్ కావాలా? ఇవి చూసేయండి..",
    slug: "smartwatch-guide",
    excerpt: "సెల్ఫోన్ వచ్చి వాచీకి బైబై చెప్పేసింది. కానీ ఇప్పుడు మళ్లీ వాచ్ సందడి చేస్తోంది. అయితే ఇంతకు ముందులా కేవలం టైమ్, డేట్ చూపించడమే కాదు...",
    category: "కొత్త ఉత్పత్తులు",
    categorySlug: "new-gadgets/61.cv",
    categoryIcon: false,
    date: "14 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626855917_5-Best-Smart-Watches-Below-5000-Price-Range.jpg"
  },
  {
    title: "జియోఫోన్ మాదిరిగానే జియోఫోన్ నెక్స్ట్ కూడా సూపర్ హిట్టవుద్దా? ఓ విశ్లేషణ",
    slug: "jiophone-analysis",
    excerpt: "జియో ఫోన్. మొబైల్ నెట్వర్క్ కంపెనీ రిలయన్స్ జియో తన యూజర్ల కోసం తయారుచేసిన ఫీచర్ ఫోన్. ఫేస్బుక్, వాట్సాప్ లాంటివి వాడుకునే అవకాశం...",
    category: "వార్తా విశ్లేషణ",
    categorySlug: "News-Analysys/127.cv",
    categoryIcon: true,
    date: "20 రోజుల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1626337064_Is-JioPhone-Next-will-be-a-big-hit-as-its-predecessor.jpg"
  },
  {
    title: "కరోనా వ్యాక్సినేషన్ కోసం ఆరోగ్యసేతు యాప్లో రిజిస్టర్ కావడం ఎలా ?",
    slug: "vaccine-registration",
    excerpt: "మే 1 నుండి, COVID-19 టీకా కోసం రిజిస్ట్రేషన్ భారతదేశంలోని 18-44 సంవత్సరాల మధ్య ప్రతి వ్యక్తికి అందుబాటులోకి వచ్చింది...",
    category: "ఎలా?",
    categorySlug: "How/125.cv",
    categoryIcon: true,
    date: "2 నెలల క్రితం",
    image: "https://graphics.computervignanam.net/images/uploads/web/8/705300_1622179084_How-to-reschedule-an-appointment.jpg"
  }
]

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('te')
  const [posts] = useState(samplePosts)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, posts }}>
      {children}
    </LanguageContext.Provider>
  )
}