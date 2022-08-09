import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineUserDelete } from "react-icons/ai";
import Button from "../../../components/Atoms/Button";

import Text from "../../../components/Atoms/Text";
import { PersonProps } from "./Person.models";

const Person = (props: PersonProps) => {
  const { first, last, email, onEdit, onDelete } = props;
  return (
    <div className={`grid grid-cols-12 p-2 w-full`}>
      <div className="col-span-1 mr-2">
        <Text size="text-2xl">
          <BsPersonCircle />
        </Text>
      </div>

      <div className={`col-span-2 mx-2`}>
        <Text>{first}</Text>
      </div>
      <div className={`col-span-2 mx-2`}>
        <Text>{last}</Text>
      </div>

      <div className={`col-span-5`}>
        <Text italic>{email}</Text>
      </div>
      <div className="col-span-2 grid-cols-2 ml-auto">
        <Button
          onClick={() => {
            onEdit();
          }}
          light
        >
          <FiEdit />
        </Button>
        <Button
          onClick={() => {
            onDelete();
          }}
          light
        >
          <AiOutlineUserDelete />
        </Button>
      </div>
    </div>
  );
};

export default Person;
