import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Details({ data, artist }) {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  const [currentOrder, setCurrentOrder] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const items = Array.from(document.getElementsByClassName("item"));
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top >= 0 && itemRect.top <= window.innerHeight) {
          setCurrentOrder(parseInt(item.getAttribute("data-order")));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const upcomingTitles = data
    .slice(0, currentOrder - 1)
    .map((item) => item.TitleText);

  return (
    <div>
      <div className="container px-4 pt-4">
        <button className="btn backBtn" onClick={goToHome}>
          {" "}
          {"<<"}{" "}
        </button>
        <h1 className="name">{artist.Name}</h1>
        <h1 className="years">{artist.Years}</h1>
      </div>

      {data.map((item, index) => (
        <div
          className={`container px-4 item ${
            item.Order === currentOrder ? "active" : ""
          }`}
          key={index}
          data-order={item.Order}
        >
          <div className="row">
            <div className="col-md-6">
              {item.Order === currentOrder ? (
                <>
                  <h2 className="year">{item.Year}</h2>
                  <h2 className="title">{item.TitleText}</h2>
                  <p className="descriptionText">{item.DescriptionText}</p>
                </>
              ) : (
                <>
                  <h2 className="year">{item.Year}</h2>
                  <ul>
                    {upcomingTitles.map((title, i) => (
                      <li className="list-text" key={i}>
                        {title}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Details;
