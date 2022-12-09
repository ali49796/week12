import EventItem from "../components/EventItem";
import { getAllEvents } from "../DUMMY_DATA"; 

export default function Home() {
  const events = getAllEvents();
  console.log(events);
  return (
    <div className="bg-gray-200 min-h-screen p-5 flex items-center justify-start flex-col">
      { events.map(() => {
        return <EventItem /> 
      }) }
      

    </div>
  )
}
