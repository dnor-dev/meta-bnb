import React from 'react';
import { WalletConnect } from '../../utils/links';

const ConnectWallet = () => {
  return (
    <>
      <button
        type="button"
        className="bg-[#a02279] leading-[20px] text-[16px] text-[#fff] py-4 px-7 rounded-lg hover:bg-[#7e2060] smooth-transition hidden lg:block"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Connect Wallet
      </button>

      <button
        type="button"
        className="bg-[#a02279] leading-[20px] text-[16px] text-[#fff] p-1 rounded-lg hover:bg-[#7e2060] smooth-transition lg:hidden"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-[#fff]"
        >
          <path
            fillRule="evenodd"
            d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-[16px] outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center py-4 lg:px-7 px-5 justify-between border-b border-[#CFD8DC] rounded-t-md">
              <h5
                className="text-[#333333] font-bold leading-[30px] lg:text-[24px] text-[18px]"
                id="exampleModalScrollableLabel"
              >
                Connect Wallet
              </h5>
              <button
                type="button"
                className="btn-close box-content w-2 h-2 text-[12px] border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative lg:px-7 px-5 mt-6">
              <div className="flex flex-col gap-3">
                <p className="text-[#333333] leading-[20px] text-sm lg:text-base">
                  Choose your preferred wallet
                </p>
                <div className="flex flex-col gap-3 mb-7">
                  {WalletConnect.length !== 0 &&
                    WalletConnect.map((wallet) => (
                      <div
                        className="flex w-full items-center justify-between bg-[#F8F9FA] border border-[#CFD8DC] rounded-[12px] py-[12px] lg:px-[20px] px-[16px] cursor-pointer hover:bg-[#c7cbcc]"
                        key={wallet.id}
                      >
                        <div className="flex lg:gap-[16px] gap-[10px] items-center">
                          <img
                            src={wallet.image}
                            className="w-[20%] lg:w-[auto] md:w-[40%]"
                            alt={wallet.name}
                          />
                          <p className="text-[#000] leading-[23px] lg:text-[18px] text-sm font-semibold font-[Sora]">
                            {wallet.name}
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-[#959DA6]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;
