export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata?: {
      role?: 'admin' | 'provider' | 'customer';
    };
  }
}
