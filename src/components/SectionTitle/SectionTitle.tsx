interface SectionTitleProps {
    text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
    return <h2 className="font-title font-medium text-5xl mb-10 text-center">{text}</h2>
}