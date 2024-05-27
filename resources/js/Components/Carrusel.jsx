import { Carousel } from "flowbite-react";

export default function Carrusel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
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
          <source media="(min-width: 720px)" srcSet="/img/Diapositiva_1_Grande.png" />
          <img
            className="object-cover w-full h-full"
            src="/img/Diapositiva_1.png"
            alt="Primera Diapositiva"
          />
        </picture>
        <picture>
          <source media="(min-width: 720px)" srcSet="/img/Diapositiva_1_Grande.png" />
          <img
            className="object-cover w-full h-full"
            src="/img/Diapositiva_1.png"
            alt="Primera Diapositiva"
          />
        </picture>
      </Carousel>
    </div>
  );
}
