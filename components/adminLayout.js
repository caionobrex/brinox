import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <nav className="hidden bg-primary-dark min-h-screen p-8 md:block" style={{ width: '20%' }}>
        <div className="flex mb-8">
          {/* <img src="ds" /> */}
          <AiOutlineUser className="text-white text-6xl" />
        </div>

        <ul className="flex flex-col gap-y-3 text-white font-medium text-lg">
          <li>
            <Link href="/admin">
              <a className="flex items-center gap-x-2">Atendimentos</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/clients">
              <a className="flex items-center gap-x-2">Leads</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/users">
              <a className="flex items-center gap-x-2">Usuários</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/contatos">
              <a className="flex items-center gap-x-2">Contatos</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 bg-gray-100 p-8">
        {children}
      </div>
    </div>
  )
}