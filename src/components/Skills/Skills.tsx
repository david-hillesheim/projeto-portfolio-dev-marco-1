import SkillCard from "./SkillCard";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Skills() {
    return (
        <div className="text-center mt-20 pb-10">
            <SectionTitle text="Habilidades" />
            <div className="flex flex-row text-center justify-center  w-[90%] mx-auto">
                <SkillCard img="/spring.png" stack="Spring" />
                <SkillCard img="/spring.png" stack="Spring" />
                <SkillCard img="/spring.png" stack="Spring" />
            </div>
        </div>
    );
}