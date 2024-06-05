export const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const eraseCookie = (name) => {
    document.cookie = name + '=; Max-Age=-99999999;';
};

// Añadir articulos visitados a cookies
export const addArticuloToCookie = (articulo) => {
    const maxArticulos = 4;
    let articulos = JSON.parse(getCookie("visitedArticulos") || "[]");

    articulos = articulos.filter(a => a.id !== articulo.id); // Eliminar duplicados
    articulos.unshift(articulo); // añade el articulo al principio
    if (articulos.length > maxArticulos) {
        articulos.pop(); // quira el ultimo articulo si hay mas de maxArticulos
    }

    setCookie("visitedArticulos", JSON.stringify(articulos), 7); // poner una duración de 7 dias
};

export const getVisitedArticulos = () => {
    return JSON.parse(getCookie("visitedArticulos") || "[]");
};
