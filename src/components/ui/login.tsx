import type React from "react";
import { LoginForm } from "../auth/login-form";
import { $api } from "@/module/common/api";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const { mutate } = $api.useMutation("post", "/auth/login");

  const onHandleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData) as LoginData;
    const email = data.email;
    const password = data.password;

    mutate({ body: { email, password } });
  };

  return (
    <div className="max-h-screen w-full">
      <LoginForm
        handleSubmit={onHandleSubmit}
        className="mx-auto mt-24 max-w-lg"
      ></LoginForm>
    </div>
  );
}

/*
// This will work
const CreateTodo = () => {
  const mutation = useMutation({
    mutationFn: (formData) => {
      return fetch('/api', formData)
    },
  })
  const onSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(new FormData(event.target))
  }

  return <form onSubmit={onSubmit}>...</form>
}*/
