import DOM from '../../dom';
import {
   format
} from 'date-fns';
import {
   normalizeText
} from '../../utilities';
import * as searchBox from './search-box';
import * as addBox from './add-box';
import page from 'page';

const generateNoteHTML = (note, currentNoteId, notes) => {
   return `<a href="${page.base()}/editor/${
      note.id
   }" class="list-group-item list-group-item-action ${
      currentNoteId === note.id ? 'active' : ''
   } ${ (notes.indexOf(note) === 0 && (!currentNoteId)) ? 'active' : '' }">
      <div>
         <h6 class="my-0">${note.title}</h6>
         <small>Ostatnia zmiana: ${format(note.lastModified, 'DD/MM/YYYY | HH:mm:ss')}</small>
      </div>
   </a>`;
};

const generateNotesList = (notes, currentNoteId) => {
   const html = notes
      .filter(note =>
         normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase()))
      )
      .map(note => generateNoteHTML(note, currentNoteId, notes))
      .join('');

   DOM().notesListEl.innerHTML = html;
};

const init = (notes, currentNoteId) => {
   generateNotesList(notes, currentNoteId);

   searchBox.init(() => generateNotesList(notes, currentNoteId));
   addBox.init(newNote => {
      notes = [...notes, newNote];

      generateNotesList(notes, currentNoteId);
   });
};

export default init;