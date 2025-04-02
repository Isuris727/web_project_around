export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(item) {
    this._renderedItems.forEach((item) => this._renderer(item));
    // this._renderer(item);
  }

  addItem(element) {
    //---ok
    this._container.prepend(element);
  }
}
