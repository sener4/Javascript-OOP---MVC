export class UserController {
    constructor (userView, userModel) { 
        this.userView = userView;
        this.userModel = userModel;

        this.userView.bindAddUser(this.handleAddUser);

        this.handleUsersList();
    }

    handleAddUser = (user) => {
        this.userModel.addUser(user);

        this.handleUsersList();
    }

    handleUsersList = () => {
        this.userView.populateUsersList(this.userModel.users);
    }
}