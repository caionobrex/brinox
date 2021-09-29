import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import AdminLayout from '../../components/adminLayout'

export default function Admin({ atendimentos }) {
  return (
    <AdminLayout>
      <div className="grid gap-2 md:grid-cols-3">
        <div className="p-3 bg-primary text-white rounded animate-pulse font-medium text-center">
          Novo Atendimento {atendimentos[0].client.name}
        </div>
        <div className="p-3 bg-primary-dark text-white rounded font-medium text-center">
          Total {atendimentos.length}
        </div>
        <div className="p-3 bg-primary text-white rounded font-medium text-center">
          Fechados 0
        </div>
      </div>

      <div className="bg-white p-2 py-4 mt-8 rounded">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Cliente</th>
              <th className="text-left">Assunto</th>
              <th className="text-center">Telefone/Celular</th>
              <th className="text-center">Estado</th>
              <th className="text-center">Data</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {atendimentos.map((atendimento) => (
              <>
                <tr className="cursor-pointer transition-all hover:bg-gray-50 border-b">
                  <td className="text-left flex flex-col py-4">
                    {atendimento.client.name.toLowerCase()}
                    <span>{atendimento.client.email}</span>
                  </td>
                  <td className="text-left">Orçamento</td>
                  <td className="text-center">{atendimento.client.phones[0]}</td>
                  <td className="text-center">{atendimento.status === 'open' ? 'Aberto' : 'Fechado'} </td>
                  <td className="text-center">{atendimento.createdAt}</td>
                  <td className="text-center">
                    <MdDelete className="text-red-500 inline-block" />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/atendimentos')
  const atendimentos = await res.json()
  return { props: { atendimentos } }
}