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
                        className="bg-primary text-white rounded-md px-6 py-2 h-10 justify-end"
                        prefetch={false}
                    >
                        <span>Voltar</span>
                    </Link>
                </div>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contrato-inicio">Data de Início</Label>
                <Input id="contrato-inicio" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contrato-fim">Data de Fim</Label>
                <Input id="contrato-fim" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contrato-cargo">Cargo</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um cargo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gerente">Gerente</SelectItem>
                  <SelectItem value="vendedor">Vendedor</SelectItem>
                  <SelectItem value="analista">Analista</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}