import { React, useState } from "react";

function Result({ origLink, shortLink }) {
  const [isCopy, setIsCopy] = useState("Copy");
  return (
    <div id="result">
      <p className="darkViolet">{origLink}</p>
      <p id="shortLink" className="cyan">
        {shortLink}
      </p>
      <button
        style={{
          backgroundColor:
            isCopy === "Copied!" ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)",
        }}
        onClick={() => {
          navigator.clipboard.writeText(shortLink);
          setIsCopy("Copied!");
        }}
      >
        {isCopy}
      </button>
    </div>
  );
}

export default Result;
