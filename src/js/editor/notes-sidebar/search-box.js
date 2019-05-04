import DOM from '../../dom';

let searchPhrase = '';

export function getSearchPhrase() {
   return searchPhrase;
}

export function init(onChangeCallback) {
   DOM().searchBoxInput.addEventListener('input', function () {
      searchPhrase = this.value;
      onChangeCallback();
   });
}