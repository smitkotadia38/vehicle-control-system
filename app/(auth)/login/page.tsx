import Image from "next/image";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1">
      {/* Brand panel */}
      <div className="relative hidden w-0 flex-1 overflow-hidden bg-zinc-900 lg:block">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-zinc-900 to-zinc-950"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative flex h-full flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Impala Cabo"
              width={80}
              height={80}
              className="rounded-lg"
              priority
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">Impala Cabo</p>
              <p className="text-sm text-zinc-400">Vehicle Control</p>
            </div>
          </div>

          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight">
              Fleet management, simplified.
            </h2>
            <p className="text-base leading-relaxed text-zinc-400">
              Monitor vehicles, manage operations, and keep your fleet running
              smoothly — all from one secure dashboard.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Impala Cabo. All rights reserved.
          </p>
        </div>
      </div>

      {/* Login panel */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <Image
              src="/logo.png"
              alt="Impala Cabo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                Impala Cabo
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Vehicle Control
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Enter your credentials to access the vehicle control system.
            </p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
            Need access?{" "}
            <span className="font-medium text-sky-600 dark:text-sky-400">
              Contact your administrator
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
