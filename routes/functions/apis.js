// Get All routes =>
const notFoundFunnction = (req,res) => {
    res.send(
        "<h1> Page is not found <h1>"
    )
}


const users = require('../../data/users.json');
const { user } = require('../user');
const userHome = (req, res) => {
    res.render('HomePage')
}
const randomUser = (req, res) => {
    const randomData = users[Math.floor(Math.random() * users.length)];
    res.status(200).send({
        success: true,
        data: randomData
    });
}


const getAllUser = (req, res) => {
    console.log(req.query);
    const queryLimit = req.query.limit;
    const page = req.query.page;
    console.log(page);
    const limit = page * queryLimit;

    if (!queryLimit && !page) {
        console.log('inside from not limit & page')
        res.status(200).send({
            success: true,
            data: users
        });
    } else if (queryLimit && !page) {
        console.log("Inside only limited");
        const limitedUser = users.slice(0, queryLimit);
        res.status(200).send({
            success: true,
            data: limitedUser
        });
    } else if (!queryLimit && page) {
        res.status(200).send({
            success: false,
            data: "Please set the limit with page"
        });
    } else if (queryLimit && page) {
        const limitedPageUser = users.slice(limit - queryLimit, limit);
        res.status(200).send({
            success: true,
            data: limitedPageUser
        })
    } else {
        res.send({
            success: true,
            data: users
        })
    }
};


const saveAUserByPost = (req, res) => {
    const saveData = req.body;
    if (!saveData.name) {
        res.send({
            success: false,
            message: 'Please give some data'
        })
        return;
    } else {
          res.send({
            success: true,
            message: "Data Successfully saved!"
        })
    }
}

// const updateUserByID = (req, res) => {
//     const id = req.params.id;
//     const find = users.find(e => e.id);
//     if(find){
//         res.send({
//             success:true,
//             message : "Data sucessfully updated"
//         })
//     }else{
//         res.send({
//             success:false,
//             message: `The paramer ${id} id was not found in your store`
//         })
//     }
// }

const updateUser = (req, res) => {
    // const id = req.params.id;
    const randomData = users[Math.floor(Math.random() * users.length)];
    const updatedBodyData = req.body;
    req.send({
        success:true,
        message:"Successfully random user updated"
    })

}

const bulkUpdate = (req, res) => {
    req.send({
        message:true,
        message:"Successfully Bukupdated multiple users"
    })
}

const deleteUser = (req, res) => {
    const randomUserId= Math.floor(Math.random() * users.length);
    const found = users.filter(e => e.id !== randomUserId);
    res.send({
        success:true,
        message: `Sucessfully deleted ${randomUserId} Id`,
        data:found
    })
}

module.exports = {
    notFoundFunnction,
    userHome,
    randomUser,
    getAllUser,
    saveAUserByPost,
    updateUser,
    bulkUpdate,
    deleteUser
}