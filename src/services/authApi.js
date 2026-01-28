const BASE_URL = `${import.meta.env.VITE_API_URL}/auth`;

export async function signup(data) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // IMPORTANT for cookies
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Signup failed");
  return json;
}

export async function login(data) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Login failed");
  return json;
}

  export async function logout() {
    await fetch(`${BASE_URL}/logout`, {
      credentials: "include",
    });
  }
