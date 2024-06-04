import Link from "next/link"
import { Logo } from "@/components/logo"

export function LandingPageHeader() {
  
  return (
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-border">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a id="precos" className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" >
            Preços
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" >
            Sobre
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" >
            Contato
          </a>
          <Link href={'/auth/login'} className="text-sm font-bold hover:underline underline-offset-4 cursor-pointer" >
            Login
          </Link>
          <Link href={'/auth/register'} className="text-sm font-bold hover:underline underline-offset-4 cursor-pointer" >
            Registro
          </Link>
        </nav>
      </header>
  )
}
