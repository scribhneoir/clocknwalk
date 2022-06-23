import { useState } from "react";
import Button from "../../components/Atoms/Button";

import Card from "../../components/Atoms/Card";
import Header from "../../components/Atoms/Header";
import Text from "../../components/Atoms/Text";
import { EditStaffProps } from "./EditStaff.models";
import Person from "./Person";

const EditStaff = (props: EditStaffProps) => {
  const [staff, setStaff] = useState([
    { first: "jon", last: "doe", email: "j.doe@email.com" },
    { first: "jane", last: "doe", email: "j.doe@email.com" },
  ]);
  const [edit, setEdit] = useState(-1);

  return (
    <>
      <Header h={2}>Edit Staff</Header>
      <Card flipped={edit !== -1}>
        <div className="flex flex-col divide-y items-center justify-center">
          {staff ? (
            staff.map((member, index) => {
              return <Person {...member} onEdit={() => setEdit(index)} />;
            })
          ) : (
            <></>
          )}
          <Button
            onClick={() => {
              setEdit(staff.length);
            }}
            primary
          >
            add
          </Button>
        </div>
      </Card>
    </>
  );
};

export default EditStaff;
