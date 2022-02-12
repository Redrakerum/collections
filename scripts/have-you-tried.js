//VARS-----------------------------------------------------------------------

let article_title_array = ['So, Arrays?'];

let article_body_array = ["Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays"];


const placeholder_title = "New Title";
const placeholder_body = "New Body";

const next_btn = document.getElementById('next-button');
const prev_btn = document.getElementById('prev-button');
const create_btn = document.getElementById('create');

const article_body = document.getElementById('article-content');
const article_title = document.getElementById('article-name');

const new_article_body = document.getElementById('new-article-content');
const new_article_title = document.getElementById('new-article-name');

const total_pages = document.getElementById('Total-Page-Number');
const current_page = document.getElementById('Current-Page-Number');

const create_box = document.getElementById('create-modal-id');
const create_background = document.getElementById('create-modal-background');

const cancel_create_button = document.getElementById('cancel-create-article');
const create_article_button = document.getElementById('create-article');

var article_number = 0;
current_page.innerText = article_number + 1;
total_pages.innerText = article_title_array.length;

//FUNCTIONS-----------------------------------------------------------------

function startup() {
    article_body.innerText = article_body_array[0];
    article_title.innerText = article_title_array[0];

    resetModal();
}

function resetModal() {
    new_article_body.value = placeholder_body;
    new_article_title.value = placeholder_title;
}

function pushToArray() {
    article_title_array.push(document.getElementById('new-article-name').value);
    article_body_array.push(document.getElementById('new-article-content').value);
}


function advance() {
    if ((article_number + 1) >= article_title_array.length) {
        article_number = 0;
        article_body.innerText = article_body_array[article_number];
        article_title.innerText = article_title_array[article_number];
        current_page.innerText = article_number + 1;
    } else {
        article_number += 1;
        article_body.innerText = article_body_array[article_number];
        article_title.innerText = article_title_array[article_number];
        current_page.innerText = article_number + 1;
    }
}

function deadvance() {
    if ((article_number - 1) < 0) {
        article_number = (article_title_array.length - 1);
        article_body.innerText = article_body_array[article_number];
        article_title.innerText = article_title_array[article_number];
        current_page.innerText = article_number + 1;
    } else {
        article_number -= 1;
        article_body.innerText = article_body_array[article_number];
        article_title.innerText = article_title_array[article_number];
        current_page.innerText = article_number + 1;
    }
}

//BUTTON_FUNCTIONS-----------------------------------------------------------------------

create_btn.onclick = function () {
    create_background.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == create_background) {
        create_background.style.display = "none";
    }
}

cancel_create_button.onclick = function () {
    create_background.style.display = "none";
    resetModal();
}

create_article_button.onclick = function () {
    pushToArray();

    create_background.style.display = "none";
    total_pages.innerText = article_body_array.length;

    resetModal();
};