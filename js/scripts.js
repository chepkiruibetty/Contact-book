document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keyup', findNames);

});

function findNames() {
    var searchInputValue = document.getElementById('search-input').value;
    var contacts = document.getElementById('contacts')
    var names = contacts.querySelectorAll('li.collection-item')

    for (var i = 0; i < names.length; i += 1) {
        if (names[i].innerHTML.toLowerCase().includes(searchInputValue)) {

            names[i].style.display = '';
        } else {
            names[i].style.display = 'none';
        };
    };
};

function appendNewContact(event) {
    var inputValue = document.getElementById('add-contacts').value;
    alert(inputValue)
    var form = document.getElementById("my-form");


    event.preventDefault();
    form.reset();
};