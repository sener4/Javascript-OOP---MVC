import { elementsToBeCreated } from "../utils/constants.js";

export class UserView {
    constructor() {
        this.root        = this.getElement("#root");
        this.list        = this.createElement(elementsToBeCreated[0].tag, elementsToBeCreated[0].className);
        this.form        = this.createElement(elementsToBeCreated[1].tag);
        this.input       = this.createElement(elementsToBeCreated[2].tag);
        this.inputSubmit = this.createElement(elementsToBeCreated[3].tag);

        this.input.name              = elementsToBeCreated[2].name;
        this.input.placeholder       = elementsToBeCreated[2].placeholder;
        this.inputSubmit.type        = elementsToBeCreated[3].type;
        this.inputSubmit.textContent = elementsToBeCreated[3].value;

        this.form.append(this.input, this.inputSubmit);
        this.root.append(this.list, this.form);
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        className && element.classList.add(className);

        return element;
    }

    populateUsersList = (users) => {
        this.deleteUsersList(users);

        users.map(user => {
            const userItem     = this.createElement("li", "users-item");

            userItem.innerHTML = user.name;

            this.list.append(userItem);
        });
    }

    deleteUsersList = () => {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }
    }

    clearInputValue = () => {
        this.input.value = "";
    }

    bindAddUser = (handler) => {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            
            handler({ name: this.input.value });

            this.clearInputValue();
        })
    }
}