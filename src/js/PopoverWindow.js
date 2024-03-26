export default class PopoverWindow {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onButton = this.onButton.bind(this);
  }

  static markup(title, content, text) {
    return `
        <div class="popover" hidden="true">
            <h3 class="popover-header">${title}</h3>
            <div class="popover-body">${content}</div>
            <div class="arrow"></div>
        </div>
        <button type="button" class="btn btn-lg btn-danger">${text}</button>
    `;
  }

  static get popoverSelector() {
    return ".popover";
  }

  static get buttonSelector() {
    return ".btn";
  }

  bindToDOM() {
    const { title, content, text } = this.parentEl.dataset;
    this.parentEl.innerHTML = PopoverWindow.markup(title, content, text);
    this.popover = this.parentEl.querySelector(PopoverWindow.popoverSelector);
    this.button = this.parentEl.querySelector(PopoverWindow.buttonSelector);

    this.button.addEventListener("click", this.onButton);
  }

  onButton(e) {
    e.preventDefault();
    if (this.popover.hidden == true) {
      this.popover.hidden = false;
    } else {
      this.popover.hidden = true;
    }
  }
}
