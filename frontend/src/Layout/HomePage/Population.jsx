export default function Population() {
    return (
        <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">

          {/* Background Image with Deep Biophilic Green Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/village.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-green-950/80 backdrop-blur-xs"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 text-center text-white z-10">

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">
              धामणेर: एका दृष्टिक्षेपात
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3 mb-6">
              <span className="w-8 h-[2px] bg-orange-400"></span>
              <span className="w-2 h-2 bg-orange-400 rotate-45"></span>
              <span className="w-8 h-[2px] bg-orange-400"></span>
            </div>

            <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-gray-200 mb-14 font-medium drop-shadow-sm">
              गावाची प्रगती आणि लोकसंख्येची आकडेवारी खालीलप्रमाणे आहे. धामणेर गावाची एकूण लोकसंख्या २७२२ आहे. ज्यामध्ये १४०७ पुरुष आणि १३१५ महिला आहेत.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer group">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 group-hover:scale-105 transition-transform duration-300">२७२२+</h3>
                <p className="mt-3 text-sm md:text-base font-semibold text-gray-100">एकूण लोकसंख्या</p>
              </div>

              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer group">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 group-hover:scale-105 transition-transform duration-300">१४०७+</h3>
                <p className="mt-3 text-sm md:text-base font-semibold text-gray-100">पुरुष</p>
              </div>

              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer group">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 group-hover:scale-105 transition-transform duration-300">१३१५+</h3>
                <p className="mt-3 text-sm md:text-base font-semibold text-gray-100">महिला</p>
              </div>

              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer group">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 group-hover:scale-105 transition-transform duration-300">२९४+</h3>
                <p className="mt-3 text-sm md:text-base font-semibold text-gray-100">बालके</p>
              </div>

            </div>
          </div>

        </section>
    )
}