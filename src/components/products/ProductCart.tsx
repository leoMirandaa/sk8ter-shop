import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  img: ImageProps;
}

interface ImageProps {
  url: string;
}

export const ProductCart = ({ id, name, img, price }: ProductProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <span
      key={name}
      className="cursor-pointer header__hoverBoard border-300 border-1 text-center p-2"
      onClick={() => console.log(id)}
    >
      <Image
        width="80px"
        src={img.url}
        alt={name}
        preview
      />
      <div className="text-center">
        <h3 className="my-1">{name}</h3>
        <h5 className="mt-0 text-600">$ {price} USD</h5>
      </div>

      <div>
        <Button
          label="Preview"
          severity="secondary"
          className="mr-3"
          outlined
          onClick={() => setIsVisible(true)}
          // icon="pi pi-eye"
        />
        <Button icon="pi pi-shopping-cart" />
      </div>
      <Dialog
        visible={isVisible}
        style={{ width: "50vw", textAlign: "center" }}
        onHide={() => setIsVisible(false)}
      >
        <img
          src={img.url}
          alt={name}
        />
      </Dialog>
    </span>
  );
};
