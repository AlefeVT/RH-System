import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import Link from "next/link";

export default function Component() {
    return (
        <div className="flex flex-col h-screen">


            <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950">
                <header className="bg-white dark:bg-gray-900 shadow-sm flex items-center justify-between px-6 py-4">
                    <div className="flex justify-between w-full">
                        
                        <div className="flex w-40  items-center gap-4">
                        <HiOutlineDocumentSearch />
                        <h1 className="text-lg font-medium">Relatórios</h1>
                        </div>


                        <div className="mb-6 flex justify-end">
                            <Link
                                href="/app"
                                className="bg-primary text-white rounded-md px-6 py-2 h-10 justify-end "
                                prefetch={false}
                            >
                                <span>Voltar</span>
                            </Link>
                        </div>
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
