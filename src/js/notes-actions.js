const notesList = [];

export function getAll() {
   return notesList;
}

export function add(title) {
   notesList.push({
      title,
      lastModified: '18/06/2018 14:00'
   });
}