import AdminLayout from "../../components/adminLayout";

export default function AdminClients({ clients }) {
  return (
    <AdminLayout>
      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="text-left">Cliente</th>
            <th className="text-center">Telefone/Celular</th>
            <th className="text-center">Estado</th>
            <th className="text-center">Data</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <>
              <tr className="cursor-pointer transition-all hover:bg-gray-200">
                <td className="text-left flex flex-col py-4">
                  {client.name.toLowerCase()}
                  <span>{client.email}</span>
                </td>
                <td className="text-center">{client.phones[0]}</td>
                <td className="text-center">{client.createdAt}</td>
                <td className="text-center">
                  {/* <MdDelete className="text-red-500 inline-block" /> */}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/clients')
  const clients = await res.json()
  return { props: { clients } }
}