import Image from "next/image";

function EventItem() {
  return (
    <div className="bg-white w-8/12 flex mt-5">
            
        <Image
        src="/images/event1.jpg"
        height={200}
        width={200}
        />

        <div className="flex-1 p-2">
        <h2 className="text-xl font-bold">Programming for Everyone</h2>
        <h4 className="font-bold">May 12, 2021</h4>
        <p className="text-gray-400">Some dummy content</p>
        <div className="flex items-end justify-end">
            <button className="bg-green-400 text-white py-2 px-5 rounded-md hover:bg-green-500">Explore</button>
        </div>
        </div>
  </div>
  )
}

export default EventItem