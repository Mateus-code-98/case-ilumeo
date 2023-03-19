import Sequelize from "sequelize";

export const generateCodeService = async (model: Sequelize.ModelStatic<any>) => {
    let flag = true
    let code = ""

    while (flag) {
        code = generate(6)
        const entity = await model.findOne({ where: { code } })
        if (!entity) flag = false
    }

    return code
}

const generate = (qnt: number) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const code = []
    for (let i = 0; i < qnt; i++) {
        const random = Math.floor(Math.random() * 2)
        if (random === 0) {
            const letter = letters[Math.floor(Math.random() * letters.length)]
            code.push(letter)
        } else {
            const number = numbers[Math.floor(Math.random() * numbers.length)]
            code.push(number)
        }
    }
    return code.join("")
}