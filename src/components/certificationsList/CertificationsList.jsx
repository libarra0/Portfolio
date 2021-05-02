import "./CertificationsList.scss"

export default function CertificationsList({id, title, active, setSelected}) {
    return (
        <div>
            <li
            className={active ? "certificationsList active" : "certificationsList"}
            onClick={() =>setSelected(id)}>
                {title}
            </li>
        </div>
    )
}
