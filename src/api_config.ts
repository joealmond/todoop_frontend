const port = import.meta.env.VITE_PORT || 3500;
const host = import.meta.env.VITE_HOST || "localhost";

export const API_URL = `http://${host}:${port}`;