import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Reports() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
      <Card>
        <CardHeader>
          <CardTitle>گزارش</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-y-auto h-[300px]">
            <div className="flex justify-between cursor-pointer mb-4">
              <h3 className="font-semibold">گروه 1</h3>
              <div className="flex gap-4">
                <Badge className="text-green-500 bg-green-100">
                  +$2,500.00
                </Badge>
                <Badge className="text-red-500 bg-red-100">-$1,200.00</Badge>
              </div>
            </div>
            <div className="flex justify-between cursor-pointer mb-4">
              <h3 className="font-semibold">گروه 2</h3>
              <div className="flex gap-4">
                <Badge className="text-green-500 bg-green-100">
                  +$2,000.00
                </Badge>
                <Badge className="text-red-500 bg-red-100">-$1,500.00</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
