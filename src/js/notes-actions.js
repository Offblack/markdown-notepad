import axios from '../axios-api';

axios.get('/notes')
   .then(function (response) {
      console.log(response);
   })

let notesList = [];

export function getAll() {
   return notesList;
}

export function add(title) {
   notesList.push({
      title,
      lastModified: Date.now()
   });
}

export function remove(noteId) {
   notesList = notesList.filter(note => note.id !== noteId);
   console.log(`${noteId} - removed`);
   console.log(notesList);
}

export function save(noteId, noteContent) {
   notesList = notesList.map(note => {

      if (note.id === noteId) {
         note.body = noteContent;
         note.lastModified = new Date();
         console.log(`${note.id} - saved`);
      }


      return note;

   })
}