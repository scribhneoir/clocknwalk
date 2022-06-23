export type EditPersonProps = {
  person: { email: string; password: string; first: string; last: string };
  editPerson: (key: string, value: string) => void;
  setEdit: (edit: number) => void;
  editSubmit: () => void;
};
