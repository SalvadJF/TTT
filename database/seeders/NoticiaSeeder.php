<?php

namespace Database\Seeders;

use App\Models\Noticia;
use App\Models\Categoria;
use App\Models\Etiqueta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NoticiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Crear noticias y obtenerlas
        $noticias = Noticia::factory()->count(10)->create();


        Noticia::create([
            'titulo' => 'Reconstruyen en 3D una erupción en torno a un agujero negro de la Vía Láctea',
            'resumen' => 'Científicos del Instituto de Tecnología de California (Caltech) han logrado reconstruir en tres dimensiones cómo se producen explosiones en el disco de gas que rodea al agujero negro supermasivo situado en el centro de nuestra galaxia, la Vía Láctea.',
            'contenido' => 'Este hito supone la primera vez que se consigue una recreación tridimensional del movimiento del gas en las proximidades de un agujero negro.
                            El equipo, liderado por la profesora Katie Bouman, utilizó redes neuronales y datos del radiotelescopio ALMA en Chile para generar un modelo 3D de una erupción ocurrida el 11 de abril de 2017.
                            La estructura reconstruida muestra dos regiones brillantes y compactas orbitando el agujero negro, conocido como Sagitario A*, a una distancia de unos 75 millones de kilómetros, aproximadamente la mitad de la distancia entre la Tierra y el Sol.',
            'tipo' => 'Noticia',
            'imagen' => '/img/noticias/noticia_agujeronegro.webp',
            'user_id' => 1,

        ]);

        Noticia::create([
            'titulo' => 'Una impresora 3D crea por primera vez tejido de cerebro humano',
            'resumen' => 'La impresión en tres dimensiones se ha usado anteriormente en medicina, pero este nuevo hito en neurociencia mejorará la eficacia del testeo de fármacos relacionados con enfermedades neurodegenerativas.',
            'contenido' => 'Un grupo de investigadores de la Universidad de Wisconsin-Madison (Estados Unidos) han desarrollado el primer tejido cerebral completamente funcional impreso en 3D del mundo.
                            Según el estudio, publicado en la revista científica Cell, es capaz de desarrollarse y establecer conexiones del mismo modo que lo haría un tejido cerebral humano real.
                            Anteriormente, se habían conseguido grandes avances en medicina con la impresión 3D, sin embargo, es la primera vez que crea un tejido cerebral funcional.
                            Esto es un gran hito para el sector de la neurociencia y podría ser clave en el tratamiento de pacientes con enfermedades neurodegenerativas.',
            'tipo' => 'Noticia',
            'imagen' => '/img/noticias/cerebro-medicina.webp',
            'user_id' => 1,

        ]);

        Noticia::create([
            'titulo' => 'La historia de Guillermo, el impresor de prótesis en 3D que envía brazos biónicos a los amputados por la guerra de Ucrania',
            'resumen' => '"Ayudar es demasiado fácil como para no hacerlo". Con esta declaración de intenciones adornando la entrada recibe Ayúdame3D a quien llega a su oficina.
                            En un pequeño piso del barrio de Embajadores, en Madrid, Guillermo Martínez, fundador de esta productora de prótesis impresas en 3D, tiene el núcleo de operaciones donde "hacen magia".',
            'contenido' => 'Todo empezó por el interés de Guillermo por las impresoras 3D y por "qué se podía hacer con ellas, más allá de juguetes".
                            Este joven de 27 años se enteró de que se podían fabricar prótesis y eso, sumado a un viaje a un orfanato de Kenia, fue el "punto de inflexión" que hizo nacer la iniciativa.
                            Fue entonces cuando comenzó a construir prótesis en su tiempo libre durante tres años, pero acabó dejando su trabajo para dedicarse a tiempo completo a la asociación.',
            'tipo' => 'Entrevista',
            'imagen' => '/img/noticias/guillermo-3d.webp',
            'user_id' => 1,

        ]);

        Noticia::create([
            'titulo' => 'Inauguración de la Página TTT',
            'resumen' => 'Celebremos juntos el lanzamiento oficial de la Página TTT, un nuevo hito en la web que promete brindar contenido innovador y emocionante para todos los usuarios.',
            'contenido' => 'Estamos emocionados de anunciar la inauguración oficial de la Página TTT. Después de meses de arduo trabajo y dedicación, finalmente hemos llegado al lanzamiento de nuestra plataforma. Queremos agradecer a todos nuestros usuarios por su apoyo y paciencia durante este proceso.
                            Esperamos que disfruten explorando nuestro contenido y participando en nuestra comunidad.
                            ¡Bienvenidos a la Página TTT!',
            'tipo' => 'Informacion',
            'imagen' => '/img/noticias/inaguracion.png',
            'user_id' => 1,
        ]);


        // Asignar etiquetas a las noticias
        $etiquetas = Etiqueta::all();
        foreach ($noticias as $noticia) {
            $noticia->etiquetas()->attach(
                $etiquetas->random(rand(1, 3))->pluck('id')->toArray()
            );
        }
    }
}

