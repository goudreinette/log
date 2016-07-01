class Fields {
    constructor() {
        this.findDOMNodes();
        this.addEventListeners();
    }
    findDOMNodes() {
        this.$add = document.querySelector('#add-field');
        this.$container = document.querySelector('.fields');
        this.$deleteButtons = Array.from(document.querySelectorAll('.field .delete'));
        this.$fields = Array.from(document.querySelectorAll('.field'));
    }
    addEventListeners() {
        this.$add.addEventListener('click', this.handleNewClick.bind(this));
        this.$deleteButtons.forEach(el => el.addEventListener('click', this.handleDeleteClick.bind(this)));
        this.$fields.forEach(el => el.childNodes[0].addEventListener('keyup', this.handleKeyChange.bind(this)));
    }
    handleKeyChange(event) {
        console.log('keyup');
        const key = event.target.value;
        const $value = event.target.nextSibling;
        $value.setAttribute('name', key);
    }
    handleNewClick() {
        const html = `<div class="field"><input class="key" placeholder="key"value=""/><input class="value" placeholder="value" type="text" name="" value=""/><a class="delete">x</a></div>`;
        const newField = document.createElement('div');
        newField.innerHTML = html;
        this.$container.insertAdjacentHTML('afterbegin', html);
        this.findDOMNodes();
        this.addEventListeners();
    }
    handleDeleteClick(event) {
        const $field = event.target.parentNode;
        $field.remove();
    }
}
window.onload = _ => window.fields = new Fields();
