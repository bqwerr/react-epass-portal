export const types = [
  { _id: "1", name: "Medical/Emergency" },
  { _id: "2", name: "Goods Transport" },
  { _id: "3", name: "Marriage" },
  { _id: "4", name: "Education Purposes" },
  { _id: "5", name: "Touring" },
];

export function getTypes() {
  return types.filter((e) => e);
}
