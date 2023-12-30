const roles = [
  {
    id: "08c71152-c552-42e7-b094-f510ff44e9cb",
    role_name: "admin",
  },
  {
    id: "c558a80a-f319-4c10-95d4-4282ef745b4b",
    role_name: "user",
  },
];

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "هدی",
    username: "hoda",
    password: "Bloody_12",
  },
  {
    id: "1ad1fccc-d279-46a0-8980-1d91afd6ba67",
    name: "سجاد",
    username: "sajad",
    password: "Iniesta8",
  },
];

const user_roles = [
  {
    user_id: "1ad1fccc-d279-46a0-8980-1d91afd6ba67",
    role_id: "08c71152-c552-42e7-b094-f510ff44e9cb",
  },
  {
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    role_id: "c558a80a-f319-4c10-95d4-4282ef745b4b",
  },
  {
    user_id: "1ad1fccc-d279-46a0-8980-1d91afd6ba67",
    role_id: "c558a80a-f319-4c10-95d4-4282ef745b4b",
  },
];

module.exports = {
  users,
  user_roles,
  roles,
};
