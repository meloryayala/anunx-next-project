import { crypt } from "../utils/password"
import UsersModel from "../models/users"
import dbConnect from "../utils/dbConnect"

const get = async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({ success: true, users })
}

const post = async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body

    await dbConnect()
    const passwordCrypt = await crypt(password)

    const user = new UsersModel({
        name,
        email,
        password: passwordCrypt,
    })

    user.save()
    res.status(201).json({ success: true })

}

export {
    get,
    post,
}