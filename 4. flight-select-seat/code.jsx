import imgIcBack from "./images/762cf1dac230b748d4181536d3042f902ab8b4d5.svg";
import imgIcClock from "./images/942dc447cce9ed285cf7229e397631134043e90f.svg";
import imgIcSuccess from "./images/5075ecab33cabfa9224ce6c0e3c4a2d52a98e784.svg";
import imgPoint from "./images/4aa9811cb25979c5b5be5d019d8699f1e62e0a40.svg";
import imgIcChair from "./images/db3c7e88e3490d9df9b079e25bba6fe230fe7076.svg";
import imgIcChair1 from "./images/37f709689d143be1a6fe1ac3ad73fd0464e7686b.svg";
import imgIcChair2 from "./images/7b3cf44458043ad4acbe412eca679ab7ccd1338c.svg";
import imgIcChair3 from "./images/b5b0dc1c00ab7c95416a5394739d03274915f7d7.svg";
import imgIcChair4 from "./images/d1cf177e84c85e9e03dbb27692eb5da23842be33.svg";
import imgIcChair5 from "./images/9486af16eaeadb543e6a5a317fdf11887a5e9a7b.svg";
import imgIcChair6 from "./images/30fc3c3346f52ebee90afc168d72e57f831ffd82.svg";
import imgIcChair7 from "./images/44b94b62145bc926f317d42283cfa71619b7ac7d.svg";
import imgNetworkSignalLight from "./images/46823cc49f385a39a180d4607bd78b50500ede52.svg";
import imgWiFiSignalLight from "./images/f27a156fde9ca0317ce34ba27116d5c10ead46e3.svg";
import imgBatteryLight from "./images/f6609037bb671b83b7638342ff758f6cbcc09893.svg";
import imgIndicator from "./images/bebb99a14926b97882cbc50d061b2bb668daa005.svg";
import img941 from "./images/7e44c2049b7cb27ff9c88c4e3d7b45d2a3c2e531.svg";

export default function FlightSelectSeat() {
  return (
    <div className="bg-white relative size-full" data-name="Flight Select Seat" data-node-id="1:794">
      <div className="absolute box-border content-stretch flex items-center justify-center left-0 overflow-clip pb-[24px] pt-[8px] px-0 top-[44px] w-[375px]" data-name="Section" data-node-id="1:795">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[375px]" data-name="Container" data-node-id="1:796">
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0" data-name="Content" data-node-id="1:797">
            <div className="box-border content-stretch flex gap-[12px] items-start justify-center pb-[16px] pt-0 px-[24px] relative shrink-0 w-[375px]" data-name="top-bar" data-node-id="1:798">
              <div aria-hidden="true" className="absolute border-[#eef0eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="ic-back" data-node-id="1:799">
                <img alt="" className="block max-w-none size-full" src={imgIcBack} />
              </div>
              <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px] text-center" data-node-id="1:802">
                Select Seat
              </p>
            </div>
            <div className="bg-[#fde6eb] box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-[327px]" data-name="alert-time" data-node-id="1:803">
              <div className="relative shrink-0 size-[20px]" data-name="ic-clock" data-node-id="1:804">
                <img alt="" className="block max-w-none size-full" src={imgIcClock} />
              </div>
              <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#ee3d60] text-[0px] text-[14px]" data-node-id="1:807">
                <span>{`The remaining time of order `}</span>
                <span className="font-['General_Sans:Semibold',_sans-serif]">00:07:20</span>
              </p>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[2px] shrink-0 w-[327px]" data-name="passenger" data-node-id="1:808">
              <div aria-hidden="true" className="absolute border border-[#1c6ae4] border-solid inset-0 pointer-events-none rounded-[2px]" />
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="passenger-name" data-node-id="1:809">
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px]" data-node-id="1:810">
                  1. Cameron Williamson
                </p>
                <div className="relative shrink-0 size-[20px]" data-name="ic-success" data-node-id="1:811">
                  <img alt="" className="block max-w-none size-full" src={imgIcSuccess} />
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="description" data-node-id="1:814">
                <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-nowrap whitespace-pre" data-node-id="1:815">
                  Economy
                </p>
                <div className="relative shrink-0 size-[4px]" data-name="point" data-node-id="1:816">
                  <img alt="" className="block max-w-none size-full" src={imgPoint} />
                </div>
                <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-nowrap whitespace-pre" data-node-id="1:817">
                  8D
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[23px] items-center relative shrink-0 w-[327px]" data-name="seat-desc" data-node-id="1:818">
              <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="available" data-node-id="1:819">
                <div className="relative shrink-0 size-[20px]" data-name="ic-chair" data-node-id="1:820">
                  <img alt="" className="block max-w-none size-full" src={imgIcChair} />
                </div>
                <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] text-nowrap whitespace-pre" data-node-id="1:823">
                  Available
                </p>
              </div>
              <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="selected" data-node-id="1:824">
                <div className="relative shrink-0 size-[20px]" data-name="ic-chair" data-node-id="1:825">
                  <img alt="" className="block max-w-none size-full" src={imgIcChair1} />
                </div>
                <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] text-nowrap whitespace-pre" data-node-id="1:828">
                  Selected
                </p>
              </div>
              <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="filled" data-node-id="1:829">
                <div className="relative shrink-0 size-[20px]" data-name="ic-chair" data-node-id="1:830">
                  <img alt="" className="block max-w-none size-full" src={imgIcChair2} />
                </div>
                <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="1:833">
                  Filled
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[279px]" data-name="select-seat" data-node-id="1:834">
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-1" data-node-id="1:835">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:836">
                  <div className="content-stretch flex font-['General_Sans:Semibold',_sans-serif] gap-[16px] items-center leading-[24px] not-italic relative shrink-0 text-[#141511] text-[16px] text-center w-full" data-name="letter" data-node-id="1:837">
                    <p className="relative shrink-0 w-[24px]" data-node-id="1:838">
                      A
                    </p>
                    <p className="relative shrink-0 w-[24px]" data-node-id="1:839">
                      B
                    </p>
                    <p className="relative shrink-0 w-[24px]" data-node-id="1:840">
                      C
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:841">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:842">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:845">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:848">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:851">
                  1
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:852">
                  <div className="content-stretch flex font-['General_Sans:Semibold',_sans-serif] gap-[16px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[#141511] text-[16px] text-center w-full" data-name="letter" data-node-id="1:853">
                    <p className="relative shrink-0 w-[24px]" data-node-id="1:854">
                      D
                    </p>
                    <p className="relative shrink-0 w-[24px]" data-node-id="1:855">
                      E
                    </p>
                    <p className="relative shrink-0 w-[24px]" data-node-id="1:856">
                      F
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:857">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:858">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:861">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:864">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-2" data-node-id="1:867">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:868">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:869">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:870">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:873">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:876">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:879">
                  2
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:880">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:881">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:882">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:885">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:888">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-3" data-node-id="1:891">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:892">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:893">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:894">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:897">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:900">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:903">
                  3
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:904">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:905">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:906">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:909">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:912">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-4" data-node-id="1:915">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:916">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:917">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:918">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair5} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:921">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair5} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:924">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair5} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:927">
                  4
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:928">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:929">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:930">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:933">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:936">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-5" data-node-id="1:939">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:940">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:941">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:942">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:945">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:948">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:951">
                  5
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:952">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:953">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:954">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:957">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:960">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-6" data-node-id="1:963">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:964">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:965">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:966">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:969">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:972">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:975">
                  6
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:976">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:977">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:978">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:981">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:984">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-7" data-node-id="1:987">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:988">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:989">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:990">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:993">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:996">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:999">
                  7
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1000">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:1001">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1002">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1005">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1008">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-8" data-node-id="1:1011">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1012">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:1013">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1014">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1017">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1020">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:1023">
                  8
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1024">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:1025">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1026">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair6} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1029">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1032">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-9" data-node-id="1:1035">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1036">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:1037">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1038">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1041">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1044">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:1047">
                  9
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1048">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:1049">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1050">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1053">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair3} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1056">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-10" data-node-id="1:1059">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1060">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:1061">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1062">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1065">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1068">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:1071">
                  10
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1072">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:1073">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1074">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1077">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1080">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-11" data-node-id="1:1083">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1084">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:1085">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1086">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1089">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1092">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:1095">
                  11
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1096">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:1097">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1098">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1101">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1104">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="row-12" data-node-id="1:1107">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1108">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="seat" data-node-id="1:1109">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1110">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1113">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1116">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
                <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center" data-node-id="1:1119">
                  12
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="seat-group" data-node-id="1:1120">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="seat" data-node-id="1:1121">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1122">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1125">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair7} />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="ic-chair" data-node-id="1:1128">
                      <img alt="" className="block max-w-none size-full" src={imgIcChair4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 px-[24px] py-[16px] top-[732px] w-[375px]" data-name="cta-continue" data-node-id="1:1131">
        <div aria-hidden="true" className="absolute border-[#eef0eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="basis-0 bg-[#1c6ae4] box-border content-stretch flex gap-[12px] grow h-[48px] items-center justify-center min-h-px min-w-px px-[12px] py-0 relative rounded-[2px] shrink-0" data-name="cta" data-node-id="1:1132">
          <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white" data-node-id="1:1133">
            Continue
          </p>
        </div>
      </div>
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="Status Bar" data-node-id="1:1134">
        <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Notch" data-node-id="1:1135" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]" data-name="Status Icons" data-node-id="1:1139">
          <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal / A0Light" data-node-id="1:1140">
            <img alt="" className="block max-w-none size-full" src={imgNetworkSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light" data-node-id="1:1149">
            <img alt="" className="block max-w-none size-full" src={imgWiFiSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light" data-node-id="1:1153">
            <img alt="" className="block max-w-none size-full" src={imgBatteryLight} />
          </div>
        </div>
        <div className="absolute right-[71px] size-[6px] top-[8px]" data-name="Indicator" data-node-id="1:1163">
          <img alt="" className="block max-w-none size-full" src={imgIndicator} />
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Time / Light" data-node-id="1:1165">
          <div className="absolute h-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41" data-node-id="1:1166" style={{ left: "calc(50% + 0.5px)" }}>
            <img alt="" className="block max-w-none size-full" src={img941} />
          </div>
        </div>
      </div>
    </div>
  );
}
