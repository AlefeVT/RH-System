/**
 * v0 by Vercel.
 * @see https://v0.dev/t/anhFJSJpzGT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentSearch } from "react-icons/hi";

export default function Component() {
    return (
        <div className="flex flex-col h-screen">

            <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950">

                <div className="flex-1 grid grid-cols-2 gap-8 p-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hora de entrada</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <Button variant="outline" size="lg">
                                {/* <PlusIcon className="h-6 w-6" /> */}
                                Bater ponto
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hora de saída</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <Button variant="outline" size="lg">
                                {/* <MinusIcon className="h-6 w-6" /> */}
                                Bater ponto
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950">
                <header className="bg-white dark:bg-gray-900 shadow-sm flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        {/* <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" /> */}
                        <IoDocumentTextOutline />
                        <h1 className="text-lg font-medium">Resumo</h1>
                    </div>

                </header>
                <div className="flex-1 grid grid-cols-2 gap-8 p-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Horas Obrigatórias</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold">40</div>
                            <p className="text-gray-500 dark:text-gray-400">Horas</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Este mês</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold">38</div>
                            <p className="text-gray-500 dark:text-gray-400">Horas Trabalhadas</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950">
                <header className="bg-white dark:bg-gray-900 shadow-sm flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <HiOutlineDocumentSearch />
                        <h1 className="text-lg font-medium">Relatórios</h1>
                    </div>
                </header>
                <div className="flex-1 p-8 mb-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registros de horas de funcionários</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Funcionário</TableHead>
                                        <TableHead>Hora de entrada</TableHead>
                                        <TableHead>Hora de saída</TableHead>
                                        <TableHead>Total de Horas</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>9:00 AM</TableCell>
                                        <TableCell>5:30 PM</TableCell>
                                        <TableCell>8.5 horas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Jane Smith</TableCell>
                                        <TableCell>8:30 AM</TableCell>
                                        <TableCell>6:00 PM</TableCell>
                                        <TableCell>9 horas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Bob Johnson</TableCell>
                                        <TableCell>10:00 AM</TableCell>
                                        <TableCell>4:45 PM</TableCell>
                                        <TableCell>6.75 horas</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
