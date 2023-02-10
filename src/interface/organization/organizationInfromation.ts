export interface Permission {
  permission: string;
}

export interface ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ProfileInformationForm {
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface EmailInformationForm {
  newEmail: string;
}
