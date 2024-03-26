import PopoverWindow from "../PopoverWindow";

const { JSDOM } = require("jsdom");

test('open popover after button click', () => {
    const dom = new JSDOM('<!DOCTYPE html><div class="container" data-title="Popover title" data-content="And here is some amazing content. It is very engaging. Right?" data-text="Click to toggle popover"></div>');
    global.document = dom.window.document;

    const container = document.querySelector('.container');
    const popoverWindow = new PopoverWindow(container);
    popoverWindow.bindToDOM();

    const popover = document.querySelector(PopoverWindow.popoverSelector);
    const button = document.querySelector(PopoverWindow.buttonSelector);
    button.click();

    expect(popover.hidden).toBe(false);
})

test('close popover after button click', () => {
    const dom = new JSDOM('<!DOCTYPE html><div class="container" data-title="Popover title" data-content="And here is some amazing content. It is very engaging. Right?" data-text="Click to toggle popover"></div>');
    global.document = dom.window.document;

    const container = document.querySelector('.container');
    const popoverWindow = new PopoverWindow(container);
    popoverWindow.bindToDOM();

    const popover = document.querySelector(PopoverWindow.popoverSelector);
    const button = document.querySelector(PopoverWindow.buttonSelector);
    button.click();
    button.click();

    expect(popover.hidden).toBe(true);
})