import DOM from '../dom';
import {
   normalizeText
} from '../../utilities';
import * as searchBox from './search-box';
import * as addBox from './add-box';
import * as notesActions from '../../notes-actions';

const generateNotesList = () => {
   const generateNoteHTML = note => {
      return `<li class="list-group-item d-flex justify-content-between lh-condensed">
         <div>
            <h6 class="my-0">${note.title}</h6>
            <small class="text-muted">${note.lastModified}</small>
         </div>
      </li>`;
   };

   const html = notesActions
      .getAll()
      .filter(note =>
         normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase()))
      )
      .map(note => generateNoteHTML(note))
      .join('');

   DOM.notesListEl.innerHTML = html;
};

generateNotesList();

searchBox.init(() => generateNotesList());
addBox.init(() => generateNotesList());