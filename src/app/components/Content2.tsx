const Content2 = () => {
  return (
    <section className="bg-black text-white py-12 px-36">
      <h2 className="text-6xl font-bold text-start mt-10 mb-16">
        WHY STRATEGIK?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-32">
        <div className="p-4">
          <h3 className="text-4xl font-bold mb-2">INNOVATIVE</h3>
          <p className="text-gray-300 text-2xl">
            Unleash award-winning ideas for a distinctive digital presence.
          </p>
        </div>
        <div className="p-4 border-l border-orange-500">
          <h3 className="text-4xl font-bold mb-2">STRATEGIC</h3>
          <p className="text-gray-300 text-2xl">
            Benefit from expertly crafted campaigns tailored to your brand's
            goals.
          </p>
        </div>
        <div className="p-4 border-l border-orange-500">
          <h3 className="text-4xl font-bold mb-2">PERSONALIZED</h3>
          <p className="text-gray-300 text-2xl">
            Experience a collaborative partnership with tailored solutions that
            resonate.
          </p>
        </div>
      </div>

      {/* Section for the images */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-20 mt-8">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative group">
            <img
              src="/assets/qqq.jpg"
              alt={`Laptop display ${index + 1}`}
              className="w-full object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-2xl font-bold bg-black bg-opacity-50 p-4 rounded">
                Sample Text
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center py-24 px-20 bg-black text-white">
        {/* Bagian teks testimonial */}
        <div className="flex-1">
          <p className="text-3xl font-normal">
            Their team of experts took my online presence to the next level,
            <br />
            and the impact on my business has been remarkable.
          </p>
        </div>

        {/* Bagian informasi pengguna */}
        <div className="flex flex-col">
          <img
            src="/path/to/profile-picture.jpg" // Sesuaikan path gambar profil
            alt="User profile"
            className="w-12 h-12 rounded-full border-2 border-gray-500"
          />
          <p className="mt-3 text-2xl font-medium px-2 py-1 rounded-md">
            Matthew Smith from Uber
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content2;
