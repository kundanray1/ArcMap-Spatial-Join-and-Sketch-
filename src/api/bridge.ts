import http from "utils/http";

export function getBridges(uid: string) {
  return http({
    url: `/bridges`,
    method: "get",
  });
}
