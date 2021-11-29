const roleModel = require("./../../db/models/role");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT = Number(process.env.SALT);

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const savedEmail = email.toLowerCase();
  const passwordHashed = await bcrypt.hash(password, SALT);

  const newUser = new userModel({
    email: savedEmail,
    password: passwordHashed,
    role,
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
