import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { ProductCartType, cartReducer } from "../reducers/cart/reducer";
import { addProductAction, decreaseProductQuantityAction, increaseProductQuantityAction, removeProductAction } from "../reducers/cart/actions";
import { CheckoutFormData } from "../pages/Checkout";


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
  description: string;
}

interface CartContextType {
  cartProducts: ProductCartType[],
  deliveryPrice: number | null,
  address: AddressType,
  paymentMethod?: PaymentMethodType,
  increaseProductQuantity: (id: string) => void;
  decreaseProductQuantity: (id: string) => void;
  addProduct: (product: ProductCartType) => void;
  removeProduct: (id: string) => void;
  updateAddress: (data: CheckoutFormData) => void;
  updateDeliveryPrice: () => void;
}

const paymentMethods: PaymentMethodType[] = [
  {
    id: "credit-card",
    description: 'Cartão de Crédito',
  },
  {
    id: "debit-card",
    description: 'Cartão de Débito',
  },
  {
    id: "money",
    description: 'Dinheiro',
  }
]

const cartLocalStorageKey = '@coffee-delivery:cart-state-1.0.0';

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        cartLocalStorageKey,
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const [checkoutData, setCheckoutData] = useState<CheckoutFormData>({} as CheckoutFormData);
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(cartLocalStorageKey, stateJSON)
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

  function updateAddress(data: CheckoutFormData) {
    setCheckoutData(data);
  }

  function updateDeliveryPrice() {
    const prices = [3.99, 4.99, 5.99, 6.99, 7.99, 8.99, 9.99, 10.99]
    setDeliveryPrice(prices[Math.floor(Math.random() * prices.length)])
  }

  const address = checkoutData as AddressType;
  const paymentMethod = paymentMethods.find((method) => method.id === checkoutData.paymentMethod);

  const contextValue: CartContextType = {
    cartProducts: cartState,
    deliveryPrice,
    address,
    paymentMethod,
    increaseProductQuantity,
    decreaseProductQuantity,
    addProduct,
    removeProduct,
    updateAddress,
    updateDeliveryPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
