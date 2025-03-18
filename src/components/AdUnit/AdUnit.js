"use client";
import { useEffect, useRef } from "react";

export default function AdUnit() {
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.atOptions = {
        key: "9ad00f3a9945bfe7ed756f5ce46976e7",
        format: "iframe",
        height: 60,
        width: 468,
        params: {},
      };

      const script = document.createElement("script");
      script.src =
        "//www.elegantimpose.com/9ad00f3a9945bfe7ed756f5ce46976e7/invoke.js";
      script.async = true;

      if (adRef.current) {
        adRef.current.appendChild(script);
      }
    }

    return () => {
      if (adRef.current) {
        const scripts = adRef.current.querySelectorAll("script");
        scripts.forEach((script) => script.remove());
      }
    };
  }, []);

  return <div ref={adRef} className="flex justify-center" />;
}
