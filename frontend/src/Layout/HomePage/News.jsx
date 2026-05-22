export default function News() {
  const videos = [
    "https://youtube.com/embed/FN7QBVjCBxM?si=lVBf0a97KfOSZDty",
    "https://youtube.com/embed/HqN0d6HpTjU?si=vpIq2DWiHIrqM59r",
    "https://youtube.com/embed/NSIXFFlKhos?si=5vzmcN-fiHu6yAyc",
    "https://www.youtube.com/embed/DSRRktI0REo?si=y0uaHaN3fDcRgwpH",
    "https://youtube.com/embed/f2EKQA-hyFA?si=LQFKxD69nGJZE97d",
    "https://youtube.com/embed/SwY8RHOrBOs?si=hKyoQI9c6Ira9UT8",
    "https://youtube.com/embed/fV5yQNFEaL8?si=f3P0HP9q31JCqecM",
    "https://youtube.com/embed/6beR96r-sQA?si=OzTqR8TVX5PyFTWw",
  ];
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-devanagari">
          बातम्या व माहिती
        </h2>

        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-green-700"></span>
          <span className="w-3 h-3 bg-amber-600 rotate-45"></span>
          <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-green-700"></span>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm md:text-base font-devanagari">
          ताज्या घडामोडी आणि उपयुक्त माहिती यांचे प्रभावी सादरीकरण.
          वाचकांपर्यंत सत्य, अचूक आणि वेळेवर माहिती पोहोचवण्यासाठी समर्पित विभाग.
        </p>

      </div>

      {/* Video Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {videos.map((video, index) => (
          
          <div
            key={index}
            className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1.5"
          >
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-50">

              <iframe
                className="w-full h-full border-0"
                src={video}
                title="YouTube video"
                allowFullScreen
              ></iframe>

            </div>
          </div>

        ))}

      </div>
    </section>
  )
}