let toDo = [];

const ulDOM = document.querySelector('#list');
const inputDOM = document.querySelector('#task');
const alertDOM = document.querySelector('#alert');
let liELEM = document.getElementsByTagName('li');

const deletBtn = `<span class="close" onclick="deleteElem(parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`;


// Localstorage
if (localStorage.getItem('toDo') != null) {
    toDo = JSON.parse(localStorage.getItem("toDo"));
    toDo.forEach(element => {
        let liCr = document.createElement("li");
        liCr.innerHTML = `${element}${deletBtn}`;
        ulDOM.append(liCr);

    });
}


// Create Element
const newElement = () => {
    if (inputDOM.value) {
        toDo.push(inputDOM.value);
        localStorage.setItem('toDo', JSON.stringify(toDo));
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `${inputDOM.value}${deletBtn}`;
        ulDOM.append(liDOM);
        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;"
        closeBtn.classList.add("close");
        closeBtn.setAttribute("id", "closeBtn")
        liDOM.appendChild(closeBtn);
        inputDOM.value = "";
        $('.success').toast('show');

    }
    else {
        $('.error').toast('show')
    }

}

// Delete
function deleteElem(parentNode) {
    toDo.splice(toDo.indexOf(parentNode.innerHTML), 1);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    parentNode.remove();
}


// Done Item
function doneElement() {
    for (let i = 0; i<liELEM.length; i++){
        liELEM[i].onclick = function() {
            liELEM[i].classList.toggle("checked");
        }
    }

}