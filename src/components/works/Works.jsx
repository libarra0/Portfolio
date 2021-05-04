import { useState } from "react";
import Image from "../../images/arrow.png"
import "./Works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "https://i.imgur.com/8hmG5m4.png",
            title: "Portfolio Web Design",
            desc:
                "This is the current status of this portfolio, it will be updated continuously. ",
            img:
                "https://i.imgur.com/IvziOkj.png",
        },
        {
            id: "2",
            icon: "https://i.imgur.com/uhKK380.png",
            title: "Quality Assurance",
            desc:
                "Create a test and testing plan. Identify product problems by using bug tracking systems. ",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "https://i.imgur.com/aZXthaY.png",
            title: "Video game prototype",
            desc:
                "This video game is still in the process of being created. ",
            img:
                "https://i.imgur.com/s0Yv2Yd.png",
        },
    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img}
                            alt="demo"/>
                        </div>
                    </div>
                </div>))}
            </div>
            <img src={Image} className="arrow left" alt="arrow" onClick={() => handleClick("left")}/>
            <img src={Image} className="arrow right" alt="arrow" onClick={() => handleClick("right")}/>
        </div>
    )
}
