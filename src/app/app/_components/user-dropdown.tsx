import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

type UserDropDownProps = {
  user: Session['user']
}

export function UserDropDown({ user }: UserDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative h-8 flex items-center justify-between w-8 space-x-3 !px-0"
        >
          <Avatar className="h-8 w-8 ">
            {/* <AvatarImage
              src={user?.image as string}
              alt={user?.name as string}
            /> */}
            {/* <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback> */}
            <AvatarFallback className='' >U</AvatarFallback>
          </Avatar>

          <div className="flex flex-col flex-1 space-y-1 text-left">
            {user?.name && (
              <p className="text-sm font-medium leading-none">{user?.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/app/settings">
            <DropdownMenuItem>
              {/* <MixerVerticalIcon className="w-3 h-3 mr-3" /> */}
              Configurações
            </DropdownMenuItem>
          </Link>

          <Link href="/app/settings/billing">
            <DropdownMenuItem>
              {/* <RocketIcon className="w-3 h-3 mr-3" /> */}
              Upgrade
            </DropdownMenuItem>
          </Link>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          {/* <ExitIcon className="w-3 h-3 mr-3" /> */}
          Desconectar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
