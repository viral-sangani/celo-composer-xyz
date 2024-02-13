import { useSocialConnect } from "@/SocialConnect/useSocialConnect";

export default function SocialConnect() {
  const { account } = useSocialConnect();

  return (
    <main className="w-full flex justify-center text-gray-800 text-lg font-bold">
      {!account
        ? "Connect your wallet to use SocialConnect"
        : "Click on SocialConnect to get started"}
    </main>
  );
}
