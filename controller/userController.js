import { usersList } from "../model/userModel.js";

export function handleUsers(req, res) {
  const userData = usersList();
  res.render("user", { userData });
}
