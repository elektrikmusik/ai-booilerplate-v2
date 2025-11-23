import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/features/auth/login-form";

export const Route = createFileRoute("/signin")({
  component: SignInRoute,
});

function SignInRoute() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}
