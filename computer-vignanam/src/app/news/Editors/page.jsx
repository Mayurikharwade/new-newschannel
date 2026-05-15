"use client";

import Link from "next/link";
import Image from "next/image";


const articles = [
  {
    id: 1,  // ← ADDED ID
    title: "నగదు రహిత వ్యవస్థకు దారి ఎటు దూరం? ఎండ్ కష్టం? ఎండ్ మేలు?",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "ఇండియా డిజిటల్ రూపం తాలూకు ప్రయాణంలో నగదు రహిత వ్యవస్థపై విస్తృత చర్చ కొనసాగుతోంది. ముఖ్యంగా ఆర్థిక రంగంలో సాంకేతికత అనగా క్యాష్ లెస్ గా మారడానికి సమయాయుతమవుతోంది.",
    bg: "#fff",
    reverse: false,
  },
  {
    id: 2,  // ← ADDED ID
    title: "డెబ్బై సంవత్సరాల స్వతంత్ర భారత్..... ఇరవై సంవత్సరాల కంప్యూటర్ విజ్ఞానం",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    desc: "డిజిటల్ భారతం నుండి కంప్యూటర్ విజ్ఞానం వరకు అనేక మార్పులు చోటుచేసుకున్నాయి.",
    bg: "#fff",
    reverse: true,
  },
  {
    id: 3,  // ← ADDED ID
    title: "కేవలం 10 శాతం మాత్రమే ఖర్చయ్యే కంప్యూటర్ విజ్ఞానం వెబ్ సైట్",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "తెలుగు సాంకేతిక సాహిత్యంలో కంప్యూటర్ విజ్ఞానం ప్రత్యేక స్థానాన్ని సంపాదించింది.",
    bg: "#3f9ddd",
    reverse: false,
  },
  {
    id: 4,  // ← ADDED ID
    title: "రాజకీయ సాంకేతిక రాజమేళబోతుందా?...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    desc: "సాంకేతికత మరియు రాజకీయాల మధ్య సంబంధం పెరుగుతోంది.",
    bg: "#fff",
    reverse: true,
  },
  {
    id: 5,  // ← ADDED ID
    title: "తెలుగు సాంకేతిక సాహిత్యానికి ఆద్యుడు ఎవరు?",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    desc: "తెలుగు భాషలో కంప్యూటర్ సాహిత్యానికి పునాది వేసిన ప్రముఖుల గురించిన విశేషాలు.",
    bg: "#3f9ddd",
    reverse: false,
  },
];

export default function EditorsPage() {
  return (
    <div
      style={{
        background: "#ececec",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {articles.map((item, index) => (
        <div
          key={item.id}
          style={{
            background: item.bg,
            padding: "10px 18px",
            borderTop: item.bg === "#3f9ddd" ? "5px solid #58b7f3" : "none",
            marginBottom: index === articles.length - 1 ? "80px" : "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: item.reverse ? "row-reverse" : "row",
              gap: "18px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "48%" }}>
              <Image
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                   height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div style={{ width: "50%" }}>
              <h2
                style={{
                  color: "#1357d8",
                  fontSize: "17px",
                  lineHeight: "28px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#777",
                  fontSize: "14px",
                  marginBottom: "14px",
                }}
              >
                <span>టెక్ జీవన విజ్ఞానం - సంపాదకుడు</span>
                <span>/</span>
                <span>9 సంవత్సరాల క్రితం</span>
              </div>

              <p
                style={{
                  color: item.bg === "#3f9ddd" ? "#fff" : "#666",
                  fontSize: "14px",
                  lineHeight: "28px",
                }}
              >
                {item.desc}
              </p>

              {/* WORKING LINK BUTTON */}
              <Link href={`/news/Editors/${item.id}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    marginTop: "20px",
                    background: "#3498db",
                    border: "none",
                    color: "#fff",
                    padding: "8px 18px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ⚡ ఇంకా చదవండి
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}