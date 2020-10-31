import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";

function RedeemItem() {
  return (
    <div className="flex flex-row m-1 p-1 items-center bg-white rounded-lg shadow-lg">
      <div>
        <RiShoppingBagLine color="orange" size={32} />
      </div>
      <div className="flex flex-col">
        <div className="text-lg">ส่วนลด Shoppee</div>
        <div>50 ฿</div>
        <div className="bg-orange-500 p-1 rounded text-center text-white">Redeem</div>
      </div>
    </div>
  );
}

// MOCK DATA
function Redeem() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-row items-center text-2xl">🎁 Redeem</div>
        <div className="p-2 bg-blue-300 rounded-full shadow-md">50 💎</div>
      </div>
      <div className="flex flex-col py-2">
        <RedeemItem />
        <RedeemItem />
        <RedeemItem />
      </div>
    </div>
  );
}

export default Redeem;