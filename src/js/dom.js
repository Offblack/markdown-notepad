let DOM = {}

export const DOMInit = () => {

   DOM = {
      container: document.querySelector('#view-container'),

      addBoxForm: document.querySelector('#note-add-form'),
      notesListEl: document.querySelector('#notes-list'),
      searchBoxInput: document.querySelector('#search-input'),
      noteTitle: document.querySelector('#note-add-input'),

      noteTitleEl: document.querySelector('#note-title'),
      noteContentEl: document.querySelector('#note-content'),
      noteContentBtn: document.querySelector('#note-content-btn'),
      notePreviewEl: document.querySelector('#note-preview-element'),

      noteEditBtn: document.querySelector('#note-edit-btn'),
      notePreviewBtn: document.querySelector('#note-preview-btn'),
      noteRemoveBtn: document.querySelector('#note-remove-btn')
   }
}

const get = () => {
   return DOM;
}

export default get;