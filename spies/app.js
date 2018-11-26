var db =require('./db.js')

module.exports.Signup = (email , password)=>{
    //Checks if email already exists

    db.saveUser({email , password})
}  