export const categorias = ["home", "beats", "destacado", "contacto"];

import DondesEstasImg from '../assets/DondeEstasImg.jpg'
import EntreTuYYoImg from '../assets/EntreTuYYoImg.jpg'
import NuncaMeOlvidesImg from '../assets/NuncaMeOlvidesImg.jpg'
import AquellaNocheSoleadaImg from '../assets/AquellaNocheSoleadaImg.jpg'
import DondeVoyImg from '../assets/DondeVoyImg.jpg'
import SeFueImg from '../assets/SeFueImg.jpg'
import DondeEstasAudio from '../assets/DondeEstas.mp3'; // Ejemplo de importación de audio
import EntreTuYYoAudio from '../assets/EntreTuYYo.mp3';
import NuncaMeOlvidesAudio from '../assets/NuncaMeOlvides.mp3'
import AquellaNocheSoleadaAudio from '../assets/AquellaNocheSoleada.mp3'



export const instrumentales = [
  {
    id: 1,
    name: 'Donde Estas?',
    description: 'Una base con ritmos profundos y contundentes que te llevará a través de una atmósfera melancólica y apasionada. Perfecta para letras introspectivas y emotivas, ideal para cualquier artista que busque expresar sus sentimientos más profundos.',
    image: DondesEstasImg,
    audioUrl: DondeEstasAudio,
    compositor: 'Lucio Cienfuegos',
    duration: 3.15
  },
  {
    id: 2,
    name: 'Entre tu y yo',
    description: 'Un beat con una mezcla de sonidos modernos y clásicos que fusionan perfectamente. Ideal para canciones sobre relaciones y experiencias personales, este instrumental ofrece un ritmo pegajoso y vibrante que hará que tus letras se destaquen.',
    image: EntreTuYYoImg,
    audioUrl: EntreTuYYoAudio
  },
  {
    id: 3,
    name: 'Nunca me olvides',
    description: 'Un beat urbano con un toque nostálgico que combina melodías suaves y percusiones fuertes. Perfecto para narrativas sobre el pasado y recuerdos imborrables, esta base te permitirá contar historias con una profunda conexión emocional.',
    image: NuncaMeOlvidesImg,
    audioUrl: NuncaMeOlvidesAudio
  },
  {
    id: 4,
    name: 'Aquella noche soleada',
    description: 'Un beat energético que captura la esencia de la vida urbana y sus vibrantes calles. Ideal para letras que hablen sobre el día a día en la ciudad, con ritmos que evocan el movimiento constante y la diversidad de la vida en el barrio.',
    image: AquellaNocheSoleadaImg,
    audioUrl: AquellaNocheSoleadaAudio
  },
  {
    id: 5,
    name: 'Se fue',
    description: 'Un instrumental melódico perfecto para las reflexiones nocturnas y momentos de tranquilidad. Sus suaves acordes y sutiles toques de sintetizador crean una atmósfera introspectiva, ideal para temas sobre sueños, esperanzas y pensamientos profundos bajo la luz de la luna.',
    image: DondeVoyImg,
    audioUrl: DondeEstasAudio
  },
  {
    id: 6,
    name: 'Donde voy',
    description: 'Un ritmo pegajoso que combina la fuerza del hip hop con melodías suaves y emotivas. Este beat es ideal para canciones que hablen sobre el amor, la pasión y las experiencias que nos marcan profundamente, con una base rítmica sólida y detalles melódicos que tocan el alma.',
    image: SeFueImg,
    audioUrl: DondeEstasAudio
  },
  
];

export const socialMedia = [
  {
      platform: 'Facebook',
      url: 'https://www.facebook.com/'
  },
  {
      platform: 'Instagram',
      url: 'https://www.instagram.com/'
  },
  {
      platform: 'Twitter',
      url: 'https://www.twitter.com/'
  },
  {
      platform: 'Google Plus',
      url: 'https://plus.google.com/'
  },
  {
      platform: 'YouTube',
      url: 'https://www.youtube.com/'
  }
];


