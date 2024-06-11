"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ResponsiveBar } from "@nivo/bar"
import { Button } from "@/components/ui/button"

export default async function Page() {

return (
  <div className="grid min-h-screen w-full overflow-hidden ">

    <div className="flex flex-col">

      <main className="flex flex-1 flex-col p-4 md:gap-8 md:p-6">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mb-20">

          <Card className="col-span-1 lg:w-full md:w-full sm:w-10 bg-gray-100 p-4">
            <CardHeader>
              <CardTitle className="text-sm">Férias Agendadas</CardTitle>
              <CardDescription className="text-xs">Funcionários com férias agendadas mais próximas.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between text-xs">
                  <span>João Silva</span>
                  <span>05/07/2023</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Maria Oliveira</span>
                  <span>10/07/2023</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Carlos Souza</span>
                  <span>15/07/2023</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-4">
              <Button variant="outline" className="text-xs">Visualizar</Button>
            </CardFooter>
          </Card>

          <Card className="h-full lg:w-full md:w-full sm:w-10 bg-gray-100 p-4">
            <CardHeader>
              <CardTitle className="text-sm">Comparecimento</CardTitle>
              <CardDescription className="text-xs">Monitore a frequência dos funcionários e controle de tempo.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between text-xs">
                  <span>Total de horas trabalhadas</span>
                  <span>12,345</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Chegadas atrasadas</span>
                  <span>28</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Ausências Injustificadas</span>
                  <span>15</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-4">
              <Button variant="outline" className="text-xs">Visualizar</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col lg:w-full md:w-full sm:w-10 h-full bg-gray-100 p-4">
            <CardHeader>
              <CardDescription className="text-sm">Funcionários por Departamento</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[6/3]" />
            </CardContent>
          </Card>

          <Card className="h-full lg:w-full md:w-full sm:w-10  bg-gray-100 p-4">
            <CardHeader>
              <CardTitle className="text-sm">Pagamentos</CardTitle>
              <CardDescription className="text-xs">Gerenciar folha de pagamento e remuneração de funcionários.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between text-xs">
                  <span>Total Pagamento</span>
                  <span>R$1,250,000</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Pagamentos pendentes</span>
                  <span>12</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Pagamentos atrasados</span>
                  <span>4</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-20">
              <Button variant="outline" className="text-xs">Visualizar</Button>
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
        colors={["#6b6f77"]}
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