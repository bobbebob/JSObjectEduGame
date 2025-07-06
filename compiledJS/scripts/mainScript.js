import { choiceBuilder } from "../scripts/choiceBuilder.js";
// I want to import my other scripts here, this is my control centre
function createButton(button) {
    const newButton = document.createElement("button");
    const { direction, backgroundColor } = button; // button properties
    const rotation = direction === "left" ? "0deg" : "270deg";
    // button styling
    Object.assign(newButton.style, {
        width: "50px",
        height: "50px",
        backgroundColor,
        transform: `rotate(${rotation})`,
        clipPath: "polygon(40% 0%, 40% 29%, 100% 29%, 100% 70%, 40% 70%, 40% 100%, 0% 50%)",
        cursor: "pointer",
    });
    newButton.onmouseover = () => {
        newButton.style.backgroundColor = "black";
    };
    newButton.onmouseout = () => {
        newButton.style.backgroundColor = backgroundColor;
    };
    return newButton;
}
const testbtn = {
    direction: "left",
    backgroundColor: "green",
};
// document.body.appendChild(createButton(testbtn));
choiceBuilder();
