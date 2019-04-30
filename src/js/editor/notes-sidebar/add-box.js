import * as notesActions from '../../notes-actions';

const addBoxForm = document.querySelector('#note-add-form');

export function init(onChangeCallback) {
   addBoxForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const noteTitle = document.querySelector('#note-add-input').value.trim();

      if (noteTitle) {
         notesActions.add(noteTitle);
         onChangeCallback();
      }
   });
}