// Auth
export const ACCESS_TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';
export const EXPIRES_IN = 'expires';

// Pagination

export const DEFAULT_PAGE_SIZE = 15;

export const INITIAL_CURRENT_PAGE = 1;
export const PAGE_LIMITS = [5, 15, 30, 50, 100];

export const CSV_EXTENSION =
  '.csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values, .xlsx,.xls';

export const USER_HEADER = [
  'First Name',
  'Middle Name (optional)',
  'Last Name',
  'Email',
  'Username (optional)',
  'Work Email',
  'Phone',
  'Company Name',
  'Role (Admin Y/N)',
];

export const PIT_HEADER = ['name', 'region'];
export const PRODUCT_HEADER = ['name', 'class_code', 'type', 'price'];
export const EQUIPMENT_HEADER = ['name', 'class_code', 'type', 'price'];

export const imageCompressionOptions = {
  maxSizeMB: 5,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export enum ShiftDays {
  'Day' = 1,
  'Night' = 1,
  'Swing' = 3,
}

export const ShiftList = [
  { id: 1, name: 'Day' },
  { id: 2, name: 'Night' },
  { id: 3, name: 'Swing' },
];

export enum Owner {
  'Own' = 1,
  'Rent' = 1,
}

export const OwnerList = [
  { id: 'own', name: 'Own' },
  { id: 'rent', name: 'Rent' },
];
