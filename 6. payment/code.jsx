import imgImgLogo from "./images/7cf78ddc6a247e15bf19de8c8f5cbf913d75128a.png";
import imgImgLogo1 from "./images/3181fa640aa36a344fba8bfc84578579ea5f31de.png";
import imgImgLogo2 from "./images/e6bfd40e3b1e279cbe68a8e4321961b9dc442f95.png";
import imgImgLogo3 from "./images/7487306852f8c3cf9ed6ec33be6d8516c21f3bde.png";
import imgImgLogo4 from "./images/631def658a8abeaeeecc69a725e8efadb3e8403f.png";
import imgIcBack from "./images/e16403343626fc30c4d5c92a8259a35cf2e1a83b.svg";
import imgIcClock from "./images/942dc447cce9ed285cf7229e397631134043e90f.svg";
import imgDivider from "./images/4341a4fda946cf9e7cef32542ecb085f5bcc5033.svg";
import imgPoint from "./images/415346bbcd3cbce5d47353976a9ffed8fcbfdae2.svg";
import imgDivider1 from "./images/b81505ab1fb62a7c06f49ffcb5686f01b88e8ef1.svg";
import imgPoint1 from "./images/898f94422635dec04b35b3cc529f578fbc7470bb.svg";
import imgIcPlane from "./images/a5694d15c04a5bbcf918f094011afcb628e5ea7e.svg";
import imgIcWallet from "./images/247576a97f4e7163c8d549bb1a9cf58fade1bf71.svg";
import imgIcMoney from "./images/f65d30e435236fa9750359fcdfc2d03be1f952a7.svg";
import imgIcUp from "./images/946e5eeb28f93bc45c4190101339549f88072708.svg";
import imgCheckbox from "./images/a848d54197386804349d53f73ab789ac651e57f3.svg";
import imgIcPhone from "./images/17e39b9ec6d750b44de57ca3c3a02709fb3a2bf7.svg";
import imgDropdown from "./images/4987f92f98388a171875e901bc81fff90bd0e41f.svg";
import imgIcBank from "./images/b0648a0d7c5d89ad374f9fa6935e11d141916a67.svg";
import imgIcCard from "./images/68a08227a225a42087175eb1376fb9d8e0f0e3ed.svg";
import imgNetworkSignalLight from "./images/a27a48e4674cf09939d626ff30960277cda74ff4.svg";
import imgWiFiSignalLight from "./images/bb5a50d187ddc2e754392af39c8e419aced7b1e6.svg";
import imgBatteryLight from "./images/f6609037bb671b83b7638342ff758f6cbcc09893.svg";
import imgIndicator from "./images/bebb99a14926b97882cbc50d061b2bb668daa005.svg";
import img941 from "./images/ba76971ee0a376ca50f8b2cfe7cb504a335b2cf1.svg";

export default function Payment() {
  return (
    <div className="bg-white relative size-full" data-name="Payment" data-node-id="1:1277">
      <div className="absolute box-border content-stretch flex items-center justify-center left-0 overflow-clip pb-[24px] pt-[8px] px-0 top-[44px] w-[375px]" data-name="Section" data-node-id="1:1278">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[375px]" data-name="Container" data-node-id="1:1279">
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0" data-name="Content" data-node-id="1:1280">
            <div className="bg-white box-border content-stretch flex gap-[12px] items-start justify-center pb-[16px] pt-0 px-[24px] relative shrink-0 w-[375px]" data-name="top-bar" data-node-id="1:1281">
              <div aria-hidden="true" className="absolute border-[#eef0eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="ic-back" data-node-id="1:1282">
                <img alt="" className="block max-w-none size-full" src={imgIcBack} />
              </div>
              <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px] text-center" data-node-id="1:1285">
                Payment
              </p>
            </div>
            <div className="bg-[#fde6eb] box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-[327px]" data-name="alert-time" data-node-id="1:1286">
              <div className="relative shrink-0 size-[20px]" data-name="ic-clock" data-node-id="1:1287">
                <img alt="" className="block max-w-none size-full" src={imgIcClock} />
              </div>
              <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#ee3d60] text-[0px] text-[14px]" data-node-id="1:1290">
                <span>{`The remaining time of order `}</span>
                <span className="font-['General_Sans:Semibold',_sans-serif]">00:05:49</span>
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="trip-detail" data-node-id="1:1291">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="title" data-node-id="1:1292">
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px]" data-node-id="1:1293">
                  Your Trip
                </p>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[2px] shrink-0 w-full" data-name="ticket" data-node-id="1:1294">
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="logo-cta" data-node-id="1:1295">
                  <div className="h-[32px] relative shrink-0 w-[52.22px]" data-name="img-logo" data-node-id="1:1296">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo} />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px relative shrink-0" data-name="cta-viewdetails" data-node-id="1:1297">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1c6ae4] text-[14px] text-right w-full" data-node-id="1:1298">
                      View Details
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:1299">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content" data-node-id="1:1300">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="departure" data-node-id="1:1301">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1302">
                      Jakarta (CGK)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1303">
                      12:00 PM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:1304">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right" data-name="arrival" data-node-id="1:1305">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1306">
                      Yogyakarta (YIA)
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1307">
                      01:15 PM
                    </p>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#8c8d89] text-[12px] w-full" data-node-id="1:1308">
                      24 Feb 2023
                    </p>
                  </div>
                  <div className="absolute bottom-[-6px] content-stretch flex flex-col gap-[16px] items-center left-1/2 translate-x-[-50%] w-[121px]" data-name="duration" data-node-id="1:1309">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="point-group" data-node-id="1:1310">
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:1311">
                        <img alt="" className="block max-w-none size-full" src={imgPoint} />
                      </div>
                      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider" data-node-id="1:1312">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[6px]" data-name="point" data-node-id="1:1313">
                        <img alt="" className="block max-w-none size-full" src={imgPoint1} />
                      </div>
                      <div className="absolute size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ic-plane" data-node-id="1:1314" style={{ left: "calc(50% - 0.5px)" }}>
                        <img alt="" className="block max-w-none size-full" src={imgIcPlane} />
                      </div>
                    </div>
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8c8d89] text-[12px] text-center w-full" data-node-id="1:1317">
                      Duration 1h 15m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="payment-method" data-node-id="1:1318">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="title" data-node-id="1:1319">
                <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px]" data-node-id="1:1320">
                  Payment Method
                </p>
              </div>
              <div className="bg-white relative rounded-[2px] shrink-0 w-full" data-name="payment-group" data-node-id="1:1321">
                <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip p-[12px] relative w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="paylater" data-node-id="1:1322">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-wallet" data-node-id="1:1323">
                      <img alt="" className="block max-w-none size-full" src={imgIcWallet} />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1326">
                      <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1327">
                        Paylater
                      </p>
                    </div>
                    <div className="bg-neutral-50 box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="cta-activate" data-node-id="1:1328">
                      <p className="font-['General_Sans:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c6ae4] text-[12px] text-center text-nowrap whitespace-pre" data-node-id="1:1329">
                        Activate Now
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="emoney-group" data-node-id="1:1330">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-money" data-node-id="1:1331">
                      <img alt="" className="block max-w-none size-full" src={imgIcMoney} />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="emoney-dropdown" data-node-id="1:1338">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="title" data-node-id="1:1339">
                        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="subtitle" data-node-id="1:1340">
                          <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1341">
                            e-Money
                          </p>
                        </div>
                        <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
                          <div className="flex-none rotate-[90deg]">
                            <div className="relative size-[16px]" data-name="ic-up" data-node-id="1:1342">
                              <img alt="" className="block max-w-none size-full" src={imgIcUp} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="emoney" data-node-id="1:1345">
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="paypal" data-node-id="1:1346">
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="img-logo" data-node-id="1:1347">
                            <div className="relative shrink-0 size-[16px]" data-name="img-logo" data-node-id="1:1348">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo1} />
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1349">
                            <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1350">
                              Paypal
                            </p>
                          </div>
                          <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="checkbox" data-node-id="1:1351">
                            <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="gopay" data-node-id="1:1352">
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="img-logo" data-node-id="1:1353">
                            <div className="relative shrink-0 size-[16px]" data-name="img-logo" data-node-id="1:1354">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo2} />
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1355">
                            <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1356">
                              Gopay
                            </p>
                          </div>
                          <div className="relative shrink-0 size-[16px]" data-name="checkbox" data-node-id="1:1357">
                            <img alt="" className="block max-w-none size-full" src={imgCheckbox} />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="apple-pay" data-node-id="1:1359">
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="img-logo" data-node-id="1:1360">
                            <div className="h-[16px] relative shrink-0 w-[13.023px]" data-name="img-logo" data-node-id="1:1361">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLogo3} />
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1362">
                            <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1363">
                              Apple Pay
                            </p>
                          </div>
                          <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="checkbox" data-node-id="1:1364">
                            <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="amazon-pay" data-node-id="1:1365">
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="img-logo" data-node-id="1:1366">
                            <div className="relative rounded-[100px] shrink-0 size-[16px]" data-name="img-logo" data-node-id="1:1367">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImgLogo4} />
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1368">
                            <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1369">
                              Amazon Pay
                            </p>
                          </div>
                          <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="checkbox" data-node-id="1:1370">
                            <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="virtual-account" data-node-id="1:1371">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-phone" data-node-id="1:1372">
                      <img alt="" className="block max-w-none size-full" src={imgIcPhone} />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1376">
                      <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1377">
                        Virtual Account
                      </p>
                    </div>
                    <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
                      <div className="flex-none rotate-[270deg]">
                        <div className="relative size-[16px]" data-name="dropdown" data-node-id="1:1378">
                          <img alt="" className="block max-w-none size-full" src={imgDropdown} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="bank" data-node-id="1:1381">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-bank" data-node-id="1:1382">
                      <img alt="" className="block max-w-none size-full" src={imgIcBank} />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1390">
                      <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1391">
                        Bank Transfer
                      </p>
                    </div>
                    <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
                      <div className="flex-none rotate-[270deg]">
                        <div className="relative size-[16px]" data-name="dropdown" data-node-id="1:1392">
                          <img alt="" className="block max-w-none size-full" src={imgDropdown} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="credit-card" data-node-id="1:1395">
                    <div className="relative shrink-0 size-[24px]" data-name="ic-card" data-node-id="1:1396">
                      <img alt="" className="block max-w-none size-full" src={imgIcCard} />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="title" data-node-id="1:1401">
                      <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141511] text-[14px] w-full" data-node-id="1:1402">
                        Credit Card
                      </p>
                    </div>
                    <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
                      <div className="flex-none rotate-[270deg]">
                        <div className="relative size-[16px]" data-name="dropdown" data-node-id="1:1403">
                          <img alt="" className="block max-w-none size-full" src={imgDropdown} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 px-[24px] py-[16px] top-[732px] w-[375px]" data-name="cta-group" data-node-id="1:1406">
        <div aria-hidden="true" className="absolute border-[#eef0eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="price" data-node-id="1:1407">
          <p className="font-['General_Sans:Semibold',_sans-serif] leading-[24px] relative shrink-0 text-[#1c6ae4] text-[16px] w-full" data-node-id="1:1408">
            $475.22
          </p>
          <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1409">
            Total price
          </p>
        </div>
        <div className="basis-0 bg-[#1c6ae4] box-border content-stretch flex gap-[12px] grow h-[48px] items-center justify-center min-h-px min-w-px px-[12px] py-0 relative rounded-[2px] shrink-0" data-name="cta-payment" data-node-id="1:1410">
          <p className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white" data-node-id="1:1411">
            Pay Now
          </p>
        </div>
      </div>
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="Status Bar" data-node-id="1:1412">
        <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Notch" data-node-id="1:1413" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]" data-name="Status Icons" data-node-id="1:1417">
          <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal / Light" data-node-id="1:1418">
            <img alt="" className="block max-w-none size-full" src={imgNetworkSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light" data-node-id="1:1427">
            <img alt="" className="block max-w-none size-full" src={imgWiFiSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light" data-node-id="1:1431">
            <img alt="" className="block max-w-none size-full" src={imgBatteryLight} />
          </div>
        </div>
        <div className="absolute right-[71px] size-[6px] top-[8px]" data-name="Indicator" data-node-id="1:1441">
          <img alt="" className="block max-w-none size-full" src={imgIndicator} />
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Time / Light" data-node-id="1:1443">
          <div className="absolute h-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41" data-node-id="1:1444" style={{ left: "calc(50% + 0.5px)" }}>
            <img alt="" className="block max-w-none size-full" src={img941} />
          </div>
        </div>
      </div>
    </div>
  );
}
