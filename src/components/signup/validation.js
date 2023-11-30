export const validationId = (id) => {
  if (id.length < 4 && id.length > 12) return false;
  if (!/^[A-Za-z0-9][A-Za-z0-9]*$/.test(id)) return false;
  return true;
};
export const validationPwd = (pwd) => {
  if (pwd.length < 8) return false;
  if (!/^[A-Za-z0-9][A-Za-z0-9]*$/.test(pwd)) {
    return false;
  }
  return true;
};
export const isCheckPwd = (pwd, confirmPwd) => {
  if (pwd !== confirmPwd) return false;
};
