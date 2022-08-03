import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../service/context/AuthContext";
import { ThemeProvider } from "@mui/system";
import { MUITheme } from "../styles/Theme/MUITheme";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <ThemeProvider theme={MUITheme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
