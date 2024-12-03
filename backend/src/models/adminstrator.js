// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
// import User from './user.js';

// const Administrator = sequelize.define('Administrator', {
//   admin_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   admin_name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//   },
//   phone_number: {
//     type: DataTypes.STRING(15),
//     allowNull: false,
//   },
//   the_password: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   users_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'users_id',
//     },
//     unique: true,
//   },
// }, {
//   tableName: 'administrator',
//   timestamps: false,
// });

// export default Administrator;
