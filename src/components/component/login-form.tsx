import { LogInIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export default function LoginForm() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
      <Card>
        <CardHeader>
          <CardTitle>ورود به سامانه</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Input placeholder="نام کاربری" />
            <Input placeholder="رمز عبور" type="password" />
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              برو
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
