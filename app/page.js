"use client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DashboardOne from '../app/component/Dashboard'
import DashTwo from '../app/component/DashTwo'
import LatestStories from '../app/component/LatestStories'

export default function Home() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Location:", location, "Guests:", guests, "Date:", startDate);
  };

  return (
    <div className="bg-white">
    <main className="flex min-h-screen">
      <div
        className="flex flex-col justify-center items-center w-full h-[75vh] bg-cover bg-center bg-black/30"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1443397646383-16272048780e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
            We Find The Best Tours For You
          </h1>
          <p className="text-black text-lg md:text-xl mb-6 max-w-3xl px-4">
            Save on select hotels and earn double points when you book on the app. Our app deals help you to save on trips so you can travel more and manage it all on the go.
          </p>
          <button className="border border-yellow-500 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
            Explore Now!
          </button>
        </div>

        <div className="absolute bottom-0 w-full max-w-4xl mt-8 p-6 bg-white rounded-lg shadow-lg flex justify-between">
          <div className="flex flex-row space-x-6 w-full">
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Location</option>
                <option value="paris">Paris</option>
                <option value="new-york">New York</option>
                <option value="tokyo">Tokyo</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            {/* Search Button */}
            <div className="flex-1 flex items-center">
              <button
                onClick={handleSearch}
                className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <DashboardOne />
    <DashTwo />
    <LatestStories />
    </div>
  );
}
