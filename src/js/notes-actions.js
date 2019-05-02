let notesList = [{
      id: 1,
      title: 'Notatka pierwsza - 1',
      body: '# Moja notatka',
      lastModified: 1556707990074
   },
   {
      id: 2,
      title: 'Notatka 2',
      body: '# Moja notatka',
      lastModified: 1556707990074
   },
   {
      id: 3,
      title: 'Notatka 3',
      body: '# Moja notatka',
      lastModified: 1556707990074
   },
   {
      id: 4,
      title: 'Notatka 4',
      body: '# Moja notatka',
      lastModified: 1556707990074
   }
];

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