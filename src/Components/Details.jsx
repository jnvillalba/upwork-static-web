import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Details({ data, artist }) {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= scrollHeight) {
        setVisibleItems((prevItems) => {
          const nextItemIndex = prevItems.length;
          if (nextItemIndex < data.length) {
            return [...prevItems, data[nextItemIndex]];
          }
          return prevItems;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      setVisibleItems([data[0]]);
    }
  }, [data]);


  return (
    <div>
      {visibleItems.map((item, index) => (
        <div className="container px-4 py-4" key={index}>
          <button className="btn backBtn" onClick={goToHome}>
            {" "}
            {"<<"}{" "}
          </button>
          <h1 className="name">{artist.Name}</h1>
          <h1 className="years">{artist.Years}</h1>
          {/*<ul>
            <li className="list-text">{item.TitleText}</li>
      </ul>*/}
            <h2 className="year">{item.Year}</h2>

          <div className="">
            <h2 className="title">{item.TitleText}</h2>
            <p className="descriptionText">{item.DescriptionText}</p>
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
