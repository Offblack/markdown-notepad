import * as noteActions from './../../notes-actions';

export function noteRemoveHandler(noteRemoveBtn, noteId) {
   noteRemoveBtn.addEventListener('click', function () {
      noteActions.remove(noteId);
   })
}

export function noteSaveHandler(noteContentBtn, noteId, noteContentEl) {};