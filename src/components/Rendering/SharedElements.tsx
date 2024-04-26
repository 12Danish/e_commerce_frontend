// Defining props for SliderItem Component

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
