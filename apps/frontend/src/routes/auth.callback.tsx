import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallbackRoute,
});

function AuthCallbackRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Auth callback error:", error);
          navigate({ to: "/signin" });
          return;
        }

        if (data.session) {
          navigate({ to: "/dashboard" });
        } else {
          navigate({ to: "/signin" });
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        navigate({ to: "/signin" });
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <p>Completing authentication...</p>
    </div>
  );
}
