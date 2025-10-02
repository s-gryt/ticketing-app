import imgImgLogo from "./images/fe94ff56d84757cf563f346a34395ecab09490e6.png";
import imgImgLogo1 from "./images/7cf78ddc6a247e15bf19de8c8f5cbf913d75128a.png";
import imgImgLogo2 from "./images/21b8510bea05ee268fdf4a9f7f5394a141e41ea5.png";
import imgImgLogo3 from "./images/e457e3c2031683dd25e6d284d02f3be3512b5c8f.png";
import imgNetworkSignalLight from "./images/46823cc49f385a39a180d4607bd78b50500ede52.svg";
import imgWiFiSignalLight from "./images/f27a156fde9ca0317ce34ba27116d5c10ead46e3.svg";
import imgBatteryLight from "./images/f6609037bb671b83b7638342ff758f6cbcc09893.svg";
import imgIndicator from "./images/bebb99a14926b97882cbc50d061b2bb668daa005.svg";
import img941 from "./images/7e44c2049b7cb27ff9c88c4e3d7b45d2a3c2e531.svg";
import imgIcBack from "./images/e16403343626fc30c4d5c92a8259a35cf2e1a83b.svg";
import imgIcArrow from "./images/608a29b520837fa24b4c026de12bdc728cc3b746.svg";
import imgPoint from "./images/4aa9811cb25979c5b5be5d019d8699f1e62e0a40.svg";
import imgDivider from "./images/4341a4fda946cf9e7cef32542ecb085f5bcc5033.svg";
import imgPoint1 from "./images/415346bbcd3cbce5d47353976a9ffed8fcbfdae2.svg";
import imgDivider1 from "./images/b81505ab1fb62a7c06f49ffcb5686f01b88e8ef1.svg";
import imgPoint2 from "./images/898f94422635dec04b35b3cc529f578fbc7470bb.svg";
import imgIcPlane from "./images/a5694d15c04a5bbcf918f094011afcb628e5ea7e.svg";
import imgIcFilter from "./images/30f1c907b61ee1575db9b1164300f0dc4eb67a82.svg";

export default function FlightTicketResults() {
  return (
    <div className="bg-white relative size-full" data-name="Flight Ticket Results" data-node-id="1:377">
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="Status Bar" data-node-id="1:378">
        <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Notch" data-node-id="1:379" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]" data-name="Status Icons" data-node-id="1:383">
          <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal / Light" data-node-id="1:384">
            <img alt="" className="block max-w-none size-full" src={imgNetworkSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light" data-node-id="1:393">
            <img alt="" className="block max-w-none size-full" src={imgWiFiSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light" data-node-id="1:397">
            <img alt="" className="block max-w-none size-full" src={imgBatteryLight} />
          </div>
        </div>
        <div className="absolute right-[71px] size-[6px] top-[8px]" data-name="Indicator" data-node-id="1:407">
          <img alt="" className="block max-w-none size-full" src={imgIndicator} />
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Time / Light" data-node-id="1:409">
          <div className="absolute h-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41" data-node-id="1:410" style={{ left: "calc(50% + 0.5px)" }}>
            <img alt="" className="block max-w-none size-full" src={img941} />
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex items-center justify-center left-0 overflow-clip pb-[24px] pt-[8px] px-0 top-[44px] w-[375px]" data-name="Section" data-node-id="1:412">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Container" data-node-id="1:413">
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0" data-name="Content" data-node-id="1:414">
            <div className="bg-white box-border content-stretch flex gap-[12px] items-start justify-center pb-[16px] pt-0 px-[24px] relative shrink-0 w-[375px]" data-name="top-bar" data-node-id="1:415">
              <div aria-hidden="true" className="absolute border-[#eef0eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="ic-back" data-node-id="1:416">
                <img alt="" className="block max-w-none size-full" src={imgIcBack} />
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content" data-node-id="1:419">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="title" data-node-id="1:420">
                  <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141511] text-[16px] text-center text-nowrap whitespace-pre" data-node-id="1:421">
                    Jakarta (CGK)
                  </p>
                  <div className="relative shrink-0 size-[16px]" data-name="ic-arrow" data-node-id="1:422">
                    <img alt="" className="block max-w-none size-full" src={imgIcArrow} />
                  </div>
                  <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141511] text-[16px] text-center text-nowrap whitespace-pre" data-node-id="1:425">
                    Yogyakarta (YIA)
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="description" data-node-id="1:426">
                  <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-nowrap text-right whitespace-pre" data-node-id="1:427">
                    1 Passenger
                  </p>
                  <div className="relative shrink-0 size-[4px]" data-name="point" data-node-id="1:428">
                    <img alt="" className="block max-w-none size-full" src={imgPoint} />
                  </div>
                  <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-nowrap whitespace-pre" data-node-id="1:429">
                    Ekonomi
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-[410px]" data-name="date-group" data-node-id="1:430">
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[81.75px]" data-name="date-active" data-node-id="1:431">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="date" data-node-id="1:432">
                  <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c6ae4] text-[14px] text-center" data-node-id="1:433">
                    Fri, 24 Feb
                  </p>
                </div>
                <div className="bg-[#1c6ae4] h-[3px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[68px]" data-name="active-bar" data-node-id="1:434" />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[81.75px]" data-name="date" data-node-id="1:435">
                <p className="font-['General_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center w-full" data-node-id="1:436">
                  Sat, 25 Feb
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[81.75px]" data-name="date" data-node-id="1:437">
                <p className="font-['General_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center w-full" data-node-id="1:438">
                  Sun, 26 Feb
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[81.75px]" data-name="date" data-node-id="1:439">
                <p className="font-['General_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-center w-full" data-node-id="1:440">
                  Mon, 27 Feb
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="ticket-group" data-node-id="1:441">
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ticket" data-node-id="1:442">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="logo-price" data-node-id="1:443">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="logo" data-node-id="1:444">
                    <div className="h-[32px] relative shrink-0 w-[57.725px]" data-name="img-logo" data-node-id="1:445">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo} />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="price" data-node-id="1:446">
                    <p className="font-['General_Sans:Semibold',_sans-serif] leading-[24px] relative shrink-0 text-[#1c6ae4] text-[16px] w-full" data-node-id="1:447">
                      $779.58
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#ee3d60] text-[14px] w-full" data-node-id="1:448">
                      5 Left
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:449">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content" data-node-id="1:450">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="departure" data-node-id="1:451">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:452">
                      Jakarta (CGK)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:453">
                      08:00 AM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:454">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="arrival" data-node-id="1:455">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:456">
                      Yogyakarta (YIA)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:457">
                      09:15 AM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:458">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="absolute bottom-[-6px] content-stretch flex flex-col gap-[16px] items-center left-1/2 translate-x-[-50%] w-[121px]" data-name="duration" data-node-id="1:459">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="point-group" data-node-id="1:460">
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:461">
                        <img alt="" className="block max-w-none size-full" src={imgPoint1} />
                      </div>
                      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider" data-node-id="1:462">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:463">
                        <img alt="" className="block max-w-none size-full" src={imgPoint2} />
                      </div>
                      <div className="absolute size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ic-plane" data-node-id="1:464" style={{ left: "calc(50% - 0.5px)" }}>
                        <img alt="" className="block max-w-none size-full" src={imgIcPlane} />
                      </div>
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8c8d89] text-[12px] text-center w-full" data-node-id="1:467">
                      Duration 1h 15m
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ticket" data-node-id="1:468">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="logo-price" data-node-id="1:469">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="logo" data-node-id="1:470">
                    <div className="h-[32px] relative shrink-0 w-[52.22px]" data-name="img-logo" data-node-id="1:471">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo1} />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="price" data-node-id="1:472">
                    <p className="font-['General_Sans:Semibold',_sans-serif] leading-[24px] relative shrink-0 text-[#1c6ae4] text-[16px] w-full" data-node-id="1:473">
                      $475.22
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#28c584] text-[14px] w-full" data-node-id="1:474">
                      Available
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:475">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content" data-node-id="1:476">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="departure" data-node-id="1:477">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:478">
                      Jakarta (CGK)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:479">
                      12:00 PM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:480">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="arrival" data-node-id="1:481">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:482">
                      Yogyakarta (YIA)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:483">
                      01:15 PM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:484">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="absolute bottom-[-6px] content-stretch flex flex-col gap-[16px] items-center left-1/2 translate-x-[-50%] w-[121px]" data-name="duration" data-node-id="1:485">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="point-group" data-node-id="1:486">
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:487">
                        <img alt="" className="block max-w-none size-full" src={imgPoint1} />
                      </div>
                      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider" data-node-id="1:488">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:489">
                        <img alt="" className="block max-w-none size-full" src={imgPoint2} />
                      </div>
                      <div className="absolute size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ic-plane" data-node-id="1:490" style={{ left: "calc(50% - 0.5px)" }}>
                        <img alt="" className="block max-w-none size-full" src={imgIcPlane} />
                      </div>
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8c8d89] text-[12px] text-center w-full" data-node-id="1:493">
                      Duration 1h 15m
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ticket" data-node-id="1:494">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="logo-price" data-node-id="1:495">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="logo" data-node-id="1:496">
                    <div className="h-[32px] relative shrink-0 w-[64px]" data-name="img-logo" data-node-id="1:497">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo2} />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="price" data-node-id="1:498">
                    <p className="font-['General_Sans:Semibold',_sans-serif] leading-[24px] relative shrink-0 text-[#1c6ae4] text-[16px] w-full" data-node-id="1:499">
                      $576.28
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#ee3d60] text-[14px] w-full" data-node-id="1:500">
                      12 Left
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:501">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content" data-node-id="1:502">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="departure" data-node-id="1:503">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:504">
                      Jakarta (CGK)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:505">
                      08:00 AM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:506">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="arrival" data-node-id="1:507">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:508">
                      Yogyakarta (YIA)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:509">
                      09:15 AM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:510">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="absolute bottom-[-6px] content-stretch flex flex-col gap-[16px] items-center left-1/2 translate-x-[-50%] w-[121px]" data-name="duration" data-node-id="1:511">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="point-group" data-node-id="1:512">
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:513">
                        <img alt="" className="block max-w-none size-full" src={imgPoint1} />
                      </div>
                      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider" data-node-id="1:514">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:515">
                        <img alt="" className="block max-w-none size-full" src={imgPoint2} />
                      </div>
                      <div className="absolute size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ic-plane" data-node-id="1:516" style={{ left: "calc(50% - 0.5px)" }}>
                        <img alt="" className="block max-w-none size-full" src={imgIcPlane} />
                      </div>
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8c8d89] text-[12px] text-center w-full" data-node-id="1:519">
                      Duration 1h 15m
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ticket" data-node-id="1:520">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="logo-price" data-node-id="1:521">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="logo" data-node-id="1:522">
                    <div className="h-[24px] relative shrink-0 w-[57.909px]" data-name="img-logo" data-node-id="1:523">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo3} />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="price" data-node-id="1:524">
                    <p className="font-['General_Sans:Semibold',_sans-serif] leading-[24px] relative shrink-0 text-[#1c6ae4] text-[16px] w-full" data-node-id="1:525">
                      $328.85
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#28c584] text-[14px] w-full" data-node-id="1:526">
                      Available
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:527">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content" data-node-id="1:528">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="departure" data-node-id="1:529">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:530">
                      Jakarta (CGK)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:531">
                      08:00 AM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:532">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="arrival" data-node-id="1:533">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:534">
                      Yogyakarta (YIA)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:535">
                      10:00 AM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:536">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="absolute bottom-[-6px] content-stretch flex flex-col gap-[16px] items-center left-1/2 translate-x-[-50%] w-[121px]" data-name="duration" data-node-id="1:537">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="point-group" data-node-id="1:538">
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:539">
                        <img alt="" className="block max-w-none size-full" src={imgPoint1} />
                      </div>
                      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider" data-node-id="1:540">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:541">
                        <img alt="" className="block max-w-none size-full" src={imgPoint2} />
                      </div>
                      <div className="absolute size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ic-plane" data-node-id="1:542" style={{ left: "calc(50% - 0.5px)" }}>
                        <img alt="" className="block max-w-none size-full" src={imgIcPlane} />
                      </div>
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8c8d89] text-[12px] text-center w-full" data-node-id="1:545">
                      Duration 2h 0m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] rounded-[2px] top-[740px] w-[150px]" data-name="sort-filter" data-node-id="1:546" style={{ left: "calc(25% + 19.25px)" }}>
        <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_4px_4px_0px_rgba(29,40,52,0.12)]" />
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="title" data-node-id="1:547">
          <div className="relative shrink-0 size-[24px]" data-name="ic-filter" data-node-id="1:548">
            <img alt="" className="block max-w-none size-full" src={imgIcFilter} />
          </div>
          <p className="font-['General_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] text-nowrap whitespace-pre" data-node-id="1:550">{`Sort & Filter`}</p>
        </div>
      </div>
    </div>
  );
}
