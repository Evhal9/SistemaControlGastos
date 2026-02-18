

function Footer() {
  return (
    <footer className=" w-screen bg-gray-950 text-gray-300">
      <div className="w-screen  px-10 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Alme
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Una forma simple y clara de registrar tus gastos diarios,
              entender tus hábitos y mejorar tu economía personal.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Empezá hoy
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Tomá control de tus gastos y organizá tu economía personal.
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition">
              Crear cuenta gratis
            </button>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Alme. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}



export default Footer
