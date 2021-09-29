import mongoose from 'mongoose'

const atendimentoSchema = new mongoose.Schema({
  client: { type: mongoose.SchemaTypes.ObjectId, ref: 'Client' },
  type: {
    type: String,
    enum: ['budget', 'doubt'],
    default: 'budget'
  },
  status: {
    type: 'String',
    enum: ['open', 'answered', 'closed'],
    default: 'open'
  },
  body: String,
}, { timestamps: true })

export default mongoose.models.Atendimento || mongoose.model('Atendimento', atendimentoSchema)