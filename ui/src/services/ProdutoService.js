export async function getAllProdutos() {
  const response = await fetch("/api/produtos");
  return await response.json();
}

export async function createProduto(data) {
  const response = await fetch(`/api/produto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ produto: data })
  });
  return await response.json();
}

export async function deleteProduto(produtoId) {
  const response = await fetch(`/api/produto/${produtoId}`, {
    method: "DELETE"
  });
  return await response.json();
}

export async function editProduto(data) {
  const response = await fetch(`/api/produto`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ produto: data })
  });
  return await response.json();
}

export async function fetchSettings() {
  const response = await fetch("/api/settings");
  return await response.json();
}
