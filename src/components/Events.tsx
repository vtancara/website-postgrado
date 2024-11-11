import Slider from "./Slider";
import EventCard from "./EventCard";

const events = [
  {
    date: "Dr. Carlos Mendoza",
    image: "/teachers/image1.jpg",
    hour: "Inteligencia Artificial",
    title: "Experto en machine learning y redes neuronales.",
  },
  {
    date: "Dra. Ana Flores",
    image: "/teachers/image2.jpg",
    hour: "Seguridad Informática",
    title: "Investigadora líder en ciberseguridad y criptografía.",
  },
  {
    date: "Mg. Roberto Paz",
    image: "/teachers/image3.jpg",
    hour: "Desarrollo de Software",
    title:
      "Especialista en metodologías ágiles y arquitectura de software.",
  },
  {
    date: "Dra. Laura Gutiérrez",
    image: "/teachers/image4.jpg",
    hour: "Bases de Datos",
    title: "Experta en sistemas de gestión de bases de datos y Big Data.",
  },
  {
    date: "Dr. Javier Morales",
    image: "/teachers/image5.jpg",
    hour: "Redes y Comunicaciones",
    title: "Investigador en redes 5G y comunicaciones inalámbricas.",
  },
];

const Events = () => {

  return (
    <section className="py-12 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 lg:text-4xl dark:text-white">
          Eventos PGI
        </h2>
        <Slider items={events.map((event, index) => <EventCard key={index} event={event} />)} />
      </div>
    </section>
  );
};

export default Events;
