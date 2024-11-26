import { yupResolver } from "@hookform/resolvers/yup";
import useGenericForm, {
  FormInput,
} from "./components/GenericForm/GenericForm";
import GenericInput from "./components/GenericInput";
import { signUpValidationSchema } from "./utils/schema";

interface SignUpSchema {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formInputs: FormInput<SignUpSchema>[] = [
  {
    name: "name",
    type: "text",
    placeholder: "이름",
  },
  {
    name: "email",
    type: "text",
    placeholder: "이메일",
  },
  {
    name: "password",
    type: "password",
    placeholder: "비밀번호",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "비밀번호 확인",
  },
];

function App() {
  const { isSubmitting, inputs, submitHandler } = useGenericForm<SignUpSchema>({
    formInputs,
    resolver: yupResolver(signUpValidationSchema),
  });

  if (isSubmitting) <h1>제출중입니다.</h1>;
  return (
    <main>
      <form onSubmit={submitHandler}>
        {inputs.map((inputProps) => (
          <GenericInput {...inputProps} />
        ))}
        <button>제출</button>
      </form>
    </main>
  );
}

export default App;
