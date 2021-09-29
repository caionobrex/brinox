import connectDB from '../../../middlewares/connectDB'
import Atendimento from "../../../models/Atendimento"
import Client from '../../../models/Client'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const atendimentos = await Atendimento.find().populate('client').sort({ createdAt: -1 })
    res.json(atendimentos)
  } else if (req.method === 'POST') {
    // create a new atendimento
  }
}

export default connectDB(handler)