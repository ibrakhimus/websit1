import React, { useEffect } from "react";
import Track1 from "../assets/track-1.svg";
import Track2 from "../assets/track-2.svg";
import Track3 from "../assets/track-3.svg";
import Track4 from "../assets/track-4.svg";

const FormPage = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="row book-a-call-header">
      {/* ... your existing JSX ... */}
      <div data-tf-live="01HKZQNYW05G25D5DQM3GZB8CR"></div>
    </section>
  );
};

export default FormPage;
