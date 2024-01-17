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
      <div className="bac-header-inner">
        <h1 className="bac-heading">Get Started With SKINSTRIC</h1>
        <div className="bac-how-it-works">
          <h3 className="bac-how-it-works-heading">How it works:</h3>
          <div className="bac-how-it-works-inner">
            <div className="bac-how-it-works-item">
              <div className="bac-how-it-works-item-top">
                <div className="bac-how-it-works-item-image-wrapper">
                  <img src={Track1} alt="" />
                </div>
                <div className="deco-line"></div>
              </div>
              <p className="bac-how-it-works-item-title">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing
              </p>
            </div>
            <div className="bac-how-it-works-item">
              <div className="bac-how-it-works-item-top">
                <div className="bac-how-it-works-item-image-wrapper">
                  <img src={Track2} alt="" />
                </div>
                <div className="deco-line"></div>
              </div>
              <p className="bac-how-it-works-item-title">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="bac-how-it-works-item">
              <div className="bac-how-it-works-item-top">
                <div className="bac-how-it-works-item-image-wrapper">
                  <img src={Track3} alt="" />
                </div>
                <div className="deco-line"></div>
              </div>
              <p className="bac-how-it-works-item-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="bac-how-it-works-item">
              <div className="bac-how-it-works-item-top">
                <div className="bac-how-it-works-item-image-wrapper">
                  <img src={Track4} alt="" />
                </div>
              </div>
              <p className="bac-how-it-works-item-title">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-tf-live="01HKZQNYW05G25D5DQM3GZB8CR"></div><script src="//embed.typeform.com/next/embed.js"></script>
    </section>
  );
};

export default FormPage;
