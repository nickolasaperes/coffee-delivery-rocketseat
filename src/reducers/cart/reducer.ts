import { ProductType } from "../../pages/Home/Product";
import { ActionTypes } from "./actions";

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
  // TODO: Refactor to use immer
  switch(action.type) {
    case ActionTypes.INCREASE_PRODUCT_QUANTITY: {
      return state.map((product) => {
        if(product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      })
    }
    case ActionTypes.DECREASE_PRODUCT_QUANTITY: {
      return state.map((product) => {
        if(product.id === action.payload.id) {
          if (product.quantity <= 0) {
            return product;
          }

          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product;
      })
    }
    case ActionTypes.ADD_PRODUCT: {
      const existingProduct = state.find((product) => product.id === action.payload.product!.id)

      const newProduct = {
        ...action.payload.product
      };

      if(existingProduct) {
        newProduct.quantity = (newProduct.quantity ?? 0) + existingProduct.quantity

        return [
          ...state.filter((product) => product.id !== existingProduct.id),
          newProduct as ProductCartType
        ]
      }

      return [
        ...state,
        newProduct as ProductCartType
      ];
    }
    case ActionTypes.REMOVE_PRODUCT: {
      return state.filter((product) => {
        return product.id !== action.payload.id
      })
    }
  }
  return state;
}
