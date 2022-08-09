import Button from "../../../components/Atoms/Button";
import Field from "../../../components/Atoms/Field";
import { useValidPassword, useValidEmail } from "../../../hooks/validation";
import { EditPersonProps } from "./EditPerson.models";

const EditPerson = (props: EditPersonProps) => {
  const { person, editPerson, setEdit, editSubmit } = props;
  const { email, first, last } = person;
  const [emailError] = useValidEmail(email);
  return (
    <>
      <Field
        onChange={(value: string) => {
          editPerson("first", value);
        }}
        value={first}
        type="text"
        placeholder="first name"
      />
      <Field
        onChange={(value: string) => {
          editPerson("last", value);
        }}
        value={last}
        type="text"
        placeholder="last name"
      />
      <Field
        onChange={(value: string) => {
          editPerson("email", value);
        }}
        value={email}
        error={emailError}
        type="email"
        placeholder="email"
      />
      <div className="grid grid-cols-2 gap-8 justify-center content-center justify-self-center self-center py-2">
        <Button
          onClick={() => {
            setEdit(-1);
          }}
        >
          cancel
        </Button>
        <Button
          primary
          onClick={() => {
            editSubmit();
          }}
        >
          submit
        </Button>
      </div>
    </>
  );
};

export default EditPerson;
