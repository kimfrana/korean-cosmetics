const ADMIN_AUTH_KEY = "koreaquamarine_admin_auth";

const ADMIN_USER = import.meta.env.VITE_ADMIN_USER ?? "admin";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD ?? "admin123";

export function loginAdmin(username: string, password: string): boolean {
  const isValid = username === ADMIN_USER && password === ADMIN_PASSWORD;

  if (isValid) {
    localStorage.setItem(ADMIN_AUTH_KEY, "true");
  }

  return isValid;
}

export function logoutAdmin(): void {
  localStorage.removeItem(ADMIN_AUTH_KEY);
}

export function isAdminAuthenticated(): boolean {
  return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}
