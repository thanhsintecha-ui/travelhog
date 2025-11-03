/**
 * Application constants
 */

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const APP_NAME = 'Tan Phat Food';

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

export const CACHE_KEYS = {
  USER: 'user',
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRODUCTS: '/products',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  DASHBOARD: '/dashboard',
} as const;

