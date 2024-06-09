import { ReactNode, createContext, useEffect, useReducer } from "react"
import { ProductCartType, cartReducer } from "../reducers/cart/reducer";
import { addProductAction, decreaseProductQuantityAction, increaseProductQuantityAction, removeProductAction } from "../reducers/cart/actions";


interface CartContextProviderProps {
  children: ReactNode;
}

interface AddressType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
}

interface PaymentMethodType {
  id?: string;
  value: string;
}

interface CartContextType {
  cartProducts: ProductCartType[],
  deliveryPrice?: number,
  address?: AddressType,
  paymentMethod?: PaymentMethodType,
  increaseProductQuantity: (id: string) => void;
  decreaseProductQuantity: (id: string) => void;
  addProduct: (product: ProductCartType) => void;
  removeProduct: (id: string) => void;
}

const localStorageKey = '@coffee-delivery:cart-state-1.0.0';

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        localStorageKey,
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(localStorageKey, stateJSON)
  }, [cartState])

  function increaseProductQuantity(id: string) {
    dispatch(increaseProductQuantityAction(id));
  }

  function decreaseProductQuantity(id: string) {
    dispatch(decreaseProductQuantityAction(id));
  }

  function addProduct(product: ProductCartType) {
    dispatch(addProductAction(product));
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id));
  }

  const contextValue: CartContextType = {
    cartProducts: cartState,
    deliveryPrice: 11.99,
    increaseProductQuantity,
    decreaseProductQuantity,
    addProduct,
    removeProduct,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
