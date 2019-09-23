interface ErrorMessageI {
  hasError: boolean;
  message: string;
  children?: any;
}
export const ErrorMessage = ({hasError, message, children}: ErrorMessageI) => {
  return hasError ? message : children;
};
