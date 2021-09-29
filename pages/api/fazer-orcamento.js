import connectDB from '../../middlewares/connectDB'
import Atendimento from "../../models/Atendimento"
import Client from "../../models/Client"

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, city, state, type, body } = req.body
    let client = await Client.findOne({ email })
    if (!client) {
      client = await new Client({
        name,
        email,
        address: { city, state },
        phones: [phone]
      }).save()
    }
    const atendimento = await new Atendimento({
      client,
      type,
      body
    }).save()
    res.json(atendimento)
    // send email to martonio.inox@gmail.com
  }
}

export default connectDB(handler)