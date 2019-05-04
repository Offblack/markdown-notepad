import DOM from '../../dom';
import {
   format
} from 'date-fns';
import {
   normalizeText
} from '../../utilities';
import * as searchBox from './search-box';
import * as addBox from './add-box';

const generateNoteHTML = (note, currentNoteId) => {
   return `<a href="/editor/${note.id}" class="list-group-item list-group-item-action d-flex justify-content-between lh-condensed ${(currentNoteId === note.id) ? 'active' : ''}">
      <div>
         <h6 class="my-0">${note.title}</h6>
         <small class="text-muted">${format(note.lastModified, 'DD/MM/YYYY | HH:mm:ss')}</small>
      </div>
   </a>`;
};

const generateNotesList = (notes, currentNoteId) => {
   const html = notes.filter(note => normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase())))
      .map(note => generateNoteHTML(note, currentNoteId))
      .join('');

   DOM().notesListEl.innerHTML = html;
}

const init = (notes, currentNoteId) => {

   generateNotesList(notes, currentNoteId);

   searchBox.init(() => generateNotesList(notes, currentNoteId));
   addBox.init(() => generateNotesList(notes, currentNoteId));

}

export default init;