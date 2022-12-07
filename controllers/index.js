const register = require('./register')
const login  = require('./login')
const getUserById = require('./getUserById')
const getUserByIdd = require('./getUserByIdd')
const getUsers = require('./getUsers')
const saveUser = require('./saveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
module.exports = {
    register,
    login,
    getUserById,
    getUserByIdd,
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}