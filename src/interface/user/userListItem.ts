export type UserSchema = {
  id?: number;
  first_name?: string;
  last_name?: string;
  username: string;
  email: string;
  role: string;
  plant: string;
  pit: string;
  status: string;
};

export interface UserListItemType {
  listData: UserSchema;
  index: number;
  setUserIds?: any;
  userIds?: any;
}
