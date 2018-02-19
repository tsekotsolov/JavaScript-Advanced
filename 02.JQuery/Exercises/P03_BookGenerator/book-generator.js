function createBook(selector, title, author, isbn) {

    let bookGenerator = function () {
        let id = 1;

        return function (selector, title, author, isbn) {

            let container = $(`<div id="book${id}" style="border:none">`);
            let titleParagraph = $(`<p class="title">${title}</p>`);
            let authorParagraph = $(`<p class="author">${author}</p>`);
            let isbnParagraph = $(`<p class="isbn">${isbn}</p>`);

            let selectBtn = $('<button>Select</button>').click(()=>container.css('border','2px solid blue'));
            let deselectBtn = $('<button>Deselect</button>').click(()=>container.css('border','none'));;

            titleParagraph.appendTo(container);
            authorParagraph.appendTo(container);
            isbnParagraph.appendTo(container);
            selectBtn.appendTo(container);
            deselectBtn.appendTo(container);
            container.appendTo(selector);
            id++;
        }
    }();

    bookGenerator(selector, title, author, isbn);

}