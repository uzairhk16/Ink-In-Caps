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
      <div className="office w-full mb-10">
        <img src={lucknow} alt="/" />
      </div>
      <div className="solutions pt-10 rounded-t-4xl">
        <div className=" flex justify-center">
          <div className="sol">
            <span className="fontt our sm:text-5xl md:text-6xl lg:text-8xl">
              OUR
            </span>
            <span className="fontt solution sm:text-5xl md:text-6xl lg:text-8xl">
              {" "}
              SOLUTIONS.
            </span>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="flex justify-evenly ">
          <div>
            <h1 className="text-white font01 sm:text-2xl md:text-3xl mt-15">
              01. &nbsp;IMMERSIVE TECHNOLOGY
            </h1>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <i class="fa-solid fa-caret-up"></i> Experience Center
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Augmented Reality
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Virtual Reality
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Projection Mapping
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Holographic Technology
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Spatial Computing
              </li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square text-white sm:text-2xl md:text-5xl ml-30"></i>
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="flex justify-evenly mt-10 mb-10">
          <div>
            <h1 className="text-white font01 sm:text-2xl md:text-3xl mt-15">
              02. &nbsp;EXPERIANTIAL MARKETING
            </h1>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <i class="fa-solid fa-caret-up"></i> CGI CAMPAIGN
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Motion capture technology
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Interactive tech-led
                campaigns
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> IoT/Custom Solutions
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Photobooth
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Kiosk/Vending Machine
              </li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square text-white sm:text-2xl md:text-5xl ml-30"></i>
            </p>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="flex justify-evenly mt-10 mb-10">
          <div>
            <h1 className="text-white font01 sm:text-2xl md:text-3xl mt-15">
              03. &nbsp;INTERACTIVE SOLUTION
            </h1>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <i class="fa-solid fa-caret-up"></i> Interactive Wall /
                Interactive Screen
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Interactive Table
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Interactive Book
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Object Recognition Tabl
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Holographic Technology
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> 3D Configurators
              </li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square text-white sm:text-2xl md:text-5xl ml-30"></i>
            </p>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="flex justify-evenly mt-10 mb-10">
          <div>
            <h1 className="text-white font01 sm:text-2xl md:text-3xl mt-11">
              04. &nbsp;MOBILE APPS & GAMES
            </h1>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <i class="fa-solid fa-caret-up"></i> Web Development
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> App Development
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Artificial Intelligence
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Game Development
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> UI/UX Design
              </li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square text-white sm:text-2xl md:text-5xl ml-30"></i>
            </p>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="flex justify-evenly mt-10 mb-10">
          <div>
            <h1 className="text-white font01 sm:text-2xl md:text-3xl mt-15">
              05. &nbsp;CONTENT DEVELOPMENT
            </h1>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <i class="fa-solid fa-caret-up"></i> 3D/2D Animations
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Motion Graphics
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Architectural Visualization
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Explainer Videos
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Holographic Technology
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Anamorphic Content
              </li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square text-white sm:text-2xl md:text-5xl ml-30"></i>
            </p>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="flex justify-evenly mt-10 mb-10">
          <div>
            <h1 className="text-white font01 sm:text-2xl md:text-3xl mt-8 mb-10">
              06. &nbsp; STRATEGY & DESIGN
            </h1>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <i class="fa-solid fa-caret-up"></i> Scenario Mapping & Brand
                Audits
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Graphic Design & Prototype
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Competitor Mapping
              </li>
              <li>
                <i class="fa-solid fa-caret-up"></i> Brand Identity
              </li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square text-white sm:text-2xl md:text-5xl ml-30"></i>
            </p>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-300 sm:mx-auto lg:my-8 " />
      </div>
    </div>
  );
}
