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

    function displayBooks() {
        bookContainer.innerHTML = "";
        for (let i = 0; i < myLibrary.length; i++) {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");

            const title = document.createElement("p");
            title.textContent = myLibrary[i].title;
            title.classList.add("book-title");
            bookCard.appendChild(title);

            const author = document.createElement("p");
            author.textContent = myLibrary[i].author;
            author.classList.add("book-author");
            bookCard.appendChild(author);

            const pages = document.createElement("p");
            pages.textContent = myLibrary[i].pages;
            pages.classList.add("book-pages");
            bookCard.appendChild(pages);

            const read = document.createElement("p");
            read.textContent = myLibrary[i].read ? "Read" : "Not Read";
            read.classList.add("book-read");
            bookCard.appendChild(read);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove Book";
            bookCard.appendChild(removeButton);

            const toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle Read Status";
            bookCard.appendChild(toggleButton);

            bookContainer.appendChild(bookCard);
        }
    }
})