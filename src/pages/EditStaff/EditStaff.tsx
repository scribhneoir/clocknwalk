import { useEffect, useState } from "react";
import { IoPeopleCircle } from "react-icons/io5";
import Button from "../../components/Atoms/Button";

import Card from "../../components/Atoms/Card";
import Header from "../../components/Atoms/Header";
import Text from "../../components/Atoms/Text";
import EditPerson from "./EditPerson";
import { EditStaffProps } from "./EditStaff.models";
import Person from "./Person";

const EditStaff = (props: EditStaffProps) => {
  const [staff, setStaff] = useState<
    Array<{
      first: string;
      last: string;
      email: string;
      password: string;
    }>
  >([]);

  const [edit, setEdit] = useState(-1);
  const [person, setPerson] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (edit > -1 && edit < staff.length) {
      setPerson(staff[edit]);
    } else {
      setPerson({
        first: "",
        last: "",
        email: "",
        password: "",
      });
    }
  }, [edit]);

  const editPerson = (key: string, value: string) => {
    setPerson({ ...person, [key]: value });
  };

  const editSubmit = () => {
    let editedStaff = [...staff];
    editedStaff[edit] = person;
    setStaff(editedStaff);
    setEdit(-1);
  };

  const onDelete = (index: number) => {
    staff.splice(index, 1);
    setStaff([...staff]);
  };

  return (
    <>
      <div className="mr-auto ml-4 my-2">
        <Header h={2}>Edit Staff</Header>
      </div>

      <Card flipped={edit !== -1}>
        <div className="flex flex-col divide-y items-center justify-center">
          {staff.length ? (
            staff.map((member, index) => {
              return (
                <Person
                  {...member}
                  onEdit={() => setEdit(index)}
                  onDelete={() => onDelete(index)}
                />
              );
            })
          ) : (
            <div className={`flex flex-col justify-center items-center`}>
              <div className="motion-safe:animate-pulse">
                <Text size="text-9xl" color="text-sky-400">
                  <IoPeopleCircle />
                </Text>
              </div>
              <div className={`my-4 w-64`}>
                <Header h={3}>Add some people to your team!</Header>
              </div>
            </div>
          )}
          <Button
            onClick={() => {
              setEdit(staff.length);
            }}
            primary
          >
            +
          </Button>
        </div>
        <EditPerson
          person={person}
          setEdit={setEdit}
          editPerson={editPerson}
          editSubmit={editSubmit}
        />
      </Card>
    </>
  );
};

export default EditStaff;
