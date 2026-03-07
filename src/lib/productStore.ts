import foamCleanserImage from "../images/foamCleanser.png";
import colorgramImage from "../images/colorgram.png";
import moistureUpPadImage from "../images/moistureUpPAD.png";
import foamCleansingSImage from "../images/foamCleanSing.png";

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

const PRODUCTS_STORAGE_KEY = "koreaquamarine_products";

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

export const defaultProducts: ProductRecord[] = [
  {
    id: 1,
    nome: "Foam Cleanser Coreano",
    preco: "R$ 149,90",
    categoria: "Limpeza",
    marca: "K-Beauty",
    descricao: "Espuma de limpeza suave que remove impurezas e maquiagem sem ressecar a pele. Formulado com extratos naturais coreanos para uma limpeza profunda e hidratante.",
    imageKey: "foamCleanser",
    destaque: true,
    avaliacao: 4.9,
    beneficios: [
      "Remove maquiagem à prova d'água",
      "Não resseca a pele",
      "pH balanceado para peles sensíveis",
      "Textura cremosa e suave",
      "Aroma relaxante de chá verde"
    ],
    ingredientes: ["Extrato de Chá Verde", "Ácido Hialurônico", "Ceramidas", "Extrato de Centella"],
    modoUso: "Aplique uma pequena quantidade nas mãos úmidas, faça espuma e massageie suavemente no rosto. Enxágue com água morna. Use manhã e noite.",
    avaliacoes: 156,
    estrelas: 5
  },
  {
    id: 2,
    nome: "Colorgram Makeup Base",
    preco: "R$ 179,90",
    categoria: "Maquiagem",
    marca: "Colorgram",
    descricao: "Base de maquiagem com cobertura natural que proporciona o famoso efeito 'pele de vidro' coreana. Longa duração e acabamento luminoso.",
    imageKey: "colorgram",
    destaque: false,
    avaliacao: 4.7,
    beneficios: [
      "Cobertura natural e uniforme",
      "Efeito 'pele de vidro'",
      "Longa duração (12h+)",
      "SPF 30 proteção solar",
      "Não transfere nem mancha"
    ],
    ingredientes: ["Niacinamida", "Vitamina E", "Protetor Solar", "Extrato de Pérola"],
    modoUso: "Aplique uniformemente no rosto com pincel ou dedos após o primer. Construa a cobertura gradualmente conforme necessário.",
    avaliacoes: 203,
    estrelas: 5
  },
  {
    id: 3,
    nome: "Moisture Up Pad",
    preco: "R$ 199,90",
    categoria: "Hidratação",
    marca: "K-Beauty",
    descricao: "Pads de algodão embebidos em essência hidratante para cuidado facial prático e eficaz. Perfeito para a rotina de skincare coreana em 7 passos.",
    imageKey: "moistureUpPad",
    destaque: true,
    avaliacao: 4.8,
    beneficios: [
      "Hidratação intensa instantânea",
      "Prepara a pele para outros produtos",
      "Textura não pegajosa",
      "Praticidade para viagens",
      "100 pads por embalagem"
    ],
    ingredientes: ["Ácido Hialurônico", "Glicerina", "Extrato de Bambu", "Pantenol"],
    modoUso: "Após a limpeza, passe suavemente o pad no rosto e pescoço. Pode ser usado como máscara deixando sobre a pele por 10 minutos.",
    avaliacoes: 89,
    estrelas: 4
  },
  {
    id: 4,
    nome: "Foam Cleansing Premium",
    preco: "R$ 229,90",
    categoria: "Limpeza",
    marca: "Premium",
    descricao: "Versão premium do foam cleanser com ingredientes ativos anti-idade. Limpeza profunda com benefícios anti-envelhecimento e revitalização da pele.",
    imageKey: "foamCleansingPremium",
    destaque: false,
    avaliacao: 4.6,
    beneficios: [
      "Ação anti-idade comprovada",
      "Estimula renovação celular",
      "Rico em antioxidantes",
      "Melhora textura da pele",
      "Reduz sinais de cansaço"
    ],
    ingredientes: ["Retinol Encapsulado", "Vitamina C", "Peptídeos", "Extrato de Ginseng"],
    modoUso: "Use preferencialmente à noite. Aplique pequena quantidade, massageie delicadamente e enxágue. Sempre use protetor solar durante o dia.",
    avaliacoes: 134,
    estrelas: 5
  },
  {
    id: 5,
    nome: "Essência Facial de Ginseng",
    preco: "R$ 189,90",
    categoria: "Tratamento",
    marca: "K-Beauty",
    descricao: "Essência revitalizante com extrato de ginseng coreano premium. Melhora a elasticidade da pele e proporciona hidratação profunda com textura leve.",
    imageKey: "foamCleanser",
    destaque: true,
    avaliacao: 4.9,
    beneficios: [
      "Revitaliza peles cansadas e opacas",
      "Melhora elasticidade e firmeza",
      "Hidratação profunda sem oleosidade",
      "Rico em antioxidantes naturais",
      "Absorção rápida e textura leve"
    ],
    ingredientes: ["Extrato de Ginseng", "Ácido Hialurônico", "Niacinamida", "Adenosina"],
    modoUso: "Aplique após a limpeza com movimentos suaves de dentro para fora do rosto. Use manhã e noite.",
    avaliacoes: 67,
    estrelas: 5
  },
  {
    id: 6,
    nome: "Máscara Noturna de Pérolas",
    preco: "R$ 159,90",
    categoria: "Máscaras",
    marca: "Pearl Beauty",
    descricao: "Máscara noturna hidratante com extrato de pérolas do mar. Regenera e ilumina a pele durante o sono para um despertar com pele radiante.",
    imageKey: "moistureUpPad",
    destaque: false,
    avaliacao: 4.5,
    beneficios: [
      "Regeneração intensa durante a noite",
      "Ilumina e uniformiza o tom da pele",
      "Hidratação profunda de 8 horas",
      "Reduz sinais de fadiga",
      "Textura sedosa não pegajosa"
    ],
    ingredientes: ["Extrato de Pérola", "Colágeno Marinho", "Vitamina C", "Ceramidas"],
    modoUso: "Aplique uma camada generosa no rosto limpo antes de dormir. Não é necessário enxaguar. Use 2-3 vezes por semana.",
    avaliacoes: 45,
    estrelas: 4
  }
];

function toViewModel(products: ProductRecord[]): ProductView[] {
  return products.map((product) => ({
    ...product,
    imagem: imageMap[product.imageKey] ?? imageMap.foamCleanser
  }));
}

export function getStoredProducts(): ProductRecord[] {
  const raw = localStorage.getItem(PRODUCTS_STORAGE_KEY);

  if (!raw) {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(defaultProducts));
    return defaultProducts;
  }

  try {
    const parsed = JSON.parse(raw) as ProductRecord[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultProducts;
    }
    return parsed;
  } catch {
    return defaultProducts;
  }
}

export function getProductsForView(): ProductView[] {
  return toViewModel(getStoredProducts());
}

export function saveProducts(products: ProductRecord[]): void {
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
}
