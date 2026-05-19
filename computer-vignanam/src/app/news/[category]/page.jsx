"use client";

import { useState, useEffect } from "react";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DUMMY_IMAGE = "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

const allPosts = [
  // andhra-pradesh (6)
  { id: 1, title: "అమరావతి నిర్మాణంలో సాంకేతికత", image: "https://images.unsplash.com/photo-1598905242497-06b5ee5ee98d?w=600", category: "andhra-pradesh", time: "1 రోజు క్రితం", desc: "అమరావతి రాజధాని నిర్మాణంలో ఆధునిక సాంకేతికత వినియోగం." },
  { id: 2, title: "విశాఖ ఐటీ హబ్ అభివృద్ధి", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", category: "andhra-pradesh", time: "2 రోజుల క్రితం", desc: "విశాఖపట్నం ఐటీ హబ్‌గా వేగంగా అభివృద్ధి చెందుతోంది." },
  { id: 3, title: "తిరుపతి స్మార్ట్ సిటీ", image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600", category: "andhra-pradesh", time: "3 రోజుల క్రితం", desc: "తిరుపతి స్మార్ట్ సిటీ ప్రాజెక్ట్ పనులు శరవేగంగా జరుగుతున్నాయి." },
  { id: 4, title: "కర్నూలు సోలార్ ప్లాంట్", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600", category: "andhra-pradesh", time: "4 రోజుల క్రితం", desc: "కర్నూలులో భారీ సోలార్ విద్యుత్ ప్లాంట్ నిర్మాణం." },
  { id: 5, title: "గోదావరి డిజిటల్ వ్యవసాయం", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600", category: "andhra-pradesh", time: "5 రోజుల క్రితం", desc: "రైతులు డిజిటల్ వ్యవసాయ పద్ధతులు అవలంబిస్తున్నారు." },
  { id: 6, title: "ఏపీలో డిజిటల్ క్లాస్ రూమ్‌లు", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600", category: "andhra-pradesh", time: "6 రోజుల క్రితం", desc: "ప్రభుత్వ పాఠశాలల్లో డిజిటల్ క్లాస్ రూమ్‌లు ఏర్పాటు." },
  // telangana (6)
  { id: 7, title: "హైదరాబాద్ ఐటీ అభివృద్ధి", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", category: "telangana", time: "1 రోజు క్రితం", desc: "హైదరాబాద్‌లో ఐటీ రంగం వేగంగా అభివృద్ధి." },
  { id: 8, title: "టీ-హబ్ యువత ఉపాధి", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", category: "telangana", time: "2 రోజుల క్రితం", desc: "టీ-హబ్ ద్వారా యువతకు ఉపాధి అవకాశాలు." },
  { id: 9, title: "స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", category: "telangana", time: "3 రోజుల క్రితం", desc: "తెలంగాణలో స్మార్ట్ సిటీ ప్రాజెక్ట్‌లు." },
  { id: 10, title: "స్టార్టప్ ప్రోత్సాహకాలు", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "telangana", time: "4 రోజుల క్రితం", desc: "కొత్త స్టార్టప్‌లకు ప్రభుత్వ ప్రోత్సాహకాలు." },
  { id: 11, title: "డిజిటల్ విద్యా సదుపాయాలు", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600", category: "telangana", time: "5 రోజుల క్రితం", desc: "తెలంగాణాలో డిజిటల్ విద్యా సదుపాయాలు." },
  { id: 12, title: "గ్రామీణ డిజిటలైజేషన్", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600", category: "telangana", time: "6 రోజుల క్రితం", desc: "గ్రామీణ ప్రాంతాల్లో డిజిటలైజేషన్." },
  // national (6)
  { id: 13, title: "డిజిటల్ ఇండియా విప్లవం", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600", category: "national", time: "1 రోజు క్రితం", desc: "భారతదేశంలో డిజిటల్ విప్లవం వేగంగా జరుగుతోంది." },
  { id: 14, title: "5G సేవలు ప్రారంభం", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", category: "national", time: "2 రోజుల క్రితం", desc: "దేశవ్యాప్తంగా 5G సేవలు ప్రారంభం." },
  { id: 15, title: "డిజిటల్ ఇండియా పథకం", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600", category: "national", time: "3 రోజుల క్రితం", desc: "డిజిటల్ ఇండియా పథకం విస్తరణ." },
  { id: 16, title: "సైబర్ భద్రత చట్టాలు", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600", category: "national", time: "4 రోజుల క్రితం", desc: "సైబర్ భద్రత కోసం కొత్త చట్టాలు." },
  { id: 17, title: "AI టెక్నాలజీ అభివృద్ధి", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600", category: "national", time: "5 రోజుల క్రితం", desc: "దేశంలో AI టెక్నాలజీ వేగంగా అభివృద్ధి." },
  { id: 18, title: "స్టార్టప్ ఇండియా విజయం", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600", category: "national", time: "6 రోజుల క్రితం", desc: "స్టార్టప్ ఇండియా భారీ విజయం." },
  // international (6)
  { id: 19, title: "గూగుల్ AI కొత్త ఫీచర్", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600", category: "international", time: "1 రోజు క్రితం", desc: "గూగుల్ AI కొత్త ఫీచర్ విడుదల." },
  { id: 20, title: "యాపిల్ విజన్ ప్రో లాంచ్", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600", category: "international", time: "2 రోజుల క్రితం", desc: "యాపిల్ విజన్ ప్రో ప్రపంచవ్యాప్తంగా లాంచ్." },
  { id: 21, title: "టెస్లా సైబర్ట్రక్", image: "https://images.unsplash.com/photo-1612832021023-7b3c5a2f1b22?w=600", category: "international", time: "3 రోజుల క్రితం", desc: "టెస్లా సైబర్ట్రక్ విడుదల." },
  { id: 22, title: "మైక్రోసాఫ్ట్ కొత్త OS", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600", category: "international", time: "4 రోజుల క్రితం", desc: "మైక్రోసాఫ్ట్ కొత్త ఆపరేటింగ్ సిస్టమ్." },
  { id: 23, title: "సైబర్ భద్రత ఒప్పందం", image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=600", category: "international", time: "5 రోజుల క్రితం", desc: "అంతర్జాతీయ సైబర్ భద్రత ఒప్పందం." },
  { id: 24, title: "గ్లోబల్ AI సమ్మిట్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "international", time: "6 రోజుల క్రితం", desc: "గ్లోబల్ AI సమ్మిట్ కొత్త టెక్నాలజీలు." },
  // telecom (6)
  { id: 25, title: "5G స్పెక్ట్రమ్ ఆక్షన్", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600", category: "telecom", time: "1 రోజు క్రితం", desc: "భారతదేశంలో 5G స్పెక్ట్రమ్ ఆక్షన్." },
  { id: 26, title: "BSNL కొత్త ప్లాన్స్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "telecom", time: "2 రోజుల క్రితం", desc: "BSNL ఆకర్షణీయ కొత్త ప్లాన్స్." },
  { id: 27, title: "జియో ఎయిర్ ఫైబర్", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600", category: "telecom", time: "3 రోజుల క్రితం", desc: "జియో ఎయిర్ ఫైబర్ దేశవ్యాప్తంగా." },
  { id: 28, title: "VI కొత్త ఆఫర్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600", category: "telecom", time: "4 రోజుల క్రితం", desc: "వోడాఫోన్-ఐడియా కొత్త ఆఫర్." },
  { id: 29, title: "శాటిలైట్ ఇంటర్నెట్", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600", category: "telecom", time: "5 రోజుల క్రితం", desc: "శాటిలైట్ ఇంటర్నెట్ త్వరలో ప్రారంభం." },
  { id: 30, title: "టెలికాం భవిష్యత్తు", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", category: "telecom", time: "6 రోజుల క్రితం", desc: "టెలికాం రంగం ఉజ్వల భవిష్యత్తు." },
  // products (6)
  { id: 31, title: "కొత్త మొబైల్ లాంచ్", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600", category: "products", time: "1 రోజు క్రితం", desc: "సరికొత్త స్మార్ట్‌ఫోన్ మార్కెట్‌లోకి వచ్చింది." },
  { id: 32, title: "ల్యాప్‌టాప్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600", category: "products", time: "2 రోజుల క్రితం", desc: "బెస్ట్ ల్యాప్‌టాప్ డీల్స్ అందుబాటులో ఉన్నాయి." },
  { id: 33, title: "టాబ్లెట్ రివ్యూ", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600", category: "products", time: "3 రోజుల క్రితం", desc: "కొత్త టాబ్లెట్ పూర్తి రివ్యూ." },
  { id: 34, title: "గేమింగ్ పిసి బిల్డ్", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600", category: "products", time: "4 రోజుల క్రితం", desc: "బడ్జెట్‌లో గేమింగ్ పిసి ఎలా బిల్డ్ చేయాలి." },
  { id: 35, title: "న్యూ సాఫ్ట్‌వేర్ టూల్స్", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600", category: "products", time: "5 రోజుల క్రితం", desc: "2024లో తప్పనిసరిగా వాడాల్సిన సాఫ్ట్‌వేర్." },
  { id: 36, title: "యాప్ రివ్యూలు", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600", category: "products", time: "6 రోజుల క్రితం", desc: "ఈ వారం టాప్ యాప్స్ రివ్యూ." },
  // mobiles-tablets (6)
  { id: 37, title: "శాంసంగ్ గెలాక్సీ S24", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600", category: "mobiles-tablets", time: "1 రోజు క్రితం", desc: "శాంసంగ్ కొత్త ఫ్లాగ్‌షిప్ ఫోన్ విడుదల." },
  { id: 38, title: "iPhone 16 ఫీచర్లు", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600", category: "mobiles-tablets", time: "2 రోజుల క్రితం", desc: "iPhone 16 కొత్త ఫీచర్లు లీక్." },
  { id: 39, title: "టాబ్లెట్ కొనుగోలు గైడ్", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600", category: "mobiles-tablets", time: "3 రోజుల క్రితం", desc: "మంచి టాబ్లెట్ ఎలా ఎంచుకోవాలి." },
  { id: 40, title: "5G మొబైల్స్ లిస్ట్", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600", category: "mobiles-tablets", time: "4 రోజుల క్రితం", desc: "బెస్ట్ 5G ఫోన్లు తక్కువ ధరలో." },
  { id: 41, title: "ఫోల్డబుల్ ఫోన్లు", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600", category: "mobiles-tablets", time: "5 రోజుల క్రితం", desc: "2024లో బెస్ట్ ఫోల్డబుల్ ఫోన్లు." },
  { id: 42, title: "టాబ్లెట్ vs ల్యాప్‌టాప్", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600", category: "mobiles-tablets", time: "6 రోజుల క్రితం", desc: "టాబ్లెట్ లేదా ల్యాప్‌టాప్ ఏది బెస్ట్." },
  // pcs-laptops (6)
  { id: 43, title: "బడ్జెట్ గేమింగ్ పిసి", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600", category: "pcs-laptops", time: "1 రోజు క్రితం", desc: "రూ.50,000లో గేమింగ్ పిసి బిల్డ్." },
  { id: 44, title: "మ్యాక్‌బుక్ vs విండోస్", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600", category: "pcs-laptops", time: "2 రోజుల క్రితం", desc: "మ్యాక్‌బుక్ లేదా విండోస్ ల్యాప్‌టాప్." },
  { id: 45, title: "ల్యాప్‌టాప్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600", category: "pcs-laptops", time: "3 రోజుల క్రితం", desc: "అమెజాన్ లో బెస్ట్ ల్యాప్‌టాప్ డీల్స్." },
  { id: 46, title: "పిసి క్లీనింగ్ టిప్స్", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600", category: "pcs-laptops", time: "4 రోజుల క్రితం", desc: "పిసి స్పీడ్ పెంచడానికి టిప్స్." },
  { id: 47, title: "విండోస్ 12 అప్‌డేట్", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600", category: "pcs-laptops", time: "5 రోజుల క్రితం", desc: "విండోస్ 12 కొత్త ఫీచర్లు లీక్." },
  { id: 48, title: "SSD vs HDD", image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=600", category: "pcs-laptops", time: "6 రోజుల క్రితం", desc: "SSD లేదా HDD ఏది బెటర్." },
  // software (6)
  { id: 49, title: "బెస్ట్ యాంటీవైరస్", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600", category: "software", time: "1 రోజు క్రితం", desc: "2024లో టాప్ యాంటీవైరస్ సాఫ్ట్‌వేర్." },
  { id: 50, title: "వీడియో ఎడిటింగ్ టూల్స్", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600", category: "software", time: "2 రోజుల క్రితం", desc: "ఫ్రీ వీడియో ఎడిటింగ్ సాఫ్ట్‌వేర్." },
  { id: 51, title: "ఫోటోషాప్ ఆల్టర్నేటివ్", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600", category: "software", time: "3 రోజుల క్రితం", desc: "ఫోటోషాప్ కి బెస్ట్ ఫ్రీ ఆల్టర్నేటివ్." },
  { id: 52, title: "ప్రోగ్రామింగ్ టూల్స్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "software", time: "4 రోజుల క్రితం", desc: "డెవలపర్ల కోసం బెస్ట్ టూల్స్." },
  { id: 53, title: "క్లౌడ్ స్టోరేజ్", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600", category: "software", time: "5 రోజుల క్రితం", desc: "బెస్ట్ ఫ్రీ క్లౌడ్ స్టోరేజ్ సర్వీసులు." },
  { id: 54, title: "పాస్‌వర్డ్ మేనేజర్", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", category: "software", time: "6 రోజుల క్రితం", desc: "సేఫ్ పాస్‌వర్డ్ మేనేజర్ యాప్స్." },
  // apps (6)
  { id: 55, title: "వాట్సాప్ కొత్త ఫీచర్", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600", category: "apps", time: "1 రోజు క్రితం", desc: "వాట్సాప్‌లో కొత్త సీక్రెట్ చాట్ ఫీచర్." },
  { id: 56, title: "ఇన్‌స్టాగ్రామ్ అప్‌డేట్", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600", category: "apps", time: "2 రోజుల క్రితం", desc: "ఇన్‌స్టాగ్రామ్ కొత్త రీల్స్ ఫీచర్." },
  { id: 57, title: "ఫిట్‌నెస్ యాప్స్", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", category: "apps", time: "3 రోజుల క్రితం", desc: "హెల్త్ ట్రాకింగ్ కోసం బెస్ట్ యాప్స్." },
  { id: 58, title: "యూట్యూబ్ ట్రిక్స్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600", category: "apps", time: "4 రోజుల క్రితం", desc: "యూట్యూబ్ సీక్రెట్ ట్రిక్స్ తెలుసుకోండి." },
  { id: 59, title: "ట్విట్టర్ స్పేసెస్", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600", category: "apps", time: "5 రోజుల క్రితం", desc: "ట్విట్టర్ స్పేసెస్ ఎలా వాడాలి." },
  { id: 60, title: "క్యాష్‌లెస్ పేమెంట్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "apps", time: "6 రోజుల క్రితం", desc: "బెస్ట్ UPI యాప్స్ లిస్ట్." },
  // internet (6)
  { id: 61, title: "WiFi స్పీడ్ పెంచడం", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600", category: "internet", time: "1 రోజు క్రితం", desc: "ఇంట్లో WiFi స్పీడ్ పెంచే టిప్స్." },
  { id: 62, title: "VPN అవసరమా", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600", category: "internet", time: "2 రోజుల క్రితం", desc: "VPN ఎందుకు వాడాలి." },
  { id: 63, title: "ఫిషింగ్ స్కామ్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "internet", time: "3 రోజుల క్రితం", desc: "ఫిషింగ్ స్కామ్ నుంచి ఎలా రక్షించుకోవాలి." },
  { id: 64, title: "డార్క్ వెబ్", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600", category: "internet", time: "4 రోజుల క్రితం", desc: "డార్క్ వెబ్ గురించి నిజాలు." },
  { id: 65, title: "కుకీస్ అంటే", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600", category: "internet", time: "5 రోజుల క్రితం", desc: "బ్రౌజర్ కుకీస్ గురించి పూర్తి వివరాలు." },
  { id: 66, title: "ఫ్రీ WiFi", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600", category: "internet", time: "6 రోజుల క్రితం", desc: "పబ్లిక్ WiFi సేఫ్టీ టిప్స్." },
  // social-media (6)
  { id: 67, title: "ఫేస్‌బుక్ ప్రైవసీ", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600", category: "social-media", time: "1 రోజు క్రితం", desc: "ఫేస్‌బుక్ ప్రైవసీ సెట్టింగ్స్." },
  { id: 68, title: "ఇన్‌స్టాగ్రామ్ గ్రోత్", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600", category: "social-media", time: "2 రోజుల క్రితం", desc: "ఇన్‌స్టాగ్రామ్ ఫాలోవర్స్ పెంచే టిప్స్." },
  { id: 69, title: "ట్విట్టర్ బ్లూ టిక్", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600", category: "social-media", time: "3 రోజుల క్రితం", desc: "ట్విట్టర్ బ్లూ టిక్ ఎలా పొందాలి." },
  { id: 70, title: "లింక్డ్‌ఇన్ ప్రొఫైల్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "social-media", time: "4 రోజుల క్రితం", desc: "లింక్డ్‌ఇన్ ప్రొఫైల్ బెస్ట్ ప్రాక్టీసెస్." },
  { id: 71, title: "సోషల్ మీడియా డిటాక్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "social-media", time: "5 రోజుల క్రితం", desc: "సోషల్ మీడియా డిటాక్స్ ఎలా చేయాలి." },
  { id: 72, title: "యూట్యూబ్ షార్ట్స్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600", category: "social-media", time: "6 రోజుల క్రితం", desc: "యూట్యూబ్ షార్ట్స్ వైరల్ ట్రిక్స్." },
  // facebook (6)
  { id: 73, title: "FB మార్కెట్‌ప్లేస్", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600", category: "facebook", time: "1 రోజు క్రితం", desc: "ఫేస్‌బుక్ మార్కెట్‌ప్లేస్ ఎలా వాడాలి." },
  { id: 74, title: "FB గ్రూప్స్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "facebook", time: "2 రోజుల క్రితం", desc: "ఫేస్‌బుక్ గ్రూప్స్ క్రియేట్ చేయడం." },
  { id: 75, title: "FB పేజీ వెరిఫై", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600", category: "facebook", time: "3 రోజుల క్రితం", desc: "ఫేస్‌బుక్ పేజీ వెరిఫికేషన్ ప్రాసెస్." },
  { id: 76, title: "FB అడ్వర్టైజింగ్", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600", category: "facebook", time: "4 రోజుల క్రితం", desc: "ఫేస్‌బుక్ యాడ్స్ బిగినర్స్ గైడ్." },
  { id: 77, title: "FB మెసెంజర్ ట్రిక్స్", image: "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=600", category: "facebook", time: "5 రోజుల క్రితం", desc: "మెసెంజర్ సీక్రెట్ కన్వర్సేషన్." },
  { id: 78, title: "FB సెక్యూరిటీ", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600", category: "facebook", time: "6 రోజుల క్రితం", desc: "ఫేస్‌బుక్ అకౌంట్ సేఫ్టీ టిప్స్." },
  // whatsapp (6)
  { id: 79, title: "WA వ్యూ వన్స్", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600", category: "whatsapp", time: "1 రోజు క్రితం", desc: "వాట్సాప్ వ్యూ వన్స్ ఫీచర్ ఎలా వాడాలి." },
  { id: 80, title: "WA గ్రూప్ ట్రిక్స్", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600", category: "whatsapp", time: "2 రోజుల క్రితం", desc: "వాట్సాప్ గ్రూప్ సీక్రెట్ ట్రిక్స్." },
  { id: 81, title: "WA స్టేటస్ టిప్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "whatsapp", time: "3 రోజుల క్రితం", desc: "వాట్సాప్ స్టేటస్ క్రియేటివ్ టిప్స్." },
  { id: 82, title: "WA బిజినెస్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "whatsapp", time: "4 రోజుల క్రితం", desc: "వాట్సాప్ బిజినెస్ అకౌంట్ సెటప్." },
  { id: 83, title: "WA బ్యాకప్", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600", category: "whatsapp", time: "5 రోజుల క్రితం", desc: "వాట్సాప్ చాట్ బ్యాకప్ ఎలా తీయాలి." },
  { id: 84, title: "WA సెక్యూరిటీ", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600", category: "whatsapp", time: "6 రోజుల క్రితం", desc: "వాట్సాప్ అకౌంట్ సేఫ్టీ టిప్స్." },
  // ecommerce (6)
  { id: 85, title: "అమెజాన్ సేల్ టిప్స్", image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=600", category: "ecommerce", time: "1 రోజు క్రితం", desc: "అమెజాన్ సేల్‌లో బెస్ట్ డీల్స్ ఎలా పొందాలి." },
  { id: 86, title: "ఫ్లిప్‌కార్ట్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "ecommerce", time: "2 రోజుల క్రితం", desc: "ఫ్లిప్‌కార్ట్ బిగ్ సేవింగ్ డేస్." },
  { id: 87, title: "ఆన్‌లైన్ షాపింగ్ సేఫ్టీ", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "ecommerce", time: "3 రోజుల క్రితం", desc: "ఆన్‌లైన్ షాపింగ్ మోసాల నుంచి రక్షణ." },
  { id: 88, title: "క్యాష్‌బ్యాక్ ఆఫర్లు", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600", category: "ecommerce", time: "4 రోజుల క్రితం", desc: "బెస్ట్ క్యాష్‌బ్యాక్ యాప్స్ లిస్ట్." },
  { id: 89, title: "ఫేక్ ప్రొడక్ట్స్", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600", category: "ecommerce", time: "5 రోజుల క్రితం", desc: "ఫేక్ ప్రొడక్ట్స్ ఎలా గుర్తించాలి." },
  { id: 90, title: "రిటర్న్ పాలసీ", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600", category: "ecommerce", time: "6 రోజుల క్రితం", desc: "అమెజాన్ ఫ్లిప్‌కార్ట్ రిటర్న్ పాలసీ." },
  // amazon (6)
  { id: 91, title: "అమెజాన్ ప్రైమ్", image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=600", category: "amazon", time: "1 రోజు క్రితం", desc: "అమెజాన్ ప్రైమ్ బెనిఫిట్స్ వివరాలు." },
  { id: 92, title: "అమెజాన్ పే", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "amazon", time: "2 రోజుల క్రితం", desc: "అమెజాన్ పే ఆఫర్లు." },
  { id: 93, title: "అమెజాన్ రివ్యూలు", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600", category: "amazon", time: "3 రోజుల క్రితం", desc: "ఫేక్ రివ్యూలు ఎలా గుర్తించాలి." },
  { id: 94, title: "అమెజాన్ కూపన్లు", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600", category: "amazon", time: "4 రోజుల క్రితం", desc: "ఫ్రీ కూపన్ కోడ్‌లు ఎలా పొందాలి." },
  { id: 95, title: "అమెజాన్ డెలివరీ", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600", category: "amazon", time: "5 రోజుల క్రితం", desc: "వన్-డే డెలివరీ ఎలా పొందాలి." },
  { id: 96, title: "అమెజాన్ బిజినెస్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "amazon", time: "6 రోజుల క్రితం", desc: "అమెజాన్ సెల్లర్ అకౌంట్ గైడ్." },
  // flipkart (6)
  { id: 97, title: "ఫ్లిప్‌కార్ట్ బిగ్ సేల్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "flipkart", time: "1 రోజు క్రితం", desc: "ఫ్లిప్‌కార్ట్ బిగ్ బిలియన్ డేస్." },
  { id: 98, title: "ఫ్లిప్‌కార్ట్ వాలెట్", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600", category: "flipkart", time: "2 రోజుల క్రితం", desc: "ఫ్లిప్‌కార్ట్ వాలెట్ బెనిఫిట్స్." },
  { id: 99, title: "ఫ్లిప్‌కార్ట్ EMI", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600", category: "flipkart", time: "3 రోజుల క్రితం", desc: "నో-కాస్ట్ EMI ఆప్షన్ వివరాలు." },
  { id: 100, title: "ఫ్లిప్‌కార్ట్ ప్లస్", image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=600", category: "flipkart", time: "4 రోజుల క్రితం", desc: "ఫ్లిప్‌కార్ట్ ప్లస్ మెంబర్‌షిప్." },
  { id: 101, title: "ఫ్లిప్‌కార్ట్ ఎక్స్‌చేంజ్", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600", category: "flipkart", time: "5 రోజుల క్రితం", desc: "పాత ఫోన్ ఎక్స్‌చేంజ్ ఆఫర్." },
  { id: 102, title: "ఫ్లిప్‌కార్ట్ సూపర్‌కాయిన్స్", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600", category: "flipkart", time: "6 రోజుల క్రితం", desc: "సూపర్‌కాయిన్స్ ఎలా సంపాదించాలి." },
  // it-companies (6)
  { id: 103, title: "TCS నియామకాలు", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", category: "it-companies", time: "1 రోజు క్రితం", desc: "TCS భారీ నియామకాలు ప్రారంభం." },
  { id: 104, title: "ఇన్ఫోసిస్ కొత్త ప్రాజెక్ట్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "it-companies", time: "2 రోజుల క్రితం", desc: "ఇన్ఫోసిస్ కొత్త AI ప్రాజెక్ట్." },
  { id: 105, title: "Wipro శిక్షణ", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", category: "it-companies", time: "3 రోజుల క్రితం", desc: "Wipro ఉచిత శిక్షణ కార్యక్రమం." },
  { id: 106, title: "HCL టెక్నాలజీస్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", category: "it-companies", time: "4 రోజుల క్రితం", desc: "HCL కొత్త క్యాంపస్ ప్రారంభం." },
  { id: 107, title: "టెక్ మహీంద్రా", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", category: "it-companies", time: "5 రోజుల క్రితం", desc: "టెక్ మహీంద్రా వర్క్ ఫ్రం హోమ్." },
  { id: 108, title: "గూగుల్ ఇండియా", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "it-companies", time: "6 రోజుల క్రితం", desc: "గూగుల్ ఇండియా కొత్త కార్యాలయం." },
  // technical-education (6)
  { id: 109, title: "బెస్ట్ కోడింగ్ కోర్సులు", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600", category: "technical-education", time: "1 రోజు క్రితం", desc: "ఫ్రీ కోడింగ్ కోర్సులు ఆన్‌లైన్." },
  { id: 110, title: "AI లెర్నింగ్ పాత్", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600", category: "technical-education", time: "2 రోజుల క్రితం", desc: "AI నేర్చుకోవడానికి కంప్లీట్ గైడ్." },
  { id: 111, title: "డిగ్రీ vs స్కిల్స్", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600", category: "technical-education", time: "3 రోజుల క్రితం", desc: "డిగ్రీ లేదా స్కిల్స్ ఏది ముఖ్యం." },
  { id: 112, title: "ఆన్‌లైన్ లెర్నింగ్", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600", category: "technical-education", time: "4 రోజుల క్రితం", desc: "బెస్ట్ ఆన్‌లైన్ లెర్నింగ్ ప్లాట్‌ఫామ్స్." },
  { id: 113, title: "సర్టిఫికేషన్ వాల్యూ", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600", category: "technical-education", time: "5 రోజుల క్రితం", desc: "IT సర్టిఫికేషన్ల వాల్యూ ఎంత." },
  { id: 114, title: "ప్రాజెక్ట్ ఐడియాలు", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600", category: "technical-education", time: "6 రోజుల క్రితం", desc: "కంప్యూటర్ సైన్స్ ప్రాజెక్ట్ ఐడియాలు." },
  // technical-jobs (6)
  { id: 115, title: "IT జాబ్ మార్కెట్", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", category: "technical-jobs", time: "1 రోజు క్రితం", desc: "2024లో IT జాబ్ మార్కెట్ ట్రెండ్స్." },
  { id: 116, title: "రెజ్యూమ్ టిప్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "technical-jobs", time: "2 రోజుల క్రితం", desc: "IT రెజ్యూమ్ బెస్ట్ ప్రాక్టీసెస్." },
  { id: 117, title: "ఇంటర్వ్యూ ప్రశ్నలు", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", category: "technical-jobs", time: "3 రోజుల క్రితం", desc: "టాప్ 50 ఇంటర్వ్యూ ప్రశ్నలు." },
  { id: 118, title: "వర్క్ ఫ్రం హోమ్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", category: "technical-jobs", time: "4 రోజుల క్రితం", desc: "వర్క్ ఫ్రం హోమ్ జాబ్స్ లిస్ట్." },
  { id: 119, title: "ఫ్రీలాన్సింగ్", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", category: "technical-jobs", time: "5 రోజుల క్రితం", desc: "ఫ్రీలాన్సింగ్ స్టార్ట్ చేయడం ఎలా." },
  { id: 120, title: "సాలరీ నెగోషియేషన్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "technical-jobs", time: "6 రోజుల క్రితం", desc: "జీతం నెగోషియేట్ చేసే టిప్స్." },
  // self-employment (6)
  { id: 121, title: "స్టార్టప్ ఐడియాలు", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "self-employment", time: "1 రోజు క్రితం", desc: "2024లో బెస్ట్ స్టార్టప్ ఐడియాలు." },
  { id: 122, title: "యూట్యూబ్ ఛానల్", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600", category: "self-employment", time: "2 రోజుల క్రితం", desc: "యూట్యూబ్ ఛానల్ స్టార్ట్ చేయడం." },
  { id: 123, title: "బ్లాగింగ్ గైడ్", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", category: "self-employment", time: "3 రోజుల క్రితం", desc: "బ్లాగింగ్ ద్వారా డబ్బు సంపాదించడం." },
  { id: 124, title: "ఫ్రీలాన్స్ ప్లాట్‌ఫామ్స్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", category: "self-employment", time: "4 రోజుల క్రితం", desc: "టాప్ ఫ్రీలాన్స్ వెబ్‌సైట్లు." },
  { id: 125, title: "డిజిటల్ మార్కెటింగ్", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", category: "self-employment", time: "5 రోజుల క్రితం", desc: "డిజిటల్ మార్కెటింగ్ కెరీర్ గైడ్." },
  { id: 126, title: "డ్రాప్‌షిపింగ్", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "self-employment", time: "6 రోజుల క్రితం", desc: "డ్రాప్‌షిపింగ్ బిజినెస్ ఎలా స్టార్ట్ చేయాలి." },
  // cyber-crime (6)
  { id: 127, title: "ఫిషింగ్ ఎటాక్స్", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", category: "cyber-crime", time: "1 రోజు క్రితం", desc: "ఫిషింగ్ ఎటాక్స్ నుంచి ఎలా బయటపడాలి." },
  { id: 128, title: "పాస్‌వర్డ్ సేఫ్టీ", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", category: "cyber-crime", time: "2 రోజుల క్రితం", desc: "స్ట్రాంగ్ పాస్‌వర్డ్ ఎలా క్రియేట్ చేయాలి." },
  { id: 129, title: "ఆన్‌లైన్ ఫ్రాడ్", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", category: "cyber-crime", time: "3 రోజుల క్రితం", desc: "ఆన్‌లైన్ ఫ్రాడ్ రిపోర్ట్ ఎలా చేయాలి." },
  { id: 130, title: "సైబర్ లా", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", category: "cyber-crime", time: "4 రోజుల క్రితం", desc: "భారతదేశంలో సైబర్ చట్టాలు." },
  { id: 131, title: "డేటా ప్రైవసీ", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600", category: "cyber-crime", time: "5 రోజుల క్రితం", desc: "డేటా ప్రైవసీ ఎలా ప్రొటెక్ట్ చేయాలి." },
  { id: 132, title: "మాల్వేర్ ప్రొటెక్షన్", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600", category: "cyber-crime", time: "6 రోజుల క్రితం", desc: "మాల్వేర్ నుంచి కంప్యూటర్ రక్షణ." },
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

export default function CategoryPage({ params }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 992);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const resolvedParams = use(params);
  const filteredPosts = allPosts.filter((item) => item.category === resolvedParams.category);

  if (filteredPosts.length === 0) {
    return (
      <div style={{ background: "#efefef", minHeight: "100vh", padding: "50px", textAlign: "center" }}>
        <h2>No Articles Found</h2>
        <p>Category: {resolvedParams.category}</p>
      </div>
    );
  }

  // Mobile responsive styles
  let gridColumns = 3;
  let gap = "34px";
  let padding = "30px 40px";
  let imageHeight = "275px";
  let minHeight = "auto";
  
  if (isMobile) {
    gridColumns = 1;
    gap = "20px";
    padding = "16px 12px 30px";
    imageHeight = "220px";
    
  } else if (isTablet) {
    gridColumns = 2;
    gap = "24px";
    padding = "25px 20px 30px";
    imageHeight = "250px";
  }

  return (
    <div style={{ background: "#efefef", minHeight: "100vh", padding: padding }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: gap }}>
        {filteredPosts.map((post) => (
          <Card key={post.id} post={post} isMobile={isMobile} imageHeight={imageHeight} minHeight={minHeight} />
        ))}
      </div>
    </div>
  );
}

function Card({ post, isMobile, imageHeight, minHeight }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background: "#f7f7f7", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "8px", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => !isMobile && setHover(true)} onMouseLeave={() => !isMobile && setHover(false)}>
      <Link href={`/article/${post.id}`} style={{ textDecoration: "none" }}>
        <div style={{ position: "relative" }}>
          <Image src={post.image} alt={post.title} width={400} height={275}
            style={{ width: "100%", height: imageHeight, objectFit: "cover", display: "block" }} unoptimized
            onError={(e) => { e.target.src = DUMMY_IMAGE; }} />
          <Image src="https://computervignanam.net/assets/img/cvnewlogo2.png" alt="logo" width={72} height={30}
            style={{ position: "absolute", top: "10px", right: "10px", width: isMobile ? "60px" : "72px", height: "auto" }} unoptimized />
        </div>
        <div style={{ padding: isMobile ? "12px" : "18px", textAlign: "center" }}>
          <h2 style={{ color: "#1e5bd7", fontSize: isMobile ? "16px" : "18px", lineHeight: isMobile ? "24px" : "30px", fontWeight: "normal", margin: "0 0 8px 0" }}>{post.title}</h2>
          <div style={{ marginTop: "8px", marginBottom: "8px", display: "flex", justifyContent: "center", gap: "5px", color: "#a0a0a0", fontSize: isMobile ? "11px" : "13px" }}>
            {post.category}<span style={{ margin: "0 10px" }}>/</span>{post.time}
          </div>
          <div style={{ marginTop: isMobile ? "12px" : "16px", marginBottom: isMobile ? "12px" : "16px", display: "flex", justifyContent: "center", gap: isMobile ? "10px" : "12px" }}>
            <FaFacebookF color="#1877f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('facebook', post.title, window.location.href); }} />
            <FaTwitter color="#1da1f2" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('twitter', post.title, window.location.href); }} />
            <FaWhatsapp color="#25d366" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('whatsapp', post.title, window.location.href); }} />
            <FaTelegramPlane color="#229ED9" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('telegram', post.title, window.location.href); }} />
            <MdEmail color="#666" size={isMobile ? 16 : 18} style={{ cursor: "pointer" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); shareOnSocial('email', post.title, window.location.href); }} />
          </div>
          <p style={{ color: "#777", fontSize: isMobile ? "13px" : "15px", lineHeight: isMobile ? "22px" : "28px", textAlign: "left", margin: "8px 0 0 0" }}>{post.desc}</p>
        </div>
        {/* GREEN HOVER LINE - Only on Desktop */}
        {!isMobile && (
          <div style={{ height: "4px", background: "#7ac000", width: "100%", position: "absolute", bottom: 0, left: 0, opacity: hover ? 1 : 0, transition: "0.3s" }} />
        )}
      </Link>
    </div>
  );
}