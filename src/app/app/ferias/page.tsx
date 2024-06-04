"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
    const [employees, setEmployees] = useState([
        { id: 1, name: "John Doe", vacationStart: "2023-06-01", vacationEnd: "2023-06-15", available: false },
        { id: 2, name: "Jane Smith", vacationStart: "2023-07-01", vacationEnd: "2023-07-14", available: false },
        { id: 3, name: "Bob Johnson", vacationStart: "2023-08-15", vacationEnd: "2023-08-31", available: true },
        { id: 4, name: "Sarah Lee", vacationStart: "2023-09-01", vacationEnd: "2023-09-15", available: true },
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
    const handleVacationSubmit = () => {
        const conflictingVacation = employees.find(
            (emp) =>
                (newVacation.start >= emp.vacationStart && newVacation.start <= emp.vacationEnd) ||
                (newVacation.end >= emp.vacationStart && newVacation.end <= emp.vacationEnd),
        )
        if (conflictingVacation) {
            alert(`${conflictingVacation.name} already has a vacation scheduled during that time.`)
            return
        }
        const newEmployee = {
            ...newVacation.employee,
            available: false,
            vacationStart: newVacation.start,
            vacationEnd: newVacation.end,
        }
        setEmployees([...employees, newEmployee])
        setNewVacation({ employee: null, start: null, end: null })
    }
    const handleVacationEdit = (employee) => {
        setNewVacation({ employee, start: employee.vacationStart, end: employee.vacationEnd })
    }
    const handleVacationDelete = (employee) => {
        const updatedEmployees = employees.map((emp) =>
            emp.id === employee.id ? { ...emp, available: true, vacationStart: null, vacationEnd: null } : emp,
        )
        setEmployees(updatedEmployees)
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
            <h1 className="text-2xl font-bold mb-6">Gestão de férias</h1>
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Adicionar férias</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleVacationSubmit}>
                            <div className="grid gap-4">
                                <Select
                                    value={newVacation.employee?.id}
                                    onChange={(e) =>
                                        setNewVacation({
                                            ...newVacation,
                                            employee: employees.find((emp) => emp.id === parseInt(e.target.value)),
                                        })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione Funcionário" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {employees.map((emp) => (
                                            <SelectItem key={emp.id} value={emp.id}>
                                                {emp.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <div className="grid grid-cols-2 gap-4">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="flex-col items-start w-full h-auto">
                                                <span className="font-semibold uppercase text-[0.65rem]">Data de início</span>
                                                <span className="font-normal">{newVacation.start ? newVacation.start : "Selecione"}</span>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0 max-w-[276px]">
                                            <Calendar
                                                value={newVacation.start}
                                                onChange={(date) => setNewVacation({ ...newVacation, start: date })}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="flex-col items-start w-full h-auto">
                                                <span className="font-semibold uppercase text-[0.65rem]">Data final</span>
                                                <span className="font-normal">{newVacation.end ? newVacation.end : "Selecione"}</span>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0 max-w-[276px]">
                                            <Calendar
                                                value={newVacation.end}
                                                onChange={(date) => setNewVacation({ ...newVacation, end: date })}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleVacationSubmit}>Save</Button>
                    </CardFooter>
                </Card>
                <div className="grid gap-6 mb-20">
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Funcionários em férias</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Data de início</TableHead>
                                        <TableHead>Data final</TableHead>
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {vacationingEmployees.map((emp) => (
                                        <TableRow key={emp.id}>
                                            <TableCell>{emp.name}</TableCell>
                                            <TableCell>{emp.vacationStart}</TableCell>
                                            <TableCell>{emp.vacationEnd}</TableCell>
                                            <TableCell className="text-right">
                                                {/* <Button variant="ghost" size="icon" onClick={() => handleVacationEdit(emp)}>
                                                    <PencilIcon className="h-4 w-4" />
                                                    <span className="sr-only">Edit</span>
                                                </Button> */}
                                                <Button variant="ghost" size="icon" onClick={() => handleVacationDelete(emp)}>
                                                    <TrashIcon className="h-4 w-4" />
                                                    <span className="sr-only">Delete</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Disponibilidade</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center w-3/5 gap-2">
                                    <Checkbox
                                        checked={filter.available}
                                        onChange={(e) => setFilter({ ...filter, available: e.target.checked })}
                                    />
                                    <span>Mostrar apenas disponível</span>
                                </div>
                                <div className="flex items-center w-full gap-2">
                                    <div className="w-2/3">
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
                                        <TableHead>Início das férias</TableHead>
                                        <TableHead>Fim das férias</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredEmployees.map((emp) => (
                                        <TableRow key={emp.id}>
                                            <TableCell>{emp.name}</TableCell>
                                            <TableCell>{emp.vacationStart || "N/A"}</TableCell>
                                            <TableCell>{emp.vacationEnd || "N/A"}</TableCell>
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

function PencilIcon(props: any) {
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
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
        </svg>
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