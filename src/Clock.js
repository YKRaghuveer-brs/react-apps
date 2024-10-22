import React, { useEffect } from "react";
import "./Clock.css"; // Import the CSS file

const Clock = () => {
  const setTheme = (theme) => {
    document.documentElement.style.setProperty("--primary-color", theme);
    localStorage.setItem("movie-theme", theme);
  };

  const calcDegrees = (time, max) => (time / max) * 360;

  const updateClock = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString('en-US', options);

    document.getElementById('timeAndDate').innerHTML = `
      <p class="fs-4">${formattedTime}</p>
      <p>${formattedDate}</p>
    `;

    // Rotate the hands
    const secondHand = document.querySelector(".secondHand");
    const minuteHand = document.querySelector(".minuteHand");
    const hourHand = document.querySelector(".hourHand");

    secondHand.style.transform = `rotate(${calcDegrees(seconds, 60)}deg)`;
    minuteHand.style.transform = `rotate(${calcDegrees(minutes, 60)}deg)`;
    hourHand.style.transform = `rotate(${calcDegrees(hours * 60 + minutes, 720)}deg)`;
  };

  useEffect(() => {
    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 1000); // Update every second

    const chathams_blue = "#1A4B84";
    setTheme(localStorage.getItem("movie-theme") || chathams_blue);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <main role="main" style={{ marginBottom: "100px" }}>
      <div id="timeAndDate" className="text-center mt-3"></div>
      <div className="clock">
        <div className="hourHand"></div>
        <div className="minuteHand"></div>
        <div className="secondHand"></div>
        <div className="center"></div>
        <ul>
          <li><div>1</div></li>
          <li><div>2</div></li>
          <li><div>3</div></li>
          <li><div>4</div></li>
          <li><div>5</div></li>
          <li><div>6</div></li>
          <li><div>7</div></li>
          <li><div>8</div></li>
          <li><div>9</div></li>
          <li><div>10</div></li>
          <li><div>11</div></li>
          <li><div>12</div></li>
        </ul>
      </div>
    </main>
  );
};

export default Clock;
