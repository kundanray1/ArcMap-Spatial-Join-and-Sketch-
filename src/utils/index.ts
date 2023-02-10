import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { OrganizationSchema } from "interface/organization/organizationListItem";
import { UserSchema } from "interface/user/userListItem";

dayjs.extend(localizedFormat);

/**
 * Trunacte string and add ellipsis
 * @param str
 * @returns
 */
export function truncateString(str: string, count: number = 20) {
  if (str) return str.slice(0, count) + (str.length > count ? "..." : "");
}

export function capitalizeFirstLetter(str: string) {
  if (str) return str && str[0].toUpperCase() + str.slice(1);
}

export const cleanData = (formData: any) => {
  let cleanObj = {};
  Object.keys(formData).forEach((val: any) => {
    const newVal = formData[val];
    cleanObj = newVal ? { ...cleanObj, [val]: newVal } : cleanObj;
  });
  return cleanObj;
};

/**
 * Unmask phone number before calling API endpoint
 * Input -> Output: (+49 123 123456) -> 49123123456
 *
 * @param {string} value
 * @returns {string}
 */
export const unmaskPhone = (value: string) => {
  if (!value) return value;
  return value.replace(/[^\d]/g, "");
};

/**
 * Mask phone number to display in proper format
 * Input -> Output: 49123123456 -> (+49 123 123456)
 *
 * @param {string} phone
 * @returns {string}
 */
export const maskPhone = (phone: string) => {
  if (!phone) return phone;
  const x: any = phone.replace(/\D/g, "").match(/(\d{0,2})(\d{0,3})(\d{0,12})/);
  phone = !x[2] ? x[1] : "(+" + x[1] + ") " + x[2] + (x[3] ? " " + x[3] : "");
  return phone ? phone : "";
};

/**
 * Get starting serial number (S.N.) based on current page and page size
 * The starting S.N. is dynamic with page
 *
 * page = 1, limit = 5 ->  staring SN = 1
 * page = 2, limit = 5 ->  staring SN = 6
 *
 * @param currentPage
 * @param pageSize
 * @returns
 */
export const getStartingSerialNumber = (
  currentPage: number,
  pageSize: number
) => {
  return currentPage * pageSize - (pageSize - 1);
};

export const buildFormData = (
  model: any,
  form?: FormData,
  namespace = ""
): FormData => {
  let formData = form || new FormData();
  let formKey;

  for (let propertyName in model) {
    if (!model.hasOwnProperty(propertyName) || !model[propertyName]) continue;
    let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
    if (model[propertyName] instanceof Date)
      formData.append(formKey, model[propertyName].toISOString());
    else if (model[propertyName] instanceof File)
      formData.append(formKey, model[propertyName]);
    else if (model[propertyName] instanceof Array) {
      model[propertyName].forEach((element: any, index: any) => {
        const tempFormKey = `${formKey}[${index}]`;
        buildFormData(element, formData, tempFormKey);
      });
    } else if (
      typeof model[propertyName] === "object" &&
      !(model[propertyName] instanceof File)
    )
      buildFormData(model[propertyName], formData, formKey);
    else formData.append(formKey, model[propertyName].toString());
  }
  return formData;
};

export const convertToFormData = (fData: any) => {
  const data = new FormData();

  for (const key in fData) {
    if (key === "field") {
      data.append(key, fData[key][1]);
    } else {
      data.append(key, fData[key]);
    }
  }
  return data;
};

export const DateFormatYMD = (date: any): string => {
  if (!date) return date;
  return dayjs(date).format("YYYY-MM-DD");
};

export const DateFormatMDY = (date: any): string => {
  if (!date) return date;
  return dayjs(date).format("MM/DD/YYYY");
};

export const DateFormat = (date: any): string => {
  if (!date) return date;
  return dayjs(date).format("MM/DD/YYYY");
};

export const DateFormatTime = (dateTime: any): string => {
  if (!dateTime) return dateTime;
  return dayjs(dateTime).format("MM/DD/YYYY h:mm:ss A");
};

export const TimeFormat = (dateTime: any): string => {
  if (!dateTime) return dateTime;
  return dayjs(dateTime).format("h:mm:ss A");
};

export const groupData = (data: any) => {
  if (data?.length > 0) {
    const groups = data?.map((res: any) => {
      return res?.name;
    });
    return truncateString(groups.join(", "));
  }
  return "-";
};

export const getUserListCompatibleData = (data: UserSchema[]) => {
  return data?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      status: item?.status,
      date_added: item?.createdAt,
    };
  });
};

export const getOrganizationListCompatibleData = (
  data: OrganizationSchema[]
) => {
  return data?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      status: item?.status,
      date_added: item?.createdAt,
    };
  });
};
