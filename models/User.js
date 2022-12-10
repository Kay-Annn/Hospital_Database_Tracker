const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            defaultValue: '',

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
    },
    {
        hooks: {
            // beforeCreate: async (newUserData) => {
            //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
            //     return newUserData;
            // },
            // beforeUpdate: async (updatedUserData) => {
            //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            //     return updatedUserData;
            // },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    }
);

module.exports = User;
