import { Card } from "../../../components/ui";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";

function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
            <Card className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-blue-600">
                        TaskFlow
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Enterprise Project Management Dashboard
                    </p>
                </div>
                <LoginForm />
            </Card>
        </main>
    );
}

export default LoginPage;