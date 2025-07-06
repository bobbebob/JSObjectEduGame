import { colors } from "../data/colors.js";
import { shapes } from "../data/shapes.js";
// Function to create a single choice component
function createSingleChoice(dataset, datasetName, index = 0) {
    let arrayIndex = index;
    const divContainer = document.createElement("div");
    Object.assign(divContainer.style, {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    });
    const prevButton = document.createElement("button");
    Object.assign(prevButton.style, {
        width: "50px",
        height: "50px",
        backgroundColor: "gold",
        clipPath: "polygon(40% 0%, 40% 29%, 100% 29%, 100% 70%, 40% 70%, 40% 100%, 0% 50%)",
        cursor: "pointer",
        border: "none",
    });
    function selectPrevious() {
        if (arrayIndex > 0) {
            const img = document.getElementById(`${datasetName}-img`);
            const newImg = dataset[arrayIndex - 1];
            img.src = newImg.src;
            img.alt = newImg.alt;
            arrayIndex--;
        }
    }
    prevButton.onclick = selectPrevious;
    const nextButton = document.createElement("button");
    Object.assign(nextButton.style, {
        width: "50px",
        height: "50px",
        transform: `rotate(180deg)`,
        backgroundColor: "gold",
        clipPath: "polygon(40% 0%, 40% 29%, 100% 29%, 100% 70%, 40% 70%, 40% 100%, 0% 50%)",
        cursor: "pointer",
        border: "none",
    });
    function selectNext() {
        if (arrayIndex < dataset.length - 1) {
            const img = document.getElementById(`${datasetName}-img`);
            const newImg = dataset[arrayIndex + 1];
            img.src = newImg.src;
            img.alt = newImg.alt;
            arrayIndex++;
        }
    }
    nextButton.onclick = selectNext;
    const choiceImg = document.createElement("img");
    Object.assign(choiceImg.style, {
        width: "50px",
        aspectRatio: "1/1",
    });
    choiceImg.src = dataset[arrayIndex].src;
    choiceImg.alt = dataset[arrayIndex].alt;
    choiceImg.id = `${datasetName}-img`;
    const fragment = document.createDocumentFragment();
    const choice = fragment.appendChild(divContainer);
    choice.appendChild(prevButton);
    choice.appendChild(choiceImg);
    choice.appendChild(nextButton);
    return fragment;
}
// Main function that combines all choice columns
export function choiceBuilder() {
    var _a;
    const mainContainer = document.createElement("div");
    Object.assign(mainContainer.style, {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
    });
    // Create individual choice columns - add more here as needed
    const colorsOptions = createSingleChoice(colors, "colors", 0);
    const shapesOptions = createSingleChoice(shapes, "shapes", 0);
    // Add all columns to main container
    mainContainer.appendChild(colorsOptions);
    mainContainer.appendChild(shapesOptions);
    (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(mainContainer);
}
