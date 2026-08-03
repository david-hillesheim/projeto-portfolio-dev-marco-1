import SectionTitle from "../SectionTitle/SectionTitle"; 
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="text-center">
            <SectionTitle text="Projetos" />
            <div className="text-center mt-20 pb-10 flex flex-row gap-5 max-w-[90%] flex-wrap justify-center">

                <ProjectCard 
                    img="/spring.png" 
                    name="Projeto Spring" 
                    description="Projeto desenvolvido com Spring Boot" 
                    stacks="Java, Spring"
                />
                <ProjectCard 
                    img="/spring.png" 
                    name="Projeto Spring" 
                    description="Projeto desenvolvido com Spring Boot" 
                    stacks="Java, Spring"
                />
                <ProjectCard 
                    img="/spring.png" 
                    name="Projeto Spring" 
                    description="Projeto desenvolvido com Spring Boot" 
                    stacks="Java, Spring"
                />
                
            </div>
        </div>

    );
}