"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useRouter } from "next/navigation"

export default function Component() {
    const [employees, setEmployees] = useState([
        { id: 1, name: "John Doe", vacationStart: "Limpador", vacationEnd: "2023-06-15", available: false },
        { id: 2, name: "Jane Smith", vacationStart: "Programador Junior", vacationEnd: "2023-07-14", available: false },
        { id: 3, name: "Bob Johnson", vacationStart: "Gerente", vacationEnd: "2023-08-31", available: true },
        { id: 4, name: "Sarah Lee", vacationStart: "Estagiario de programador", vacationEnd: "2023-09-15", available: true },
    ])
    const [newVacation, setNewVacation] = useState({
        employee: null,
        start: null,
        end: null,
    })
    const [filter, setFilter] = useState({
        available: false,
        sortBy: "name",
        sortOrder: "asc",
    })
    
    const router = useRouter();
    const handleVacationEdit = () => {
        router.push('/app/cadastro/funcionario')
    }
    
    const filteredEmployees = employees
        .filter((emp) => (filter.available ? emp.available : true))
        .sort((a, b) => {
            if (filter.sortBy === "name") {
                return filter.sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            } else if (filter.sortBy === "vacation") {
                return filter.sortOrder === "asc"
                    ? a.vacationStart.localeCompare(b.vacationStart)
                    : b.vacationStart.localeCompare(a.vacationStart)
            }
        })
    const vacationingEmployees = employees.filter((emp) => !emp.available)
    const availableEmployees = employees.filter((emp) => emp.available)
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
            <div className="mb-6 flex justify-end">
            <Link
                href="/app"
                className="bg-primary text-white rounded-md px-6 py-2 h-10 justify-end "
                prefetch={false}
            >
                <span>Voltar</span>
            </Link>
            </div>
            
            <div className="grid gap-6">
                <div className="grid gap-6 mb-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Funcionarios</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mb-4">
                               
                                <div className="flex items-center w-full gap-2">
                                    <div className="w-1/2">
                                        <span>Ordenar por:</span>
                                    </div>

                                    <Select value={filter.sortBy} onChange={(e) => setFilter({ ...filter, sortBy: e.target.value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="name">Nome</SelectItem>
                                            <SelectItem value="vacation">Férias</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select
                                        value={filter.sortOrder}
                                        onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="asc">Ascendente</SelectItem>
                                            <SelectItem value="desc">Descendente</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Cargo</TableHead>
                                        <TableHead>Data de Contratação</TableHead>
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredEmployees.map((emp) => (
                                        <TableRow key={emp.id}>
                                            <TableCell>{emp.name}</TableCell>
                                            <TableCell>{emp.vacationStart || "N/A"}</TableCell>
                                            <TableCell>{emp.vacationEnd || "N/A"}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="icon" onClick={() => handleVacationEdit(emp)}>
                                                    <HiOutlinePencilSquare className="h-4 w-4"/>
                                                    <span className="sr-only">Edit</span>
                                                </Button>
                                                {/* <Button variant="ghost" size="icon" onClick={() => handleVacationDelete(emp)}>
                                                    <TrashIcon className="h-4 w-4" />
                                                    <span className="sr-only">Delete</span>
                                                </Button> */}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>


            </div>

        </div>
    )
}

function TrashIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}