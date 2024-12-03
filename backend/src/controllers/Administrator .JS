// import { Administrator } from '../models/administrator.js';
// import { User } from '../models/user.js';

// // Create an administrator
// export const createAdministrator = async (req, res) => {
// try {
// const { admin_name, email, phone_number, the_password, users_id } = req.body;

// const newAdmin = await Administrator.create({
//     admin_name,
//     email,
//     phone_number,
//     the_password,
//     users_id,
// });

// res.status(201).json(newAdmin);
// } catch (error) {
// console.error(error);
// res.status(500).json({ message: 'Error creating administrator' });
// }
// };

// // Get all administrators
// export const getAdministrators = async (req, res) => {
// try {
// const administrators = await Administrator.findAll({
//     include: [{ model: User }],
// });
// res.status(200).json(administrators);
// } catch (error) {
// console.error(error);
// res.status(500).json({ message: 'Error retrieving administrators' });
// }
// };
