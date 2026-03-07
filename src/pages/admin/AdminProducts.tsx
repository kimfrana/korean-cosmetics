import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../lib/adminAuth";
import {
  getStoredProducts,
  saveProducts,
  productImageOptions
} from "../../lib/productStore";
import type { ProductImageKey, ProductRecord } from "../../lib/productStore";

interface ProductFormState {
  id: number | null;
  nome: string;
  preco: string;
  categoria: string;
  marca: string;
  descricao: string;
  imageKey: ProductImageKey;
  destaque: boolean;
  avaliacao: string;
  avaliacoes: string;
  estrelas: string;
  beneficios: string;
  ingredientes: string;
  modoUso: string;
}

const initialForm: ProductFormState = {
  id: null,
  nome: "",
  preco: "",
  categoria: "",
  marca: "",
  descricao: "",
  imageKey: "foamCleanser",
  destaque: false,
  avaliacao: "4.5",
  avaliacoes: "10",
  estrelas: "5",
  beneficios: "",
  ingredientes: "",
  modoUso: ""
};

function toForm(product: ProductRecord): ProductFormState {
  return {
    id: product.id,
    nome: product.nome,
    preco: product.preco,
    categoria: product.categoria,
    marca: product.marca,
    descricao: product.descricao,
    imageKey: product.imageKey,
    destaque: product.destaque,
    avaliacao: String(product.avaliacao),
    avaliacoes: String(product.avaliacoes),
    estrelas: String(product.estrelas),
    beneficios: product.beneficios.join("\n"),
    ingredientes: product.ingredientes.join("\n"),
    modoUso: product.modoUso
  };
}

export default function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductRecord[]>(() => getStoredProducts());
  const [form, setForm] = useState<ProductFormState>(initialForm);

  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => a.nome.localeCompare(b.nome)),
    [products]
  );

  const resetForm = () => setForm(initialForm);

  const persistProducts = (nextProducts: ProductRecord[]) => {
    setProducts(nextProducts);
    saveProducts(nextProducts);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: ProductRecord = {
      id: form.id ?? (products.length > 0 ? Math.max(...products.map((product) => product.id)) + 1 : 1),
      nome: form.nome.trim(),
      preco: form.preco.trim(),
      categoria: form.categoria.trim(),
      marca: form.marca.trim(),
      descricao: form.descricao.trim(),
      imageKey: form.imageKey,
      destaque: form.destaque,
      avaliacao: Number(form.avaliacao) || 0,
      avaliacoes: Number(form.avaliacoes) || 0,
      estrelas: Number(form.estrelas) || 5,
      beneficios: form.beneficios.split("\n").map((value) => value.trim()).filter(Boolean),
      ingredientes: form.ingredientes.split("\n").map((value) => value.trim()).filter(Boolean),
      modoUso: form.modoUso.trim()
    };

    if (form.id === null) {
      persistProducts([...products, payload]);
    } else {
      persistProducts(products.map((product) => (product.id === payload.id ? payload : product)));
    }

    resetForm();
  };

  const handleEdit = (product: ProductRecord) => {
    setForm(toForm(product));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (productId: number) => {
    const shouldDelete = window.confirm("Deseja excluir este produto?");
    if (!shouldDelete) return;

    persistProducts(products.filter((product) => product.id !== productId));

    if (form.id === productId) {
      resetForm();
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-soft-vertical px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-display text-charcoal">Produtos - Admin</h1>
            <p className="text-slate">Cadastre, edite e remova produtos do site.</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-white border border-mint/40 text-charcoal px-4 py-2 rounded-full hover:bg-mint/10 transition"
          >
            Sair
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display text-xl text-charcoal mb-4">
              {form.id === null ? "Novo produto" : "Editar produto"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                value={form.nome}
                onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
                placeholder="Nome"
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
                required
              />
              <input
                value={form.preco}
                onChange={(event) => setForm((prev) => ({ ...prev, preco: event.target.value }))}
                placeholder="Preço (ex: R$ 199,90)"
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  value={form.categoria}
                  onChange={(event) => setForm((prev) => ({ ...prev, categoria: event.target.value }))}
                  placeholder="Categoria"
                  className="w-full border border-mint/40 rounded-lg px-3 py-2"
                  required
                />
                <input
                  value={form.marca}
                  onChange={(event) => setForm((prev) => ({ ...prev, marca: event.target.value }))}
                  placeholder="Marca"
                  className="w-full border border-mint/40 rounded-lg px-3 py-2"
                  required
                />
              </div>

              <select
                value={form.imageKey}
                onChange={(event) => setForm((prev) => ({ ...prev, imageKey: event.target.value as ProductImageKey }))}
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
              >
                {productImageOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>

              <textarea
                value={form.descricao}
                onChange={(event) => setForm((prev) => ({ ...prev, descricao: event.target.value }))}
                placeholder="Descrição"
                rows={3}
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
                required
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={form.avaliacao}
                  onChange={(event) => setForm((prev) => ({ ...prev, avaliacao: event.target.value }))}
                  placeholder="Avaliação"
                  className="w-full border border-mint/40 rounded-lg px-3 py-2"
                />
                <input
                  type="number"
                  min="0"
                  value={form.avaliacoes}
                  onChange={(event) => setForm((prev) => ({ ...prev, avaliacoes: event.target.value }))}
                  placeholder="Qtd. avaliações"
                  className="w-full border border-mint/40 rounded-lg px-3 py-2"
                />
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={form.estrelas}
                  onChange={(event) => setForm((prev) => ({ ...prev, estrelas: event.target.value }))}
                  placeholder="Estrelas"
                  className="w-full border border-mint/40 rounded-lg px-3 py-2"
                />
              </div>

              <textarea
                value={form.beneficios}
                onChange={(event) => setForm((prev) => ({ ...prev, beneficios: event.target.value }))}
                placeholder="Benefícios (um por linha)"
                rows={3}
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
              />

              <textarea
                value={form.ingredientes}
                onChange={(event) => setForm((prev) => ({ ...prev, ingredientes: event.target.value }))}
                placeholder="Ingredientes (um por linha)"
                rows={3}
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
              />

              <textarea
                value={form.modoUso}
                onChange={(event) => setForm((prev) => ({ ...prev, modoUso: event.target.value }))}
                placeholder="Modo de uso"
                rows={3}
                className="w-full border border-mint/40 rounded-lg px-3 py-2"
              />

              <label className="flex items-center gap-2 text-sm text-charcoal">
                <input
                  type="checkbox"
                  checked={form.destaque}
                  onChange={(event) => setForm((prev) => ({ ...prev, destaque: event.target.checked }))}
                />
                Mostrar como destaque
              </label>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-ocean text-white py-2.5 rounded-full hover:bg-aqua hover:text-charcoal transition"
                >
                  {form.id === null ? "Salvar produto" : "Atualizar produto"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2.5 rounded-full border border-mint/40 text-charcoal hover:bg-mint/10 transition"
                >
                  Limpar
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display text-xl text-charcoal mb-4">Produtos cadastrados</h2>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto custom-scrollbar pr-1">
              {sortedProducts.map((product) => (
                <div key={product.id} className="border border-mint/20 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-charcoal">{product.nome}</h3>
                      <p className="text-sm text-slate">{product.preco} • {product.categoria}</p>
                      <p className="text-xs text-slate mt-1">Marca: {product.marca}</p>
                    </div>
                    {product.destaque && (
                      <span className="text-xs bg-rose text-white px-2 py-1 rounded-full">Destaque</span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-3 py-1.5 text-sm rounded-full border border-ocean text-ocean hover:bg-ocean hover:text-white transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-3 py-1.5 text-sm rounded-full border border-rose text-rose hover:bg-rose hover:text-white transition"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
              {sortedProducts.length === 0 && (
                <p className="text-slate text-sm">Nenhum produto cadastrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
