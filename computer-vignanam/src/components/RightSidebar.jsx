import Link from "next/link";
import Image from "next/image";

export default function RightSidebar() {
  const fbPages = [
    {
      name: "ఆంధ్రప్రదేశ్ టెక్నాలజీ వార్తలు",
      followers: "5,710 followers",
      image: "https://picsum.photos/60?1",
      link: "/news/Andhra-Pradesh",
    },
    {
      name: "తెలంగాణ టెక్నాలజీ వార్తలు",
      followers: "1,097 followers",
      image: "https://picsum.photos/60?2",
      link: "/news/Telangana",
    },
    {
      name: "కొత్త ఉత్పత్తులు",
      followers: "1,940 followers",
      image: "https://picsum.photos/60?3",
      link: "/news/New-Products",
    },
    {
      name: "ఈ-కామర్స్ డైజెస్ట్",
      followers: "1,180 followers",
      image: "https://picsum.photos/60?4",
      link: "/news/E-Commerce",
    },
    {
      name: "ఈ-కామర్స్ డైజెస్ట్",
      followers: "1.1K followers",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&q=80",
      link: "/news/E-Commerce",
    },
    {
      name: "సోషల్ మీడియా",
      followers: "9.1K followers",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&q=80",
      link: "/news/Social-Media",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {/* TITLE */}
      <h3
        style={{
          color: "#e74c3c",
          fontSize: "16px",
          fontWeight: "bold",
          borderBottom: "1px solid #ddd",
          paddingBottom: "8px",
          marginBottom: "15px",
          marginTop: "5px",
        }}
      >
        విజ్ఞానం బార్ విశేషాలు
      </h3>

      {/* X FOLLOW BUTTON */}
      <a
        href="https://twitter.com/computervignanm"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#000",
          color: "#fff",
          borderRadius: "20px",
          height: "34px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "18px",
          textDecoration: "none",
        }}
      >
        ✕ Follow @ComputerVignanm
      </a>

      {/* YOUTUBE SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80"
          alt="logo"
          width={52}
          height={52}
          style={{
            objectFit: "contain",
            border: "1px solid #ddd",
            background: "#fff",
          }}
          unoptimized
        />

        <div>
          <div
            style={{
              fontSize: "13px",
              color: "#666",
              marginBottom: "5px",
            }}
          >
            Computer Vignanam
          </div>

          <a
            href="https://www.youtube.com/channel/UCu-4QjT1z4qMoWIBog327yA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#ff0000",
              color: "#fff",
              padding: "5px 10px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: "bold",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            ▶ YouTube
          </a>
        </div>
      </div>

      {/* FACEBOOK BOXES */}
      {fbPages.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #d8dfea",
            background: "#fff",
            marginBottom: "14px",
            width: "100%",
          }}
        >
          {/* TOP AREA */}
          <Link
            href={item.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.name}
                width={54}
                height={54}
                style={{
                  border: "1px solid #ccc",
                  objectFit: "cover",
                }}
                unoptimized
              />

              {/* TEXT */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "#365899",
                    fontSize: "13px",
                    lineHeight: "18px",
                    marginBottom: "3px",
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </div>

                <div
                  style={{
                    color: "#90949c",
                    fontSize: "12px",
                  }}
                >
                  {item.followers}
                </div>
              </div>
            </div>
          </Link>

          {/* BUTTON AREA */}
          <div
            style={{
              borderTop: "1px solid #f0f0f0",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#fafafa",
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#f5f6f7",
                border: "1px solid #ccd0d5",
                color: "#4b4f56",
                fontSize: "12px",
                height: "28px",
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  background: "#4267b2",
                  color: "#fff",
                  width: "14px",
                  height: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                f
              </span>
              Follow Page
            </a>

            {/* SHARE BUTTON */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#f5f6f7",
                border: "1px solid #ccd0d5",
                color: "#4b4f56",
                fontSize: "12px",
                height: "28px",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  transform: "rotate(-45deg)",
                  display: "inline-block",
                  marginTop: "-2px",
                  color: "#606770",
                }}
              >
                ➜
              </span>
              Share
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}