import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cpf: String,
  phones: [String],
  address: {
    state: String,
    city: String,
    neighborhood: String,
    street: String,
    number: Number,
    cep: String
  }
}, { timestamps: true })

export default mongoose.models.Client || mongoose.model('Client', clientSchema)