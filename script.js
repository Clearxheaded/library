document.addEventListener("DOMContentLoaded", () => {
    const myLibrary = [];
    const bookContainer = document.querySelector(".book-container");

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            if (read == True) {
                return `${title} by ${author}, ${pages} pages, read`;
            }
            return `${title} by ${author}, ${pages} pages, not read yet`;
        }
    }

    function addBookToLibrary(title, author, pages, read) {
        // let title = prompt("Enter the title of the book:", "The Great Gastby");
        // let author = prompt("Enter the author of the book", "F. Scott Fitzgerald");
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
    }

    // addBookToLibrary("1984", "George Orwell", "120", true);
    // addBookToLibrary("1984", "George Orwell", "120", false);
    // console.log(myLibrary);

    function displayBooks() {
        bookContainer.innerHTML = "";
    }
})