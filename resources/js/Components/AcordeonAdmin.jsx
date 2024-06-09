import { BotonTipoRuta } from "./Botones";
import { useState } from "react";

export default function AcordeonAdmin({ title, count, createdAt, linkText, linkHref, nombre, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mx-5 my-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
            <h2 id={`accordion-color-heading-${title}`}>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-koulen rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 hover:bg-blue-700 gap-3 ${
                        isOpen ? "bg-blue-900 dark:bg-blue-900" : ""
                    }`}
                    onClick={handleClick}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-color-body-${title}`}
                >
                    <span>{title}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform ${isOpen ? 'rotate-180' : 'rotate-0'} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id={`accordion-color-body-${title}`} className={`${isOpen ? 'block' : 'hidden'} gap-3 p-5`}>
                <div className="flex flex-wrap gap-4">
                    <p className="flex-1 text-white dark:text-gray-400 font-koulen">
                        Numero actual de {title.toLowerCase()} {count}
                    </p>
                    <p className="flex-1 text-white dark:text-gray-400 font-koulen">
                        Ultimo {title.toLowerCase()} creado : {createdAt}
                    </p>
                    <p className="flex-1 text-white dark:text-gray-400 font-koulen">
                        Nombre : {nombre}
                    </p>
                    </div>
                    <BotonTipoRuta texto={linkText} ruta={linkHref} />
                {children}
            </div>
        </div>
    );
}
