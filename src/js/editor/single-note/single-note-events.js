import DOM from '../dom';
import * as noteActions from '../../notes-actions';
import showdown from 'showdown';

const mdConverter = new showdown.Converter();

// Show editor
function showEditor() {
   DOM.notePreviewEl.classList.add('d-none');
   DOM.noteContentEl.classList.remove('d-none');
}

export function noteShowEditorHandler() {
   DOM.noteEditBtn.addEventListener('click', function () {
      showEditor();
   })
};

// Show preview
function showPreview() {
   DOM.noteContentEl.classList.add('d-none');
   DOM.notePreviewEl.classList.remove('d-none');
}

export function noteShowPreviewHandler() {
   DOM.notePreviewBtn.addEventListener('click', function () {

      const text = DOM.noteContentEl.value;

      if (text) {
         const html = mdConverter.makeHtml(text);
         showPreview();
         DOM.notePreviewEl.innerHTML = html;
      }
   })
};

// Remove
export function noteRemoveHandler(noteId) {
   DOM.noteRemoveBtn.addEventListener('click', function () {
      noteActions.remove(noteId);
   })
}


// Save
export function noteSaveHandler(noteId) {
   DOM.noteContentBtn.addEventListener('submit', function (event) {
      event.preventDefault();

      const noteContent = DOM.noteContentEl.value;

      noteActions.save(noteId, noteContent);
   })
};