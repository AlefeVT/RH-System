"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ResponsiveBar } from "@nivo/bar"

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
                <Link
                  href="app/listagem/funcionarios"
                  className="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 text-black rounded-lg py-2 px-6 transition-colors"
                  prefetch={false}
                >
                  <span>Ver funcionários</span>
                </Link>
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
                <Link
                  href="app/listagem/pontos"
                  className="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 text-black rounded-lg py-2 px-6 transition-colors"
                  prefetch={false}
                >
                  <span>Ver presença</span>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Funcionários por Departamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[4/3]" />
                </CardContent>
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
                <Link
                  href="app/listagem/funcionarios"
                  className="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 text-black rounded-lg py-2 px-6 transition-colors"
                  prefetch={false}
                >
                  <span>Ver Pagamentos</span>
                </Link>
              </CardFooter>
            </Card>


          </div>
        </main>
      </div>
    </div>
  )
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Programação", count: 111 },
          { name: "Limpeza", count: 157 },
          { name: "Gerencia", count: 129 },
          { name: "Suporte", count: 150 },
          { name: "Estagiarios", count: 119 },
          { name: "Implatadores", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}