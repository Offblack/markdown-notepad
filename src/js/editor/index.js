import * as notesActions from './../notes-actions';
import noteSidebarInit from './notes-sidebar/index';
import singleNoteInit from './single-note/index';

const init = noteId => {
   notesActions.getAll().then(notes => {
      noteSidebarInit(notes, noteId);

      let noteToShow = (!noteId) ? notes[0] : notes.find(note => note.id === noteId);

      singleNoteInit(noteToShow);

   })
}

export default init;