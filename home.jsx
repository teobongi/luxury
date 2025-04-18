export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">NovaServizi</h1>
        <nav className="space-x-6">
          <a href="#servizi" className="text-gray-700 hover:text-blue-600">Servizi</a>
          <a href="#annunci" className="text-gray-700 hover:text-blue-600">Annunci</a>
          <a href="#login" className="text-gray-700 hover:text-blue-600">Accedi</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Soluzioni su misura per il tuo successo.</h2>
        <p className="text-lg text-gray-600 mb-6">Scopri i nostri servizi professionali e resta aggiornato sulle novità dell'azienda.</p>
        <a href="#registrati" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">Registrati ora</a>
      </section>

      {/* Chi siamo */}
      <section className="py-16 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Chi siamo</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          NovaServizi è un'azienda che offre soluzioni digitali, servizi di consulenza e supporto professionale per imprese e privati. Il nostro obiettivo è accompagnarti nella crescita con strumenti innovativi e personalizzati.
        </p>
      </section>

      {/* Servizi preview */}
      <section id="servizi" className="py-16 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-10">I nostri servizi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Consulenza</h4>
            <p className="text-gray-600">Supporto strategico e operativo su misura per la tua azienda.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Servizi digitali</h4>
            <p className="text-gray-600">Soluzioni web, marketing e trasformazione digitale.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Formazione</h4>
            <p className="text-gray-600">Percorsi formativi personalizzati per imprese e professionisti.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="registrati" className="py-16 px-6 bg-blue-600 text-center text-white">
        <h3 className="text-3xl font-semibold mb-4">Vuoi rimanere aggiornato?</h3>
        <p className="mb-6">Registrati per ricevere comunicazioni, annunci e novità dall'azienda.</p>
        <a href="#" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100">Crea un account</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} NovaServizi. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
