import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from "nanoid";

export const changeFilter = createAction("phoneBook/changeFilter");
// const contactsActions = {
//   addContact: createAction("phoneBook/addContact", (name, number) => ({
//     payload: {
//       id: nanoid(5),
//       name,
//       number,
//     },
//   })),
//   deleteContact: createAction("phoneBook/deleteContact"),
//   changeFilter: createAction("phoneBook/changeFilter"),

// };

// export default contactsActions;

