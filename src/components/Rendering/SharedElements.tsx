import { Price } from "../Styling/ProductSlider1Styles/PrdouctSlider1ItemStyes";
import DiscountIcon from "@mui/icons-material/Discount";

export interface ListItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    price: number;
    sale_price: number;
    backend_detail_url: string;
    sale_item: boolean;
  };
  color?: string;
}
// Function to convert absolute path to relative path

export const EditedPrice = ({item }: ListItemProps) => {
  return (
    <>
      <Price isSale={item.sale_item}>
        {item.sale_item ? item.sale_price : item.price}{" "}
        {item.sale_item && <DiscountIcon style={{ fontSize: "small" }} />} Rs
      </Price>
    </>
  );
};

export const convertAbsolutePath = (absolutePath: string) => {
  // Assuming your absolute path starts with '/mnt/c/Users/Sheryar/PycharmProjects/construction_site/e_com_frontend/src/'
  const basePath =
    "/mnt/c/users/sheryar/pycharmprojects/construction_site/e_com_frontend";
  console.log(absolutePath);
  console.log(absolutePath.replace(basePath, ""));
  return absolutePath.replace(basePath, ""); // Replace the base path with an empty string
};

