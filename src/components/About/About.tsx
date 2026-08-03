import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
    return (
        <div className="flex flex-col text-center justify-center mt-20 w-[90%] mx-auto">
            <SectionTitle text="Sobre mim" />
            <p className="font-text">
                Olá! Me chamo David Hillesheim e atualmente estou cursando um técnico em Desenvolvimento de Sistemas, e atualmente, estou estudando React e Spring para que eu possa futuramente ingressar no mercado de tecnologia como desenvolvedor, seja front-end, seja back-end, ou até mesmo sendo desenvolvedor full-stack, estou fazendo este projeto com o intuito de aprender e consolidar meus conhecimentos.
            </p>
        </div>
    );
}