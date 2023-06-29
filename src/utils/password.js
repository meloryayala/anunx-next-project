import bcrypt from 'bcrypt'

const crypt = async pwd => {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

    return password
}


export {
    crypt,
}