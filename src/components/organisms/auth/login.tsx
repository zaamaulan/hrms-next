import { LoginForm } from "@/components/molecules/auth/login/login-form";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 p-[1.875rem]">
      <div className="size-full content-center rounded-[30px] bg-secondary/10">
        <div className="relative ml-auto h-[778px] w-[685px]">
          <Image src="/images/login-light.png" alt="login" fill priority />
        </div>
      </div>
      <div className="flex max-w-xl flex-col justify-center gap-y-10 pl-[3.125rem]">
        <Image src="/logo-light.svg" alt="logo" width={180} height={73.14} />
        <LoginForm />
      </div>
    </div>
  );
};
