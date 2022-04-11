export const wordActionButtons = category => [
  {
    condition: category === "generalWords" || category === "unknownWords",
    clickAction: "add_to_known",
    class: "btn-outline-success",
    text: "I know this word :)",
  },
  {
    condition: category == "generalWords" || category === "knownWords",
    clickAction: "add_to_unknown",
    class: "btn-outline-primary",
    text: "Must be repeated",
  },
  // {
  //   condition: category !== "newWords" && category !== "changedWords",
  //   clickAction: "add_to_changed",
  //   class: "btn-outline-warning",
  //   text: "I see the mistake",
  // },
  // {
  //   condition: category === "generalWords",
  //   clickAction: "add_to_new",
  //   class: "btn-outline-dark",
  //   text: "Add new word",
  // },
  // {
  //   condition: category !== "generalWords",
  //   clickAction: "delete",
  //   class: "btn-outline-danger",
  //   text: "Delete",
  // },
];
