"use client";

import { useEffect, useState } from "react";


const fallbackSections = [
  {
    title: "వీడియోలు",
    type: "video",
    items: [
      {
        image: "https://i.ytimg.com/vi/Pk_pUlxp3Dc/hqdefault.jpg",
        title: "మీకు తెలియకుండానే మీ ఫోన్‌లోకి యాప్స్ డౌన్‌లోడ్ అయిపోతున్నాయా?",
        badge: "4:11",
        videoId: "Pk_pUlxp3Dc",
      },
      {
        image: "https://i.ytimg.com/vi/iQsWR8ayoEY/hqdefault.jpg",
        title: "సెర్చ్ ఇంజన్ల నుంచి మీ పేరు పూర్తిగా తొలగించడం ఎలా?",
        badge: "2:48",
        videoId: "iQsWR8ayoEY",
      },
      {
        image: "https://i.ytimg.com/vi/7mO4qCdLA1w/hqdefault.jpg",
        title: "ఏంటి ఈ-శ్రమ్ కార్డ్? పొందడం ఎలా? లాభాలేంటి?",
        badge: "2:35",
        videoId: "7mO4qCdLA1w",
      },
      {
        image: "https://i.ytimg.com/vi/g4B8UrbVZ94/hqdefault.jpg",
        title: "మన క్రెడిట్/డెబిట్ కార్డుల నుండి డబ్బు కొట్టేయడానికి 15 మార్గాలు",
        badge: "6:03",
        videoId: "g4B8UrbVZ94",
      },
      {
        image: "https://i.ytimg.com/vi/XvY0j09t3LA/hqdefault.jpg",
        title: "మీ ఫోన్ త్వరగా పాడైపోవాలని కుట్రలు చేస్తోంది ఎవరో తెలుసా?",
        badge: "6:31",
        videoId: "XvY0j09t3LA",
      },
      {
        image: "https://i.ytimg.com/vi/vQ2uPWOMMDY/hqdefault.jpg",
        title: "వీడియో కాల్స్ ప్రొఫెషనల్ లాగా మాట్లాడటానికి 9 టిప్స్",
        badge: "4:32",
        videoId: "vQ2uPWOMMDY",
      },
      {
        image: "https://i.ytimg.com/vi/Iobc4qwhG3c/hqdefault.jpg",
        title: "డిజి లాకర్ గైడ్ || DigiLocker IN Telugu",
        badge: "4:03",
        videoId: "Iobc4qwhG3c",
      },
      {
        image: "https://i.ytimg.com/vi/gsE2p8fERq4/hqdefault.jpg",
        title: "భూమికి రెండో చంద్రుడు రాబోతున్నాడు",
        badge: "2:09",
        videoId: "gsE2p8fERq4",
      },
      {
        image: "https://i.ytimg.com/vi/uburz_Bo41c/hqdefault.jpg",
        title: "రోబోలు తక్షణం ఆక్రమించబోయే మన ఉద్యోగాలు ఇవే",
        badge: "3:45",
        videoId: "uburz_Bo41c",
      },
      {
        image: "https://i.ytimg.com/vi/PVHyYKlWiSo/hqdefault.jpg",
        title: "0% వడ్డీతో ఈఎంఐ ప్లాన్స్ - నిజాలు",
        badge: "4:33",
        videoId: "PVHyYKlWiSo",
      },
      {
        image: "https://i.ytimg.com/vi/e-A1vrZYuU0/hqdefault.jpg",
        title: "ఫోన్ స్టోరేజ్ విషయంలో మనం చేసే 8 తప్పులు",
        badge: "4:02",
        videoId: "e-A1vrZYuU0",
      },
      {
        image: "https://i.ytimg.com/vi/jLj8Ntq-0hE/hqdefault.jpg",
        title: "పాన్ కార్డ్ లో సొంతంగా మార్పులు చేసుకోవడం ఎలా?",
        badge: "2:25",
        videoId: "jLj8Ntq-0hE",
      },
    ],
  },
  {
    title: "షార్ట్స్",
    type: "shorts",
    items: [
      {
        image: "https://i.ytimg.com/vi/RE8jubTbHz8/hqdefault.jpg",
        title: "బెస్ట్ ఫ్రీ వీడియో ఎడిటింగ్ టూల్స్",
        badge: "Shorts",
        videoId: "RE8jubTbHz8",
      },
      {
        image: "https://i.ytimg.com/vi/gFmiZLgn9r8/hqdefault.jpg",
        title: "డిజిటల్ మార్కెటింగ్ నేర్చుకోవడానికి టాప్ 8 యాప్స్",
        badge: "Shorts",
        videoId: "gFmiZLgn9r8",
      },
      {
        image: "https://i.ytimg.com/vi/oaEXBLQXERE/hqdefault.jpg",
        title: "2024లో డిమాండ్ ఉన్న సాఫ్ట్ వేర్ స్కిల్స్",
        badge: "Shorts",
        videoId: "oaEXBLQXERE",
      },
      {
        image: "https://i.ytimg.com/vi/p1xRkYgA5oU/hqdefault.jpg",
        title: "టాప్ 18 సోషల్ మీడియా మార్కెటింగ్ టూల్స్",
        badge: "Shorts",
        videoId: "p1xRkYgA5oU",
      },
      {
        image: "https://i.ytimg.com/vi/jA6P1RUHx6Y/hqdefault.jpg",
        title: "10 రోజుల్లో పైథాన్ నేర్చుకోవడానికి గైడ్",
        badge: "Shorts",
        videoId: "jA6P1RUHx6Y",
      },
      {
        image: "https://i.ytimg.com/vi/ls_IQMjPVKI/hqdefault.jpg",
        title: "సైబర్ సెక్యూరిటీ కోసం టాప్ 8 యాప్లు",
        badge: "Shorts",
        videoId: "ls_IQMjPVKI",
      },
      {
        image: "https://i.ytimg.com/vi/26VhiKM8cbM/hqdefault.jpg",
        title: "వెబ్ డెవలపర్ల కోసం టాప్ 15 యాప్లు",
        badge: "Shorts",
        videoId: "26VhiKM8cbM",
      },
      {
        image: "https://i.ytimg.com/vi/RY6ngTBPW04/hqdefault.jpg",
        title: "3 రకాల వెబ్ డెవలపర్స్",
        badge: "Shorts",
        videoId: "RY6ngTBPW04",
      },
      {
        image: "https://i.ytimg.com/vi/bf417Vaqzdw/hqdefault.jpg",
        title: "2024లో డిమాండ్ ఉన్న టాప్ 15 ప్రోగ్రామింగ్ లాంగ్వేజెస్",
        badge: "Shorts",
        videoId: "bf417Vaqzdw",
      },
    ],
  },
  {
    title: "ప్లేలిస్ట్లు",
    type: "playlist",
    items: [
      {
        image: "https://i.ytimg.com/vi/Pk_pUlxp3Dc/hqdefault.jpg",
        title: "టిప్స్ అండ్ ట్రిక్స్",
        badge: "17 videos",
        playlistId: "PL6aBN8likwarXg8GJA44PtZMERDKo_KHV",
      },
      {
        image: "https://i.ytimg.com/vi/uburz_Bo41c/hqdefault.jpg",
        title: "ప్రివ్యూ",
        badge: "7 videos",
        playlistId: "PL6aBN8likwaoOTYzg7nbuEGZ-60ih-r4q",
      },
      {
        image: "https://i.ytimg.com/vi/Q9R6KP50AJE/hqdefault.jpg",
        title: "రివ్యూ",
        badge: "11 videos",
        playlistId: "PL6aBN8likwaruBdjxleegfE4s0wpEXlqJ",
      },
      {
        image: "https://i.ytimg.com/vi/vQ2uPWOMMDY/hqdefault.jpg",
        title: "యాప్స్ యాప్స్ యాప్స్",
        badge: "5 videos",
        playlistId: "PL6aBN8likwarod1sIy_tuf40F0qwJzGoO",
      },
      {
        image: "https://i.ytimg.com/vi/hPbbzRZUS5k/hqdefault.jpg",
        title: "సాంకేతిక స్వయం ఉపాధి",
        badge: "3 videos",
        playlistId: "PL6aBN8likwaoQDFw_GCo46ULtstWG5_sQ",
      },
      {
        image: "https://i.ytimg.com/vi/UWln-myX4UU/hqdefault.jpg",
        title: "కొత్త ఉత్పత్తులు",
        badge: "3 videos",
        playlistId: "PL6aBN8likwaqLQkJrp3X4o9a2Vi9fj0Rj",
      },
      {
        image: "https://i.ytimg.com/vi/euBHKhxIT5o/hqdefault.jpg",
        title: "జాతీయ టెక్నాలజీ వార్తలు",
        badge: "5 videos",
        playlistId: "PL6aBN8likwao1445dTClCgCWPTF8JM4xA",
      },
      {
        image: "https://i.ytimg.com/vi/Q9R6KP50AJE/hqdefault.jpg",
        title: "ఈ కామర్స్ డైజెస్ట్",
        badge: "12 videos",
        playlistId: "PL6aBN8likwao8ECjcjTdAUDWVCsx4jbgi",
      },
    ],
  },
];

export default function VideosPage() {

  const [activeTab, setActiveTab] = useState("videos");
  const [sections, setSections] = useState(fallbackSections);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const json = await fetchVideos();
        const next = Array.isArray(json.data) ? json.data : null;
        if (!cancelled && next && next.length) setSections(next);
      } catch {
        // keep fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const videosSection = sections.find(
    (s) => s.type === "video"
  );

  const shortsSection = sections.find(
    (s) => s.type === "shorts"
  );

  const playlistSection = sections.find(
    (s) => s.type === "playlist"
  );

  const openVideo = (item, type) => {

    if (type === "playlist") {

      window.open(
        `https://www.youtube.com/playlist?list=${item.playlistId}`,
        "_blank"
      );

    } else if (type === "shorts") {

      window.open(
        `https://www.youtube.com/shorts/${item.videoId}`,
        "_blank"
      );

    } else {

      window.open(
        `https://www.youtube.com/watch?v=${item.videoId}`,
        "_blank"
      );
    }
  };

  return (

    <div className="videos-page">

      {/* TABS */}

      <div className="video-tabs">

        <button
          className={
            activeTab === "videos"
              ? "tab-btn active"
              : "tab-btn"
          }
          onClick={() => setActiveTab("videos")}
        >
          వీడియోలు
        </button>

        <button
          className={
            activeTab === "shorts"
              ? "tab-btn active"
              : "tab-btn"
          }
          onClick={() => setActiveTab("shorts")}
        >
          షార్ట్స్
        </button>

      </div>

      {/* VIDEOS TAB */}

      {activeTab === "videos" && (

        <>
          {/* VIDEOS */}

          <div className="videos-grid">

            {videosSection.items.map((item, i) => (

              <div
                key={i}
                className="video-grid-card"
                onClick={() => openVideo(item, "video")}
              >

                <div className="thumb-box">
                  <img src={item.image} alt="" />

                  <span className="video-badge">
                    {item.badge}
                  </span>
                </div>

                <div className="video-content">
                  <h3>{item.title}</h3>

                  <p>వీడియో చూడండి</p>
                </div>

              </div>

            ))}

          </div>

          {/* PLAYLISTS */}

          <div className="playlist-title">
            ప్లేలిస్ట్లు
          </div>

          <div className="playlist-grid">

            {playlistSection.items.map((item, i) => (

              <div
                key={i}
                className="playlist-card"
                onClick={() => openVideo(item, "playlist")}
              >

                <div className="thumb-box">
                  <img src={item.image} alt="" />

                  <span className="video-badge">
                    {item.badge}
                  </span>
                </div>

                <div className="video-content">
                  <h3>{item.title}</h3>

                  <p>పూర్తి ప్లేలిస్ట్</p>
                </div>

              </div>

            ))}

          </div>
        </>
      )}

      {/* SHORTS TAB */}

      {activeTab === "shorts" && (

        <div className="shorts-grid">

          {shortsSection.items.map((item, i) => (

            <div
              key={i}
              className="short-card"
              onClick={() => openVideo(item, "shorts")}
            >

              <div className="short-thumb">
                <img src={item.image} alt="" />
              </div>

              <div className="short-content">
                <h4>{item.title}</h4>
              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}