import User from "../models/user.js";

export const createUser = async (req, res) => {
  const { name, age, email } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ message: "Name, age and email are required" });
    const { name } = req.body;
  }
  const user = await User.create({ name, email });
  res.status(201).json(user);
};
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const user = await User.findByIdAndUpdate(id, { name }, { new: true });
  res.status(200).json(user);
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted" });
};
