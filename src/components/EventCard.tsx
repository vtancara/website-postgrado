interface ScheduleType {
  start: string;
  end: string;
}

interface EventType {
  image: string;
  date: string;
  schedule: ScheduleType;
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
        <div className="p-4">
          <div className="flex flex-row">
            <div className="basis-1/4">
              <p className="text-xl">{day}</p>
              <p className="text-sm">{month}</p>
            </div>
            <div className="basis-3/4">
              <p className="font-bold break-words text-xl mb-2">{event.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
