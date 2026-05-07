import { RegisterForm } from "@/components/auth/register-form";
import { $api } from "@/module/common/api";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type RegisterSchema = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export default function Register() {
  const { mutate } = $api.useMutation("post", "/auth/register");
  const navigate = useNavigate();

  const onHandleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const userRegisterData = Object.fromEntries(formData) as RegisterSchema;

    const userRegisterDataTrim: RegisterSchema = {
      firstName: userRegisterData.firstName.trim(),
      lastName: userRegisterData.lastName.trim(),
      email: userRegisterData.email.trim(),
      username: userRegisterData.username.trim(),
      password: userRegisterData.password.trim(),
    };

    if (Object.values(userRegisterDataTrim).includes("")) {
      console.log("Input Not valid");
      return;
    }

    mutate(
      { body: userRegisterDataTrim },
      {
        onError: (error: undefined | { message: string }) => {
          if (!error) return;
          return toast.warning("Failed To Create Account", {
            position: "top-center",
            description: error.message,
          });
        },
        onSuccess: () => {
          toast.success(`Success Created new Account`, {
            position: "top-center",
            description: `Welcome ${userRegisterDataTrim.username} 🔥`,
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        },
      },
    );
  };

  return (
    <div className="max-h-screen w-full">
      <RegisterForm
        handleSubmit={onHandleSubmit}
        className="mx-auto mt-24 max-w-lg"
      ></RegisterForm>
    </div>
  );
}
