import { Link } from "react-router-dom";
import Video from "../../assets/Video.mp4";
import lucknow from "../../assets/lucknow.office.webp";

export default function Home() {
  return (
    <div>
      <div>
        <video
          className="h-screen w-screen object-cover"
          src={Video}
          autoPlay
          loop
          muted
        />

        <div className="hero">
          <span className="tech ">HUMANISING TECH</span>
          <span className="tech-2 mt-20 ml-22">THROUGH DESIGN</span>
        </div>
      </div>
      <div className="office w-full ">
        <img src={lucknow} alt="/" />
      </div>
      <div className="solutions flex justify-between">
        <div className="sol">
          <span className="our">OUR</span>
          <span className="solution"> SOLUTIONS</span>
        </div>
        <div>
          <p className="text-white text-lg w-2/5 mt-10">
            Creating storied growth through customized solutions to match
            individual Brand needs
          </p>
        </div>
        
      </div>
    </div>
  );
}
