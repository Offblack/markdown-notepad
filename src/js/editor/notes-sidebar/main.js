const notesListEl = document.querySelector('#notesListEl');

const notesList = [{
   tittle: 'Notatka 1',
   lastModified: '27/04/2019 | 14:30'
}, {
   tittle: 'Notatka 1',
   lastModified: '27/04/2019 | 14:30'
}, {
   tittle: 'Notatka 1',
   lastModified: '27/04/2019 | 14:30'
}, {
   tittle: 'Notatka 1',
   lastModified: '27/04/2019 | 14:30'
}];

const generateNoteHTML = (note) => {
   return `<li class="list-group-item d-flex justify-content-between lh-condensed">
   <div>
      <h6 class="my-0">${note.tittle}</h6>
      <small class="text-muted">${note.lastModified}</small>
   </div>
</li>`
}

const html = notesList.map(note => generateNoteHTML(note)).join('');

notesListEl.innerHTML = html;
















/*                   <li class="list-group-item d-flex justify-content-between lh-condensed">
                     <div>
                        <h6 class="my-0">Product name</h6>
                        <small class="text-muted">Brief description</small>
                     </div>
                  </li> */