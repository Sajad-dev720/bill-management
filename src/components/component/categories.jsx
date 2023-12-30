import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

export default function Categories() {
  return (
    <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
      <h2 className="font-semibold text-lg md:text-xl">جزئیات گروه</h2>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">نوع</TableHead>
            <TableHead className="text-center">توضیحات</TableHead>
            <TableHead className="text-center">مقدار</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Badge className="text-green-500 bg-green-100">دخل</Badge>
            </TableCell>
            <TableCell>خرج</TableCell>
            <TableCell className="text-right">+$2,000.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Badge className="text-red-500 bg-red-100">قبوض و اقساط</Badge>
            </TableCell>
            <TableCell>اجاره</TableCell>
            <TableCell className="text-right">-$800.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
