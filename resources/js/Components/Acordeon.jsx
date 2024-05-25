function Acordeon({ title, isOpen, onToggle, children }) {
    return (
        <div>
            <h2 id={`accordion-color-heading-${title}`}>
                <button
                    type="button"
                    className={`text-center flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3 ${
                        isOpen ? "bg-blue-900 dark:bg-blue-900" : ""
                    }`}
                    data-accordion-target={`#accordion-color-body-${title}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-color-body-${title}`}
                    onClick={onToggle}
                >
                    <span>{title}</span>
                </button>
            </h2>
            <div
                id={`accordion-color-body-${title}`}
                className={`${isOpen ? "" : "hidden"}`}
                aria-labelledby={`accordion-color-heading-${title}`}
            >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Acordeon;
