import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export const Discover = () => {
  return (
    <section id="discover" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-codary-black mb-4">Descubre Codary</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos más que un club de programación. Somos una incubadora de talento y creatividad tecnológica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-pastel-mint/30 to-transparent border border-pastel-mint/50"
          >
            <div className="w-12 h-12 bg-pastel-mint rounded-xl flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-codary-black">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Fomentar el aprendizaje colaborativo y el desarrollo de habilidades técnicas de vanguardia, 
              preparando a nuestros miembros para liderar la innovación tecnológica del futuro.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-pastel-lavender/30 to-transparent border border-pastel-lavender/50"
          >
            <div className="w-12 h-12 bg-pastel-lavender rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-codary-black">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser el referente principal en la formación de desarrolladores integrales, 
              reconocidos por su excelencia técnica y su capacidad para resolver problemas reales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
