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
        <div className="flex flex-column">
          <div className="">
            <img
              src={event.image}
              alt={event.title}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card Image">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 text-base">
      This is a simple card component created with Tailwind CSS. It has a header, an image, some text, and a button.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
  </div>
</div>
    </div>
  );
};

export default EventCard;
