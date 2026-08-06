import SectionTitle from "../SectionTitle/SectionTitle"; 
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div>
            <SectionTitle text="Projetos" />
            <div className="mt-20 pb-10 flex flex-row gap-5  flex-wrap justify-center">

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