const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        blog_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'blog',
                key: 'id',
            },
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    },
);

module.exports = Comment;