import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default async function Page() {

  return (
    <div className="grid min-h-screen w-full overflow-hidden ">

      <div className="flex flex-col">

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-8 lg:grid-cols-2 mb-20">
            <Card>
              <CardHeader>
                <CardTitle>Funcionários</CardTitle>
                <CardDescription>Gerencie os funcionários da empresa.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Total Funcionários</div>
                    <div className="text-2xl font-semibold">125</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Novas contratações (30 dias)</div>
                    <div className="text-2xl font-semibold">12</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Terminado (30 dias)</div>
                    <div className="text-2xl font-semibold">3</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Ver funcionários</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comparecimento</CardTitle>
                <CardDescription>Monitore a frequência dos funcionários e controle de tempo.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Total de horas trabalhadas (30 dias)</div>
                    <div className="text-2xl font-semibold">12,345</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Chegadas atrasadas (30 dias)</div>
                    <div className="text-2xl font-semibold">28</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Ausências Injustificadas (30 dias)</div>
                    <div className="text-2xl font-semibold">6</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Ver presença</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ferias</CardTitle>
                <CardDescription>Gerenciar solicitações e aprovações de férias de funcionários.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Pendidos Pendentes</div>
                    <div className="text-2xl font-semibold">8</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Aprovados (30 dias)</div>
                    <div className="text-2xl font-semibold">21</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Rejeitados (30 dias)</div>
                    <div className="text-2xl font-semibold">3</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Ver ferias</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pagamentos</CardTitle>
                <CardDescription>Gerenciar folha de pagamento e remuneração de funcionários.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Total Pagamento (30 dias)</div>
                    <div className="text-2xl font-semibold">$1,250,000</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Pagamentos pendentes</div>
                    <div className="text-2xl font-semibold">12</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Pagamentos atrasados (30 dias)</div>
                    <div className="text-2xl font-semibold">4</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Ver Pagamentos</Button>
              </CardFooter>
            </Card>

            
          </div>
        </main>
      </div>
    </div>
  )
}
