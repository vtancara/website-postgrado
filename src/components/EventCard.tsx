interface EventType {
  image: string;
  date: string;
  hour: string;
  title: string;
}
interface EventParameterType {
  event: EventType
}

const EventCard = ({ event
}: EventParameterType) => {
  const mes = 'AGOSTO'
  const dia = '08'

  return (
    <div className="flex-shrink-0 px-2">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={event.image}
          alt={event.title}
          className="w-24 h-24 rounded-full mx-auto mb-3"
        />
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default EventCard;
