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
import Result from "./Result";

function App() {
  const intake = useRef("");
  const [url, setUrl] = useState(null);
  var previous = useRef(JSON.parse(localStorage.getItem("previous")) || []);
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("previous"))
  );

  useEffect(() => {
    const getShort = async () => {
      await axios(`https://api.shrtco.de/v2/shorten?url=${url}`).then(
        (response) => {
          previous.current.push({
            orig: response.data.result.original_link,
            short: response.data.result.full_short_link,
          });
          localStorage.setItem("previous", JSON.stringify(previous.current));
          setResults(JSON.parse(localStorage.getItem("previous")));
        }
      );
    };

    url && getShort();
  }, [url]);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Comapany Logo" />
        <div id="hamburger">
          <FaBars alt="hamburger" size={28} />
        </div>
        <div id="menu">
          <div className="options">
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
          <div id="signIn">
            <p>Login</p>
            <p id="register">Register</p>
          </div>
        </div>
      </header>
      <main>
        <section id="first">
          <img id="work" src={work} alt="Person working" />
          <div id="foretext">
            <h2 className="big">More than just shorter links</h2>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button id="start">
              <h4>Get Started</h4>
            </button>
          </div>
        </section>
        <section id="stats">
          {results && (
            <div className="results">
              {results
                .slice(0)
                .reverse()
                .map((result, index) => (
                  <Result
                    origLink={result.orig}
                    shortLink={result.short}
                    key={index}
                  />
                ))}
            </div>
          )}
          <div id="action">
            <input ref={intake} placeholder="Shorten a link here..."></input>
            <button
              onClick={() => {
                setUrl(intake.current.value);
              }}
            >
              Shorten It!
            </button>
          </div>
          <div id="advStats">
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="items">
            <div id="part1" className="part">
              <div className="top">
                <img src={brand} alt="Brand Recognition" />
              </div>
              <div className="spart">
                <h4 className="name">Brand Recognition</h4>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div id="part2" className="part">
              <div className="top">
                <img src={records} alt="Brand Recognition" />
              </div>
              <div className="spart">
                <h4 className="name">Detailed Records</h4>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div id="part3" className="part">
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
          </div>
        </section>
        <section id="boost">
          <h3>Boost your links today</h3>
          <button id="start">
            <h4>Get Started</h4>
          </button>
        </section>
      </main>
      <footer className="footStyle2">
        <img className="logo" src={logo} alt="Comapany Logo" />
        <div className="footStyle2">
          <div className="footStyle">
            <h4>Features</h4>
            <div className="col-gap-half">
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
          </div>
          <div className="footStyle">
            <h4>Resources</h4>
            <div className="col-gap-half">
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
          </div>
          <div className="footStyle">
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
