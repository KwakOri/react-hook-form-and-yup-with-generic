import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface GenericInputProps<
  TFormInput extends FieldValues = FieldValues
> {
  name: Path<TFormInput>;
  register: UseFormRegister<TFormInput>;
  message?: string;
}

const GenericInput = <TFormInput extends FieldValues>({
  name,
  register,
  message,
  ...props
}: GenericInputProps<TFormInput>) => {
  return (
    <div>
      <input {...register(name)} {...props} />
      {message && <p className={""}>{message}</p>}
    </div>
  );
};

export default GenericInput;
