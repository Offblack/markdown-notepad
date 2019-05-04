import DOM from '../../dom';
import {
   format
} from 'date-fns';
import {
   normalizeText
} from '../../utilities';
import * as searchBox from './search-box';
import * as addBox from './add-box';
import * as notesActions from '../../notes-actions';

const generateNoteHTML = note => {
   return `<li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
         <h6 class="my-0">${note.title}</h6>
         <small class="text-muted">${format(note.lastModified, 'DD/MM/YYYY | HH:mm:ss')}</small>
      </div>
   </li>`;
};

const generateNotesList = () => {
   notesActions.getAll().then(notes => {
      const html = notes.filter(note => normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase())))
         .map(note => generateNoteHTML(note))
         .join('');

      DOM().notesListEl.innerHTML = html;
   })
};

const init = () => {

   generateNotesList();

   searchBox.init(() => generateNotesList());
   addBox.init(() => generateNotesList());

}

export default init;