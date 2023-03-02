import user from "../models/user.js"

export const getUser = async (req, res) => {
  try {
    const userGetted = await user.findAll()
    res.send(userGetted)
  } catch (erro) {
    console.log(erro)
  }
}

export const getUserById = async (req, res) => {
  try {
    const userGetted = await user.findAll({
      where: {
        id: req.params.id
      }
    })
    res.send(userGetted)
  } catch (erro) {
    console.log(erro)
  }
}

export const createUser = async (req, res) => {
  try {
    await user.create(req.body)
    res.json({
      "messangem": "Um novo usuário foi criado no Bando de Dados"
    })
  } catch (erro) {
    console.log(erro)
  }
}

export const updateUser = async (req, res) => {
  try {
    await user.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      "messangem": "O User " + req.params.id + " foi Atualizada"
    })
  } catch (erro) {
    console.log(erro)
  }
}

export const deleteUser = async (req, res) => {
  try {
    await user.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      "messangem": "O User " + req.params.id + " foi Excluido do Banco de Dados"
    })
  } catch (erro) {
    console.log(erro)
  }
}