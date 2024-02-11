import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="bg-yellow-400 w-full px-3.5 py-4 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex flex-col max-md:flex-row max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-[16%] max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.24] object-contain object-center w-full h-auto max-w-full max-h-[182px] overflow-hidden shrink-0 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-full max-md:w-[84%] ml-5 max-md:ml-0">
            <div className="text-black text-center text-2xl font-semibold mt-11 max-md:max-w-full max-md:mt-10">
              Klasifikasi Pectus Excavatum Menggunakan Convolution Neural
              Network
              <br />
              Dengan Arsitektur Inception V3{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-1 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex flex-col max-md:flex-row max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-[1/5] max-md:ml-0">
            <div className="bg-neutral-400 flex-grow flex flex-col w-full pl-7 pr-2.5 py-12 max-md:mt-10 max-md:pl-5">
              <div className="text-black text-center text-xl font-semibold self-stretch whitespace-nowrap">
                Pectus Excavatum
              </div>
              <div className="text-black text-center text-xl font-semibold self-stretch whitespace-nowrap mt-20 max-md:mt-10">
                Profile Mahasiswa
              </div>
              <div className="text-black text-center text-xl font-semibold self-center whitespace-nowrap mt-16 max-md:mt-10">
                Tentang MIPA
              </div>
              <div className="text-black text-center text-xl font-semibold self-stretch mt-12 mb-4 max-md:my-10">
                Tentang Unsoed
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-full max-md:w-[4/5] ml-5 max-md:ml-0">
            <div className="flex-col backdrop-blur-[50px] overflow-hidden relative flex min-h-[839px] grow justify-center items-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex w-full max-w-full flex-col items-stretch mt-16 mb-4 max-md:my-10">
                <div className="border bg-zinc-300 flex-shrink-0 h-[300px] flex flex-col border-solid border-black" />
                <div className="text-white text-xl whitespace-nowrap bg-blue-950 self-center justify-center items-stretch mt-16 px-14 py-3.5 rounded-[30px] max-md:mt-10 max-md:px-5">
                  Pilih File
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
