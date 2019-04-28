import {
   normalizeText
} from './../../utilities';
import * as searchBox from './search-box';

const notesListEl = document.querySelector('#notesListEl');

const notesList = [{
      tittle: 'Notatka 1',
      lastModified: '27/04/2019 | 14:30'
   },
   {
      tittle: 'Notatka 2',
      lastModified: '27/04/2019 | 14:30'
   },
   {
      tittle: 'Notatka 3',
      lastModified: '27/04/2019 | 14:30'
   },
   {
      tittle: 'Notatka 4',
      lastModified: '27/04/2019 | 14:30'
   }
];

const generateNotesList = () => {
   const generateNoteHTML = note => {
      return `<li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
         <h6 class="my-0">${note.tittle}</h6>
         <small class="text-muted">${note.lastModified}</small>
      </div>
   </li>`;
   };

   const html = notesList.filter(note => normalizeText(note.tittle).includes(normalizeText(searchBox.getSearchPhrase()))).map(note => generateNoteHTML(note)).join('');

   notesListEl.innerHTML = html;
};

generateNotesList();
searchBox.init(() => generateNotesList());