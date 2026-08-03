interface ProjectCard {
    img: string;
    name: string;
    description: string;
    stacks: string;
}

export default function ProjectCard({ img, name, description, stacks }: ProjectCard) {
    return(
        <div className="bg-primary text-white flex flex-col items-center w-fit p-5 rounded-2xl font-text">
            <img src={img} alt={`Imagem do projeto de ${name}`} className="h-40 w-40 mb-5" />
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="mb-2">{description}</p>
            <p>Stacks Utilizadas: {stacks}</p>
        </div>
    );
}