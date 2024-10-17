
import { useState } from "react";
import "./Navbar.css";

type NavbarProps = {
    setSelectedPage: (page: string) => void;
};

const Navbar = (props: NavbarProps) => {


    const buttons = [
        "Home",
        "Work",
        "About"
    ]

    const [selectedButton, setSelectedButton] = useState(buttons[0]);

    return (
        <div className="bar">
            {buttons.map((button, index) => (
                <button onClick={() => { setSelectedButton(button); props.setSelectedPage(button) }} key={index} className={selectedButton == button ? "selected" : ""}>{button}</button>
            ))}
        </div>
    )
}

export default Navbar
