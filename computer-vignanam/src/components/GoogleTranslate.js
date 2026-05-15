"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {

  useEffect(() => {

    window.googleTranslateElementInit = () => {

      if (window.google && window.google.translate) {

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "te",
            includedLanguages: "en,hi,ta,kn,ml",
            autoDisplay: false,
          },
          "google_translate_element"
        );

      }
    };

    const script = document.createElement("script");

    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.async = true;

    document.body.appendChild(script);

  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        minWidth: "120px",
      }}
    ></div>
  );
}