import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  Search,
  MapPin,
  Calendar,
  Phone,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Status Bar */}
      <div className="bg-slate-800 text-white text-sm">
        <div className="max-w-screen-xl mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-barlow font-light">ONLINE</span>
            <span className="text-cyan-400 font-barlow font-light">9-23°°</span>
            <span className="font-barlow font-light">6 x studio</span>
            <span className="font-barlow font-light">Poradenství</span>
            <span className="font-barlow font-light">Nejlepší nabídky</span>
            <span className="font-barlow font-light">Kurzy vaření</span>
          </div>
          <div className="bg-red-600 px-4 py-1 rounded-sm">
            <span className="font-barlow font-light text-right">
              Aktuální kurz vaření : 17.6. Žitenická 871/7 Praha 9 Prosek
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <div
        className="bg-white border-b"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f3f4f6"/></svg>\')',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold">
                <div className="w-48 h-12 bg-orange-500 flex items-center justify-center text-white font-barlow">
                  Vestavné spotřebiče
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/placeholder.svg"
                  alt="Akční nabídky"
                  className="h-10 w-12"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white rounded shadow-sm">
                <Input
                  placeholder="Hledat produkty..."
                  className="w-80 lg:w-96 border-0 focus-visible:ring-0 bg-white"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-l-none border-l-4 border-black">
                  <span className="font-inter font-bold text-xs tracking-wide">
                    HLEDAT
                  </span>
                </Button>
              </div>

              <div className="flex items-center text-right bg-white p-2 rounded">
                <div className="text-xs font-inter font-bold text-black mr-2">
                  <span className="font-bold">Košík</span> 0 Ks
                </div>
                <ShoppingCart className="h-8 w-8 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="bg-orange-500">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-8 divide-x divide-orange-400">
            {[
              "Vestavné spotřebiče",
              "Volně stojící",
              "Vaření a pečení",
              "Myčky nádobí",
              "Odsavače par",
              "Praní a sušení",
              "Dřezy a baterie",
              "Akční nabídky",
            ].map((item, index) => (
              <div
                key={index}
                className="h-16 flex items-center justify-center text-white text-xs font-inter text-center px-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Logos Bar */}
      <div className="bg-black">
        <div className="max-w-screen-xl mx-auto h-8 flex items-center justify-between divide-x divide-gray-600">
          {[
            "AEG",
            "Electrolux",
            "Franke",
            "Siemens",
            "Bosch",
            "Miele",
            "Liebherr",
          ].map((brand, index) => (
            <div
              key={index}
              className="flex-1 h-full flex items-center justify-center text-white text-xs"
            >
              {brand} Online Brand Store
            </div>
          ))}
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <img
                src="/placeholder.svg"
                alt="Hero Banner"
                className="w-full h-80 object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: 26 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 3 ? "bg-orange-500" : "bg-gray-400 opacity-60"}`}
            />
          ))}
        </div>
      </div>

      {/* Feature Grid - 8 Cards */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "6 x studio a showroom", image: "/placeholder.svg" },
            { title: "Online 7 dní v týdnu", image: "/placeholder.svg" },
            { title: "Spotřebiče používáme", image: "/placeholder.svg" },
            { title: "Poradíme", image: "/placeholder.svg" },
            { title: "Kurzy vaření", image: "/placeholder.svg" },
            { title: "Nejlepší na jednom místě", image: "/placeholder.svg" },
            { title: "Vysvětlíme a předvedeme", image: "/placeholder.svg" },
            { title: "Vyrábíme kuchyně", image: "/placeholder.svg" },
          ].map((feature, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-44 object-cover rounded transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="font-barlow text-center uppercase text-sm font-light tracking-wide">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Sidebar + Product Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Left Sidebar - Features */}
          <div className="lg:col-span-1 space-y-4">
            {/* First Feature Box */}
            <div className="bg-slate-700 text-white p-4 rounded">
              <div className="space-y-4">
                {[
                  { icon: "⏰", title: "Jsme online", subtitle: "až do 23:00" },
                  {
                    icon: "🇨🇿",
                    title: "Spotřebiče",
                    subtitle: "pro český trh",
                  },
                  {
                    icon: "👨‍💼",
                    title: "Profesionální",
                    subtitle: "poradenství",
                  },
                  { icon: "6x", title: "Kuchyňské", subtitle: "studio" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div className="text-sm font-inter">
                      <div className="font-bold">{item.title}</div>
                      <div>{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Feature Box */}
            <div className="bg-blue-100 text-slate-700 p-4 rounded">
              <div className="space-y-4">
                {[
                  {
                    icon: "📞",
                    title: "Poradenství",
                    subtitle: "7 dní v týdnu",
                  },
                  { icon: "😊", title: "Přes 98%", subtitle: "spokojenosti" },
                  { icon: "🚚", title: "Doprava", subtitle: "zdarma na vše" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div className="text-sm font-inter">
                      <div className="font-bold">{item.title}</div>
                      <div>{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {[
                {
                  name: "Miele TCA230WP Active",
                  category: "volně stojící sušička",
                  price: "23 170",
                  image: "/placeholder.svg",
                },
                {
                  name: "Bosch BEL7321B1",
                  category: "",
                  price: "17 090",
                  image: "/placeholder.svg",
                },
                {
                  name: "Siemens HM676G0S1",
                  category: "pyrolytická trouba",
                  price: "35 990",
                  image: "/placeholder.svg",
                },
                {
                  name: "Siemens KI41RADD1 + prodlouže..",
                  category: "",
                  price: "18 970",
                  image: "/placeholder.svg",
                },
                {
                  name: "AEG BEB351111B",
                  category: "horkovzdušná trouba",
                  price: "11 552",
                  image: "/placeholder.svg",
                },
                {
                  name: "Bosch CMG7361B1",
                  category: "kompaktní trouba",
                  price: "35 570",
                  image: "/placeholder.svg",
                },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-orange-500">
                        {product.price} <span className="text-lg">Kč</span>
                      </div>
                      <h3 className="font-inter font-bold text-xs text-black line-clamp-2">
                        {product.name}
                      </h3>
                      {product.category && (
                        <p className="text-xs text-gray-500">
                          {product.category}
                        </p>
                      )}
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-current text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="bg-slate-700 text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h2 className="text-lg font-inter uppercase mb-6">
            Cenová poptávka spotřebičů
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white text-black p-4 rounded">
              <div className="space-y-4">
                <Input placeholder="Jméno" className="border-gray-300" />
                <Input placeholder="Email" className="border-gray-300" />
                <Input
                  placeholder="Telefonní číslo"
                  className="border-gray-300"
                />
              </div>
              <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                ODESLAT POPTÁVKU
              </Button>
            </div>

            <div className="lg:col-span-2 bg-white text-black p-4 rounded">
              <textarea
                placeholder="Napište nám, co hledáte a potřebujete..."
                className="w-full h-32 p-2 border border-gray-300 rounded resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Sections */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xl font-light text-gray-500 uppercase font-inter">
                Spotřebiče v našich videích
              </span>
            </div>
          </div>
        </div>

        {/* Large Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Bosch KBN96VFE0 – Vestavná chladnička nové generace",
              duration: "2:02",
            },
            {
              title:
                "Bosch Serie 8 HBG7541B1 – Dokonalé pečení s chytrou troubou",
              duration: "1:51",
            },
            {
              title: "Získejte až 2 000 Kč zpět s pračkami Bosch!",
              duration: "1:40",
            },
          ].map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-black text-white px-2 py-1 rounded text-xs font-bold">
                  {video.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-orange-500" : "bg-gray-400"}`}
            />
          ))}
        </div>

        {/* Small Video Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {
              title: "Dokonalá péče o prádlo s AEG | LFR73864VC & TR839P4CC",
              duration: "1:17",
            },
            {
              title:
                "Bosch SMV8YCX02E – myčka nové generace | Tichý provoz, chytré sušení a",
              duration: "1:47",
            },
            {
              title:
                "Nejlepší pračky & sušičky Bosch! Získejte 1 rok záruky zdarma!",
              duration: "1:28",
            },
            {
              title:
                "Předváděcí vaření na konvektomatu a parní troubě | Miele Center České Budějovice",
              duration: "1:32",
            },
            {
              title: "Electrolux LMS2203EMX: Rychlá cesta k chutnému jídlu!",
              duration: "2:05",
            },
          ].map((video, index) => (
            <div key={index} className="space-y-2">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black text-white px-1 py-0.5 rounded text-xs font-bold">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xs font-bold font-inter line-clamp-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Cooking Courses Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xl font-light text-gray-500 uppercase font-inter">
                Spotřebiče používáme - předváděcí vaření
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Kurz vaření AEG",
              date: "17.6.2025 od 18:00",
              location: "Žitenická 871/7 Praha 9 Prosek",
              phone: "607 094 289",
              image: "/placeholder.svg",
            },
            {
              title: "Kurz vaření na spotřebičích Siemens",
              date: "30.6.2025 od 18:00",
              location: "Žitenická 871/7 Praha 9 Prosek",
              phone: "",
              image: "/placeholder.svg",
            },
            {
              title: "Kurz vaření Electrolux",
              date: "7.7.2025 od 9:00",
              location: "Žitenická 871/7 Praha 9 Prosek",
              phone: "607 094 289",
              image: "/placeholder.svg",
            },
            {
              title: "Kurz vaření na spotřebičích Siemens",
              date: "7.7.2025 od 16:00",
              location: "Žitenická 871/7 Praha 9 Prosek",
              phone: "607 094 289",
              image: "/placeholder.svg",
            },
          ].map((course, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 space-y-4">
                  <h3 className="font-bold font-inter text-center underline text-xs">
                    {course.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-gray-600" />
                      <span className="text-xs font-inter">{course.date}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-gray-600" />
                      <span className="text-xs font-inter">
                        {course.location}
                      </span>
                    </div>

                    {course.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-gray-600" />
                        <span className="text-xs font-inter">
                          {course.phone}
                        </span>
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  >
                    Detail kurzu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
