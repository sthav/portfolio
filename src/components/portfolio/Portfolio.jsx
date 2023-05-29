import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured")

  const list = [
    {
      id: "web",
      title: "Web and Mobile App",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/Pokedex.png" alt="" />
          <h3><a href="https://pokedex-omega-eosin.vercel.app/" target="_blank" rel="noreferrer">Pokedex</a></h3>
        </div>
        <div className="item">
          <img src="assets/hotel-booking.png" alt="" />
          <h3><a href="https://hotel-booking-ten.vercel.app/" target="_blank" rel="noreferrer">book-a-hotel</a></h3>

        </div>
        <div className="item">
          <img src="assets/file_manager_pic.png" alt="" />
          <h3><a href="https://stealth-project-ten.vercel.app/" target="_blank" rel="noreferrer">File manager</a></h3>
        </div>
        <div className="item">
          <img src="assets/laundry.png" alt="" />
          <h3><a href="https://github.com/sthav/Laundry-app-React-native" target="_blank" rel="noreferrer">React-Native_Laundry</a></h3>
        </div>
        <div className="item">
          <img src="assets/workout.png" alt="" />
          <h3><a href="https://github.com/sthav/Fitness-app-React-Native" target="_blank" rel="noreferrer">React-native_Fitness</a></h3>
        </div>
        <div className="item">
          <img src="assets/socailmedia.png" alt="" />
          <h3><a href="https://github.com/sthav/Practice_social" target="_blank" rel="noreferrer">Social Media </a></h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
