import { ProductCartType } from "./reducer"

export enum ActionTypes {
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}


export function increaseProductQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: {
      id
    }
  }
}

export function decreaseProductQuantityAction(id: string) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      id
    }
  }
}

export function addProductAction(product: ProductCartType) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product
    },
  }
}

export function removeProductAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id
    }
  }
}
