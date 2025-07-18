import axios from 'axios';

export const supabase = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/rest/v1`,
  headers: {
    apikey: process.env.EXPO_PUBLIC_API_KEY,
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    'Content-Type': 'application/json'
  },
});

supabase.interceptors.request.use(request => {
  console.debug('[API Request]', request.method?.toUpperCase(), request.url, request.data);
  return request;
});

supabase.interceptors.response.use(
  res => {
    console.debug('[RES]', res.config.url, res.status);
    return res;
  },
  err => {
    console.error('[ERR]', err?.config?.url, err?.message);
    return Promise.reject(err);
  }
);