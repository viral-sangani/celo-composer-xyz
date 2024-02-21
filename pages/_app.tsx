import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { celo, celoAlfajores } from "viem/chains";
import { WagmiProvider, http } from "wagmi";
import Layout from "../components/Layout";
import "../styles/globals.css";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string; // get one at https://cloud.walletconnect.com/app

const appInfo = {
  appName: "Celo Composer",
};

const wagmiConfig = getDefaultConfig({
  appName: "Celo Composer",
  projectId,
  chains: [celo, celoAlfajores],
  transports: {
    [celo.id]: http("https://forno.celo.org	"),
    [celoAlfajores.id]: http("https://alfajores-forno.celo-testnet.org"),
  },
  ssr: true,
});
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider appInfo={appInfo} coolMode={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
