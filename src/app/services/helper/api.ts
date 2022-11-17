import {API_BASE_URL} from "@service/constants/api.constant";

export function apiPath(path: string): string {
  return `${API_BASE_URL}/${path}`;
}