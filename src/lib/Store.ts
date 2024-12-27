import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./type";

interface StoreType {
  // cart
  cartProduct: Product[];
  addToCart: (product: Product) => Promise<void>;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  resetCart: () => void;
  // favorite
  favoriteProduct: Product[];
  addToFavorite: (product: Product) => Promise<void>;
  removeFromFavorite: (productId: number) => void;
  resetFavorite: () => void;
}

// Custom storage configuration
const customStorage = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: unknown) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

export const Store = create<StoreType>()(
  persist(
    (set) => ({
      cartProduct: [],
      favoriteProduct: [],

      // Add to favorite
      addToFavorite: (product: Product) => {
        return new Promise<void>((resolve) => {
          set((state: StoreType) => {
            const isAlreadyFavorite = state.favoriteProduct.some(
              (p) => p.id === product.id
            );

            if (!isAlreadyFavorite) {
              return {
                favoriteProduct: [...state.favoriteProduct, product],
              };
            }

            return state;
          });
          resolve();
        });
      },

      // Remove from favorite
      removeFromFavorite: (productId: number) => {
        set((state: StoreType) => ({
          favoriteProduct: state.favoriteProduct.filter(
            (item) => item.id !== productId
          ),
        }));
      },

      // Reset favorite
      resetFavorite: () => {
        set({ favoriteProduct: [] });
      },

      // Add to cart
      addToCart: (product: Product) => {
        return new Promise<void>((resolve) => {
          set((state: StoreType) => {
            const existingProduct = state.cartProduct.find(
              (p) => p.id === product.id
            );

            if (existingProduct) {
              return {
                cartProduct: state.cartProduct.map((p) =>
                  p.id === product.id
                    ? { ...p, quantity: (p.quantity || 1) + 1 }
                    : p
                ),
              };
            } else {
              return {
                cartProduct: [
                  ...state.cartProduct,
                  { ...product, quantity: 1 },
                ],
              };
            }
          });
          resolve();
        });
      },

      // Decrease quantity
      decreaseQuantity: (productId: number) => {
        set((state: StoreType) => {
          const existingProduct = state.cartProduct.find(
            (p) => p.id === productId
          );

          if (existingProduct) {
            return {
              cartProduct: state.cartProduct.map((p) =>
                p.id === productId
                  ? {
                      ...p,
                      quantity: Math.max((p.quantity || 1) - 1, 1),
                    }
                  : p
              ),
            };
          } else {
            return state;
          }
        });
      },

      // Remove from cart
      removeFromCart: (productId: number) => {
        set((state: StoreType) => ({
          cartProduct: state.cartProduct.filter(
            (item) => item.id !== productId
          ),
        }));
      },

      // Reset cart
      resetCart: () => {
        set({ cartProduct: [] });
      },
    }),
    {
      name: "store-storage",
      storage: customStorage,
    }
  )
);
