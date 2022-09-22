const express = require('express');
const { getAllUser, saveAUserByPost, updateUser, bulkUpdate, deleteUser, randomUser, userHome } = require('./functions/apis');
const user = express.Router()


user.route('/')
.get(userHome);

user.get('/random', randomUser);

user.get('/all', getAllUser);

// Post a user 
user.post('/save', saveAUserByPost);

user.patch('/update', updateUser)

user.patch('/bulk-update',bulkUpdate)

user.delete('/delete', deleteUser)


module.exports = {
    user
}


