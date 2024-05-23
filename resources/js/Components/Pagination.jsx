export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button key={index} onClick={() => onPageChange(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
}
