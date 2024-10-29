interface PassoProps {
    decorativoClass: boolean,
    titulo: string,
    texto: string
}

export const Passo = ({ decorativoClass, titulo, texto }: PassoProps) => {
    return (
        <div className="relative pl-8">
            <span
            className="absolute left-0 top-1 w-4 h-4 rounded-full"
            style={{
                background: "radial-gradient(circle, var(--cor-p2) 35%, var(--cor-p3) 35%)",
            }}
            ></span>
    
            {decorativoClass && (
            <span
                className="absolute left-[7px] top-4 h-[130%] w-[2px] bg-corP2"
                style={{ zIndex: 1 }}
            ></span>
            )}

            <h3 className="text-2xl font-semibold mb-3">{titulo}</h3>
            <p className="text-cinzaEscuro text-lg">{texto}</p>
        </div>
    );
};