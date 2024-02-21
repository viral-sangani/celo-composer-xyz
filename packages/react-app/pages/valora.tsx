import ValoraButton from "@/components/ValoraButton";
import { ValoraFooter } from "@/components/ValoraFooter";
import { ValoraHeader } from "@/components/ValoraHeader";
import { useValora } from "@/context/useValora";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

function Valora({}: Props) {
  const {
    address,
    getUserAddress,
    sendCUSD,
    mintValoraNFT,
    getNFTs,
    signTransaction,
  } = useValora();
  const [cUSDLoading, setCUSDLoading] = useState(false);
  const [nftLoading, setNFTLoading] = useState(false);
  const [signingLoading, setSigningLoading] = useState(false);
  const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);
  const [tx, setTx] = useState<any>(undefined);

  useEffect(() => {
    getUserAddress().then(async () => {
      const tokenURIs = await getNFTs();
      setUserOwnedNFTs(tokenURIs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[320px] h-[700px] relative">
        <Image
          width={330}
          height={700}
          src="/mobile-frame.png"
          alt="Mobile Frame"
          priority
        />
        <div className="absolute top-0 left-0 px-5 pt-12 pb-1 w-full h-[640px]">
          <div className="overflow-x-hidden overflow-y-auto h-[600px]">
            <div className="bg-gypsum overflow-hidden flex flex-col ">
              <ValoraHeader />
              <div className="py-10 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center mt-3">
                  <div className="text-sm text-center">
                    There you go... a canvas for your next Minipay project!
                  </div>
                  {address && (
                    <>
                      <div className="h2 text-center">
                        Your address:{" "}
                        <span className="font-bold text-sm">
                          {address.substring(0, 4)}...
                          {address.substring(
                            address.length - 4,
                            address.length
                          )}
                        </span>
                      </div>
                      {tx && (
                        <p className="font-bold mt-4">
                          Tx Completed: {(tx.hash as string).substring(0, 6)}...
                          {(tx.hash as string).substring(
                            tx.hash.length - 6,
                            tx.hash.length
                          )}
                        </p>
                      )}
                      <div className="w-full px-3 mt-7">
                        <ValoraButton
                          loading={signingLoading}
                          onClick={async () => {
                            setSigningLoading(true);
                            const tx = await sendCUSD(address, "0.1");
                            setTx(tx);
                            setSigningLoading(false);
                          }}
                          title="Send 0.1 cUSD to your own address"
                          widthFull
                        />
                      </div>

                      <div className="w-full px-3 mt-6">
                        <ValoraButton
                          loading={cUSDLoading}
                          onClick={async () => {
                            setCUSDLoading(true);
                            await signTransaction();
                            setCUSDLoading(false);
                          }}
                          title="Sign a Transaction"
                          widthFull
                        />
                      </div>

                      {userOwnedNFTs.length > 0 ? (
                        <div className="flex flex-col items-center justify-center w-full mt-7">
                          <p className="font-bold">My NFTs</p>
                          <div className="w-full grid grid-cols-2 gap-3 mt-3 px-2">
                            {userOwnedNFTs.map((tokenURI, index) => (
                              <div
                                key={index}
                                className="p-2 border-[3px] border-colors-secondary rounded-xl"
                              >
                                <Image
                                  alt="MINIPAY NFT"
                                  src={tokenURI}
                                  className="w-[160px] h-[200px] object-cover"
                                  width={160}
                                  height={200}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-5">You do not have any NFTs yet</div>
                      )}

                      <div className="w-full px-3 my-5">
                        <ValoraButton
                          loading={nftLoading}
                          onClick={async () => {
                            setNFTLoading(true);
                            const tx = await mintValoraNFT();
                            const tokenURIs = await getNFTs();
                            setUserOwnedNFTs(tokenURIs);
                            setTx(tx);
                            setNFTLoading(false);
                          }}
                          title="Mint Minipay NFT"
                          widthFull
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <ValoraFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valora;
