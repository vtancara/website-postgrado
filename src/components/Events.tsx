import Slider from "./Slider";
import EventCard from "./EventCard";

const events = [
  {
    date: "2024-11-11",
    image: "/events/image1.jpeg",
    schedule: {
      start: '07:00 pm',
      end: '10:00 pm',
    },
    title: "Experto en machine learning y redes neuronales.",
  },
  {
    date: "2024-10-11",
    image: "/events/image2.jpeg",
    schedule: {
      start: '07:00 pm',
      end: '10:00 pm',
    },
    title: "Investigadora líder en ciberseguridad y criptografía.",
  },
  {
    date: "2024-09-11",
    image: "/events/image3.jpeg",
    schedule: {
      start: '07:00 pm',
      end: '10:00 pm',
    },
    title:
      "Especialista en metodologías ágiles y arquitectura de software.",
  },
  {
    date: "2024-08-11",
    image: "/events/image4.jpeg",
    schedule: {
      start: '07:00 pm',
      end: '10:00 pm',
    },
    title: "Experta en sistemas de gestión de bases de datos y Big Data.",
  },
  {
    date: "2024-07-11",
    image: "/events/image5.jpeg",
    schedule: {
      start: '07:00 pm',
      end: '10:00 pm',
    },
    title: "Investigador en redes 5G y comunicaciones inalámbricas.",
  },
  {
    date: "2024-07-11",
    image: "/events/image6.jpeg",
    schedule: {
      start: '07:00 pm',
      end: '10:00 pm',
    },
    title: "Conviértete Investigador en redes 5G y comunicaciones inalámbricas.",
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
