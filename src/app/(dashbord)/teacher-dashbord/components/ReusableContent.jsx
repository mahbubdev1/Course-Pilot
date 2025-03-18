"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ReusableContent = ({ title, children, defaultRowsPerPage = 10, rowsPerPageOptions = [10, 25, 50, 100, 250] }) => {
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

    return (
        <div>
            <h3 className="font-bold text-2xl py-10">{title}</h3>
            <div className="border-2 rounded-2xl min-h-screen p-10">
                <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
                    <Select
                        value={rowsPerPage.toString()}
                        onValueChange={(value) => setRowsPerPage(parseInt(value))}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={defaultRowsPerPage.toString()} />
                        </SelectTrigger>
                        <SelectContent>
                            {rowsPerPageOptions.map((option) => (
                                <SelectItem key={option} value={option.toString()}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <h5>Items Per Page</h5>
                </div>
                <div>
                    {children} {/* This is where the specific content (like ReusableTable) will be rendered */}
                </div>
            </div>
        </div>
    );
};

export default ReusableContent;