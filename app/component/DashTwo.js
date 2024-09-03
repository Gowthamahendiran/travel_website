export default function DashTwo() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1632178151697-fd971baa906f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXJpc3R8ZW58MHx8MHx8fDA%3D",
            description: "A beautiful sunset over the mountains."
        },
        {
            src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            description: "Exploring the serene landscapes."
        },
        {
            src: "https://images.unsplash.com/photo-1607690075704-91bf99a0119d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
            description: "An adventurous journey through the forest."
        },
        {
            src: "https://images.unsplash.com/photo-1532878056386-1e96eb5221ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D",
            description: "Capturing the beauty of the sea."
        },
        {
            src: "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fHw%3D",
            description: "Sunset over a quiet beach."
        },
        {
            src: "https://images.unsplash.com/photo-1534537841395-2e594ba9ed4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
            description: "A beautiful sunset over the mountains."
        },
        {
            src: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fHw%3D",
            description: "Exploring the serene landscapes."
        },
        {
            src: "https://images.unsplash.com/photo-1523980628612-07e15ba44368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fHw%3D",
            description: "An adventurous journey through the forest."
        },
        {
            src: "https://images.unsplash.com/photo-1711294915224-4063f47b9b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTB8fHxlbnwwfHx8fHw%3D",
            description: "Capturing the beauty of the sea."
        },
        {
            src: "https://images.unsplash.com/photo-1612969692498-b1305e29e53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fHw%3D",
            description: "Sunset over a quiet beach."
        },
    ];

    return (
        <div className="min-h-[150vh] py-4">
    <div className="flex justify-between items-center ml-10 mb-10">        
    <p className="font-bold text-xl">
      Here are some Amazing Pics taken on Journey
    </p>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mr-10">
      Learn More
    </button>
  </div>
            <div className="flex flex-wrap justify-center gap-6 ml-10">
                {images.map((image, index) => (
                    <div key={index} className="relative group text-center mb-4">
                        <img
                            src={image.src}
                            alt={`image${index + 1}`}
                               className="mb-2 min-w-[300px] h-[400px]"
                        />
                        <div className="absolute inset-0 bg-yellow-500 font-bold text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
