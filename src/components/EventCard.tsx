interface EventType {
  image: string;
  date: string;
  hour: string;
  title: string;
}
interface EventParameterType {
  event: EventType;
}

const EventCard = ({ event }: EventParameterType) => {
  const month = "AGO";
  const day = '08';

  return (
    <div className="flex-shrink-0 px-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          src={event.image}
          alt={event.title}
          className="w-50 h-50 mx-auto mb-3"
        />
        <div className="px-6 py-4">
          
          <p className="text-gray-700 text-base">
            {event.title}
          </p>
          <div className="flex flex-row">
            <div className="basis-1/4">
              <p className="text-xm">{day}</p>
              <p className="text-xm">{month}</p>
            </div>
            <div className="basis-3/8">
              <div className="font-bold text-xl mb-2">{event.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
