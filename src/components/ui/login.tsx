import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "./input";
import { Link } from "react-router";
import { Button } from "@/button";
import { Separator } from "./separator";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (
    data,
  ) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo / Brand */}
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Welcome back
          </h1>
          <p className="text-xs tracking-widest text-neutral-400 uppercase">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
              Email
            </label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-xl border-neutral-200 bg-white text-sm focus-visible:ring-1 focus-visible:ring-neutral-400"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-neutral-400 transition-colors hover:text-neutral-700"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
              type="password"
              placeholder="••••••••"
              className="h-11 rounded-xl border-neutral-200 bg-white text-sm focus-visible:ring-1 focus-visible:ring-neutral-400"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="h-11 w-full rounded-xl bg-neutral-900 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-neutral-700"
          >
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs tracking-widest text-neutral-300 uppercase">
            or
          </span>
          <Separator className="flex-1" />
        </div>

        {/* Register */}
        <p className="text-center text-xs text-neutral-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-neutral-800 underline-offset-4 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
