import React from 'react';

const examples = [
  {
    prompt: "A mystical forest at twilight with glowing mushrooms",
    imageUrl: "https://image.lexica.art/full_jpg/14971a48-e221-4282-bfe4-0358e4ea00c1",
    style: "Fantasy Art"
  },
  {
    prompt: "Futuristic cityscape with flying vehicles",
    imageUrl: "https://image.lexica.art/full_jpg/8329e14f-c970-4e7d-97a6-a79a19b666d0",
    style: "Sci-fi"
  },
  {
    prompt: "Abstract fluid art in vibrant colors",
    imageUrl: "https://image.lexica.art/full_jpg/8329e14f-c970-4e7d-97a6-a79a19b666d0",
    style: "Abstract"
  },
  {
    prompt: "Portrait of a cyberpunk character",
    imageUrl: "https://image.lexica.art/full_jpg/c723ec56-a66d-4bb2-b875-eeae3cd176da",
    style: "Character Art"
  },
  {
    prompt: "Serene Japanese garden in autumn",
    imageUrl: "https://image.lexica.art/full_jpg/e22b5d74-8610-478e-becd-2f423287cfb5",
    style: "Landscape"
  },
  {
    prompt: "Steampunk mechanical creature",
    imageUrl: "https://image.lexica.art/full_jpg/c9acb634-0be8-48fc-ad9d-f1841d6d7632",
    style: "Concept Art"
  },
  {
    prompt: "AI Generated Art 1",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhVt3bvlLEbNBZ2f5VcvS0g5mEM6cJ9OdqA&s",
    style: "AI Art"
  },
  {
    prompt: "AI Generated Art 2",
    imageUrl: "https://image.lexica.art/full_jpg/da6d09cd-eece-4ff6-a94d-55a7cb1513a4",
    style: "AI Art"
  },
  {
    prompt: "AI Generated Art 3",
    imageUrl: "https://image.lexica.art/full_jpg/53ec43a9-bf54-4309-bc0a-30fa123eb082",
    style: "AI Art"
  },
  {
    prompt: "AI Generated Art 4",
    imageUrl: "https://image.lexica.art/full_jpg/c26be8e0-93b7-4c51-a55a-78a2f9d3b0cb",
    style: "AI Art"
  },
  {
    prompt: "AI Generated Art 5",
    imageUrl: "https://image.lexica.art/full_jpg/c9acb634-0be8-48fc-ad9d-f1841d6d7632",
    style: "AI Art"
  }
];

export function Examples() {
  return (
    <div id="examples" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Gallery of AI Creations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Explore what's possible with our AI image generation technology
          </p>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {examples.map((example, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={example.imageUrl}
                  alt={example.prompt}
                  className="object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{example.style}</p>
                    <p className="text-xs opacity-90 mt-1">{example.prompt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
