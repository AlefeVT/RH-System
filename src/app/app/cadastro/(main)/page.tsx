import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-80 bg-gray-100 dark:bg-gray-950">
      <div className="w-3/4 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Cadastros Essenciais</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gerencie os principais dados da sua empresa, como cargos, funcionários e contratos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="cadastro/cargos"
              className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-4 px-6 transition-colors"
              prefetch={false}
            >
              <BriefcaseIcon className="h-8 w-8 mb-2" />
              <span>Cargos</span>
            </Link>
            <Link
              href="cadastro/funcionarios"
              className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-4 px-6 transition-colors"
              prefetch={false}
            >
              <UsersIcon className="h-8 w-8 mb-2" />
              <span>Funcionários</span>
            </Link>
            <Link
              href="cadastro/contratos"
              className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-4 px-6 transition-colors"
              prefetch={false}
            >
              <FileTextIcon className="h-8 w-8 mb-2" />
              <span>Contratos</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}