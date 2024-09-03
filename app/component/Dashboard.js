import { useState } from 'react';
import Image from 'next/image';

const cityData = {
  Leh: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Leh_tv_destination_img_3_l_667_1000.jpg",
    description: "Located at a height of 11,500 feet, Leh finds place in the bucket list of many travel enthusiasts. It will leave you in awe with its iconic monasteries and picturesque landscapes.",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/leh/mmt/activities/t_ufs/m_activities_leh_leh_palace_l_400_640.jpg",
          title: "Leh Palace",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/ladakh/mmt/activities/t_ufs/m_Shanti%20Stupa_p_800_800.jpg",
          title: "Shanti Stupa",
          duration: "3 hours",
          familyPlan: "No",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/leh/mmt/activities/t_ufs/m_Gurudwara%20Pathar%20Sahib_3_l_365_640.jpg",
            title: "Gurudwara Pathar Sahib",
            duration: "2 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹12500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/leh/mmt/activities/t_ufs/m_activities_leh_stok_palace_museum_l_400_640.jpg",
            title: "Stok Palace Museum",
            duration: "3 hours",
            familyPlan: "No",
            rating: "4.8",
            price: "₹10000"
          },
    ]
  },
  Gokarna: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Gokarna_tv_destination_img_4_l_807_1215.jpg", 
    description: "Home to pristine beaches bordered by swaying palms and renowned Hindu shrines, Gokarna is an unspoilt temple town in Karnataka. It lies close to popular tourist destinations like Goa, Mangalore and Hubli.",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/activities/t_ufs/m_activities_gokarna_mahabaleshwar_temple_p_639_381.jpg",
          title: "Mahabaleshwar Temple",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/activities/t_ufs/m_activities_gokarna_food_tour_p_922_608.jpg",
          title: "Food Tour",
          duration: "3 hours",
          familyPlan: "Yes",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/activities/t_ufs/m_activities_gokarna_om_beach_l_434_652.jpg",
            title: "Om Beach",
            duration: "1 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹19500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/activities/t_ufs/m_activities_gokarna_half_moon_beach_l_421_632.jpg",
            title: "Half Moon Beach",
            duration: "3 hours",
            familyPlan: "Yes",
            rating: "4.8",
            price: "₹28000"
          },
    ]
  },
  Srinagar: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/destimgjune2022/mmt/activities/m_Srinagar%204_l_679_1437.jpg",
    description: "Jahangirs heaven on earth, Srinagar offers the picturesque Dal Lake, breath-taking mountain views, stunning Mughal gardens and sprawling orchards.",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/srinagar/mmt/activities/t_ufs/m_activities_srinagar_mughal_garden_l_400_640.jpg",
          title: "Mughal Gardens",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/srinagar/mmt/activities/t_ufs/m_activities_dal_lake_5_l_497_763.jpg",
          title: "Dal Lake",
          duration: "3 hours",
          familyPlan: "Yes",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/srinagar/mmt/activities/t_ufs/m_activities_shankaracharya_hill_takht_i_suleiman_1_l_378_567.jpg",
            title: "Shankaracharya Hill",
            duration: "2 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹12500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/srinagar/mmt/activities/t_ufs/m_activities-srinagar-nigeen-lake_l_400_640.jpg",
            title: "Nigeen Lake",
            duration: "3 hours",
            familyPlan: "Yes",
            rating: "4.8",
            price: "₹10000"
          },
    ]
  },
  Pondicherry: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Pondicherry_2_l_658_1200.jpg", 
    description: "A fascinating, small town with enough elements to charm its visitors, Pondicherry whose official name was changed to Puducherry in 2006, was once the largest French colony in India.",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/activities/t_ufs/m_activities-pondicherry-sri-aurobindo-ashram_l_400_640.jpg",
          title: "Sri Aurobindo Ashram",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/activities/t_ufs/m_activities_Pondicherry_Basilica%20of%20the%20Sacred%20Heart%20of%20Jesus_p_379_278.jpg",
          title: "Basilica Of The Sacred Heart",
          duration: "3 hours",
          familyPlan: "No",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/activities/t_ufs/m_activities-pondicherry-promenade-beach_l_400_640.jpg",
            title: "Promenade Beach",
            duration: "2 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹12500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/activities/t_ufs/m_activities-pondicherry-paradise-beach_l_400_640.jpg",
            title: "Paradise Beach",
            duration: "3 hours",
            familyPlan: "No",
            rating: "4.8",
            price: "₹10000"
          },
    ]
  },
  Goa: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_4_l_667_1000.jpg", 
    description: "Popularly known as Indias party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Fort%20Aguada_6_l_436_654.jpg",
          title: "Aguada Fort",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-basilica-of-bom-jesus_l_400_640.jpg",
          title: "Basilica of Bom Jesus",
          duration: "3 hours",
          familyPlan: "Yes",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-dudhsagar-waterfalls_l_400_640.jpg",
            title: "Calangute Beach",
            duration: "2 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹12500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Baga%20beach_2_l_390_585.jpg",
            title: "Baga beach",
            duration: "3 hours",
            familyPlan: "No",
            rating: "4.8",
            price: "₹10000"
          },
    ]
  },
  Manali: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Manali_1_l_658_1200.jpg", 
    description: "Nestled on the banks of River Beas, Manali will take your breath away with its snow-kissed peaks, lush valleys and heart-pumping adventure experiences in the heart of Himalayas.",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/t_ufs/m_manikaran-sahib_l_400_640.jpg",
          title: "Manikaran Sahib",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/t_ufs/m_activities-manali-hidimba-devi-temple_l_400_640.jpg",
          title: "Hidimba Devi Temple",
          duration: "3 hours",
          familyPlan: "Yes",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/t_ufs/m_rohtang-pass_l_400_640.jpg",
            title: "Rohtang Pass",
            duration: "2 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹12500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/t_ufs/m_activities-manali-manu-temple_l_400_640.jpg",
            title: "Manu Temple",
            duration: "3 hours",
            familyPlan: "Yes",
            rating: "4.8",
            price: "₹10000"
          },
    ]
  },
  Ooty: {
    image: "https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/destination/m_destination-ooty-landscape_l_400_640.jpg", 
    description: "Officially called Ootacamund, the hill-town is better known by its nicknameOoty. It is loved by Bollywood directors, honeymooners, families, and even backpackers, for its mountains, lakes, gardens, and waterfalls.",
    famousPlaces: [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/activities/t_ufs/m_activities_ooty_Botanical%20Garden_l_286_508.jpg",
          title: "Botanical Garden",
          duration: "2 to 3 hours",
          familyPlan: "Yes",
          rating: "4.5",
          price: "₹19500"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/activities/t_ufs/m_activities-ooty-pykara-waterfalls_l_400_640.jpg",
          title: "Pykara Waterfalls",
          duration: "3 hours",
          familyPlan: "No",
          rating: "4.8",
          price: "₹9000"
        },
        {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/activities/t_ufs/m_activities-ooty-doddabetta-peak_l_400_640.jpg",
            title: "Doddabetta Peak",
            duration: "2 to 3 hours",
            familyPlan: "Yes",
            rating: "4.5",
            price: "₹12500"
          },
          {
            image: "https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/activities/t_ufs/m_activities_Ooty_Elk%20Hill%20Murugan%20Temple_l_400_533.jpg",
            title: "Murugan Temple",
            duration: "3 hours",
            familyPlan: "Yes",
            rating: "4.8",
            price: "₹10000"
          },
    ]
  }
  
};

export default function DashboardOne() {
  const [selectedCity, setSelectedCity] = useState('Srinagar'); // Default city
  
  const city = cityData[selectedCity] || cityData['Srinagar']; // Fallback to default city data

  return (
    <div className="min-h-[200vh] py-12">
      <h2 className="justify-center flex mb-4 text-4xl font-extrabold">Explore Popular Cities</h2>
      <p className="flex justify-center mb-7 text-black text-lg md:text-l">
        Discover the best cities in the world to explore and live in right now, according to Time Out's global survey of city-dwellers
      </p>
      <div className="justify-center flex space-x-4 mb-10">
        {Object.keys(cityData).map((cityName) => (
          <button
            key={cityName}
            onClick={() => setSelectedCity(cityName)}
            className={`w-36 rounded-md px-1 py-2 font-bold shadow-lg transition duration-300 ease-in-out ${
              selectedCity === cityName ? 'bg-yellow-500' : 'bg-yellow-400 hover:bg-yellow-500'
            }`}
          >
            {cityName}
          </button>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <Image
          src={city.image}
          alt={selectedCity}
          className="mb-10 rounded-md"
          width={1000}
          height={600}
        />

        <div className="absolute bottom-0 transform translate-y-1/2 w-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2">{selectedCity}</h3>
          <p className="text-lg text-gray-700">
            {city.description}
          </p>
        </div>
      </div>

      {/* Famous Places Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-extrabold mb-4 text-center">Famous Places in {selectedCity}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {city.famousPlaces.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={place.image}
                alt={place.title}
                className="w-full h-40 object-cover"
                width={500}  // Add width
  height={200} // Add height
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-4">{place.title}</h4>
                <p className="text-gray-700 mb-1"><strong>Duration:</strong> {place.duration}</p>
                <p className="text-gray-700 mb-1"><strong>Family Plan:</strong> {place.familyPlan}</p>
                <p className="text-gray-700 mb-1"><strong>Rating:</strong> {place.rating}</p>
                <p className="text-gray-700 mb-2"><strong>Price:</strong> {place.price}</p>
                <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded-md shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}