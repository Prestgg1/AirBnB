import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"


export default function HouseCard({datas}: {datas: any}) {
  const images = datas?.images || []
  return (
    <Card className="overflow-hidden rounded-xl">
    <CardContent className="p-0">
      <Carousel>
        <CarouselContent>
          {images.map((src: string, index: number) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </CardContent>
    <CardHeader>
      <CardTitle className="text-2xl font-bold"> {datas?.title} </CardTitle>
      <CardDescription> {datas?.description} </CardDescription>
    </CardHeader>
  </Card>
  )
}
