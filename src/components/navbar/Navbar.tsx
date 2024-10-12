
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

/* const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
}); */

export default Navbar
