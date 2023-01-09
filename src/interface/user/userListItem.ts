import { ColumnDef } from "@tanstack/react-table";

export type UserSchema = {
  id?: number;
  name?: string;
  username: string;
  email: string;
  role: string;
  status: string;
  createdAt: Date;
};

export interface UserListItemType {
  listData: UserSchema;
  index: number;
  setUserIds?: any;
  userIds?: any;
}

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};
