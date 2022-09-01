import { UserProvider } from "./auth/context/UserProvider"
import { CartProvider } from "./clothing/context/CartProvider"
import { AppRouter } from "./router/AppRouter"

export const ClothingApp = () => {
  return (
    <UserProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </UserProvider>
  )
}