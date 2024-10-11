
import "./Navbar.css";

const Navbar = () => {

    const buttons = [
        { name: "Home", selected: true },
        { name: "Work", selected: false },
        { name: "About", selected: false }
    ]

    return (
        <div className="bar">
            {buttons.map((button, index) => (
                <button key={index} className={button.selected ? "selected" : ""}>{button.name}</button>
            ))}
        </div>
    )
}

export default Navbar
