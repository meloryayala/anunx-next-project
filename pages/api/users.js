import nextConnect from "next-connect"
import { crypt } from "../../src/utils/password"
import UsersModel from "../../src/models/users"
import dbConnect from "../../src/utils/dbConnect"

const route = nextConnect()

route.get(async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({ success: true, users })
})

route.post(async (req, res) => {
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
    
})

export default route
