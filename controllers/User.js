const sequelize = require('../db/db');
const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const result = await sequelize.transaction(async t => {
            const {email, username, password} = req.body;
            const hashed_password = await bcrypt.hash(password, 10);

            const [user, created] = await User.findOrCreate({
                where: {
                    email,
                }, defaults: {
                    email: email, username: username, password: hashed_password,
                }, transaction: t,
            });

            if (!created) {
                return {
                    message: "User already exists", code: 400
                }
            }
            return {
                message: user, code: 201
            }
        });
        res.status(result.code).json(result.message);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await User.findByPk(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

