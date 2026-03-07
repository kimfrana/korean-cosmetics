import foamCleanserImage from "../images/foamCleanser.png";
import colorgramImage from "../images/colorgram.png";
import moistureUpPadImage from "../images/moistureUpPAD.png";
import foamCleansingSImage from "../images/foamCleanSing.png";
import { apiRequest } from "./api";
import { getAdminToken, logoutAdmin } from "./adminAuth";

export type ProductImageKey = "foamCleanser" | "colorgram" | "moistureUpPad" | "foamCleansingPremium";

export interface ProductRecord {
  id: number;
  nome: string;
  preco: string;
  categoria: string;
  marca: string;
  descricao: string;
  imageKey: ProductImageKey;
  destaque: boolean;
  avaliacao: number;
  beneficios: string[];
  ingredientes: string[];
  modoUso: string;
  avaliacoes: number;
  estrelas: number;
}

export interface ProductView extends ProductRecord {
  imagem: string;
}

export const productImageOptions: Array<{ key: ProductImageKey; label: string }> = [
  { key: "foamCleanser", label: "Foam Cleanser" },
  { key: "colorgram", label: "Colorgram Base" },
  { key: "moistureUpPad", label: "Moisture Up Pad" },
  { key: "foamCleansingPremium", label: "Foam Cleansing Premium" }
];

const imageMap: Record<ProductImageKey, string> = {
  foamCleanser: foamCleanserImage,
  colorgram: colorgramImage,
  moistureUpPad: moistureUpPadImage,
  foamCleansingPremium: foamCleansingSImage
};

type ProductApiResponse = ProductRecord & {
  createdAt?: string;
  updatedAt?: string;
};

function toViewModel(products: ProductRecord[]): ProductView[] {
  return products.map((product) => ({
    ...product,
    imagem: imageMap[product.imageKey] ?? imageMap.foamCleanser
  }));
}

function normalizeProduct(product: ProductApiResponse): ProductRecord {
  return {
    id: product.id,
    nome: product.nome,
    preco: product.preco,
    categoria: product.categoria,
    marca: product.marca,
    descricao: product.descricao,
    imageKey: (product.imageKey in imageMap
      ? product.imageKey
      : "foamCleanser") as ProductImageKey,
    destaque: product.destaque,
    avaliacao: product.avaliacao,
    beneficios: Array.isArray(product.beneficios) ? product.beneficios : [],
    ingredientes: Array.isArray(product.ingredientes) ? product.ingredientes : [],
    modoUso: product.modoUso,
    avaliacoes: product.avaliacoes,
    estrelas: product.estrelas
  };
}

async function authRequest<T>(
  path: string,
  init: RequestInit
): Promise<T> {
  const token = getAdminToken();

  if (!token) {
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  try {
    return await apiRequest<T>(path, {
      ...init,
      headers: {
        ...(init.headers ?? {}),
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    if (error instanceof Error && "status" in error && Number(error.status) === 401) {
      logoutAdmin();
    }
    throw error;
  }
}

export async function getProducts(): Promise<ProductRecord[]> {
  const data = await apiRequest<ProductApiResponse[]>("/products");
  return data.map(normalizeProduct);
}

export async function getProductsForView(): Promise<ProductView[]> {
  const products = await getProducts();
  return toViewModel(products);
}

export async function createProduct(product: Omit<ProductRecord, "id">): Promise<ProductRecord> {
  const data = await authRequest<ProductApiResponse>("/products", {
    method: "POST",
    body: JSON.stringify(product)
  });

  return normalizeProduct(data);
}

export async function updateProduct(
  id: number,
  product: Omit<ProductRecord, "id">
): Promise<ProductRecord> {
  const data = await authRequest<ProductApiResponse>(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(product)
  });

  return normalizeProduct(data);
}

export async function deleteProduct(id: number): Promise<void> {
  await authRequest(`/products/${id}`, {
    method: "DELETE"
  });
}
