import React from "react";
import Azalaic from "../assets/649a3ced261a31127892104b_azelaic-acid.gif";
import Retinol from "../assets/649a3d8dc3f3d178e75f1250_retinol-ingredient.gif";
import Hydroquinone from "../assets/6499143337558efafbe17854_ezgif.com-gif-maker (1).webp";

export default function Home() {
  return (
    <div>
      <section id="home__hero">
        <div className="row hero__row">
          <h1 className="home__hero--h1">The new standard for skincare</h1>
          <div className="home__hero--sub">
            <h3 className="home__hero--sub-h3">
              A.I. developed to help you improve your
              skin condition through deep analysis that allows to personalize
              skincare products specifically to your parameters.
            </h3>
            <a href="/get-started" className="get__started--button styl-1">
              GET STARTED
            </a>
          </div>
          <img className="subhero-animation _1" src={Azalaic} alt="" />
          <img className="subhero-animation _2" src={Retinol} alt="" />
          <img className="subhero-animation _3" src={Hydroquinone} alt="" />
        </div>
      </section>
    </div>
  );
}
