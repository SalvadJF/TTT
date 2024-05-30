import { useState, useEffect } from "react";
import { ApplicationLogo } from "./ApplicationLogo";

const ModalCookies = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const cookiesAccepted = document.cookie.includes("cookies_accepted=true");
    if (cookiesAccepted) {
      setShowModal(false);
      onClose();
    }
  }, [onClose]);

  const handleAcceptCookies = () => {
    // Almacenar el consentimiento del usuario en una cookie
    document.cookie = "cookies_accepted=true; max-age=31536000"; // La cookie expira en un año
    setShowModal(false);
    onClose();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg justify-center text-center">
          <div className="flex justify-center mb-4">
            <ApplicationLogo />
          </div>
          <h2 className="text-lg font-koulen mb-4">Aviso de cookies</h2>
          <p className="mb-4 font-lato">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
          </p>
          <p className="mb-4 font-lato">
            Al hacer clic en Aceptar, aceptas el uso de cookies.
          </p>
          <div className="flex justify-center">
            <button
              className="mr-2 px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleAcceptCookies}
            >
              Aceptar
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={handleCloseModal}
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCookies;
