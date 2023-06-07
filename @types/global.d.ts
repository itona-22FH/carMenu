type MenuItemProps = {
  menuItem: string;
};

type CarCatalog = {
  name: string;
  maker: string;
  image: string;
  bookmark: boolean
}

type Car = {
  name: string;
  maker: string;
  model: string;
  image: string;
};

type CarImageProps = {
  carData: Car[]
}
