export default function LatestStories() {
    const stories = [
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/yeracaud/mmt/activities/t_ufs/m_activities_Yeracaud_Emerald%20Lake_l_400_640.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/yeracaud/mmt/activities/t_ufs/m_activities_Yeracaud_Sri%20Raja%20Rajeswari%20Temple_l_391_625.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/yeracaud/mmt/activities/t_ufs/m_activities_Yeracaud_Anna%20Park_l_308_493.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/t_ufs/m_Bears_Cave_1_l_360_640.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/yeracaud/mmt/activities/t_ufs/m_activities_Yeracaud_Emerald%20Lake_l_400_640.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/yeracaud/mmt/activities/t_ufs/m_activities_Yeracaud_Sri%20Raja%20Rajeswari%20Temple_l_391_625.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/yeracaud/mmt/activities/t_ufs/m_activities_Yeracaud_Anna%20Park_l_308_493.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
        {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/t_ufs/m_Bears_Cave_1_l_360_640.jpg',
            name: 'Janna Overtage',
            description: 'lorem ismult lorem ismult lorem'
        },
    ];

    return (
        <div className="min-h-[120vh]">
            <div className="flex justify-between items-center ml-10 mb-10 mt-10">
                <h2 className="font-bold text-3xl">Latest Stories</h2>
                <button className="bg-yellow-400 py-2 px-6 mr-10 rounded-md font-bold hover:bg-yellow-500">Find More</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 ">
                {stories.map((story, story_key) => (
                    <div key={story_key} className=" border-black border shadow-lg bg-white rounded-md flex flex-col h-full">
                        <img src={story.src} alt={story.name} className="w-full h-48 object-cover" />
                        <div className="flex-grow p-4">
                            <h3 className="font-bold text-xl">{story.name}</h3>
                        </div>
                        <div className="bg-yellow-300  p-4 rounded-md border-t border-black">
                            <p className=" text-black text-md font-semibold">{story.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
