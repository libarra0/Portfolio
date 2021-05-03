import { useEffect, useState } from "react"
import CertificationsList from "../certificationsList/CertificationsList"
import "./Certifications.scss"
import{
    allCertifications,
    devCertifications,
    QACertifications,
    gameDevCertifications,
    unityDevCertifications,
} from "../../certificationsData";

export default function Certifications() {

    const[selected, setSelected] = useState("all")
    const[data, setData] = useState([])

    const list = [
        {
            id:"all",
            title: "All",
        },
        {
            id:"dev",
            title: "Developer",
        },
        {
            id:"qa",
            title: "QA",
        },
        {
            id:"game",
            title: "Game design",
        },
        {
            id:"unity",
            title: "Unity",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "all":
                setData(allCertifications);
                break;
            case "dev":
                setData(devCertifications);
                break;
            case "qa":
                setData(QACertifications);
                break;
            case "game":
                setData(gameDevCertifications);
                break;
            case "unity":
                setData(unityDevCertifications);
                break;
            default:
                setData(allCertifications);
        }
    },[selected])

    return (
        <div className="certifications" id="certifications">
            <h1>Certifications</h1>
            <ul>
                {list.map((item) => (
                    <CertificationsList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3><a href={d.link} target="_blank" rel="noreferrer">{d.title}</a></h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
