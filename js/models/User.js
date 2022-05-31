export class User {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("users")) || [];
    }

    addUser = (user) => {
        this.users.push({
            id: this.users.length + 1,
            ...user
        });

        this.commitUsers();
    }

    getUsers = () => {
        return this.users;
    }

    commitUsers = () => {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}