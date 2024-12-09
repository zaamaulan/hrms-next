"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema } from "./schema";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type LoginFormSchema = z.infer<typeof loginFormSchema>;

const formFields: {
  name: keyof LoginFormSchema;
  label: string;
  type: string;
}[] = [
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export const LoginForm = () => {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-y-[1.875rem]">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">Welcome 👋</h1>
        <p className="text-secondary">Please login here</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-[1.875rem]"
        >
          <div className="flex flex-col gap-y-4">
            {formFields.map((fieldConfig) => (
              <FormField
                key={fieldConfig.name}
                control={form.control}
                name={fieldConfig.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fieldConfig.label}</FormLabel>
                    <FormControl>
                      <Input type={fieldConfig.type} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-x-2.5 font-normal">
                <Checkbox />
                <span>Remember Me</span>
              </Label>
              <Link href="/forgot-password" className="text-sm text-primary">
                Forgot Password?
              </Link>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};
