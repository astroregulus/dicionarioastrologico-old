export function filterByLetter(value, letter) {
  return value.filter(function(item) {
    return letter ? item.title.toUpperCase().startsWith(letter.toUpperCase()) : true;
  })
}
