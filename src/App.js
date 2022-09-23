import logo from "./images/logo.svg";
import {
  FaBars,
  FaFacebookSquare,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import work from "./images/illustration-working.svg";
import brand from "./images/icon-brand-recognition.svg";
import records from "./images/icon-detailed-records.svg";
import customize from "./images/icon-fully-customizable.svg";
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const intake = useRef("");
  const [url, setUrl] = useState(null);
  const [origLink, setOrigLink] = useState(null);
  const [shortLink, setShortLink] = useState(null);
  const [isCopy, setIsCopy] = useState("Copy");

  useEffect(() => {
    const getShort = async () => {
      await axios(`https://api.shrtco.de/v2/shorten?url=${url}`).then(
        (response) => {
          setOrigLink(response.data.result.original_link);
          setShortLink(response.data.result.full_short_link);
        }
      );
    };

    url && getShort();
  }, [url]);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Comapany Logo" />
        <FaBars size={28} />
      </header>
      <main>
        <section id="first">
          <img id="work" src={work} alt="Person working" />
          <h2 className="big">More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button id="start">
            <h4>Get Started</h4>
          </button>
        </section>
        <section id="stats">
          {origLink && (
            <div id="result">
              <p>{origLink}</p>
              <p id="shortLink" className="cyan">
                {shortLink}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortLink);
                  setIsCopy("Copied!");
                  event.target.style.backgroundColor = "hsl(257, 27%, 26%)";
                }}
              >
                {isCopy}
              </button>
            </div>
          )}
          <div id="action">
            <input ref={intake} placeholder="Shorten a link here..."></input>
            <button onClick={() => setUrl(intake.current.value)}>
              Shorten It!
            </button>
          </div>
          <div>
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="part">
            <div className="top">
              <img src={brand} alt="Brand Recognition" />
            </div>
            <div className="spart">
              <h4 className="name">Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="top">
              <img src={records} alt="Brand Recognition" />
            </div>
            <div className="spart">
              <h4 className="name">Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="top">
              <img src={customize} alt="Brand Recognition" />
            </div>
            <div className="spart">
              <h4 className="name">Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>
        <section id="boost">
          <h3>Boost your links today</h3>
          <button id="start">
            <h4>Get Started</h4>
          </button>
        </section>
      </main>
      <footer className="col-gap-1">
        <img className="logo" src={logo} alt="Comapany Logo" />
        <div className="col-gap-1">
          <div className="col-gap-1">
            <h4>Features</h4>
            <div className="col-gap-half">
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
          </div>
          <div className="col-gap-1">
            <h4>Resources</h4>
            <div className="col-gap-half">
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
          </div>
          <div className="col-gap-1">
            <h4>Company</h4>
            <div className="col-gap-half">
              <p>About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <nav id="socials">
          <FaFacebookSquare size={30} />
          <FaTwitter size={30} />
          <FaPinterest size={30} />
          <FaInstagram size={30} />
        </nav>
      </footer>
    </div>
  );
}

export default App;
