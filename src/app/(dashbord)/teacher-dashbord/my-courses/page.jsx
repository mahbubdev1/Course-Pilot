"use client";
import ReusableTable from "@/app/(dashbord)/teacher-dashbord/components/ReusableTable";
import { courses } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const MyCourses = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const columns = [
    { key: "id", header: "#", className: "w-[5%]" },
    { key: "title", header: "Title" },
    { key: "category", header: "Category" },
    { key: "enrollStudents", header: "Enroll Students" },
    { key: "price", header: "Price" },
    { key: "status", header: "Status" },
    { key: "published", header: "Published" },
  ];

  const actions = (item) => (
    <>
      <Button size="icon" variant="outline">
        <Edit className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="destructive">
        <Trash2 className="h-4 w-4" />
      </Button>
    </>
  );
  return(
  <div>
      <h3 className="font-bold text-2xl my-5">Students List</h3>
      <div className="border-2 rounded-2xl min-h-screen p-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => setRowsPerPage(parseInt(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="250">250</SelectItem>
            </SelectContent>
          </Select>
          <h5>Courses Per Page</h5>
        </div>
        <div>
        <ReusableTable data={courses} columns={columns} actions={actions} />
        </div>
      </div>
    </div>
    )
};

export default MyCourses;
