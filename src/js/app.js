import PopoverWindow from "./PopoverWindow";

const container = document.querySelector(".container");
const popover = new PopoverWindow(container);

popover.bindToDOM();
