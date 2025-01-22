document.addEventListener("DOMContentLoaded", () => {
    const myLibrary = [];
    const bookContainer = document.querySelector(".book-container");

    // This is for adding a new book (I have to figure out how to do serverless)
    const newBookButton = document.createElement("button");
    newBookButton.classList.add("new-book-btn");
    newBookButton.textContent = "New Book";
    document.body.appendChild(newBookButton);

    newBookButton.addEventListener("click", function () {
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

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const title = titleInput.value;
            const author = authorInput.value;
            const pages = pagesInput.value;
            const read = readInput.checked;

            addBookToLibrary(title, author, pages, read);

            displayBooks();

            form.reset();
            form.remove();
        });
    })


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
            removeButton.classList.add("remove-btn");
            removeButton.setAttribute("data-index", i);

            removeButton.addEventListener("click", function () {
                const index = removeButton.getAttribute("data-index");
                myLibrary.splice(index, 1);
                displayBooks();
            });

            bookCard.appendChild(removeButton);

            const toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle Read Status";
            toggleButton.classList.add("toggle-btn");
            toggleButton.setAttribute("data-index", i);

            toggleButton.addEventListener("click", function () {
                const index = toggleButton.getAttribute("data-index");
                const book = myLibrary[index];

                book.read = !book.read;
                read.textContent = book.read ? "Read" : "Not Read";
            });

            bookCard.appendChild(toggleButton);

            bookContainer.appendChild(bookCard);
        }
    }
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
    displayBooks(); // This will update the display with the newly added books
})