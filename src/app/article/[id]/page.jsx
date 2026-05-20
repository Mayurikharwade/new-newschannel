"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  // andhra-pradesh (1-6)
  { id: 1, title: "అమరావతి నిర్మాణంలో సాంకేతికత", image: "https://images.unsplash.com/photo-1598905242497-06b5ee5ee98d?w=800", category: "andhra-pradesh", time: "1 రోజు క్రితం", fullContent: ["అమరావతి రాజధాని నిర్మాణంలో ఆధునిక సాంకేతికతను విస్తృతంగా ఉపయోగిస్తున్నారు.", "డ్రోన్ సర్వేలు, 3D మ్యాపింగ్, GIS టెక్నాలజీతో నిర్మాణ పనులు జరుగుతున్నాయి.", "స్మార్ట్ సిటీ కాన్సెప్ట్‌తో అన్ని మౌలిక సదుపాయాలు డిజిటల్‌గా అనుసంధానం చేయబడుతున్నాయి.", "భవిష్యత్తులో ఇది దేశంలోనే అత్యంత ఆధునిక రాజధానిగా నిలుస్తుందని నిపుణులు భావిస్తున్నారు."] },
  { id: 2, title: "విశాఖ ఐటీ హబ్ అభివృద్ధి", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", category: "andhra-pradesh", time: "2 రోజుల క్రితం", fullContent: ["విశాఖపట్నం సిటీ ఐటీ హబ్‌గా వేగంగా అభివృద్ధి చెందుతోంది.", "TCS, Wipro, Infosys వంటి పెద్ద కంపెనీలు ఇక్కడ క్యాంపస్‌లు ఏర్పాటు చేశాయి.", "రాష్ట్ర ప్రభుత్వం ఐటీ పాలసీతో మరిన్ని కంపెనీలను ఆకర్షిస్తోంది.", "విశాఖ ఐటీ సెజ్‌లో 50,000+ ఉద్యోగాలు లభించే అవకాశం ఉంది."] },
  { id: 3, title: "తిరుపతి స్మార్ట్ సిటీ", image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800", category: "andhra-pradesh", time: "3 రోజుల క్రితం", fullContent: ["తిరుపతి స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు శరవేగంగా జరుగుతున్నాయి.", "స్మార్ట్ రోడ్లు, WiFi జోన్‌లు, సీసీటీవీ నెట్‌వర్క్ ఏర్పాటు చేయబడుతున్నాయి.", "ప్రాజెక్ట్ పూర్తయితే తిరుపతి దక్షిణ భారతదేశంలోనే మోడల్ స్మార్ట్ సిటీగా నిలుస్తుంది."] },
  { id: 4, title: "కర్నూలు సోలార్ ప్లాంట్", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800", category: "andhra-pradesh", time: "4 రోజుల క్రితం", fullContent: ["కర్నూలు జిల్లాలో భారీ సోలార్ విద్యుత్ ప్లాంట్ నిర్మాణం పూర్తయింది.", "1000 మెగావాట్ల సామర్థ్యం కలిగిన ఈ ప్లాంట్ దేశంలోనే అతిపెద్ద సోలార్ పార్కుల్లో ఒకటి.", "లక్షలాది ఇళ్లకు స్వచ్ఛమైన విద్యుత్ సరఫరా అవుతుంది."] },
  { id: 5, title: "గోదావరి డిజిటల్ వ్యవసాయం", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800", category: "andhra-pradesh", time: "5 రోజుల క్రితం", fullContent: ["గోదావరి జిల్లాల్లో రైతులు డిజిటల్ వ్యవసాయ పద్ధతులు అవలంబిస్తున్నారు.", "వాతావరణ సూచనలు, మార్కెట్ ధరలు మొబైల్ యాప్‌ల ద్వారా పొందుతున్నారు.", "డ్రోన్లు, IoT సెన్సర్‌లతో పంటలను మానిటర్ చేస్తున్నారు."] },
  { id: 6, title: "ఏపీలో డిజిటల్ క్లాస్ రూమ్‌లు", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", category: "andhra-pradesh", time: "6 రోజుల క్రితం", fullContent: ["ప్రభుత్వ పాఠశాలల్లో డిజిటల్ క్లాస్ రూమ్‌లు ఏర్పాటు చేస్తున్నారు.", "స్మార్ట్ బోర్డులు, ప్రొజెక్టర్లు, ట్యాబ్‌లతో నాణ్యమైన విద్య అందిస్తున్నారు.", "5000+ పాఠశాలలు లబ్ధి పొందనున్నాయి."] },
  // telangana (7-12)
  { id: 7, title: "హైదరాబాద్ ఐటీ అభివృద్ధి", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", category: "telangana", time: "1 రోజు క్రితం", fullContent: ["హైదరాబాద్‌లో ఐటీ రంగం వేగంగా అభివృద్ధి చెందుతోంది.", "ప్రముఖ కంపెనీలు ఇక్కడ కార్యాలయాలు ప్రారంభించాయి.", "స్టార్టప్‌లకు అనువైన వాతావరణం ఏర్పడింది."] },
  { id: 8, title: "టీ-హబ్ యువత ఉపాధి", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", category: "telangana", time: "2 రోజుల క్రితం", fullContent: ["టీ-హబ్ ద్వారా యువతకు ఉపాధి అవకాశాలు లభిస్తున్నాయి.", "ప్రతి సంవత్సరం వేలాది మందికి శిక్షణ ఇస్తున్నారు.", "ప్రభుత్వం టీ-హబ్‌ను మరింత విస్తరించనుంది."] },
  { id: 9, title: "స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", category: "telangana", time: "3 రోజుల క్రితం", fullContent: ["తెలంగాణలో స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు శరవేగంగా జరుగుతున్నాయి.", "డిజిటల్ మౌలిక సదుపాయాలు ఏర్పాటు చేస్తున్నారు.", "ప్రజలకు మెరుగైన సేవలు అందించడమే లక్ష్యం."] },
  { id: 10, title: "స్టార్టప్ ప్రోత్సాహకాలు", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "telangana", time: "4 రోజుల క్రితం", fullContent: ["కొత్త స్టార్టప్‌లకు ప్రభుత్వం ప్రోత్సాహకాలు అందిస్తోంది.", "టీ-హబ్ ఇంక్యుబేటర్‌లో ఉచిత స్థలం పొందవచ్చు.", "ఫండింగ్ కోసం పెట్టుబడిదారులతో అనుసంధానం చేస్తారు."] },
  { id: 11, title: "డిజిటల్ విద్యా సదుపాయాలు", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800", category: "telangana", time: "5 రోజుల క్రితం", fullContent: ["తెలంగాణాలో డిజిటల్ విద్యా సదుపాయాలు పెరిగాయి.", "ప్రతి పాఠశాలలో కంప్యూటర్ ల్యాబ్‌లు ఏర్పాటు చేస్తున్నారు.", "విద్యార్థులకు ఉచిత ట్యాబ్‌లు పంపిణీ చేస్తున్నారు."] },
  { id: 12, title: "గ్రామీణ డిజిటలైజేషన్", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800", category: "telangana", time: "6 రోజుల క్రితం", fullContent: ["గ్రామీణ ప్రాంతాల్లో డిజిటలైజేషన్ ప్రారంభం.", "ఇంటర్నెట్ కనెక్టివిటీ ప్రతి గ్రామానికి విస్తరించింది.", "డిజిటల్ లావాదేవీలు ప్రోత్సహించబడుతున్నాయి."] },
  // national (13-18)
  { id: 13, title: "డిజిటల్ ఇండియా విప్లవం", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", category: "national", time: "1 రోజు క్రితం", fullContent: ["భారతదేశంలో డిజిటల్ విప్లవం వేగంగా జరుగుతోంది.", "డిజిటల్ ఇండియా పథకం దేశవ్యాప్తంగా విస్తరించింది.", "ప్రతి పౌరుడికి డిజిటల్ సేవలు అందించడమే లక్ష్యం."] },
  { id: 14, title: "5G సేవలు ప్రారంభం", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800", category: "national", time: "2 రోజుల క్రితం", fullContent: ["దేశవ్యాప్తంగా 5G సేవలు ప్రారంభం అయ్యాయి.", "జియో, ఎయిర్‌టెల్ 5G సేవలు అందిస్తున్నాయి.", "5G వల్ల ఇంటర్నెట్ స్పీడ్ 10 రెట్లు పెరిగింది."] },
  { id: 15, title: "డిజిటల్ ఇండియా పథకం", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800", category: "national", time: "3 రోజుల క్రితం", fullContent: ["డిజిటల్ ఇండియా పథకం విస్తరణ.", "గ్రామీణ ప్రాంతాల్లో డిజిటల్ సాక్షరత పెరిగింది.", "ఆన్‌లైన్ సేవలు అందుబాటులోకి వచ్చాయి."] },
  { id: 16, title: "సైబర్ భద్రత చట్టాలు", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800", category: "national", time: "4 రోజుల క్రితం", fullContent: ["సైబర్ భద్రత కోసం కొత్త చట్టాలు రూపొందించారు.", "డేటా ప్రొటెక్షన్ బిల్లు పార్లమెంట్‌లో పాస్ అయింది.", "సైబర్ నేరాలకు కఠిన శిక్షలు విధించనున్నారు."] },
  { id: 17, title: "AI టెక్నాలజీ అభివృద్ధి", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800", category: "national", time: "5 రోజుల క్రితం", fullContent: ["దేశంలో AI టెక్నాలజీ వేగంగా అభివృద్ధి చెందుతోంది.", "ప్రభుత్వం AI మిషన్‌ను ప్రారంభించింది.", "యువతకు AIలో ఉద్యోగ అవకాశాలు పెరిగాయి."] },
  { id: 18, title: "స్టార్టప్ ఇండియా విజయం", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", category: "national", time: "6 రోజుల క్రితం", fullContent: ["స్టార్టప్ ఇండియా భారీ విజయం సాధించింది.", "భారతదేశం ప్రపంచంలో 3వ అతిపెద్ద స్టార్టప్ హబ్.", "యునికార్న్ స్టార్టప్‌ల సంఖ్య 100 దాటింది."] },
  // international (19-24)
  { id: 19, title: "గూగుల్ AI కొత్త ఫీచర్", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800", category: "international", time: "1 రోజు క్రితం", fullContent: ["గూగుల్ AI కొత్త ఫీచర్ విడుదల చేసింది.", "జెమిని AI మోడల్ అన్ని గూగుల్ ప్రొడక్ట్స్‌లో అందుబాటులోకి వచ్చింది.", "AI చాట్‌బోట్ ఇప్పుడు మరింత స్మార్ట్‌గా మారింది."] },
  { id: 20, title: "యాపిల్ విజన్ ప్రో లాంచ్", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800", category: "international", time: "2 రోజుల క్రితం", fullContent: ["యాపిల్ విజన్ ప్రో ప్రపంచవ్యాప్తంగా లాంచ్ చేయబడింది.", "VR హెడ్‌సెట్ మార్కెట్‌లో కొత్త విప్లవం.", "ధర $3499 నుండి ప్రారంభం."] },
  { id: 21, title: "టెస్లా సైబర్ట్రక్", image: "https://images.unsplash.com/photo-1612832021023-7b3c5a2f1b22?w=800", category: "international", time: "3 రోజుల క్రితం", fullContent: ["టెస్లా సైబర్ట్రక్ విడుదల చేయబడింది.", "ఎలక్ట్రిక్ ట్రక్ మార్కెట్‌లో కొత్త ట్రెండ్.", "ధర $60,990 నుండి ప్రారంభం."] },
  { id: 22, title: "మైక్రోసాఫ్ట్ కొత్త OS", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800", category: "international", time: "4 రోజుల క్రితం", fullContent: ["మైక్రోసాఫ్ట్ కొత్త ఆపరేటింగ్ సిస్టమ్ విడుదల.", "Windows 12 AI ఫీచర్లతో వస్తోంది.", "కోపైలట్ AI పూర్తిగా OSలో ఇంటిగ్రేట్ అయింది."] },
  { id: 23, title: "సైబర్ భద్రత ఒప్పందం", image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=800", category: "international", time: "5 రోజుల క్రితం", fullContent: ["అంతర్జాతీయ సైబర్ భద్రత ఒప్పందం కుదిరింది.", "50 దేశాలు సంతకం చేశాయి.", "సైబర్ దాడులను నిరోధించడమే లక్ష్యం."] },
  { id: 24, title: "గ్లోబల్ AI సమ్మిట్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "international", time: "6 రోజుల క్రితం", fullContent: ["గ్లోబల్ AI సమ్మిట్‌లో కొత్త టెక్నాలజీలు ప్రదర్శించారు.", "AI సేఫ్టీపై కొత్త గైడ్‌లైన్స్ విడుదల.", "భారత్ నుంచి పలు స్టార్టప్‌లు పాల్గొన్నాయి."] },
  // telecom (25-30)
  { id: 25, title: "5G స్పెక్ట్రమ్ ఆక్షన్", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800", category: "telecom", time: "1 రోజు క్రితం", fullContent: ["భారతదేశంలో 5G స్పెక్ట్రమ్ ఆక్షన్ పూర్తయింది.", "జియో అత్యధిక స్పెక్ట్రమ్ కొనుగోలు చేసింది.", "త్వరలో అన్ని నగరాల్లో 5G అందుబాటులోకి రానుంది."] },
  { id: 26, title: "BSNL కొత్త ప్లాన్స్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "telecom", time: "2 రోజుల క్రితం", fullContent: ["BSNL ఆకర్షణీయ కొత్త ప్లాన్స్ విడుదల చేసింది.", "రూ.199లో అన్‌లిమిటెడ్ డేటా.", "4G సేవలు దేశవ్యాప్తంగా ప్రారంభం."] },
  { id: 27, title: "జియో ఎయిర్ ఫైబర్", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800", category: "telecom", time: "3 రోజుల క్రితం", fullContent: ["జియో ఎయిర్ ఫైబర్ దేశవ్యాప్తంగా ప్రారంభం.", "వైర్ లేకుండా హై-స్పీడ్ ఇంటర్నెట్.", "ధర రూ.599 నుండి ప్రారంభం."] },
  { id: 28, title: "VI కొత్త ఆఫర్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", category: "telecom", time: "4 రోజుల క్రితం", fullContent: ["వోడాఫోన్-ఐడియా కొత్త ఆఫర్ ప్రకటించింది.", "రూ.299లో 1.5GB/day డేటా.", "OTT సబ్స్క్రిప్షన్స్ ఫ్రీగా అందిస్తున్నారు."] },
  { id: 29, title: "శాటిలైట్ ఇంటర్నెట్", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800", category: "telecom", time: "5 రోజుల క్రితం", fullContent: ["శాటిలైట్ ఇంటర్నెట్ సేవలు త్వరలో ప్రారంభం.", "స్టార్‌లింక్ భారత్‌లో అనుమతి కోసం ఎదురుచూస్తోంది.", "మారుమూల ప్రాంతాలకు ఇంటర్నెట్ అందుబాటులోకి రానుంది."] },
  { id: 30, title: "టెలికాం భవిష్యత్తు", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", category: "telecom", time: "6 రోజుల క్రితం", fullContent: ["టెలికాం రంగం భవిష్యత్తు ఉజ్వలంగా ఉంది.", "6G టెక్నాలజీపై పరిశోధనలు ప్రారంభం.", "భారత్ టెలికాం హబ్‌గా మారనుంది."] },
  // products (31-36)
  { id: 31, title: "కొత్త మొబైల్ లాంచ్", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800", category: "products", time: "1 రోజు క్రితం", fullContent: ["సరికొత్త స్మార్ట్‌ఫోన్ మార్కెట్‌లోకి వచ్చింది.", "6.7\" AMOLED డిస్ప్లే, 108MP కెమెరా.", "ధర రూ.25,999 నుండి ప్రారంభం."] },
  { id: 32, title: "ల్యాప్‌టాప్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800", category: "products", time: "2 రోజుల క్రితం", fullContent: ["బెస్ట్ ల్యాప్‌టాప్ డీల్స్ అందుబాటులో ఉన్నాయి.", "అమెజాన్ గ్రేట్ ఇండియన్ ఫెస్టివల్ సేల్.", "50% వరకు డిస్కౌంట్."] },
  { id: 33, title: "టాబ్లెట్ రివ్యూ", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800", category: "products", time: "3 రోజుల క్రితం", fullContent: ["కొత్త టాబ్లెట్ పూర్తి రివ్యూ.", "11\" డిస్ప్లే, స్టైలస్ సపోర్ట్.", "స్టూడెంట్స్ కోసం బెస్ట్ ఆప్షన్."] },
  { id: 34, title: "గేమింగ్ పిసి బిల్డ్", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800", category: "products", time: "4 రోజుల క్రితం", fullContent: ["బడ్జెట్‌లో గేమింగ్ పిసి బిల్డ్ ఎలా చేయాలి.", "RTX 4060, i5 ప్రాసెసర్.", "రూ.50,000లో బెస్ట్ గేమింగ్ పిసి."] },
  { id: 35, title: "న్యూ సాఫ్ట్‌వేర్ టూల్స్", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800", category: "products", time: "5 రోజుల క్రితం", fullContent: ["2024లో తప్పనిసరిగా వాడాల్సిన సాఫ్ట్‌వేర్.", "AI టూల్స్, ప్రొడక్టివిటీ యాప్స్.", "ఫ్రీ మరియు పెయిడ్ ఆప్షన్లు."] },
  { id: 36, title: "యాప్ రివ్యూలు", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800", category: "products", time: "6 రోజుల క్రితం", fullContent: ["ఈ వారం టాప్ యాప్స్ రివ్యూ.", "AI ఫోటో ఎడిటర్, ఫిట్‌నెస్ యాప్.", "ఉచిత vs ప్రీమియం పోలిక."] },
  // mobiles-tablets (37-42)
  { id: 37, title: "శాంసంగ్ గెలాక్సీ S24", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800", category: "mobiles-tablets", time: "1 రోజు క్రితం", fullContent: ["శాంసంగ్ కొత్త ఫ్లాగ్‌షిప్ ఫోన్ విడుదల.", "AI ఫీచర్లతో గెలాక్సీ S24.", "కెమెరా, బ్యాటరీ లైఫ్ మెరుగైనవి."] },
  { id: 38, title: "iPhone 16 ఫీచర్లు", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800", category: "mobiles-tablets", time: "2 రోజుల క్రితం", fullContent: ["iPhone 16 కొత్త ఫీచర్లు లీక్.", "48MP కెమెరా, A18 చిప్.", "USB-C పోర్ట్ కన్ఫర్మ్."] },
  { id: 39, title: "టాబ్లెట్ కొనుగోలు గైడ్", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800", category: "mobiles-tablets", time: "3 రోజుల క్రితం", fullContent: ["మంచి టాబ్లెట్ ఎలా ఎంచుకోవాలి.", "బడ్జెట్, ఫీచర్లు, బ్రాండ్.", "టాప్ 5 టాబ్లెట్స్ లిస్ట్."] },
  { id: 40, title: "5G మొబైల్స్ లిస్ట్", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800", category: "mobiles-tablets", time: "4 రోజుల క్రితం", fullContent: ["బెస్ట్ 5G ఫోన్లు తక్కువ ధరలో.", "రూ.10,000 లోపు 5G ఫోన్లు.", "టాప్ 10 లిస్ట్."] },
  { id: 41, title: "ఫోల్డబుల్ ఫోన్లు", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800", category: "mobiles-tablets", time: "5 రోజుల క్రితం", fullContent: ["2024లో బెస్ట్ ఫోల్డబుల్ ఫోన్లు.", "శాంసంగ్, వన్‌ప్లస్, టెక్నో.", "ధరలు, ఫీచర్లు పోలిక."] },
  { id: 42, title: "టాబ్లెట్ vs ల్యాప్‌టాప్", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800", category: "mobiles-tablets", time: "6 రోజుల క్రితం", fullContent: ["టాబ్లెట్ లేదా ల్యాప్‌టాప్ ఏది బెస్ట్.", "స్టూడెంట్స్ కోసం గైడ్.", "పని, చదువు, గేమింగ్ ప్రకారం ఎంపిక."] },
  // pcs-laptops (43-48)
  { id: 43, title: "బడ్జెట్ గేమింగ్ పిసి", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800", category: "pcs-laptops", time: "1 రోజు క్రితం", fullContent: ["రూ.50,000లో గేమింగ్ పిసి బిల్డ్ చేయండి.", "RTX 3050, i5-12400F.", "పూర్తి గైడ్."] },
  { id: 44, title: "మ్యాక్‌బుక్ vs విండోస్", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800", category: "pcs-laptops", time: "2 రోజుల క్రితం", fullContent: ["మ్యాక్‌బుక్ లేదా విండోస్ ల్యాప్‌టాప్ ఏది బెటర్.", "పని, క్రియేటివిటీ ప్రకారం ఎంపిక.", "ధరల పోలిక."] },
  { id: 45, title: "ల్యాప్‌టాప్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800", category: "pcs-laptops", time: "3 రోజుల క్రితం", fullContent: ["అమెజాన్, ఫ్లిప్‌కార్ట్ లో బెస్ట్ డీల్స్.", "HP, Dell, Lenovo డిస్కౌంట్.", "రూ.30,000 లోపు."] },
  { id: 46, title: "పిసి క్లీనింగ్ టిప్స్", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800", category: "pcs-laptops", time: "4 రోజుల క్రితం", fullContent: ["పిసి స్పీడ్ పెంచడానికి టిప్స్.", "క్యాష్ క్లీనింగ్, అన్‌నెసెసరీ ఫైల్స్ డిలీట్.", "SSD అప్‌గ్రేడ్."] },
  { id: 47, title: "విండోస్ 12 అప్‌డేట్", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800", category: "pcs-laptops", time: "5 రోజుల క్రితం", fullContent: ["విండోస్ 12 కొత్త ఫీచర్లు లీక్.", "AI ఇంటిగ్రేషన్, కొత్త UI.", "రిలీజ్ డేట్ వివరాలు."] },
  { id: 48, title: "SSD vs HDD", image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800", category: "pcs-laptops", time: "6 రోజుల క్రితం", fullContent: ["SSD లేదా HDD ఏది బెటర్.", "స్పీడ్, ధర, లైఫ్‌స్పాన్ పోలిక.", "అప్‌గ్రేడ్ గైడ్."] },
  // software (49-54)
  { id: 49, title: "బెస్ట్ యాంటీవైరస్", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800", category: "software", time: "1 రోజు క్రితం", fullContent: ["2024లో టాప్ యాంటీవైరస్ సాఫ్ట్‌వేర్.", "ఫ్రీ vs పెయిడ్ పోలిక.", "మీ PC కి ఏది బెస్ట్?."] },
  { id: 50, title: "వీడియో ఎడిటింగ్ టూల్స్", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800", category: "software", time: "2 రోజుల క్రితం", fullContent: ["ఫ్రీ వీడియో ఎడిటింగ్ సాఫ్ట్‌వేర్.", "CapCut, DaVinci Resolve.", "ప్రొఫెషనల్ ఎడిటింగ్ టిప్స్."] },
  { id: 51, title: "ఫోటోషాప్ ఆల్టర్నేటివ్", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800", category: "software", time: "3 రోజుల క్రితం", fullContent: ["ఫోటోషాప్ కి బెస్ట్ ఫ్రీ ఆల్టర్నేటివ్.", "GIMP, Photopea, Canva.", "ఫోటో ఎడిటింగ్ సులభంగా."] },
  { id: 52, title: "ప్రోగ్రామింగ్ టూల్స్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "software", time: "4 రోజుల క్రితం", fullContent: ["డెవలపర్ల కోసం బెస్ట్ టూల్స్.", "VS Code, GitHub Copilot.", "ప్రొడక్టివిటీ పెంచే IDEs."] },
  { id: 53, title: "క్లౌడ్ స్టోరేజ్", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800", category: "software", time: "5 రోజుల క్రితం", fullContent: ["బెస్ట్ ఫ్రీ క్లౌడ్ స్టోరేజ్ సర్వీసులు.", "Google Drive, Dropbox, OneDrive.", "ఏది ఎక్కువ స్పేస్ ఇస్తుంది."] },
  { id: 54, title: "పాస్‌వర్డ్ మేనేజర్", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800", category: "software", time: "6 రోజుల క్రితం", fullContent: ["సేఫ్ పాస్‌వర్డ్ మేనేజర్ యాప్స్.", "Bitwarden, LastPass.", "పాస్‌వర్డ్ సెక్యూరిటీ టిప్స్."] },
  // apps (55-60)
  { id: 55, title: "వాట్సాప్ కొత్త ఫీచర్", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800", category: "apps", time: "1 రోజు క్రితం", fullContent: ["వాట్సాప్‌లో కొత్త సీక్రెట్ చాట్ ఫీచర్.", "మెసేజ్‌లు ఆటోమేటిక్‌గా డిలీట్.", "ప్రైవసీ ఫీచర్లు మెరుగయ్యాయి."] },
  { id: 56, title: "ఇన్‌స్టాగ్రామ్ అప్‌డేట్", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800", category: "apps", time: "2 రోజుల క్రితం", fullContent: ["ఇన్‌స్టాగ్రామ్ కొత్త రీల్స్ ఫీచర్.", "AI ఎడిటింగ్ టూల్స్.", "క్రియేటర్‌లకు కొత్త అవకాశాలు."] },
  { id: 57, title: "ఫిట్‌నెస్ యాప్స్", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800", category: "apps", time: "3 రోజుల క్రితం", fullContent: ["హెల్త్ ట్రాకింగ్ కోసం బెస్ట్ యాప్స్.", "Google Fit, HealthifyMe.", "ఫ్రీ vs ప్రీమియం పోలిక."] },
  { id: 58, title: "యూట్యూబ్ ట్రిక్స్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", category: "apps", time: "4 రోజుల క్రితం", fullContent: ["యూట్యూబ్ సీక్రెట్ ట్రిక్స్ తెలుసుకోండి.", "పిక్చర్-ఇన్-పిక్చర్, షార్ట్‌కట్స్.", "డేటా సేవింగ్ టిప్స్."] },
  { id: 59, title: "ట్విట్టర్ స్పేసెస్", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800", category: "apps", time: "5 రోజుల క్రితం", fullContent: ["ట్విట్టర్ స్పేసెస్ ఎలా వాడాలి.", "లైవ్ ఆడియో చాట్ ఫీచర్.", "హోస్ట్ మరియు పార్టిసిపెంట్ గైడ్."] },
  { id: 60, title: "క్యాష్‌లెస్ పేమెంట్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "apps", time: "6 రోజుల క్రితం", fullContent: ["బెస్ట్ UPI యాప్స్ లిస్ట్.", "Google Pay, PhonePe, Paytm.", "సేఫ్టీ ఫీచర్లు పోలిక."] },
  // internet (61-66)
  { id: 61, title: "WiFi స్పీడ్ పెంచడం", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800", category: "internet", time: "1 రోజు క్రితం", fullContent: ["ఇంట్లో WiFi స్పీడ్ పెంచే టిప్స్.", "రౌటర్ ప్లేస్‌మెంట్, ఛానెల్ సెట్టింగ్స్.", "మెష్ WiFi సిస్టమ్ ప్రయోజనాలు."] },
  { id: 62, title: "VPN అవసరమా", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800", category: "internet", time: "2 రోజుల క్రితం", fullContent: ["VPN ఎందుకు వాడాలి.", "ప్రైవసీ, సెక్యూరిటీ ప్రయోజనాలు.", "బెస్ట్ ఫ్రీ VPNలు."] },
  { id: 63, title: "ఫిషింగ్ స్కామ్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "internet", time: "3 రోజుల క్రితం", fullContent: ["ఫిషింగ్ స్కామ్ నుంచి ఎలా రక్షించుకోవాలి.", "ఫేక్ ఈమెయిల్స్ గుర్తించడం.", "సేఫ్ బ్రౌజింగ్ టిప్స్."] },
  { id: 64, title: "డార్క్ వెబ్", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800", category: "internet", time: "4 రోజుల క్రితం", fullContent: ["డార్క్ వెబ్ గురించి నిజాలు.", "ఇది చట్టవిరుద్ధమా?", "ఎలా సేఫ్‌గా ఉండాలి."] },
  { id: 65, title: "కుకీస్ అంటే", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", category: "internet", time: "5 రోజుల క్రితం", fullContent: ["బ్రౌజర్ కుకీస్ గురించి పూర్తి వివరాలు.", "థర్డ్-పార్టీ కుకీస్ ప్రమాదాలు.", "కుకీస్ క్లియర్ చేయడం ఎలా."] },
  { id: 66, title: "ఫ్రీ WiFi", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800", category: "internet", time: "6 రోజుల క్రితం", fullContent: ["పబ్లిక్ WiFi సేఫ్టీ టిప్స్.", "VPN లేకుండా పబ్లిక్ WiFi వాడొచ్చా?", "డేటా థెఫ్ట్ నుంచి రక్షణ."] },
  // social-media (67-72)
  { id: 67, title: "ఫేస్‌బుక్ ప్రైవసీ", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800", category: "social-media", time: "1 రోజు క్రితం", fullContent: ["ఫేస్‌బుక్ ప్రైవసీ సెట్టింగ్స్.", "మీ డేటా ఎవరు చూడగలరు?", "ప్రైవసీ చెకప్ టూల్."] },
  { id: 68, title: "ఇన్‌స్టాగ్రామ్ గ్రోత్", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800", category: "social-media", time: "2 రోజుల క్రితం", fullContent: ["ఇన్‌స్టాగ్రామ్ ఫాలోవర్స్ పెంచే టిప్స్.", "రీల్స్, స్టోరీస్ స్ట్రాటజీ.", "ఎంగేజ్‌మెంట్ పెంచే మార్గాలు."] },
  { id: 69, title: "ట్విట్టర్ బ్లూ టిక్", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800", category: "social-media", time: "3 రోజుల క్రితం", fullContent: ["ట్విట్టర్ బ్లూ టిక్ ఎలా పొందాలి.", "X Premium సబ్స్క్రిప్షన్.", "వెరిఫికేషన్ ప్రాసెస్."] },
  { id: 70, title: "లింక్డ్‌ఇన్ ప్రొఫైల్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "social-media", time: "4 రోజుల క్రితం", fullContent: ["లింక్డ్‌ఇన్ ప్రొఫైల్ బెస్ట్ ప్రాక్టీసెస్.", "ప్రొఫెషనల్ హెడ్‌లైన్, సమ్మరీ.", "రిక్రూటర్ల దృష్టిలో పడటం ఎలా."] },
  { id: 71, title: "సోషల్ మీడియా డిటాక్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "social-media", time: "5 రోజుల క్రితం", fullContent: ["సోషల్ మీడియా డిటాక్స్ ఎలా చేయాలి.", "మానసిక ఆరోగ్యంపై ప్రభావం.", "డిజిటల్ వెల్‌బీయింగ్ టిప్స్."] },
  { id: 72, title: "యూట్యూబ్ షార్ట్స్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", category: "social-media", time: "6 రోజుల క్రితం", fullContent: ["యూట్యూబ్ షార్ట్స్ వైరల్ ట్రిక్స్.", "60 సెకన్లలో ఎక్కువ వ్యూస్.", "షార్ట్స్ క్రియేటర్ గైడ్."] },
  // facebook (73-78)
  { id: 73, title: "FB మార్కెట్‌ప్లేస్", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800", category: "facebook", time: "1 రోజు క్రితం", fullContent: ["ఫేస్‌బుక్ మార్కెట్‌ప్లేస్ ఎలా వాడాలి.", "వస్తువులు అమ్మడం, కొనడం.", "సేఫ్టీ టిప్స్."] },
  { id: 74, title: "FB గ్రూప్స్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "facebook", time: "2 రోజుల క్రితం", fullContent: ["ఫేస్‌బుక్ గ్రూప్స్ క్రియేట్ చేయడం.", "కమ్యూనిటీ బిల్డింగ్ టిప్స్.", "గ్రూప్ సెట్టింగ్స్."] },
  { id: 75, title: "FB పేజీ వెరిఫై", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800", category: "facebook", time: "3 రోజుల క్రితం", fullContent: ["ఫేస్‌బుక్ పేజీ వెరిఫికేషన్ ప్రాసెస్.", "బ్లూ టిక్ ఎలా పొందాలి.", "డాక్యుమెంట్స్ అవసరాలు."] },
  { id: 76, title: "FB అడ్వర్టైజింగ్", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800", category: "facebook", time: "4 రోజుల క్రితం", fullContent: ["ఫేస్‌బుక్ యాడ్స్ బిగినర్స్ గైడ్.", "క్యాంపెయిన్ క్రియేట్ చేయడం.", "బడ్జెట్, టార్గెటింగ్ టిప్స్."] },
  { id: 77, title: "FB మెసెంజర్ ట్రిక్స్", image: "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=800", category: "facebook", time: "5 రోజుల క్రితం", fullContent: ["మెసెంజర్ సీక్రెట్ కన్వర్సేషన్.", "ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్.", "డిసపెరింగ్ మెసేజెస్."] },
  { id: 78, title: "FB సెక్యూరిటీ", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800", category: "facebook", time: "6 రోజుల క్రితం", fullContent: ["ఫేస్‌బుక్ అకౌంట్ సేఫ్టీ టిప్స్.", "టూ-ఫ్యాక్టర్ ఆథెంటికేషన్.", "హ్యాకింగ్ నుంచి రక్షణ."] },
  // whatsapp (79-84)
  { id: 79, title: "WA వ్యూ వన్స్", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800", category: "whatsapp", time: "1 రోజు క్రితం", fullContent: ["వాట్సాప్ వ్యూ వన్స్ ఫీచర్ ఎలా వాడాలి.", "ఫోటోలు, వీడియోలు ఒక్కసారే చూడగలరు.", "స్క్రీన్‌షాట్ తీయడం కుదరదు."] },
  { id: 80, title: "WA గ్రూప్ ట్రిక్స్", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800", category: "whatsapp", time: "2 రోజుల క్రితం", fullContent: ["వాట్సాప్ గ్రూప్ సీక్రెట్ ట్రిక్స్.", "గ్రూప్ అడ్మిన్ ఫీచర్లు.", "పోల్స్, కమ్యూనిటీలు."] },
  { id: 81, title: "WA స్టేటస్ టిప్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "whatsapp", time: "3 రోజుల క్రితం", fullContent: ["వాట్సాప్ స్టేటస్ క్రియేటివ్ టిప్స్.", "టెక్స్ట్, ఫోటో, వీడియో స్టేటస్.", "ప్రైవసీ సెట్టింగ్స్."] },
  { id: 82, title: "WA బిజినెస్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "whatsapp", time: "4 రోజుల క్రితం", fullContent: ["వాట్సాప్ బిజినెస్ అకౌంట్ సెటప్.", "కేటలాగ్, ఆటో-రిప్లై.", "బిజినెస్ ప్రొఫైల్ ఆప్టిమైజేషన్."] },
  { id: 83, title: "WA బ్యాకప్", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800", category: "whatsapp", time: "5 రోజుల క్రితం", fullContent: ["వాట్సాప్ చాట్ బ్యాకప్ ఎలా తీయాలి.", "Google Drive, iCloud బ్యాకప్.", "బ్యాకప్ రీస్టోర్ చేయడం."] },
  { id: 84, title: "WA సెక్యూరిటీ", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800", category: "whatsapp", time: "6 రోజుల క్రితం", fullContent: ["వాట్సాప్ అకౌంట్ సేఫ్టీ టిప్స్.", "టూ-స్టెప్ వెరిఫికేషన్.", "స్కామ్ మెసేజెస్ నుంచి రక్షణ."] },
  // ecommerce (85-90)
  { id: 85, title: "అమెజాన్ సేల్ టిప్స్", image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=800", category: "ecommerce", time: "1 రోజు క్రితం", fullContent: ["అమెజాన్ సేల్‌లో బెస్ట్ డీల్స్ ఎలా పొందాలి.", "ప్రైస్ ట్రాకింగ్ టూల్స్.", "కూపన్ కోడ్‌లు ఎలా పొందాలి."] },
  { id: 86, title: "ఫ్లిప్‌కార్ట్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "ecommerce", time: "2 రోజుల క్రితం", fullContent: ["ఫ్లిప్‌కార్ట్ బిగ్ సేవింగ్ డేస్.", "బెస్ట్ ఆఫర్లు ఎలా కనుగొనాలి.", "ఎక్స్‌చేంజ్ బోనస్ వివరాలు."] },
  { id: 87, title: "ఆన్‌లైన్ షాపింగ్ సేఫ్టీ", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "ecommerce", time: "3 రోజుల క్రితం", fullContent: ["ఆన్‌లైన్ షాపింగ్ మోసాల నుంచి రక్షణ.", "ఫేక్ వెబ్‌సైట్లు గుర్తించడం.", "COD vs ఆన్‌లైన్ పేమెంట్."] },
  { id: 88, title: "క్యాష్‌బ్యాక్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", category: "ecommerce", time: "4 రోజుల క్రితం", fullContent: ["బెస్ట్ క్యాష్‌బ్యాక్ యాప్స్ లిస్ట్.", "CRED, Google Pay, PhonePe.", "క్యాష్‌బ్యాక్ ఎలా మాక్సిమైజ్ చేయాలి."] },
  { id: 89, title: "ఫేక్ ప్రొడక్ట్స్", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800", category: "ecommerce", time: "5 రోజుల క్రితం", fullContent: ["ఫేక్ ప్రొడక్ట్స్ ఎలా గుర్తించాలి.", "రివ్యూలు, రేటింగ్స్ చెక్ చేయండి.", "రిటర్న్ పాలసీ తెలుసుకోండి."] },
  { id: 90, title: "రిటర్న్ పాలసీ", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800", category: "ecommerce", time: "6 రోజుల క్రితం", fullContent: ["అమెజాన్, ఫ్లిప్‌కార్ట్ రిటర్న్ పాలసీ.", "రిఫండ్ ప్రాసెస్ వివరాలు.", "రిటర్న్ రిక్వెస్ట్ ఎలా చేయాలి."] },
  // amazon (91-96)
  { id: 91, title: "అమెజాన్ ప్రైమ్", image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=800", category: "amazon", time: "1 రోజు క్రితం", fullContent: ["అమెజాన్ ప్రైమ్ బెనిఫిట్స్ వివరాలు.", "ఫ్రీ డెలివరీ, ప్రైమ్ వీడియో.", "స్టూడెంట్ ఆఫర్ రూ.499/సంవత్సరం."] },
  { id: 92, title: "అమెజాన్ పే", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "amazon", time: "2 రోజుల క్రితం", fullContent: ["అమెజాన్ పే ఆఫర్లు.", "UPI, రీఛార్జ్‌లపై క్యాష్‌బ్యాక్.", "అమెజాన్ పే ICICI క్రెడిట్ కార్డ్."] },
  { id: 93, title: "అమెజాన్ రివ్యూలు", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", category: "amazon", time: "3 రోజుల క్రితం", fullContent: ["ఫేక్ రివ్యూలు ఎలా గుర్తించాలి.", "వెరిఫైడ్ పర్చేజ్ చెక్ చేయండి.", "రివ్యూ చెకర్ టూల్స్."] },
  { id: 94, title: "అమెజాన్ కూపన్లు", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800", category: "amazon", time: "4 రోజుల క్రితం", fullContent: ["ఫ్రీ కూపన్ కోడ్‌లు ఎలా పొందాలి.", "కూపన్ వెబ్‌సైట్లు, ఎక్స్‌టెన్షన్లు.", "ఆటో-అప్లై కూపన్స్."] },
  { id: 95, title: "అమెజాన్ డెలివరీ", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800", category: "amazon", time: "5 రోజుల క్రితం", fullContent: ["వన్-డే డెలివరీ ఎలా పొందాలి.", "పిన్ కోడ్ చెక్ చేయండి.", "డెలివరీ ట్రాకింగ్ టిప్స్."] },
  { id: 96, title: "అమెజాన్ బిజినెస్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "amazon", time: "6 రోజుల క్రితం", fullContent: ["అమెజాన్ సెల్లర్ అకౌంట్ గైడ్.", "FBA vs FBM పోలిక.", "సెల్లింగ్ ఫీజు వివరాలు."] },
  // flipkart (97-102)
  { id: 97, title: "ఫ్లిప్‌కార్ట్ బిగ్ సేల్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "flipkart", time: "1 రోజు క్రితం", fullContent: ["ఫ్లిప్‌కార్ట్ బిగ్ బిలియన్ డేస్.", "ఫోన్లు, ల్యాప్‌టాప్‌లపై భారీ డిస్కౌంట్.", "సేల్ డేట్స్, ఆఫర్ల వివరాలు."] },
  { id: 98, title: "ఫ్లిప్‌కార్ట్ వాలెట్", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", category: "flipkart", time: "2 రోజుల క్రితం", fullContent: ["ఫ్లిప్‌కార్ట్ వాలెట్ బెనిఫిట్స్.", "క్యాష్‌బ్యాక్, రివార్డ్స్.", "వాలెట్ లోడ్ చేయడం ఎలా."] },
  { id: 99, title: "ఫ్లిప్‌కార్ట్ EMI", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800", category: "flipkart", time: "3 రోజుల క్రితం", fullContent: ["నో-కాస్ట్ EMI ఆప్షన్ వివరాలు.", "క్రెడిట్/డెబిట్ కార్డ్ EMI.", "EMI క్యాలిక్యులేటర్."] },
  { id: 100, title: "ఫ్లిప్‌కార్ట్ ప్లస్", image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=800", category: "flipkart", time: "4 రోజుల క్రితం", fullContent: ["ఫ్లిప్‌కార్ట్ ప్లస్ మెంబర్‌షిప్.", "ఫ్రీ డెలివరీ, ఎర్లీ యాక్సెస్.", "సూపర్‌కాయిన్స్ ప్రయోజనాలు."] },
  { id: 101, title: "ఫ్లిప్‌కార్ట్ ఎక్స్‌చేంజ్", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800", category: "flipkart", time: "5 రోజుల క్రితం", fullContent: ["పాత ఫోన్ ఎక్స్‌చేంజ్ ఆఫర్.", "ఎక్స్‌చేంజ్ వాల్యూ కాలిక్యులేటర్.", "ఎక్స్‌చేంజ్ ప్రాసెస్ వివరాలు."] },
  { id: 102, title: "ఫ్లిప్‌కార్ట్ సూపర్‌కాయిన్స్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", category: "flipkart", time: "6 రోజుల క్రితం", fullContent: ["సూపర్‌కాయిన్స్ ఎలా సంపాదించాలి.", "వాటిని ఎలా రిడీమ్ చేయాలి.", "పార్ట్‌నర్ ఆఫర్లు."] },
  // it-companies (103-108)
  { id: 103, title: "TCS నియామకాలు", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800", category: "it-companies", time: "1 రోజు క్రితం", fullContent: ["TCS భారీ నియామకాలు ప్రారంభం.", "ఫ్రెషర్స్ కోసం 40,000+ ఉద్యోగాలు.", "ఆన్‌లైన్ టెస్ట్, ఇంటర్వ్యూ ప్రాసెస్."] },
  { id: 104, title: "ఇన్ఫోసిస్ కొత్త ప్రాజెక్ట్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "it-companies", time: "2 రోజుల క్రితం", fullContent: ["ఇన్ఫోసిస్ కొత్త AI ప్రాజెక్ట్.", "$1 బిలియన్ ఇన్వెస్ట్‌మెంట్.", "AI ట్రైనింగ్ సెంటర్ ఏర్పాటు."] },
  { id: 105, title: "Wipro శిక్షణ", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", category: "it-companies", time: "3 రోజుల క్రితం", fullContent: ["Wipro ఉచిత శిక్షణ కార్యక్రమం.", "కోడింగ్, AI, క్లౌడ్ కోర్సులు.", "సర్టిఫికేషన్ అవకాశాలు."] },
  { id: 106, title: "HCL టెక్నాలజీస్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", category: "it-companies", time: "4 రోజుల క్రితం", fullContent: ["HCL కొత్త క్యాంపస్ ప్రారంభం.", "నాగ్‌పూర్‌లో 5,000 ఉద్యోగాలు.", "వర్క్ కల్చర్ వివరాలు."] },
  { id: 107, title: "టెక్ మహీంద్రా", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", category: "it-companies", time: "5 రోజుల క్రితం", fullContent: ["టెక్ మహీంద్రా వర్క్ ఫ్రం హోమ్ పాలసీ.", "హైబ్రిడ్ మోడల్ వివరాలు.", "ఉద్యోగులకు కొత్త బెనిఫిట్స్."] },
  { id: 108, title: "గూగుల్ ఇండియా", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "it-companies", time: "6 రోజుల క్రితం", fullContent: ["గూగుల్ ఇండియా కొత్త కార్యాలయం.", "బెంగళూరులో అతిపెద్ద ఆఫీస్.", "10,000+ ఉద్యోగాలు లభించే అవకాశం."] },
  // technical-education (109-114)
  { id: 109, title: "బెస్ట్ కోడింగ్ కోర్సులు", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800", category: "technical-education", time: "1 రోజు క్రితం", fullContent: ["ఫ్రీ కోడింగ్ కోర్సులు ఆన్‌లైన్.", "Coursera, Udemy, YouTube.", "పైథాన్, జావా, వెబ్ డెవలప్‌మెంట్."] },
  { id: 110, title: "AI లెర్నింగ్ పాత్", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800", category: "technical-education", time: "2 రోజుల క్రితం", fullContent: ["AI నేర్చుకోవడానికి కంప్లీట్ గైడ్.", "మ్యాథమెటిక్స్, ML, డీప్ లెర్నింగ్.", "రిసోర్స్ లింక్స్."] },
  { id: 111, title: "డిగ్రీ vs స్కిల్స్", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", category: "technical-education", time: "3 రోజుల క్రితం", fullContent: ["డిగ్రీ లేదా స్కిల్స్ ఏది ముఖ్యం.", "IT రంగంలో డిమాండ్ ఏమిటి.", "సర్టిఫికేషన్స్ వాల్యూ."] },
  { id: 112, title: "ఆన్‌లైన్ లెర్నింగ్", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800", category: "technical-education", time: "4 రోజుల క్రితం", fullContent: ["బెస్ట్ ఆన్‌లైన్ లెర్నింగ్ ప్లాట్‌ఫామ్స్.", "ప్లేస్‌మెంట్ గ్యారెంటీ ఉన్న కోర్సులు.", "ఫ్రీ vs పెయిడ్ పోలిక."] },
  { id: 113, title: "సర్టిఫికేషన్ వాల్యూ", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", category: "technical-education", time: "5 రోజుల క్రితం", fullContent: ["IT సర్టిఫికేషన్ల వాల్యూ ఎంత.", "AWS, Azure, Google Cloud.", "సర్టిఫికేషన్ ఖర్చు, తయారీ."] },
  { id: 114, title: "ప్రాజెక్ట్ ఐడియాలు", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800", category: "technical-education", time: "6 రోజుల క్రితం", fullContent: ["కంప్యూటర్ సైన్స్ ప్రాజెక్ట్ ఐడియాలు.", "AI, వెబ్, మొబైల్ యాప్ ప్రాజెక్ట్స్.", "రెజ్యూమ్ కోసం బెస్ట్ ప్రాజెక్ట్స్."] },
  // technical-jobs (115-120)
  { id: 115, title: "IT జాబ్ మార్కెట్", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800", category: "technical-jobs", time: "1 రోజు క్రితం", fullContent: ["2024లో IT జాబ్ మార్కెట్ ట్రెండ్స్.", "AI, సైబర్‌సెక్యూరిటీ డిమాండ్.", "ఫ్రెషర్స్ శాలరీ వివరాలు."] },
  { id: 116, title: "రెజ్యూమ్ టిప్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "technical-jobs", time: "2 రోజుల క్రితం", fullContent: ["IT రెజ్యూమ్ బెస్ట్ ప్రాక్టీసెస్.", "ATS ఫ్రెండ్లీ ఫార్మాట్.", "స్కిల్స్ సెక్షన్ ఎలా హైలైట్ చేయాలి."] },
  { id: 117, title: "ఇంటర్వ్యూ ప్రశ్నలు", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", category: "technical-jobs", time: "3 రోజుల క్రితం", fullContent: ["టాప్ 50 ఇంటర్వ్యూ ప్రశ్నలు.", "టెక్నికల్, HR రౌండ్ ప్రశ్నలు.", "సమాధానాలు ఎలా ఇవ్వాలి."] },
  { id: 118, title: "వర్క్ ఫ్రం హోమ్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", category: "technical-jobs", time: "4 రోజుల క్రితం", fullContent: ["వర్క్ ఫ్రం హోమ్ జాబ్స్ లిస్ట్.", "ఫ్రీలాన్సింగ్, రిమోట్ జాబ్స్.", "WFH ప్రొడక్టివిటీ టిప్స్."] },
  { id: 119, title: "ఫ్రీలాన్సింగ్", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", category: "technical-jobs", time: "5 రోజుల క్రితం", fullContent: ["ఫ్రీలాన్సింగ్ స్టార్ట్ చేయడం ఎలా.", "Fiverr, Upwork లో ప్రొఫైల్.", "క్లయింట్స్ ఎలా పొందాలి."] },
  { id: 120, title: "సాలరీ నెగోషియేషన్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "technical-jobs", time: "6 రోజుల క్రితం", fullContent: ["జీతం నెగోషియేట్ చేసే టిప్స్.", "మార్కెట్ రేట్ రీసెర్చ్.", "ఆఫర్ లెటర్ చెక్‌లిస్ట్."] },
  // self-employment (121-126)
  { id: 121, title: "స్టార్టప్ ఐడియాలు", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "self-employment", time: "1 రోజు క్రితం", fullContent: ["2024లో బెస్ట్ స్టార్టప్ ఐడియాలు.", "AI, SaaS, D2C ట్రెండింగ్.", "తక్కువ పెట్టుబడితో స్టార్టప్."] },
  { id: 122, title: "యూట్యూబ్ ఛానల్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", category: "self-employment", time: "2 రోజుల క్రితం", fullContent: ["యూట్యూబ్ ఛానల్ స్టార్ట్ చేయడం.", "నిచ్ సెలక్షన్, కంటెంట్ స్ట్రాటజీ.", "మానిటైజేషన్ రూల్స్."] },
  { id: 123, title: "బ్లాగింగ్ గైడ్", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", category: "self-employment", time: "3 రోజుల క్రితం", fullContent: ["బ్లాగింగ్ ద్వారా డబ్బు సంపాదించడం.", "SEO, ఆర్గానిక్ ట్రాఫిక్.", "Google AdSense అప్రూవల్."] },
  { id: 124, title: "ఫ్రీలాన్స్ ప్లాట్‌ఫామ్స్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", category: "self-employment", time: "4 రోజుల క్రితం", fullContent: ["టాప్ ఫ్రీలాన్స్ వెబ్‌సైట్లు.", "Fiverr, Upwork, Freelancer.", "ప్రొఫైల్ ఆప్టిమైజేషన్ టిప్స్."] },
  { id: 125, title: "డిజిటల్ మార్కెటింగ్", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", category: "self-employment", time: "5 రోజుల క్రితం", fullContent: ["డిజిటల్ మార్కెటింగ్ కెరీర్ గైడ్.", "SEO, SEM, SMM వివరాలు.", "ఫ్రీ సర్టిఫికేషన్ కోర్సులు."] },
  { id: 126, title: "డ్రాప్‌షిపింగ్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "self-employment", time: "6 రోజుల క్రితం", fullContent: ["డ్రాప్‌షిపింగ్ బిజినెస్ ఎలా స్టార్ట్ చేయాలి.", "Shopify, WooCommerce.", "సప్లయర్ ఫైండింగ్ టిప్స్."] },
  // cyber-crime (127-132)
  { id: 127, title: "ఫిషింగ్ ఎటాక్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", category: "cyber-crime", time: "1 రోజు క్రితం", fullContent: ["ఫిషింగ్ ఎటాక్స్ నుంచి ఎలా బయటపడాలి.", "ఫేక్ లింక్‌లు గుర్తించడం.", "రిపోర్ట్ చేయడం ఎలా."] },
  { id: 128, title: "పాస్‌వర్డ్ సేఫ్టీ", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", category: "cyber-crime", time: "2 రోజుల క్రితం", fullContent: ["స్ట్రాంగ్ పాస్‌వర్డ్ ఎలా క్రియేట్ చేయాలి.", "పాస్‌వర్డ్ మేనేజర్ ఉపయోగం.", "టూ-ఫ్యాక్టర్ ఆథెంటికేషన్."] },
  { id: 129, title: "ఆన్‌లైన్ ఫ్రాడ్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", category: "cyber-crime", time: "3 రోజుల క్రితం", fullContent: ["ఆన్‌లైన్ ఫ్రాడ్ రిపోర్ట్ ఎలా చేయాలి.", "సైబర్ క్రైమ్ పోర్టల్.", "బ్యాంక్ ఫ్రాడ్ కంప్లైంట్."] },
  { id: 130, title: "సైబర్ లా", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", category: "cyber-crime", time: "4 రోజుల క్రితం", fullContent: ["భారతదేశంలో సైబర్ చట్టాలు.", "IT Act 2000, DPDP Act 2023.", "సైబర్ నేరాలకు శిక్షలు."] },
  { id: 131, title: "డేటా ప్రైవసీ", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800", category: "cyber-crime", time: "5 రోజుల క్రితం", fullContent: ["డేటా ప్రైవసీ ఎలా ప్రొటెక్ట్ చేయాలి.", "యాప్ పర్మిషన్స్ చెక్ చేయండి.", "పబ్లిక్ WiFi సేఫ్టీ."] },
  { id: 132, title: "మాల్వేర్ ప్రొటెక్షన్", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800", category: "cyber-crime", time: "6 రోజుల క్రితం", fullContent: ["మాల్వేర్ నుంచి కంప్యూటర్ రక్షణ.", "యాంటీవైరస్ స్కానింగ్.", "సేఫ్ బ్రౌజింగ్ టిప్స్."] },
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

export default function ArticlePage() {
  const params = useParams();

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  return () => window.removeEventListener("resize", checkScreenSize);
}, []);
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

   const relatedGridColumns = isMobile ? 1 : 2;

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
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{article.category}</span><span>/</span><span>{article.time}</span><span>/</span>
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
            <button onClick={() => router.push(`/article/${prevArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>← వెనక్కి</button>
          ) : <div style={{ width: "80px" }} />}
          <span style={{ fontSize: "13px", color: "#888" }}>{currentIndex} / {totalPosts}</span>
          {nextArticle ? (
            <button onClick={() => router.push(`/article/${nextArticle.id}`)} style={{ padding: "6px 14px", background: "#fff", color: "#555", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px", transition: "0.2s" }}
              onMouseEnter={(e) => { e.target.style.background = "#7ac000"; e.target.style.color = "#fff"; }} onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#555"; }}>మరిన్ని →</button>
          ) : <div style={{ width: "80px" }} />}
        </div>
        <h2 style={{ color: "#e74c3c", fontSize: "22px", marginBottom: "20px", marginTop: "30px", paddingBottom: "10px", borderBottom: "2px solid #e74c3c" }}>జన రంజకమైన వార్తలు</h2>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${relatedGridColumns}, 1fr)`, gap: "20px", marginBottom: "40px" }}>
          {relatedArticles.map((related) => (
            <div key={related.id} style={{ cursor: "pointer", transition: "transform 0.2s", background: "#f9f9f9", borderRadius: "4px", overflow: "hidden" }}
              onClick={() => router.push(`/article/${related.id}`)}>
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