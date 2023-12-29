import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export default function CreateRecord() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
      <Card>
        <CardHeader>
          <CardTitle>افزودن مورد تازه</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div />
            <Input placeholder="عنوان" />
            <Input placeholder="مبلغ به تومان" />
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <span>افزودن</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
