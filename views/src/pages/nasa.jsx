import React, { useEffect } from "react";
import { useState } from "react";

function nasa({ setLoggedIn }) {
  const [nasaImage, setNasaImage] = useState(null);
  const [nasaTitle, setNasaTitle] = useState(null);
  const [nasaExplanation, setNasaExplanation] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  function getNasaImageOfTheDay() {
    const token = localStorage.getItem("token");

    console.log(token);
    if (!token) {
      setIsLoggedIn(false);
      setLoggedIn(false);
      return;
    }

    const url = "/nasa-image-of-the-day";


    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 401) {
          setIsLoggedIn(false);
          setLoggedIn(false);
          setIsLoading(false);
          return null;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setIsLoggedIn(true);
          setLoggedIn(true);
          setIsLoading(false);
          setNasaImage(data.url);
          setNasaTitle(data.title);
          setNasaExplanation(data.explanation);
        }
      });
  }


  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setLoggedIn(false);
  }

  useEffect(() => {
    getNasaImageOfTheDay();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <h1>NASA Image of the Day</h1>
          <h2>{nasaTitle}</h2>
          {/* <p>{nasaExplanation}</p> */}
          <img width="100%" src={nasaImage} alt={nasaTitle} />

          <div style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }} className="form__field" onClick={logout}>
            <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "red",
              color: "white",
            }}
            >
              Logout
            </button>
          </div>

        </div>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <div className="grid">
          <h3>You can't see the image. You have to sign in to see it</h3>

          <a
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
            href="/login"
          >
            Sign In
          </a>
        </div>
      )}
    </div>
  );
}

export default nasa;
