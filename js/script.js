import { User } from "./models/User.js";
import { UserView } from "./views/UserView.js";
import { UserController } from "./controller/UserController.js";

const app = new UserController(new UserView(), new User());

