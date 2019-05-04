import axios from './axios-api';

export function getAll() {
   return new Promise((resolve, reject) => axios.get('/notes')
      .then(response => response.data)
      .then(notes => resolve(notes))
      .catch(error => console.log(error)));
}

export function add(title) {
   return new Promise((resolve, reject) => axios.post('/notes', {
         title,
         lastModified: Date.now(),
         body: ""
      })
      .then(response => response.data)
      .then(notes => resolve(notes))
      .catch(error => console.log(error)));
}

export function remove(noteId) {
   return new Promise((resolve, reject) => axios.delete(`/notes/${noteId}`)
      .then(response => response.data)
      .then(notes => resolve(notes))
      .catch(error => console.log(error)));
}

export function save(noteId, noteContent) {
   return new Promise((resolve, reject) => axios.patch(`/notes/${noteId}`, {
         body: noteContent,
         lastModified: Date.now()
      })
      .then(response => response.data)
      .then(notes => resolve(notes))
      .catch(error => console.log(error)));
}