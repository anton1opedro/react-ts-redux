import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; name: string; price: number }>,
    ) {
      const itemindex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemindex >= 0) {
        state.items[itemindex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export { cartSlice };
