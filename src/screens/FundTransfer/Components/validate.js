const checkAccountNumber = (number1, number2) => {
  if (number1 === number2) return true;
  else return false;
};
const checkName = (name) => {
  const letters = /^[a-zA-Z]+$/;
  if (name.trim() !== "" && name.trim().match(letters)) return true;
  else return false;
};
const checkIFSCCode = (code) => {
  const reg = "^[A-Z]{4}0[A-Z0-9]{6}$";
  if (code.trim() !== "" && code.match(reg)) return true;
  else return false;
};
export { checkAccountNumber, checkIFSCCode, checkName };
