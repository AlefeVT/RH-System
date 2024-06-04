import { PropsWithChildren } from 'react';
import { ClientSideProvider } from './_components/Sidebar/ClientSideProvider';
import { Sidebar } from './_components/Sidebar';
import { Header } from './_components/Header';

export default async function Layout({ children }: PropsWithChildren) {
  const session = 1;

  return (
    <ClientSideProvider session={session}>
      <div className="flex h-screen overflow-hidden">
        <div className="flex h-screen">
          <Sidebar />
        </div>

        <div className='block w-full h-screen'>
          <div className='w-full'>
            <Header user={session?.user} />
          </div>

          <main className='w-full h-screen overflow-y-auto'>

            {children}
          </main>
        </div>

      </div>
    </ClientSideProvider>
  );
}
