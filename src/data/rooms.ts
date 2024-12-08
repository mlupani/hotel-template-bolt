export interface Room {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  images: string[];
  amenities: {
    bathrooms: number;
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    minibar: boolean;
    bedType: string;
    maxGuests: number;
    wifi: boolean;
    tv: boolean;
    airConditioning: boolean;
  };
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Suite Presidencial",
    shortDescription: "Lujo y confort en nuestra suite más exclusiva",
    description: "Disfrute de una experiencia inolvidable en nuestra Suite Presidencial. Con vistas panorámicas, esta habitación ofrece el máximo lujo y comodidad para una estancia perfecta.",
    price: 350,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format",
      "https://images.unsplash.com/photo-1603072819161-e864800276ce?w=800&auto=format"
    ],
    amenities: {
      bathrooms: 2,
      breakfast: true,
      lunch: true,
      dinner: true,
      minibar: true,
      bedType: "King Size",
      maxGuests: 4,
      wifi: true,
      tv: true,
      airConditioning: true
    }
  },
  {
    id: 2,
    name: "Suite Ejecutiva",
    shortDescription: "Elegancia y comodidad para el viajero de negocios",
    description: "Perfecta para viajes de negocios, nuestra Suite Ejecutiva combina funcionalidad y elegancia con un espacioso escritorio y área de trabajo.",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format",
      "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?w=800&auto=format",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format"
    ],
    amenities: {
      bathrooms: 1,
      breakfast: true,
      lunch: false,
      dinner: false,
      minibar: true,
      bedType: "Queen Size",
      maxGuests: 2,
      wifi: true,
      tv: true,
      airConditioning: true
    }
  },
  {
    id: 3,
    name: "Suite Familiar",
    shortDescription: "Espacio y diversión para toda la familia",
    description: "Amplia suite diseñada para familias, con área de juegos y todas las comodidades necesarias para una estancia inolvidable en familia.",
    price: 280,
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format",
      "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&auto=format",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format"
    ],
    amenities: {
      bathrooms: 2,
      breakfast: true,
      lunch: false,
      dinner: false,
      minibar: false,
      bedType: "2 Queen Size",
      maxGuests: 5,
      wifi: true,
      tv: true,
      airConditioning: true
    }
  },
  {
    id: 4,
    name: "Habitación Deluxe",
    shortDescription: "Confort y elegancia en un espacio acogedor",
    description: "Nuestra habitación Deluxe ofrece una experiencia de alojamiento superior con acabados de alta calidad y hermosas vistas.",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format"
    ],
    amenities: {
      bathrooms: 1,
      breakfast: true,
      lunch: false,
      dinner: false,
      minibar: true,
      bedType: "Queen Size",
      maxGuests: 2,
      wifi: true,
      tv: true,
      airConditioning: true
    }
  },
  {
    id: 5,
    name: "Habitación Estándar Twin",
    shortDescription: "Práctica y cómoda para viajeros",
    description: "Perfecta para viajeros que buscan comodidad y buen precio, con dos camas individuales y todas las amenidades esenciales.",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&auto=format",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format"
    ],
    amenities: {
      bathrooms: 1,
      breakfast: true,
      lunch: false,
      dinner: false,
      minibar: false,
      bedType: "2 Twin Size",
      maxGuests: 2,
      wifi: true,
      tv: true,
      airConditioning: true
    }
  },
  {
    id: 6,
    name: "Suite Luna de Miel",
    shortDescription: "El refugio perfecto para parejas",
    description: "Romántica suite diseñada especialmente para parejas, con jacuzzi privado y detalles especiales para una estancia inolvidable.",
    price: 300,
    images: [
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&auto=format",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format"
    ],
    amenities: {
      bathrooms: 1,
      breakfast: true,
      lunch: true,
      dinner: true,
      minibar: true,
      bedType: "King Size",
      maxGuests: 2,
      wifi: true,
      tv: true,
      airConditioning: true
    }
  }
];