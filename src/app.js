import "./css/app.css";

// The object for state monitoring and updating.
let state = {
    tagsContainer: [],
    getTags() {
        console.log(this.tagsContainer);
        return this.tagsContainer;
    },
    setTags(tags) {
        this.tagsContainer = [];
        if (tags.length > 1) {
            for (let tag of tags) {
                addTag(tag);
            }
        } else {
            addTag(tags);
        }
    }
}

// This function creates tags using the input field content, 
// that is already processed and provided by 'handleInput' function.
function addTag(tagContent) {
    let tagsArea = document.querySelector(".tagGenerator__tagsArea");
    let newTag = document.createElement('p');

    newTag.classList.add("tagGenerator__tag");
    newTag.innerHTML = `<span>${tagContent}</span><span>
                            <svg class="tagGenerator__cross" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="currentColor"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentColor"/>
                            </svg>
                        </span>`;

    tagsArea.append(newTag);
    state.tagsContainer.push(tagContent);
    toLocalStorage(state.tagsContainer);
    addListenerToCrosses();
}

// Just a small function to add the listener to crosses.
function addListenerToCrosses() {
    let crosses = document.querySelectorAll(".tagGenerator__cross");
    for (let cross of crosses) {
        cross.addEventListener("click", deleteTag);
    }
}

// This function processes the input, both single and multiple(separated with comma)
// and gives valid data for each tag creation separately to 'addTag' function.
function handleInput() {
    let inputField = document.querySelector(".tagGenerator__input");
    if (inputField.value.includes(",")) {
        let valuesArray = inputField.value.split(",");
        for (let value of valuesArray) {
            if (!value.trim().length) {
                continue;
            }
            addTag(value);
        }
        inputField.value = "";
    }
    let inputValue = inputField.value;
    if (!inputValue) return
    if (!inputValue.trim().length) {
        inputField.value = "";
    }
    else {
        addTag(inputValue);
        inputField.value = "";
    }
}

// Processes the click on the cross: deletes tag, updates state and localStorage.
function deleteTag(e) {
    let value = e.currentTarget.closest(".tagGenerator__tag").firstChild.textContent;
    let index = state.tagsContainer.indexOf(value, 0);

    state.tagsContainer.splice(index, 1);
    e.target.closest(".tagGenerator__tag").style.display = "none";
    localStorage.clear();
    toLocalStorage(state.tagsContainer);
}

// Adding some listeners to DOM-elements. Their handlers are also here.
// Everything is wrapped in the IIFE in order not to make globals.
(function () {
    let inputField = document.querySelector(".tagGenerator__input");
    inputField.addEventListener("keypress", handleKeypress);
    function handleKeypress(e) {
        if (e.keyCode === 13)
            handleInput();
    }

    let addButton = document.querySelector(".tagGenerator__button");
    addButton.addEventListener("click", handleInput);

    let toggler = document.querySelector(".toggler__input");
    toggler.addEventListener("change", handleToggle);
    function handleToggle() {
        let blocked1 = document.querySelector(".tagGenerator__wrapper");
        let blocked2 = document.querySelector(".tagGenerator__tagsArea");
        blocked1.classList.toggle("disabled");
        blocked2.classList.toggle("disabled");
    }
})();

// Add items to localStorage. Both array or a single one.
function toLocalStorage(data) {
    if (data.length > 1) {
        for (let i = 0; i < data.length; i++) {
            localStorage.setItem(i, data[i]);
        }
    } else if (data.length == 0)
        return
    else {
        localStorage.setItem(localStorage.length, data);
    }
}

// Enabling localStorage usage for creating tags.
window.onload = () => {
    let tempArr = [];
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            tempArr.push(localStorage.getItem(i));
        }
        state.setTags(tempArr);
        localStorage.clear();
        tempArr = [];
    }
}
