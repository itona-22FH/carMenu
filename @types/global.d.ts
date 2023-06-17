type MenuItemProps = {
  menuItem: string;
};

type CarCatalog = {
  name: string;
  maker: string;
  image: string;
  bookmark: boolean;
};

type CarSpecification = {
  name: string;
  maker: string;
  image: string;
  model: string;
  displacement:string;
}

type Car = {
  name: string;
  maker: string;
  image: string;
  model: string;
};

type CarImageProps = {
  carData: Car[];
  category: string
};

type ToggleButtonProps = {
  bgColor: string;
  id: string;
  labelColor: string
};

type SelectSearchProps = {
  searchWord: string;
  bgImage: string;
  optionValues: string[];
  bgFilter: string;
  textColor: string;
};


type LayoutProps = {
  readonly children: ReactElement;
};
