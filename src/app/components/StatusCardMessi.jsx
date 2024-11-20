export default function MessiStatusCodeCard( nombre ) {
    const { imagenSrc, alt, textCode, description } = nombre;
    return (
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg border-2 border-blue-400">
            <img src={imagenSrc} alt={alt} height="400" width="450" className="rounded-md mb-2 imagen" />
            <span className="text-center text-lg font-semibold text-gray-800">{textCode}</span>
            <span className="text-center text-lg font-semibold text-gray-800">Descripcion: {description || null}</span>
        </div>
    );
}
