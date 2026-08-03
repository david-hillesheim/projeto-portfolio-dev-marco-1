interface SkillCardProps {
    img: string;
    stack: string;
}

export default function SkillCard({ img, stack }: SkillCardProps) {
    return (
        <div className="flex flex-col items-center text-center justify-between py-5 px-9 rounded-full bg-primary w-fit mx-auto">
            <img src={img} alt={`Imagem da stack ${stack}`} className="w-20 h-20 " />
            <h3 className="text-white font-text font-bold mt-2">{stack}</h3>
        </div>
    );
}