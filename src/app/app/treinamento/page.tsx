"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Component() {
  const [stages, setStages] = useState([
    {
      id: 1,
      name: "João Silva",
      period: "01/03/2023 - 30/06/2023",
      status: "Em andamento",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      period: "15/02/2023 - 15/05/2023",
      status: "Concluído",
    },
    {
      id: 3,
      name: "Pedro Almeida",
      period: "01/04/2023 - 30/09/2023",
      status: "Em andamento",
    },
  ])
  const [newStage, setNewStage] = useState({
    name: "",
    period: "",
    description: "",
    status: "Em andamento",
  })
  const handleInputChange = (e) => {
    setNewStage({
      ...newStage,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setStages([...stages, newStage])
    setNewStage({
      name: "",
      period: "",
      description: "",
      status: "Em andamento",
    })
  }
  const handleEdit = (stage) => { }
  const handleView = (stage) => { }
  const handleFinish = (stage) => { }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Gerenciamento de Estágios</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-lg font-bold mb-4">Novo Estágio</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 ">
            <div>
              <Label htmlFor="name">Nome do Estagiário</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Selecione um Funcionario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cargo1">João</SelectItem>
                  <SelectItem value="cargo2">Pedro</SelectItem>
                  <SelectItem value="cargo3">Matheus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:w-full">
              <Label htmlFor="period">Período</Label>
              <Input id="period" className="sm:w-full lg:w-1/2" type="date" name="period" value={newStage.period} onChange={handleInputChange} required />
            </div>
            <div className="col-span-2">
              <Label >Descrição</Label>
              <Textarea
                id="description"
                name="description"
                value={newStage.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select name="status" value={newStage.status} onChange={handleInputChange}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Selecione um Funcionario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="andamento">Em andamento</SelectItem>
                  <SelectItem value="concluido">Concluido</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 text-right">
              <Button type="submit">Cadastrar</Button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-20">
        <h2 className="text-lg font-bold mb-4">Estágios</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Período</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stages.map((stage) => (
              <TableRow key={stage.id}>
                <TableCell>{stage.name}</TableCell>
                <TableCell>{stage.period}</TableCell>
                <TableCell>{stage.status}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(stage)}>
                      <DeleteIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleView(stage)}>
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleFinish(stage)}>
                      <CheckIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function DeleteIcon(props: any) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function EyeIcon(props: any) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}