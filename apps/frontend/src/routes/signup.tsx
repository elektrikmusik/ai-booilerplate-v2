import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/components/features/auth/signup-form";

export const Route = createFileRoute("/signup")({
  component: SignUpRoute,
});

function SignUpRoute() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
}

