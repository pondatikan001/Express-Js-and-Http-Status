
const db = require('monk')('localhost:27017/UserMangeTesrNodejs').get('users')


 async function getUserController(param){
    console.log(`getUserController`, param)
    let result = await db.find({ name: param.name }, {})
    return result
}

function addUserController(param){
    console.log(`addUserController`, param)
    db.insert({
        name : param.name
       ,age: param.name
    })

}

module.exports = {
    getUserController,
    addUserController
}