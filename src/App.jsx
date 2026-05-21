export default function App() {
  return (
    <div className="bg-warmWhite text-darkText">
      <header className="fixed top-0 left-0 w-full bg-warmWhite/90 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-semibold">Alemar AB</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#tjanster" className="hover:text-softBlue transition">Tjänster</a>
            <a href="#om" className="hover:text-softBlue transition">Om oss</a>
            <a href="#kontakt" className="hover:text-softBlue transition">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-softBlue font-medium mb-4">Personlig & modern ekonomihantering</p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Bokföring och lönekonsultation med trygghet och enkelhet.
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Alemar AB hjälper företag med professionell bokföring och lönehantering
              genom moderna arbetssätt och personlig service.
            </p>

            <a
              href="#kontakt"
              className="inline-block bg-softBlue hover:opacity-90 text-white px-8 py-4 rounded-full transition"
            >
              Kontakta oss
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-sage rounded-[40px] blur-3xl opacity-30"></div>

            <div className="relative bg-white p-10 rounded-[40px] shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="bg-softBlue/10 p-6 rounded-2xl">
                  <h3 className="font-semibold mb-2">Bokföring</h3>
                  <p className="text-gray-600">
                    Löpande bokföring, rapportering och ekonomisk översikt.
                  </p>
                </div>

                <div className="bg-sage/20 p-6 rounded-2xl">
                  <h3 className="font-semibold mb-2">Lönekonsult</h3>
                  <p className="text-gray-600">
                    Effektiv och trygg lönehantering med hög kvalitet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tjanster" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center">Tjänster</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition">
              <div className="w-14 h-14 bg-softBlue/10 rounded-2xl mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">Bokföring</h3>
              <p className="text-gray-600 leading-relaxed">
                Vi hjälper företag med löpande bokföring, ekonomisk administration
                och tydlig rapportering för bättre kontroll över verksamheten.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition">
              <div className="w-14 h-14 bg-terracotta/20 rounded-2xl mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">Lönekonsult</h3>
              <p className="text-gray-600 leading-relaxed">
                Smidig och professionell lönehantering med fokus på noggrannhet,
                trygghet och moderna lösningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="om" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Om oss</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            På Alemar AB arbetar vi med personlig service, tydlig kommunikation
            och moderna arbetssätt. Vårt mål är att skapa trygghet och ge företag
            mer tid att fokusera på sin verksamhet.
          </p>
        </div>
      </section>

      <section id="kontakt" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] p-12 shadow-xl border border-gray-100">
            <h2 className="text-4xl font-bold mb-10 text-center">Kontakt</h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <p className="text-gray-500 mb-2">Telefon</p>
                <p className="text-xl font-medium">0733887044</p>
              </div>

              <div>
                <p className="text-gray-500 mb-2">E-post</p>
                <p className="text-xl font-medium">Hannes.lindvall@icloud.com</p>
              </div>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Namn"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-softBlue"
              />

              <input
                type="email"
                placeholder="E-post"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-softBlue"
              />

              <textarea
                rows="5"
                placeholder="Meddelande"
                className="w-full border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-softBlue"
              ></textarea>

              <button
                type="submit"
                className="bg-terracotta hover:opacity-90 text-white px-8 py-4 rounded-full transition"
              >
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        © 2026 Alemar AB. Alla rättigheter förbehållna.
      </footer>
    </div>
  )
}