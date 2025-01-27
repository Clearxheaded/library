document.addEventListener("DOMContentLoaded", () => {
    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        info() {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
        }
    }

    const myLibrary = [];
    const bookContainer = document.querySelector(".book-container");

    const newBookButton = document.createElement("button");
    newBookButton.classList.add("new-book-btn");
    newBookButton.textContent = "New Book";
    document.body.appendChild(newBookButton);

    newBookButton.addEventListener("click", () => {
        const form = document.createElement("form");

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.placeholder = "Enter the title";
        titleInput.required = true;

        const authorInput = document.createElement("input");
        authorInput.type = "text";
        authorInput.placeholder = "Enter the author";
        authorInput.required = true;

        const pagesInput = document.createElement("input");
        pagesInput.type = "number";
        pagesInput.placeholder = "Enter the number of pages";
        pagesInput.required = true;

        const readInput = document.createElement("input");
        readInput.type = "checkbox";
        readInput.id = "read";
        const readLabel = document.createElement("label");
        readLabel.setAttribute("for", "read");
        readLabel.textContent = "Read";

        const submitButton = document.createElement("button");
        submitButton.textContent = "Add Book";
        submitButton.type = "submit";

        form.appendChild(titleInput);
        form.appendChild(authorInput);
        form.appendChild(pagesInput);
        form.appendChild(readLabel);
        form.appendChild(readInput);
        form.appendChild(submitButton);

        document.body.appendChild(form);

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const title = titleInput.value;
            const author = authorInput.value;
            const pages = parseInt(pagesInput.value, 10);
            const read = readInput.checked;

            addBookToLibrary(title, author, pages, read);
            displayBooks();

            form.reset();
            form.remove();
        });
    });

    function addBookToLibrary(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
    }

    function displayBooks() {
        bookContainer.innerHTML = "";

        myLibrary.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");

            const title = document.createElement("p");
            title.textContent = book.title;
            title.classList.add("book-title");
            bookCard.appendChild(title);

            const author = document.createElement("p");
            author.textContent = book.author;
            author.classList.add("book-author");
            bookCard.appendChild(author);

            const pages = document.createElement("p");
            pages.textContent = `${book.pages} pages`;
            pages.classList.add("book-pages");
            bookCard.appendChild(pages);

            const read = document.createElement("p");
            read.textContent = book.read ? "Read" : "Not Read";
            read.classList.add("book-read");
            bookCard.appendChild(read);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove Book";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", () => {
                myLibrary.splice(index, 1);
                displayBooks();
            });

            bookCard.appendChild(removeButton);

            const toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle Read Status";
            toggleButton.classList.add("toggle-btn");
            toggleButton.addEventListener("click", () => {
                book.read = !book.read;
                displayBooks();
            });

            bookCard.appendChild(toggleButton);

            bookContainer.appendChild(bookCard);
        });
    }

    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
    displayBooks();
});
