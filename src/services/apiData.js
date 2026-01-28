const BASE_URL = import.meta.env.VITE_API_URL;

// ---------- CORE FETCH HELPER ----------
async function fetchWithAuth(url, options = {}) {
  const res = await fetch(url, {
    method: options.method || "GET", // <-- always explicit
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body || null,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}

// ============ AUTH ============

export function signup({ rollNumber, password }) {
  return fetchWithAuth(`${BASE_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ rollNumber, password }),
  });
}

export function login({ rollNumber, password }) {
  return fetchWithAuth(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ rollNumber, password }),
  });
}

export function logout() {
  return fetchWithAuth(`${BASE_URL}/auth/logout`, {
    method: "POST",
  });
}

export function getMe() {
  console.log("called getMe");
  return fetchWithAuth(`${BASE_URL}/auth/me`, {
    method: "POST",
  });
}

// ============ STUDENT ============

export function getMyAttendance() {
  return fetchWithAuth(`${BASE_URL}/student/attendance`, {
    method: "GET",
  });
}

export function updateTotalLectures({
  attendanceId,
  deltaTotal,
  deltaAttended,
}) {
  return fetchWithAuth(`${BASE_URL}/student/attendance/${attendanceId}`, {
    method: "PATCH",
    body: JSON.stringify({ deltaTotal, deltaAttended }),
  });
}

export function updateAttendedLectures({
  attendanceId,
  deltaTotal,
  deltaAttended,
}) {
  return fetchWithAuth(`${BASE_URL}/student/attendance/${attendanceId}`, {
    method: "PATCH",
    body: JSON.stringify({ deltaTotal, deltaAttended }),
  });
}
