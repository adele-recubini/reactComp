import React, { useState } from "react";
import '../components/Accordion.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ data }) => {


    const [active, setActive] = useState();

    return (
        <div className="custom-accordion">
            {data.map((tab, idx) => (
                <AccordionItem
                    key={idx}
                    {...tab}
                    active={active === idx}

                    onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
                />
            ))}
        </div>
    );
};

const AccordionItem = ({ title, content, active, onToggle }) => {
    const [visiblity, setVisiblity] = useState(false);

    const isActive = () => (active);

    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
        onToggle();
    };

    return (

        <div className={`card ${isActive() ? "accordion-active " : ""}`} style={{ borderBottom: "2px solid #000094" }}>
            <div className="card-header" onClick={toogleVisiblity}>
                {title}

                <span className="accordion-icon">
                    <FontAwesomeIcon icon={faArrowDown} style={{ color: "#000094" }} />
                </span>

            </div>
            <div className="card-body">{content}</div>
        </div>

    );
};

export default Accordion;

