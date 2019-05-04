import DOM from '../../dom';
import * as noteActions from './../../notes-actions';
import * as events from './single-note-events';

const init = (noteToShow) => {

   const noteId = noteToShow.id;

   DOM().noteTitleEl.textContent = noteToShow.title;
   DOM().noteContentEl.textContent = noteToShow.body;

   events.noteShowEditorHandler();
   events.noteShowPreviewHandler();
   events.noteRemoveHandler(noteId);
   events.noteSaveHandler(noteId);
}

export default init;