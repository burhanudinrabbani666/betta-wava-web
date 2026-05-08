import type React from "react";
import { LoginForm } from "../auth/login-form";
import { $api } from "@/module/common/api";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import type { CookiesValues } from "@/module/auth/type";
import { useAuth } from "@/module/auth/hooks";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const { setToken } = useAuth();
  const { mutate } = $api.useMutation("post", "/auth/login");
  const navigate = useNavigate();

  const onHandleLoginSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData) as LoginData;
    const email = data.email;
    const password = data.password;

    mutate(
      { body: { email, password } },
      {
        onSuccess: (responsesLogin) => {
          const { token } = responsesLogin;
          setToken(token);
          navigate("/products");
        },
      },
    );
  };

  return (
    <div className="max-h-screen w-full">
      <LoginForm
        handleSubmit={onHandleLoginSubmit}
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
