const bycrypt =require("bcryptjs")

export async function HashPassWord(password){
    const salt =await bycrypt.genSalt(10)
    return await bycrypt.hash(password,salt)
}

export async function ComparePassword(password,hashedPassword){
    return await bycrypt.compare(password,hashedPassword)
}