/**
 * Fields
 */

class Fields
{
  private $add           : Node
  private $container     : Node
  private $deleteButtons : Array<Element>

  constructor ()
  {
    this.$add           = document.querySelector('#add-field')
    this.$container     = document.querySelector('.fields')
    this.$deleteButtons = Array.from(document.querySelectorAll('.field button.delete'))
  }

  addEventListeners ()
  {
    this.$add.addEventListener('click', this.handleNewClick)
    this.$deleteButtons.forEach(el => el.addEventListener('click', this.handleDeleteClick))
  }

  handleKeyChange ()
  {
    
  }

  handleNewClick ()
  {
    const html     = `<label>{{key}}:</label>
    <input class='key' type="text" name="{{key}}" value="{{value}}"/>`
    const newField = document.createElement('div')

    newField.innerHTML = html
    this.$container.insertBefore(this.$add, newField)
  }

  handleDeleteClick ()
  {

  }
}
