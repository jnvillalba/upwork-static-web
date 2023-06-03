import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Details({ data, artist }) {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerBottom = containerRect.bottom;

      const items = Array.from(container.getElementsByClassName("item"));
      let newVisibleIndex = visibleIndex;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemRect = item.getBoundingClientRect();

        if (itemRect.top <= containerBottom) {
          newVisibleIndex = i;
        }
      }

      setScrollPosition((prevScrollPosition) =>
        prevScrollPosition < container.scrollTop ? "down" : "up"
      );

      setVisibleIndex(newVisibleIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerBottom = containerRect.bottom;

      const items = Array.from(container.getElementsByClassName("item"));
      let newVisibleIndex = visibleIndex;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemRect = item.getBoundingClientRect();

        if (itemRect.top <= containerBottom) {
          newVisibleIndex = i;
        }
      }

      setScrollPosition((prevScrollPosition) =>
        prevScrollPosition < container.scrollTop ? "down" : "up"
      );

      setVisibleIndex(newVisibleIndex);

      if (scrollPosition === "down") {
        if (visibleIndex < data.length - 1) {
          const nextItem = items[visibleIndex + 1];
          container.scrollTo({
            top: container.scrollTop + nextItem.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
      } else if (scrollPosition === "up") {
        if (visibleIndex > 0) {
          const prevItem = items[visibleIndex - 1];
          container.scrollTo({
            top: container.scrollTop + prevItem.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleIndex, scrollPosition]);

  const togglePlay = () => {
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioLoaded = (event) => {
    const audio = event.target;
    setAudioPlayer(audio);
  };

  return (
    <div ref={containerRef} className="details-container">
      {data.map((item, index) => (
        <div
          className={`item ${index <= visibleIndex ? "visible" : ""}`}
          key={index}
          data-order={item.Order}
        >
          <div className="page-content px-4">
            <button className="btn backBtn" onClick={goToHome}>{"<<"}</button>
            <h1 className="name">{artist.Name}</h1>
            <h1 className="years">{artist.Years}</h1>
            <ul>
              {data
                .slice(1, item.Order)
                .map((prevItem) => prevItem.TitleText)
                .map((prevTitle, i) => (
                  <li className="list-text" key={i}>
                    {prevTitle}
                  </li>
                ))}
            </ul>
            <h2 className="year">{item.Year}</h2>
            <h2 className="title">{item.TitleText}</h2>
            <p className="descriptionText">{item.DescriptionText}</p>
            <ul>
              {data
                .slice(item.Order , data.length)
                .map((nextItem) => nextItem.TitleText)
                .map((nextTitle, i) => (
                  <li className="list-text" key={i}>
                    {nextTitle}
                  </li>
                ))}
            </ul>
            {item.MediaIURL && (
              <audio controls>
                <source src={item.MediaIURL} type="audio/mpeg" />
              </audio>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
