export const validate = value => {
  if (value === "" || value.length < 5) {
    return false;
  }
  return true;
};
