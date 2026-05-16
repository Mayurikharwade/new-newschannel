"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const shorts = [
  {
    title: "బెస్ట్ ఫ్రీ వీడియో ఎడిటింగ్ యాప్స్",
    image: "https://i.ytimg.com/vi/p1xRkYgA5oU/maxresdefault.jpg",
  },
  {
    title: "డిజిటల్ మార్కెటింగ్ నేర్చుకోవడానికి టాప్ టిప్స్",
    image: "https://i.ytimg.com/vi/5MgBikgcWnY/maxresdefault.jpg",
  },
  {
    title: "2024 లో బెస్ట్ యాప్ ఐడియాస్",
    image: "https://i.ytimg.com/vi/QM1iUe6IofM/maxresdefault.jpg",
  },
  {
    title: "టాప్ సోషల్ మీడియా మార్కెటింగ్ టూల్స్",
    image: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
  },
  {
    title: "పైథాన్ నేర్చుకోవడానికి బెస్ట్ ఛానెల్స్",
    image: "https://i.ytimg.com/vi/kqtD5dpn9C8/maxresdefault.jpg",
  },
  {
    title: "బెస్ట్ ఫ్రీ వీడియో ఎడిటింగ్ యాప్స్",
    image: "https://i.ytimg.com/vi/p1xRkYgA5oU/maxresdefault.jpg",
  },
  {
    title: "డిజిటల్ మార్కెటింగ్ నేర్చుకోవడానికి టాప్ టిప్స్",
    image: "https://i.ytimg.com/vi/5MgBikgcWnY/maxresdefault.jpg",
  },
  {
    title: "2024 లో బెస్ట్ యాప్ ఐడియాస్",
    image: "https://i.ytimg.com/vi/QM1iUe6IofM/maxresdefault.jpg",
  },
];

export default function ShortsSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "5px 12px 12px",
        position: "relative",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#e74c3c",
            display: "inline-block",
            fontSize: "20px",
            fontWeight: "bold",
            borderLeft: "4px solid #e74c3c",
            paddingLeft: "10px",
          }}
        >
          తాజా వీడియోలు
        </h2>

        <Link
          href="/videos"
          style={{
            color: "#e74c3c",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "0.3px",
          }}
        >
          అన్నీ చూడండి →
        </Link>
      </div>

      {/* LEFT BUTTON */}
      <button
        className="slider-arrow"
  onClick={() => scroll("left")}
        style={{
          position: "absolute",
          left: "6px",
          top: "52%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          border: "none",
          background: "#fff",
          boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
          fontSize: "18px",
          color: "#333",
        }}
      >
        ❮
      </button>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          gap: "14px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {shorts.map((item, index) => (
          <a
            key={index}
             className="short-card"
            href="https://www.youtube.com/channel/UCu-4QjT1z4qMoWIBog327yA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "230px",
              flexShrink: 0,
              textDecoration: "none",
              color: "#000",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "none",
                overflow: "hidden",
              }}
            >
              {/* IMAGE */}
              <div
                className="short-image"
  style={{
    position: "relative",
                  height: "320px",
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={230}
                  height={320}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                  unoptimized
                />

                {/* PLAY BUTTON */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(255,0,0,0.92)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  ▶
                </div>
              </div>

              {/* CONTENT */}
              <div
                className="short-content"
  style={{
    padding: "10px",
                  background: "#fff",
                  minHeight: "88px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    color: "#111",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#777",
                    fontSize: "12px",
                  }}
                >
                  <span>106 వీక్షణలు</span>
                  <span>2 రోజుల క్రితం</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
      className="slider-arrow"
  onClick={() => scroll("right")}
        style={{
          position: "absolute",
          right: "6px",
          top: "52%",
          transform: "translateY(-50%)",
          zIndex: 10,
         width: "34px",
          height: "34px",
          borderRadius: "50%",
          border: "none",
          background: "#fff",
          boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
          fontSize: "18px",
          color: "#333",
        }}
      >
        ❯
      </button>
       <style jsx>{`
      @media (max-width: 768px) {

        .short-card{
          width: 170px !important;
        }

        .short-image{
          height: 250px !important;
        }

        .short-content{
          min-height: 74px !important;
        }

        .slider-arrow{
          width: 28px !important;
          height: 28px !important;
        }

      }
    `}</style>

    </div>
  );
}