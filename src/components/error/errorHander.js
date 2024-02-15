import { ERROR_MESSAGE, ERROR_CODE } from './error';
const ErrorHandler = (error) => {
  if (error.code === ERROR_CODE.INVALID_EMAIL) {
    alert(ERROR_MESSAGE.INVALID_EMAIL);
  } else if (error.code === ERROR_CODE.CREDENTIAL) {
    alert(ERROR_MESSAGE.CREDENTIAL);
  } else if (error.code === ERROR_CODE.MISSING_PASSWORD) {
    alert(ERROR_MESSAGE.MISSING_PASSWORD);
  } else if (error.code === ERROR_CODE.WEAK_PASSWORD) {
    alert(ERROR_MESSAGE.WEAK_PASSWORD);
  } else if (error.code === ERROR_CODE.ALREADY_USE_EMAIL) {
    alert(ERROR_MESSAGE.ALREADY_USE_EMAIL);
  }
};
export default ErrorHandler;
