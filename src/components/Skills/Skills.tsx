import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <div className="text-center mt-20">
            <h2 className="font-title font-medium text-5xl mb-10">Skills</h2>
            <div className="flex flex-row text-center justify-center  w-[90%] mx-auto">
                <SkillCard img="/spring.png" stack="Spring" />
                <SkillCard img="/spring.png" stack="Spring" />
                <SkillCard img="/spring.png" stack="Spring" />
            </div>
        </div>
    );
}