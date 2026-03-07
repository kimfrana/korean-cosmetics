import { apiRequest } from "./api";

const ADMIN_TOKEN_KEY = "koreaquamarine_admin_token";

interface LoginResponse {
  accessToken: string;
}

export async function loginAdmin(username: string, password: string): Promise<boolean> {
  try {
    const data = await apiRequest<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });

    localStorage.setItem(ADMIN_TOKEN_KEY, data.accessToken);
    return true;
  } catch {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    return false;
  }
}

export function logoutAdmin(): void {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

export function isAdminAuthenticated(): boolean {
  return Boolean(localStorage.getItem(ADMIN_TOKEN_KEY));
}

export function getAdminToken(): string | null {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}
