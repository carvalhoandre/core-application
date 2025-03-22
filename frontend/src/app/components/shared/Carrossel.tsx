import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarrosselProps {
  imagens: string[];
}

const Carrossel = ({ imagens }: CarrosselProps) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-7/10 md:w-11/12 xl:w-full"
    >
      <CarouselContent>
        {imagens.map((image, index) => (
          <CarouselItem key={index} className="relative h-96 w-full">
            <Image src={image} alt="Imagem" fill className="object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carrossel;
