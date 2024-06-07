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
        $factoryNoticias = Noticia::factory()->count(1)->create();

        // Obtener la fecha de creación del último artículo creado por la factoría
        $lastFactoryCreatedAt = $factoryNoticias->last()->created_at;

        // Incrementar la fecha en un día para los artículos creados manualmente
        $manualCreatedAt = $lastFactoryCreatedAt->copy()->addDay();


        Noticia::create([
            'titulo' => 'Reconstruyen en 3D una erupcion en torno a un agujero negro de la Via Lactea',
            'resumen' => 'Científicos del Instituto de Tecnología de California (Caltech) han logrado reconstruir en tres dimensiones cómo se producen explosiones en el disco de gas que rodea al agujero negro supermasivo situado en el centro de nuestra galaxia, la Vía Láctea.',
            'contenido' => 'Este hito supone la primera vez que se consigue una recreación tridimensional del movimiento del gas en las proximidades de un agujero negro.
                            El equipo, liderado por la profesora Katie Bouman, utilizó redes neuronales y datos del radiotelescopio ALMA en Chile para generar un modelo 3D de una erupción ocurrida el 11 de abril de 2017.
                            La estructura reconstruida muestra dos regiones brillantes y compactas orbitando el agujero negro, conocido como Sagitario A*, a una distancia de unos 75 millones de kilómetros, aproximadamente la mitad de la distancia entre la Tierra y el Sol.',
            'tipo' => 'Cronica',
            'imagen' => '/img/noticias/noticia_agujeronegro.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,

        ]);

        Noticia::create([
            'titulo' => 'Una impresora 3D crea por primera vez tejido de cerebro humano',
            'resumen' => 'La impresión en tres dimensiones se ha usado anteriormente en medicina, pero este nuevo hito en neurociencia mejorará la eficacia del testeo de fármacos relacionados con enfermedades neurodegenerativas.',
            'contenido' => 'Un grupo de investigadores de la Universidad de Wisconsin-Madison (Estados Unidos) han desarrollado el primer tejido cerebral completamente funcional impreso en 3D del mundo.
                            Según el estudio, publicado en la revista científica Cell, es capaz de desarrollarse y establecer conexiones del mismo modo que lo haría un tejido cerebral humano real.
                            Anteriormente, se habían conseguido grandes avances en medicina con la impresión 3D, sin embargo, es la primera vez que crea un tejido cerebral funcional.
                            Esto es un gran hito para el sector de la neurociencia y podría ser clave en el tratamiento de pacientes con enfermedades neurodegenerativas.',
            'tipo' => 'Cronica',
            'imagen' => '/img/noticias/cerebro-medicina.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,

        ]);

        Noticia::create([
            'titulo' => 'La historia de Guillermo, el impresor de protesis en 3D que envía brazos bionicos a los amputados por la guerra de Ucrania',
            'resumen' => '"Ayudar es demasiado fácil como para no hacerlo". Con esta declaración de intenciones adornando la entrada recibe Ayúdame3D a quien llega a su oficina.
                            En un pequeño piso del barrio de Embajadores, en Madrid, Guillermo Martínez, fundador de esta productora de prótesis impresas en 3D, tiene el núcleo de operaciones donde "hacen magia".',
            'contenido' => 'Todo empezó por el interés de Guillermo por las impresoras 3D y por "qué se podía hacer con ellas, más allá de juguetes".
                            Este joven de 27 años se enteró de que se podían fabricar prótesis y eso, sumado a un viaje a un orfanato de Kenia, fue el "punto de inflexión" que hizo nacer la iniciativa.
                            Fue entonces cuando comenzó a construir prótesis en su tiempo libre durante tres años, pero acabó dejando su trabajo para dedicarse a tiempo completo a la asociación.',
            'tipo' => 'Entrevista',
            'imagen' => '/img/noticias/guillermo-3d.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,

        ]);

        Noticia::create([
            'titulo' => 'Lo nuevo de Apple: los iPhone pueden grabar videos que se verán en tres dimensiones',
            'resumen' => 'La compañía tecnológica Apple ha lanzado la opción de grabar vídeos espaciales en sus modelos iPhone 15 Pro y iPhone 15 Pro Max, los cuales posteriormente podrán visualizarse en 3D a través de sus gafas de realidad virtual y aumentada.',
            'contenido' => 'La marca ha destacado que esta función solo está disponible para aquellos que hayan instalado la actualización 17.2 de iOS, que permite la grabación de vídeos con efecto 3D utilizando las dos cámaras superiores del iPhone. Estos vídeos se graban a 1080p a 30 FPS, en un rango dinámico estándar,
                            ocupando aproximadamente 130 MB de almacenamiento por cada minuto de duración.
                            En las gafas de realidad virtual de la marca de la manzana, este tipo de vídeos se podrán reproducir en una ventana o expandirse para obtener una experiencia visual inmersiva. Con esta innovación, la compañía busca ofrecer a los usuarios la posibilidad de capturar momentos tal como ocurrieron,
                            abriendo un nuevo horizonte de posibilidades.',
            'tipo' => 'Cronica',
            'imagen' => '/img/noticias/apple-vision-pror_d495-275-6539.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,
        ]);

        Noticia::create([
            'titulo' => 'Científicos crean piel humana con una impresora 3D para estudiar enfermedades',
            'resumen' => 'El objetivo es lograr conectar el órgano de la piel con el sistema nervioso para entender los procesos moleculares que causan patologías sensoriales.',
            'contenido' => 'La piel humana es el órgano más grande del cuerpo y está expuesta a muchos factores como el calor, el frío, la humedad, entre otros, que pueden dañarla, estropearla o causar futuros problemas como enfermedades. Algunas de ellas causan síntomas incómodos como el ardor, enrojecimiento, picor y reflejándose en la misma con una apariencia no muy agradable.
                            Por ello y para detectar posibles patologías que se manifiesten en la piel, un equipo de investigadores de la Universidad Miguel Hernández de Elche han creado, mediante impresión 3D, un modelo de piel humana para entender patologías cuyos síntomas se manifiestan en la piel.',
            'tipo' => 'Cronica',
            'imagen' => '/img/noticias/crean-piel-3d.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,
        ]);

        Noticia::create([
            'titulo' => 'Un "youtuber" español se clona a sí mismo con una impresora 3D gigante',
            'resumen' => 'El youtuber español Iván Miranda se está haciendo viral por publicar su tutorial más surrealista hasta la fecha: cómo clonarse a sí mismo con una impresora 3D gigante.',
            'contenido' => 'El vasco, especializado en construcción digital, crea contenido en inglés sobre los cientos de proyectos surrealistas que consigue hacer con la impresora 3D y acumula más de 330000 suscriptores.
                            En las últimas semanas, ha llevado a cabo una locura que ha dejado sin palabras a cientos de usuarios y que sigue siendo compartido por la plataforma de Google.
                            Tras construir él mismo una impresora 3D gigante que permite realizar proyectos de increíbles magnitudes, ha decidido ponerlo a prueba con una maqueta única: su propia figura.
                            Ha necesitado cuatro días para finalizar las 4375 capas de plástico que componen a la escultura, desde la base hasta la cabeza. Todo realizado con el proceso FDM en el que las capas se apilan unas sobre otras.
                            Miranda ha utilizado el material PLA rojo y ha necesitado 108 horas de fabricación en el que 76 horas han sido de impresión y el resto para arreglar tres errores que casi hacen que el proyecto se desmorone por completo. ',
            'tipo' => 'Entrevista',
            'imagen' => '/img/noticias/el-youtuber-ivan-miranda-con-su-clon-3d.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,
        ]);

        Noticia::create([
            'titulo' => '¿Te comerías esta tarta de queso impresa en 3D?',
            'resumen' => 'Existe una impresora 3D capaz de construir productos comestibles a partir de siete ingredientes gracias a un láser azul.',
            'contenido' => 'La tarta de queso suele ser el postre favorito de los usuarios, y para ser perfecto, debe cumplir con las condiciones de estar horneado a baja temperatura, estar bien cuajado y tener una superficie de color amarillo claro.  Las hay de mil sabores, ya sea una tarta de queso con calabaza, zanahoria, nutella, tocino de cielo, galleta lotus, galleta oreo o dulce de leche, entre múltiples variedades.
                            Más allá de la cocina, un grupo de ingenieros de la Universidad de Columbia decidió ampliar los límites de la impresión 3D para afrontar el reto de cocinar una tarta de queso. De primeras no suena muy apetitoso, pero antes de entrar en detalle, hay que aclarar que este postre es comestible.
                            La primera prueba de los ingenieros empezó bastante bien, pero a medida que la impresora echaba una capa encima de la otra, la creación se desplomó y terminó siendo un montón pegajoso de tinta. Después del fracaso, los ingenieros lo volvieron a intentar cuatro veces más, y a la quinta encontraron la forma y el grosor correcto para evitar que la tarta se derrumbara.',
            'tipo' => 'Cronica',
            'imagen' => '/img/noticias/tarta-de-queso-impresa-en-3d.webp',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,
        ]);


        Noticia::create([
            'titulo' => 'Inauguracion de la Pagina TTT',
            'resumen' => 'Celebremos juntos el lanzamiento oficial de la Página TTT, un nuevo hito en la web que promete brindar contenido innovador y emocionante para todos los usuarios.',
            'contenido' => 'Estamos emocionados de anunciar la inauguración oficial de la Página TTT. Después de meses de arduo trabajo y dedicación, finalmente hemos llegado al lanzamiento de nuestra plataforma. Queremos agradecer a todos nuestros usuarios por su apoyo y paciencia durante este proceso.
                            Esperamos que disfruten explorando nuestro contenido y participando en nuestra comunidad.
                            ¡Bienvenidos a la Página TTT!',
            'tipo' => 'Informacion',
            'imagen' => '/img/noticias/inaguracion.png',
            'user_id' => 1,
            'created_at' => $manualCreatedAt,
            'updated_at' => $manualCreatedAt,
        ]);


        $noticias = Noticia::all();
        // Asignar etiquetas a las noticias
        $etiquetas = Etiqueta::all();
        foreach ($noticias as $noticia) {
            $noticia->etiquetas()->attach(
                $etiquetas->random(rand(1, 3))->pluck('id')->toArray()
            );
        }
    }
}

