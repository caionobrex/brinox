import connectDB from '../../../middlewares/connectDB'
import Client from "../../../models/Client"

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const clients = await Client.find()
    res.json(clients)
  } else if (req.method === 'POST') {
    const client = await new Client({
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
      phones: [req.body.phone],
      address: {
        state: req.body.state,
        city: req.body.city,
        neighborhood: req.body.neighborhood,
        street: req.body.street,
        number: req.body.number,
        cep: req.body.cep
      }
    }).save()
    res.json(client)
  }
}

export default connectDB(handler)