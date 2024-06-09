import { ProductType } from "../../pages/Home/Product";
import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface ProductCartType extends ProductType {
  quantity: number;
}

interface CartReducerActionType {
  type: string;
  payload: {
    id?: string;
    product?: ProductCartType
  };
}

export function cartReducer(state: ProductCartType[], action: CartReducerActionType) {
  switch(action.type) {
    case ActionTypes.INCREASE_PRODUCT_QUANTITY: {
      const productIndex = state.findIndex((product) => {
        return product.id === action.payload.id
      })

      if(productIndex < 0) return state;

      return produce(state, (draft) => {
        draft[productIndex].quantity++;
      })
    }
    case ActionTypes.DECREASE_PRODUCT_QUANTITY: {
      const productIndex = state.findIndex((product) => {
        return product.id === action.payload.id
      })

      if(productIndex < 0) return state;

      return produce(state, (draft) => {
        if (draft[productIndex].quantity <= 0) return;
        draft[productIndex].quantity--;
      })
    }
    case ActionTypes.ADD_PRODUCT: {
      const existingProduct = state.findIndex((product) => {
        return product.id === action.payload.product!.id
      })

      return produce(state, (draft) => {
        if(existingProduct >= 0) {
          draft[existingProduct].quantity += action.payload.product!.quantity
        } else {
          draft.push(action.payload.product!)
        }
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      return state.filter((product) => {
        return product.id !== action.payload.id
      })
    }
  }
  return state;
}
