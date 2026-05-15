'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: 'http://www.computervignanam.net/admin/menupageimage/com-2.jpg',
    link: '/article/1000',
  },
  {
    image: 'http://www.computervignanam.net/admin/menupageimage/ramoji.jpg',
    link: '/article/998',
  },
  {
    image: 'http://www.computervignanam.net/admin/menupageimage/tech%20copy.jpg',
    link: '/article/997',
  },
  {
    image: 'http://www.computervignanam.net/admin/menupageimage/editor.jpg',
    link: '/article/990',
  },
  {
    image:
      'http://www.computervignanam.net/admin/reg_adminusers/reguser_uploadimage/1482865010_SAI179R.jpg',
    link: '/article/848',
  },
  {
    image:
      'http://www.computervignanam.net/admin/reg_adminusers/reguser_uploadimage/1482825086_SAI176R.jpg',
    link: '/article/845',
  },
  {
    image:
      'http://www.computervignanam.net/admin/reg_adminusers/reguser_uploadimage/1482825133_SAI174R.jpg',
    link: '/article/843',
  },
  {
    image:
      'http://www.computervignanam.net/admin/reg_adminusers/reguser_uploadimage/1482825180_SAI172R.jpg',
    link: '/article/841',
  },
]

export default function Banner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="banner-slider">
      {/* SLIDES */}
      {slides.map((slide, i) => (
        <a
          key={i}
          href={slide.link}
          className={`slide ${i === current ? 'active' : ''}`}
        >
          <Image
            src={slide.image}
            alt="banner"
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </a>
      ))}

      {/* LEFT ARROW */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active-dot' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

      <style jsx>{`
        .banner-slider {
          position: relative;
          width: 100%;
          height: 340px;
          overflow: hidden;
          background: #000;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          display: block;
        }

        .slide.active {
          opacity: 1;
          z-index: 1;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.92);
          color: #666;
          font-size: 28px;
          font-weight: 300;
          line-height: 1;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .arrow:hover {
          background: #fff;
          color: #111;
        }

        .left { left: 10px; }
        .right { right: 10px; }

        .dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          cursor: pointer;
        }

        .active-dot {
          width: 24px;
          border-radius: 20px;
          background: white;
        }

        @media (max-width: 768px) {
          .banner-slider { height: 200px; }
          .arrow { width: 42px; height: 42px; font-size: 30px; }
          .dot { width: 7px; height: 7px; }
          .active-dot { width: 18px; }
        }
      `}</style>
    </div>
  )
}