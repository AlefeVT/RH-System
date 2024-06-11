import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div>
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold mb-4">Cargos</h2>
                    <Link
                        href="/app/cadastro"
                        className=" text-white bg-gray-500 rounded-md px-6 py-2 h-10 justify-end"
                        prefetch={false}
                    >
                        <span>Voltar</span>
                    </Link>
                </div>

                <Card>
                    <CardContent className="space-y-4 mt-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="cargo-nome">Nome do Cargo</Label>
                                <Input id="cargo-nome" placeholder="Gerente de Vendas" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cargo-salario">Salário</Label>
                                <Input id="cargo-salario" type="number" placeholder="5000" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cargo-descricao">Descrição</Label>
                            <Textarea id="cargo-descricao" placeholder="Descrição do cargo" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-gray-500">Salvar</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}