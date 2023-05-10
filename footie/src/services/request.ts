export const PATH = 'http://localhost:3000';
export async function request<T>(url: string, options?: object) {
  const response = await fetch(`${PATH}${url}`, options);
  const data: T = (await response.json()) as T;
  return data;
}
