import { ColumnDef } from "@tanstack/react-table";

export type OrganizationSchema = {
  id?: number;
  name?: string;
  username: string;
  email: string;
  role: string;
  status: string;
  createdAt: Date;
};

export interface UserListItemType {
  listData: OrganizationSchema;
  index: number;
  setUserIds?: any;
  userIds?: any;
}

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};
