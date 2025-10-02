import imgIcBack from "./images/dba395b7b1edf3bfc9e90ebe7deb632ad9d3a835.svg";
import imgIcSuccess from "./images/7afa11895d9596d07a634d742d8406fb5e56fcc3.svg";
import imgDivider from "./images/bbb5015be84885dffefdc1ff4b7c0ed506e998d0.svg";
import imgIcDownload from "./images/4564ba51a75e37b3a63a45fbf994472ac3812d89.svg";
import imgNetworkSignalLight from "./images/a27a48e4674cf09939d626ff30960277cda74ff4.svg";
import imgWiFiSignalLight from "./images/bb5a50d187ddc2e754392af39c8e419aced7b1e6.svg";
import imgBatteryLight from "./images/f6609037bb671b83b7638342ff758f6cbcc09893.svg";
import imgIndicator from "./images/bebb99a14926b97882cbc50d061b2bb668daa005.svg";
import img941 from "./images/ba76971ee0a376ca50f8b2cfe7cb504a335b2cf1.svg";

export default function PaymentSuccess() {
  return (
    <div className="bg-white relative size-full" data-name="Payment Success" data-node-id="1:1449">
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="Status Bar" data-node-id="1:1491">
        <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Notch" data-node-id="1:1492" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]" data-name="Status Icons" data-node-id="1:1496">
          <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal / Light" data-node-id="1:1497">
            <img alt="" className="block max-w-none size-full" src={imgNetworkSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light" data-node-id="1:1506">
            <img alt="" className="block max-w-none size-full" src={imgWiFiSignalLight} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light" data-node-id="1:1510">
            <img alt="" className="block max-w-none size-full" src={imgBatteryLight} />
          </div>
        </div>
        <div className="absolute right-[71px] size-[6px] top-[8px]" data-name="Indicator" data-node-id="1:1520">
          <img alt="" className="block max-w-none size-full" src={imgIndicator} />
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Time / Light" data-node-id="1:1522">
          <div className="absolute h-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41" data-node-id="1:1523" style={{ left: "calc(50% + 0.5px)" }}>
            <img alt="" className="block max-w-none size-full" src={img941} />
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex items-center justify-center left-0 px-0 py-[24px] top-[44px] w-[375px]" data-name="Section" data-node-id="1:1449">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Container" data-node-id="1:1450">
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0" data-name="Content" data-node-id="1:1451">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327px]" data-name="top-bar" data-node-id="1:1452">
              <div className="relative shrink-0 size-[24px]" data-name="ic-back" data-node-id="1:1453">
                <img alt="" className="block max-w-none size-full" src={imgIcBack} />
              </div>
              <p className="basis-0 font-['General_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#141511] text-[16px] text-center" data-node-id="1:1456">
                Payment Status
              </p>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-center justify-center p-[16px] relative rounded-[2px] shrink-0 w-full" data-name="payment-status" data-node-id="1:1457">
              <div aria-hidden="true" className="absolute border border-[#eef0eb] border-solid inset-0 pointer-events-none rounded-[2px]" />
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="success" data-node-id="1:1458">
                <div className="bg-[#ff7a1a] rounded-full relative shrink-0 size-[100px]" data-name="ic-success" data-node-id="1:1459">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcSuccess} />
                </div>
                <p className="font-['General_Sans:Medium',_sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#141511] text-[20px] text-center" data-node-id="1:1461" style={{ width: "min-content" }}>
                  Your payment was successful!
                </p>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:1462">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgDivider} />
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="payment-details" data-node-id="1:1463">
                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="detail-group" data-node-id="1:1464">
                  <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="invoice" data-node-id="1:1465">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1466">
                      Invoice Number
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1467">
                      INV567489240UI
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="date" data-node-id="1:1468">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1469">
                      Date
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1470">
                      24 February 2023
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="amount" data-node-id="1:1471">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1472">
                      Amount Paid
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1473">
                      $475.22
                    </p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-end min-h-px min-w-px relative shrink-0" data-name="detail-group" data-node-id="1:1474">
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right w-full" data-name="payment-method" data-node-id="1:1475">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1476">
                      Payment Method
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1477">
                      e-Money
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right w-full" data-name="time" data-node-id="1:1478">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1479">
                      Time
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1480">
                      09:41 AM
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end min-h-px min-w-px not-italic relative shrink-0 text-right w-full" data-name="status" data-node-id="1:1481">
                    <p className="font-['General_Sans:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#8c8d89] text-[14px] w-full" data-node-id="1:1482">
                      Status
                    </p>
                    <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#141511] text-[16px] w-full" data-node-id="1:1483">
                      Successful
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-name="divider" data-node-id="1:1484">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgDivider} />
                </div>
              </div>
              <div className="bg-neutral-50 box-border content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[16px] py-[12px] relative rounded-[2px] shrink-0 w-[295px]" data-name="cta-download" data-node-id="1:1485">
                <div className="relative shrink-0 size-[20px]" data-name="ic-download" data-node-id="1:1486">
                  <img alt="" className="block max-w-none size-full" src={imgIcDownload} />
                </div>
                <p className="font-['General_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1c6ae4] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="1:1490">
                  Download Invoice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-0 px-[24px] py-[16px] top-[732px] w-[375px]" data-name="cta-back" data-node-id="1:1447">
        <p className="font-['General_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1c6ae4] text-[14px]" data-node-id="1:1448">
          Return to Homepage
        </p>
      </div>
    </div>
  );
}
