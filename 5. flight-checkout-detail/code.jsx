import imgImgLogo from "./images/7cf78ddc6a247e15bf19de8c8f5cbf913d75128a.png";
import imgIcBack from "./images/762cf1dac230b748d4181536d3042f902ab8b4d5.svg";
import imgIcClock from "./images/942dc447cce9ed285cf7229e397631134043e90f.svg";
import imgDivider from "./images/4341a4fda946cf9e7cef32542ecb085f5bcc5033.svg";
import imgPoint from "./images/415346bbcd3cbce5d47353976a9ffed8fcbfdae2.svg";
import imgDivider1 from "./images/b81505ab1fb62a7c06f49ffcb5686f01b88e8ef1.svg";
import imgPoint1 from "./images/898f94422635dec04b35b3cc529f578fbc7470bb.svg";
import imgIcPlane from "./images/a5694d15c04a5bbcf918f094011afcb628e5ea7e.svg";
import imgPoint2 from "./images/4aa9811cb25979c5b5be5d019d8699f1e62e0a40.svg";
import imgIcShield from "./images/56e87f4fa7f8a4a3885bd4c1425c12cb1c0cc9fc.svg";
import imgCheckbox from "./images/a848d54197386804349d53f73ab789ac651e57f3.svg";
import imgNetworkSignalLight from "./images/a27a48e4674cf09939d626ff30960277cda74ff4.svg";
import imgWiFiSignalLight from "./images/bb5a50d187ddc2e754392af39c8e419aced7b1e6.svg";
import imgBatteryLight from "./images/f6609037bb671b83b7638342ff758f6cbcc09893.svg";
import imgIndicator from "./images/bebb99a14926b97882cbc50d061b2bb668daa005.svg";
import img941 from "./images/ba76971ee0a376ca50f8b2cfe7cb504a335b2cf1.svg";

export default function FlightCheckOutDetail() {
  return (
    <div className="bg-white relative size-full" data-name="Flight Check Out Detail" data-node-id="1:1168">
      <div className="absolute box-border content-stretch flex items-center justify-center left-0 overflow-clip pb-[24px] pt-[8px] px-0 top-[44px] w-[375px]" data-name="Section" data-node-id="1:1169">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[375px]" data-name="Container" data-node-id="1:1170">
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0" data-name="Content" data-node-id="1:1171">
            <div className="bg-white box-border content-stretch flex gap-[12px] items-start justify-center pb-[16px] pt-0 px-[24px] relative shrink-0 w-[375px]" data-name="top-bar" data-node-id="1:1172">
              <div aria-hidden="true" className="absolute border-[#eef0eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="ic-back" data-node-id="1:1173">
                <img alt="" className="block max-w-none size-full" src={imgIcBack} />
              </div>
              <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px] text-center" data-node-id="1:1176">
                Order Details
              </p>
            </div>
            <div className="bg-[#fde6eb] box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-[327px]" data-name="alert-time" data-node-id="1:1177">
              <div className="relative shrink-0 size-[20px]" data-name="ic-clock" data-node-id="1:1178">
                <img alt="" className="block max-w-none size-full" src={imgIcClock} />
              </div>
              <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#ee3d60] text-[0px] text-[14px]" data-node-id="1:1181">
                <span>{`The remaining time of order `}</span>
                <span className="font-['General_Sans:Semibold',_sans-serif]">00:06:12</span>
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="trip-detail" data-node-id="1:1182">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="title" data-node-id="1:1183">
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px]" data-node-id="1:1184">
                  Your Trip
                </p>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ticket" data-node-id="1:1185">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="logo-cta" data-node-id="1:1186">
                  <div className="h-[32px] relative shrink-0 w-[52.22px]" data-name="img-logo" data-node-id="1:1187">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px relative shrink-0" data-name="cta-viewdetails" data-node-id="1:1188">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1c6ae4] text-[14px] text-right w-full" data-node-id="1:1189">
                      View Details
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:1190">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content" data-node-id="1:1191">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="departure" data-node-id="1:1192">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1193">
                      Jakarta (CGK)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1194">
                      12:00 PM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:1195">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="arrival" data-node-id="1:1196">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1197">
                      Yogyakarta (YIA)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1198">
                      01:15 PM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:1199">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="absolute bottom-[-6px] content-stretch flex flex-col gap-[16px] items-center left-1/2 translate-x-[-50%] w-[121px]" data-name="duration" data-node-id="1:1200">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="point-group" data-node-id="1:1201">
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:1202">
                        <img alt="" className="block max-w-none size-full" src={imgPoint} />
                      </div>
                      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider" data-node-id="1:1203">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:1204">
                        <img alt="" className="block max-w-none size-full" src={imgPoint1} />
                      </div>
                      <div className="absolute size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ic-plane" data-node-id="1:1205" style={{ left: "calc(50% - 0.5px)" }}>
                        <img alt="" className="block max-w-none size-full" src={imgIcPlane} />
                      </div>
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8c8d89] text-[12px] text-center w-full" data-node-id="1:1208">
                      Duration 1h 15m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="passenger-list" data-node-id="1:1209">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="title" data-node-id="1:1210">
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px]" data-node-id="1:1211">
                  Passenger List
                </p>
              </div>
              <div className="bg-white box-border content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="content" data-node-id="1:1212">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="data" data-node-id="1:1213">
                  <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1214">
                    Cameron Williamson
                  </p>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="description" data-node-id="1:1215">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-nowrap text-right whitespace-pre" data-node-id="1:1216">
                      Economy
                    </p>
                    <div className="relative shrink-0 size-[4px]" data-name="point" data-node-id="1:1217">
                      <img alt="" className="block max-w-none size-full" src={imgPoint2} />
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8c8d89] text-[14px] text-nowrap whitespace-pre" data-node-id="1:1218">
                      8D
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-50 box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="cta-seat" data-node-id="1:1219">
                  <p className="font-['General_Sans:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c6ae4] text-[12px] text-center text-nowrap whitespace-pre" data-node-id="1:1220">
                    Change Seat
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="protect-trip" data-node-id="1:1221">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="title" data-node-id="1:1222">
                <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="checkbox" data-node-id="1:1223">
                  <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                </div>
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px]" data-node-id="1:1224">
                  Protect Your Trip
                </p>
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1c6ae4] text-[0px] text-right" data-node-id="1:1225">
                  <span className="leading-[24px] text-[16px]">$5 </span>
                  <span className="font-['General_Sans:Regular',_sans-serif] leading-[20px] text-[12px]">per passenger</span>
                </p>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="content-group" data-node-id="1:1226">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex gap-[12px] items-start relative rounded-[2px] shrink-0 w-full" data-name="content" data-node-id="1:1227">
                  <div className="relative shrink-0 size-[24px]" data-name="ic-shield" data-node-id="1:1228">
                    <img alt="" className="block max-w-none size-full" src={imgIcShield} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col font-['General_Sans:Regular',_sans-serif] gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="text-content" data-node-id="1:1230">
                    <p className="leading-[22px] relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1231">
                      Extra Protection
                    </p>
                    <div className="leading-[20px] relative shrink-0 text-[#8c8d89] text-[0px] text-[12px] w-full" data-node-id="1:1232">
                      <p className="font-['General_Sans:Regular',_sans-serif] mb-0">Protect your trip to get insurance in the event of an accident. Accident compensation up to $800.</p>
                      <p className="font-['General_Sans:Medium',_sans-serif] text-[#1c6ae4]">More info.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327px]" data-name="terms-conditions" data-node-id="1:1233">
              <div className="relative shrink-0 size-[16px]" data-name="checkbox" data-node-id="1:1234">
                <img alt="" className="block max-w-none size-full" src={imgCheckbox} />
              </div>
              <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[0px] text-[14px]" data-node-id="1:1236">
                I have<span>{` a`}</span>
                <span>{`greed `}</span>
                <span>{`to `}</span>the Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 px-[24px] py-[16px] top-[732px] w-[375px]" data-name="cta-group" data-node-id="1:1237">
        <div aria-hidden="true" className="absolute border-[#eef0eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="price" data-node-id="1:1238">
          <p className="font-['General_Sans:Semibold',_sans-serif] leading-[24px] relative shrink-0 text-[#1c6ae4] text-[16px] w-full" data-node-id="1:1239">
            $475.22
          </p>
          <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1240">
            Total price
          </p>
        </div>
        <div className="basis-0 bg-[#1c6ae4] box-border content-stretch flex gap-[12px] grow h-[48px] items-center justify-center min-h-px min-w-px px-[12px] py-0 relative rounded-[2px] shrink-0" data-name="cta-payment" data-node-id="1:1241">
          <p className="font-['General_Sans:Semibold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre" data-node-id="1:1242">
            Proceed to Payment
          </p>
        </div>
      </div>
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="Status Bar" data-node-id="1:1243">
        <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Notch" data-node-id="1:1244" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]" data-name="Status Icons" data-node-id="1:1248">
          <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal /\u00A0Light" data-node-id="1:1249">
            <img alt="" className="block max-w-none size-full" src={imgNetworkSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light" data-node-id="1:1258">
            <img alt="" className="block max-w-none size-full" src={imgWiFiSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light" data-node-id="1:1262">
            <img alt="" className="block max-w-none size-full" src={imgBatteryLight} />
          </div>
        </div>
        <div className="absolute right-[71px] size-[6px] top-[8px]" data-name="Indicator" data-node-id="1:1272">
          <img alt="" className="block max-w-none size-full" src={imgIndicator} />
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Time / Light" data-node-id="1:1274">
          <div className="absolute h-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41" data-node-id="1:1275" style={{ left: "calc(50% + 0.5px)" }}>
            <img alt="" className="block max-w-none size-full" src={img941} />
          </div>
        </div>
      </div>
    </div>
  );
}
