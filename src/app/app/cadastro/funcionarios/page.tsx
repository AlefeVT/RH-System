import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div>
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold mb-4">Funcionários</h2>
                    <Link
                        href="/app/cadastro"
                        className=" text-white bg-gray-500 rounded-md px-6 py-2 h-10 justify-end"
                        prefetch={false}
                    >
                        <span>Voltar</span>
                    </Link>
                </div>
                <Card>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-10">
                            <div className="space-y-2">
                                <Label htmlFor="funcionario-nome">Nome</Label>
                                <Input id="funcionario-nome" placeholder="João Silva" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            <div className="space-y-2">
                                <Label htmlFor="funcionario-data-admissao">Data de Admissão</Label>
                                <Input id="funcionario-data-admissao" type="date" />
                            </div>
    
                            <div className="space-y-2">
                                <Label htmlFor="funcionario-cargo">Cargo</Label>
                                <Select>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Cargos" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cargo1">Cargo 1</SelectItem>
                                        <SelectItem value="cargo2">Cargo 2</SelectItem>
                                        <SelectItem value="cargo3">Cargo 3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
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