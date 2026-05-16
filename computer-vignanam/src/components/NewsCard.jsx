"use client";

import Link from "next/link";
import Image from "next/image";

const DUMMY_IMAGE = "https://placehold.co/800x500/1a5cb0/white?text=Computer+Vignanam";

export default function NewsCard({ post }) {
  return (
   <div
  className="news-card"
  style={{
        display: "flex",
        gap: "20px",
        marginBottom: "12px",
        paddingBottom: "12px",
        borderBottom: "1px solid #eee",
        minHeight: "90px",
        alignItems: "flex-start",
      }}
    >
     <div
  className="news-image"
  style={{ width: "28%", minWidth: "130px" }}
>
        <Image
          src={post.image}
          alt={post.title}
          width={130}
          height={100}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            border: "1px solid #ddd",
            padding: "3px",
            background: "#fff",
          }}
          unoptimized
          onError={(e) => { e.target.src = DUMMY_IMAGE; }}
        />
      </div>
      <div className="news-content" style={{ flex: 1 }}>
        <h3 style={{ fontSize: "18px", margin: "0 0 8px 0" }}>
          <Link
            href={`/article-details/${post.id}`}
            style={{ color: "#1a5cb0", fontWeight: "bold", textDecoration: "none" }}
          >
            {post.title}
          </Link>
        </h3>
        <div
          style={{
            fontSize: "11px",
            color: "#888",
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
            {post.category}
          </span>
          <span>/</span>
          <span>🕒 {post.date}</span>
        </div>
        <p style={{ fontSize: "14px", color: "#666", margin: 0, lineHeight: "24px" }}>
          {post.excerpt}
        </p>
        <div style={{ marginTop: "10px" }}>
          <Link
            href={`/article-details/${post.id}`}
            style={{
              color: "#e74c3c",
              fontSize: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ఇంకా చదవండి →
          </Link>
        </div>
      </div>
      <style jsx>{`
  @media (max-width: 768px) {

    .news-card{
      gap: 12px !important;
      align-items: flex-start !important;
    }

    .news-image{
      width: 110px !important;
      min-width: 110px !important;
    }

    .news-content h3{
      font-size: 15px !important;
      line-height: 22px !important;
    }

    .news-content p{
      font-size: 13px !important;
      line-height: 21px !important;
    }

  }
`}</style>
    </div>
  );
}