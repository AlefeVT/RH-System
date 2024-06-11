"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Component() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex flex-col ">
                <div className="flex-1 grid grid-cols-2 gap-8 p-8">
                    <Card className="bg-gray-100">
                        <CardHeader>
                            <CardTitle className="text-gray-800 p-6">Hora de entrada</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <Button variant="outline" className="bg-gray-600 text-white mt-10 p-6" size="lg">
                                <PlusIcon className="h-4 w-4" />
                                Bater ponto
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-100">
                        <CardHeader>
                            <CardTitle className="text-gray-800 p-6">Hora de saída</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <Button variant="outline" className="bg-gray-600 text-white mt-10 p-6" size="lg">
                                <MinusIcon className="h-4 w-4" />
                                Bater ponto
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1 p-8 mb-20">
                    <Card className="bg-gray-100 text-gray-800">
                        <CardHeader>
                            <CardTitle>Registros de horas de funcionários</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Hora de entrada</TableHead>
                                        <TableHead>Hora de saída</TableHead>
                                        <TableHead>Total de Horas</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>9:00 AM</TableCell>
                                        <TableCell>5:30 PM</TableCell>
                                        <TableCell>8.5 horas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8:30 AM</TableCell>
                                        <TableCell>6:00 PM</TableCell>
                                        <TableCell>9 horas</TableCell>
                                    </TableRow>
                                    <TableRow>
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
    );
}
