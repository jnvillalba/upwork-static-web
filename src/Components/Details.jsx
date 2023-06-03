import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Details({ data, artist }) {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
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
console.log(data[0])
  return (
    <div>
      
      {visibleItems.map((item, index) => (
        
        <div className="container" key={index}>
          <button className="btn" onClick={goToHome}> {"<<"} </button>
          <div className="">
            <h1>{item.TitleText}</h1>
          </div>
          <div className="">
            <p>{item.DescriptionText}</p>
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