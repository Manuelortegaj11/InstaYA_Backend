const User = require("../model/orden");
const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
module.exports = saveUser