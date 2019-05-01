import DOM from '../dom';
import * as noteActions from './../../notes-actions';
import * as events from './single-note-events';

const noteList = noteActions.getAll();

const firstNote = noteList[0];
const noteId = firstNote.id;

DOM.noteTitleEl.textContent = firstNote.title;
DOM.noteContentEl.textContent = firstNote.body;

events.noteShowEditorHandler();
events.noteShowPreviewHandler();
events.noteRemoveHandler(noteId);
events.noteSaveHandler(noteId);