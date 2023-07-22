import { UserProvider } from "./pages/auth/context/UserProvider";
import { AppRouter } from "./router/AppRouter";

export const ClothingApp = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};
