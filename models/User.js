const {DataTypes} = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
    },
    {
        schema: 'public',
        defaultScope: {
            attributes: {
                exclude: ['password'],
            },
        },
        indexes: [{ unique: true, fields: ["email"] }],
        timestamps: true,
    }
);

User.sync({alter: true});

module.exports = User;