export default function Hero() {
    return (
        <div className="flex flex-col justify-center text-center items-center gap-5 bg-secondary text-white py-10">
            <img src="/Squirtle de óculos.jpg" alt="Imagem de um Squirtle de Óculos, minha marca registrada" className="w-50 h-50 rounded-full mt-5"/>
                <h1 className="font-text font-bold text-xl">David Hillesheim</h1>
                <h2 className="text-white font-text">Estudante de Desenvolvimento de Sistemas</h2>
                <button className="px-5 py-2 bg-white text-primary rounded-full font-text font-bold cursor-pointer">Ver Projetos</button>
        </div>
    );
}