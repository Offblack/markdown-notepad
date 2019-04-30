import * as noteActions from './../../notes-actions';
import * as events from './single-note-event';

const noteTitleEl = document.querySelector('#note-title');
const noteContentEl = document.querySelector('#note-content');
const noteContentBtn = document.querySelector('#note-content-btn');

const noteEditBtn = document.querySelector('#note-edit-btn');
const notePreviewBtn = document.querySelector('#note-preview-btn');
const noteRemoveBtn = document.querySelector('#note-remove-btn');

const noteList = noteActions.getAll();

const firstNote = noteList[0];
const noteId = firstNote.id;

noteTitleEl.textContent = firstNote.title;
noteContentEl.textContent = firstNote.body;

events.noteRemoveHandler(noteRemoveBtn, noteId);
events.noteSaveHandler(noteContentBtn, noteId, noteContentEl);