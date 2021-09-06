// Sort the array (desc) by author's lastname
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" }
];

const getLastName = (list) => {
  list.forEach(book => book.lastName = book.author.split(' ')[1]);
}

const sortByLastName = (a,b) => {
  return a.lastName.localeCompare(b.lastName);
}

const ordenedBooksByAuthor = (list) => {
  getLastName(list);
  const ordenedList = list.sort(sortByLastName);
  console.log(ordenedList)
  return ordenedList;
}

ordenedBooksByAuthor(books);