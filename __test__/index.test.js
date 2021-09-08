import { getLastName, ordenedBooksByAuthor } from '../index.js';

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" }
];

describe('Sort list by author lastname', () => {

  test('Each item has the correct lastname', () => {
    () => getLastName(books).forEach(book => {
      expect(book.lastName).toMatch(book.author.split(' ')[1]);
    });
  });

  test('Get the ordened list', () => {
    () => ordenedBooksByAuthor(books)
      .toEqual(() => getLastName(books)
      .sort((a, b) => a.lastName.localeCompare(b.lastName)))
  });

});
