import { HTMLInputTypeAttribute } from "react";
import {
  FieldValues,
  Path,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { GenericInputProps } from "../GenericInput/GenericInput";

export interface FormInput<TFormInputs extends FieldValues> {
  name: Path<TFormInputs>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

interface useGenericFormProps<TFormInputs extends FieldValues> {
  formInputs: FormInput<TFormInputs>[];
  resolver: Resolver<TFormInputs>;
}

const useGenericForm = <TFormInputs extends FieldValues>({
  formInputs,
  resolver,
}: useGenericFormProps<TFormInputs>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormInputs>({
    mode: "onBlur",
    resolver,
  });
  const onSubmit: SubmitHandler<TFormInputs> = (data: TFormInputs) => {
    console.log(data);
  };

  const inputs: GenericInputProps<TFormInputs>[] = formInputs.map(
    (formInput) => ({
      ...formInput,
      register: register,
      message: errors?.[formInput?.name]?.message as string,
    })
  );

  const submitHandler = handleSubmit(onSubmit);

  return { inputs, submitHandler, isSubmitting };
};

export default useGenericForm;
