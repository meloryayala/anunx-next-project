import dbConnect from "../../src/utils/dbConnect"
import { crypt } from "../../src/utils/password"
import UsersModel from '../../src/models/users'

const users = async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            await dbConnect()
            res.status(200).json({ success: true })
            break

        case 'POST':
            //get data from req
            //connect with database
            //encrypt password
            //save data
            //respond succcess
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
}

export default users