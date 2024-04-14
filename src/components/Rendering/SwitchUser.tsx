import { useContext, useState } from "react";
import {
  SwitchUserWrapper,
  BuyerOption,
  SellerOption,
  BuyerActive,
  BuyerInactive,
  SellerActive,
  SellerInactive,
} from "../Styling/SwitchUserStyles";

interface switchUserProps {
  position: {
    top: number;
    right: number;
  };
}

import { UserContext } from "./UserType";

const SwitchUser = ({ position }: switchUserProps) => {
  const { userType, setUserType } = useContext(UserContext);

  const handleUserChange = (user: String) => {
    if (user == "buyer") {
      setUserType("buyer");
    } else if ((user = "seller")) {
      setUserType("seller");
    }
  };

  return (
    <>
      <SwitchUserWrapper position={position}>
        {userType == "buyer" ? (
          <BuyerOption
            fontColor={BuyerActive.buyerOptionStyle.color}
            bgColor={BuyerActive.buyerOptionStyle.bgColor}
            onClick={() => handleUserChange("buyer")}
          >
            Buyer
          </BuyerOption>
        ) : (
          <BuyerOption
            fontColor={BuyerInactive.buyerOptionStyle.color}
            bgColor={BuyerInactive.buyerOptionStyle.bgColor}
            onClick={() => handleUserChange("buyer")}
          >
            Buyer
          </BuyerOption>
        )}
        {userType == "seller" ? (
          <SellerOption
            fontColor={SellerActive.sellerOptionStyle.color}
            bgColor={SellerActive.sellerOptionStyle.bgColor}
            onClick={() => handleUserChange("seller")}
          >
            Seller
          </SellerOption>
        ) : (
          <SellerOption
            fontColor={SellerInactive.sellerOptionStyle.color}
            bgColor={SellerInactive.sellerOptionStyle.bgColor}
            onClick={() => handleUserChange("seller")}
          >
            Seller
          </SellerOption>
        )}
      </SwitchUserWrapper>
    </>
  );
};

export default SwitchUser;
