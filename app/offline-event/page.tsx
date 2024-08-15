import megacup from "@/public/offline-event/all logo-99.png";
type Props = {};

const OfflineEvent = (props: Props) => {
  return (
    <div className="w-full">
      <section className="h-[200px]"></section>
      <section className="flex flex-col max-w-[1060px] mx-auto gap-4 items-center px-2 w-full">
        <div className="flex items-center">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-[#909090]">
                Game Tournament
              </p>
              <span className="text-3xl font-bold">PUBG Mobile Tournament</span>
              <p className="text-sm font-bold text-[#009BFF]">
                Megacup SEA 2023
              </p>
            </div>
            <p className="text-sm">
              We're invited by our partner, Intel, to participate under their
              name and operate part of their booth. We contributed by arranging
              any mini tournament requested by guests. At the same time promoted
              our brand through brochures and communications with guests.
            </p>
            <div className="flex gap-4 w-full justify-center md:justify-start my-4">
              <button className="border-zinc-800 border-[1px] font-bold px-6 py-3 rounded-lg text-sm">
                Play Video
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <img src={megacup.src} alt="logo" className="w-[50%] mr-[100px]" />
          </div>
        </div>
        <div className="w-full flex gap-4 justify-between">
          <div className="bg-slate-700 w-full aspect-video rounded-xl overflow-hidden">
            image
          </div>
          <div className="bg-slate-700 w-full aspect-video rounded-xl overflow-hidden">
            image
          </div>
          <div className="bg-slate-700 w-full aspect-video rounded-xl overflow-hidden">
            image
          </div>
        </div>
        <div className="absolute bg-[#009BFF]/[0.20] w-[45%] aspect-square rounded-full z-[-2] blur-[150px] top-0 right-0"></div>
        <div className="absolute bg-[#009BFF]/[0.40] w-[30%] aspect-square rounded-full z-[-2] blur-[150px] top-[40%] right-[40%]"></div>
      </section>
    </div>
  );
};

export default OfflineEvent;
