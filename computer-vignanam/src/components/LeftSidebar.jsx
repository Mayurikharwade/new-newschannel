"use client";

import Link from "next/link";
import Image from "next/image";

export default function LeftSidebar() {
  const categories = [
    { name: "ఆంధ్ర ప్రదేశ్", slug: "andhra-pradesh" },
    { name: "తెలంగాణ", slug: "telangana" },
    { name: "జాతీయం", slug: "national" },
    { name: "అంతర్జాతీయం", slug: "international" },
    { name: "టెలికం", slug: "telecom" },
    {
      name: "కొత్త ఉత్పత్తులు",
      slug: "products",
      sub: [
        { name: "మొబైల్ లు / టాబ్లెట్ లు", slug: "mobiles-tablets" },
        { name: "పిసి లు / లాప్ టాప్ లు", slug: "pcs-laptops" },
        { name: "సాఫ్ట్ వేర్ లు", slug: "software" },
        { name: "యాప్ లు", slug: "apps" },
        { name: "ఇంటర్నెట్", slug: "internet" },
      ],
    },
    {
      name: "సోషల్ మీడియా",
      slug: "social-media",
      sub: [
        { name: "ఫేస్ బుక్", slug: "facebook" },
        { name: "వాట్స్ అప్", slug: "whatsapp" },
      ],
    },
    {
      name: "ఈ వాణిజ్యం",
      slug: "ecommerce",
      sub: [
        { name: "అమెజాన్", slug: "amazon" },
        { name: "ఫ్లిప్ కార్ట్", slug: "flipkart" },
      ],
    },
    { name: "ఐ.టి. కంపెనీలు", slug: "it-companies" },
    { name: "సాంకేతిక విద్య", slug: "technical-education" },
    { name: "సాంకేతిక ఉపాధి", slug: "technical-jobs" },
    { name: "సాంకేతిక స్వయం ఉపాధి", slug: "self-employment" },
    { name: "సైబర్ క్రైమ్", slug: "cyber-crime" },
  ];

  const fbPages = [
    {
      name: "ఆంధ్రప్రదేశ్ వార్తలు",
      followers: "5.7K followers",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&q=80",
      link: "/news/andhra-pradesh",
    },
    {
      name: "తెలంగాణ వార్తలు",
      followers: "1K followers",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=100&q=80",
      link: "/news/telangana",
    },
    {
      name: "కొత్త ఉత్పత్తులు",
      followers: "1.9K followers",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80",
      link: "/news/products",
    },
  ];

  return (
   <div className="left-sidebar">
      {/* NEWS */}
      <h2 style={{ fontSize: "18px", fontWeight: "bold", borderBottom: "1px solid #dcdcdc", paddingBottom: "6px", marginBottom: "10px", color: "#dd4b39" }}>
        వార్తలు
      </h2>

      {categories.map((cat, i) => (
        <div key={i}>
          <div className="category-item" style={{ padding: "6px 0" }}>
            <Link href={`/news/${cat.slug}`} style={{ color: "#555", fontSize: "15px", textDecoration: "none", cursor: "pointer" }}>
              {cat.name}
            </Link>
          </div>

          {cat.sub && cat.sub.map((s, j) => (
           <div
  key={j}
  className="subcategory-item"
  style={{ paddingLeft: "16px", paddingBottom: "3px" }}
>
              <Link href={`/news/${s.slug}`} style={{ color: "#777", fontSize: "13px", textDecoration: "none", cursor: "pointer" }}>
                -- {s.name}
              </Link>
            </div>
          ))}

          <hr style={{ border: "none", borderTop: "1px solid #ececec", margin: "4px 0" }} />
        </div>
      ))}

      {/* FOLLOW BUTTON */}
      <div style={{ marginTop: "12px" }}>
        <a href="https://twitter.com/ComputerVignanm" target="_blank" rel="noopener noreferrer"
          style={{ display: "block", background: "#000", color: "#fff", textAlign: "center", padding: "10px 0", borderRadius: "25px", fontSize: "13px", fontWeight: "bold", textDecoration: "none", marginBottom: "14px" }}>
          ✕ Follow @ComputerVignanm
        </a>

        {/* YOUTUBE BOX */}
        <div
  className="youtube-box"
  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}
>
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80" alt="YT" width={52} height={52}
            style={{ objectFit: "cover", border: "1px solid #ddd" }} unoptimized />
          <div>
            <div style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>Computer Vignanam</div>
            <a href="https://youtube.com/@ComputerVignanam" target="_blank" rel="noopener noreferrer"
              style={{ background: "#ff0000", color: "#fff", padding: "6px 12px", fontSize: "12px", textDecoration: "none", borderRadius: "2px", fontWeight: "bold", display: "inline-block" }}>
              ▶ YouTube
            </a>
          </div>
        </div>

        {/* FACEBOOK BOXES */}
        {fbPages.map((page, i) => (
          <div key={i} style={{ border: "1px solid #ddd", background: "#fff", marginBottom: "14px", width: "100%", overflow: "hidden" }}>
            <Link href={page.link} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "10px" }}>
                <Image src={page.image} alt={page.name} width={52} height={52}
                  style={{ objectFit: "cover", border: "1px solid #ccc", flexShrink: 0 }} unoptimized />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#3b5998", fontSize: "13px", lineHeight: "18px", fontWeight: "500" }}>{page.name}</div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "2px" }}>{page.followers}</div>
                </div>
              </div>
            </Link>
            <div style={{ borderTop: "1px solid #f0f0f0", padding: "10px", background: "#fafafa" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                style={{ background: "#f5f6f7", border: "1px solid #ccd0d5", color: "#4b4f56", fontSize: "12px", height: "28px", padding: "0 10px", display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", fontWeight: "bold", borderRadius: "2px", textDecoration: "none", justifyContent: "center" }}>
                <span style={{ background: "#4267b2", color: "#fff", width: "14px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold" }}>f</span>
                Follow Page
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
  @media (max-width: 768px) {

    .left-sidebar{
      margin-top: 10px;
    }

    .category-item a{
      font-size: 14px !important;
    }

    .subcategory-item a{
      font-size: 12px !important;
    }

    .youtube-box{
      gap: 8px !important;
    }

  }
`}</style>
    </div>
  );
}