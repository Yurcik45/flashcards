const s_user = localStorage.getItem("user");
const s_category = localStorage.getItem("category");
// const s_known_words = localStorage.getItem("knownWords");
// const s_unknown_words = localStorage.getItem("unknownWords");
// const s_changed_words = localStorage.getItem("changedWords");
// const s_new_words = localStorage.getItem("newWords");

// if (!s_user)
// clear local storage
// unlogin status (only general words, no functional)

const init_categories = [
  "generalWords",
  "knownWords",
  "unknownWords",
  "changedWords",
  "newWords",
];

const init_current_categ = () => (s_category ? s_category : "generalWords");

export {
  s_user,
  s_category,
  // s_known_words,
  // s_unknown_words,
  // s_changed_words,
  // s_new_words,
  init_categories,
  init_current_categ,
};
