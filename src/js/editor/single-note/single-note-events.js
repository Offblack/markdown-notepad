import * as noteActions from '../../notes-actions';
import showdown from 'showdown';

const mdConverter = new showdown.Converter();

// Show editor
function showEditor(noteContentEl, notePreviewEl) {
   notePreviewEl.classList.add('d-none');
   noteContentEl.classList.remove('d-none');
}

export function noteShowEditorHandler(noteEditBtn, noteContentEl, notePreviewEl) {
   noteEditBtn.addEventListener('click', function () {
      showEditor(noteContentEl, notePreviewEl);
   })
};

// Show preview
function showPreview(noteContentEl, notePreviewEl) {
   noteContentEl.classList.add('d-none');
   notePreviewEl.classList.remove('d-none');
}

export function noteShowPreviewHandler(notePreviewBtn, noteContentEl, notePreviewEl) {
   notePreviewBtn.addEventListener('click', function () {

      const text = noteContentEl.value;

      if (text) {
         const html = mdConverter.makeHtml(text);
         showPreview(noteContentEl, notePreviewEl);
         notePreviewEl.innerHTML = html;
      }
   })
};

// Remove
export function noteRemoveHandler(noteRemoveBtn, noteId) {
   noteRemoveBtn.addEventListener('click', function () {
      noteActions.remove(noteId);
   })
}


// Save
export function noteSaveHandler(noteContentBtn, noteId, noteContentEl) {
   noteContentBtn.addEventListener('submit', function (event) {
      event.preventDefault();

      const noteContent = noteContentEl.value;

      noteActions.save(noteId, noteContent);
   })
};