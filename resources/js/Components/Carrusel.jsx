import { Carousel } from "flowbite-react";

export default function Carrusel() {
  return (
    <div className="h-80 sm:h-96 xl:h-112 2xl:h-128">
      <Carousel slideInterval={5000}>
        <picture>
          <source media="(min-width: 720px)" srcSet="/img/Diapositiva_1_Grande.png" />
          <img
            className="object-cover w-full h-full"
            src="/img/Diapositiva_1.png"
            alt="Primera Diapositiva"
          />
        </picture>
        <picture>
          <source media="(min-width: 720px)" srcSet="/img/Diapositiva_2_Grande.png" />
          <img
            className="object-cover w-full h-full"
            src="/img/Diapositiva_2.png"
            alt="Primera Diapositiva"
          />
        </picture>
        <picture>
          <source media="(min-width: 720px)" srcSet="/img/Diapositiva_3_Grande.png" />
          <img
            className="object-cover w-full h-full"
            src="/img/Diapositiva_3.png"
            alt="Primera Diapositiva"
          />
        </picture>
      </Carousel>
    </div>
  );
}
