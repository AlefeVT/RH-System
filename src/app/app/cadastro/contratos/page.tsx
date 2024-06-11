import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold mb-4">Contratos</h2>
          <Link
            href="/app/cadastro"
            className="bg-primary text-white bg-gray-500 rounded-md px-6 py-2 h-10 justify-end"
            prefetch={false}
          >
            <span>Voltar</span>
          </Link>
        </div>
        <Card>
          <CardContent className="space-y-4 mt-10">
            <div className="space-y-2 lg:w-[650px]">
              <Label htmlFor="contrato-signatario">Signatário</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um Funcionario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clt">CLT</SelectItem>
                  <SelectItem value="pj">PJ</SelectItem>
                  <SelectItem value="estagio">Estágio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 lg:w-[650px]">
              <div className="space-y-2 lg:w-[310px]">
                <Label htmlFor="contrato-inicio">Data de Início do Contrato</Label>
                <Input id="contrato-inicio" type="date" />
              </div>
              <div className="space-y-2 lg:w-[310px]">
                <Label htmlFor="contrato-fim">Data de Fim do Contrato</Label>
                <Input id="contrato-fim" type="date" />
              </div>
            </div>
            <div className="space-y-2 lg:w-[650px]">
              <Label htmlFor="contrato-tipo">Tipo de Contrato</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um tipo de contrato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clt">CLT</SelectItem>
                  <SelectItem value="pj">PJ</SelectItem>
                  <SelectItem value="estagio">Estágio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-gray-500">Salvar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
