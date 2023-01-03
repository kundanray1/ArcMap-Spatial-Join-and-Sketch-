/**
 * Validate a valid URL
 * @param {String} textval
 * @return {Boolean}
 */
export function validURL(url: string) {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * Validate an email address
 * @param {String} email
 * @return {Boolean}
 */
export function validEmail(email: string) {
  /* eslint-disable no-useless-escape */
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Validate phone
 * accepts min= 10 digits and max= 15 digits
 * @param {String} phone
 * @return {Boolean}
 */
export function validPhone(phone: string) {
  const phoneno = /^\d{10,15}$/;
  return phone.match(phoneno) ? true : false;
}

/**
 * Password Validation
 * Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
 *
 * @param password string
 * @returns
 */
export const validatePassword = (password: string) => {
  // const regex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  return regex.test(password);
};

export const validateName = (name: string) => {
  const regex = /^[a-z]{3,}$/;

  return regex.test(name);
};

/**
 * validation for file size.Maximum allowed size is 1MB.
 * @param {number} fileSize in byte.
 * @return boolean
 *
 */
export const validateFileSize = (fileSize: number): boolean => {
  return fileSize <= 1000000 ? true : false;
};

/**
 * validation function for file upload.
 * @param {string} fileExtension,
 * @returns boolean,
 */

export const validateFile = (fileExtension: string): boolean => {
  const fileTypes: string = fileExtension?.split('/')?.[0];
  return fileTypes === 'image' ? true : false;
};
