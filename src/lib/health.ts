import { apiRequest } from "./api";

interface HealthResponse {
  status: string;
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await apiRequest<HealthResponse>("/health");
    return response.status === "ok";
  } catch {
    return false;
  }
}
