import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Dieta = sequelize.define('Dieta', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pesagem: {
        type: DataTypes.JSON,
        allowNull: true
    },
    fatorAtividade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    get: {
        type: DataTypes.STRING,
        allowNull: true
    },
    medidasCorporais: {
        type: DataTypes.JSON,
        allowNull: true
    },
    patologias: {
        type: DataTypes.JSON,
        allowNull: true
    },
    objetivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    objetivoCalorias: {
        type: DataTypes.STRING,
        allowNull: true
    },
    selectedFoods: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, {
        tableName: 'dietas',
        timestamps: true
})

export default Dieta;