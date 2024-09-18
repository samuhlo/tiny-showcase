import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionContentView from "./AccordionContentView";

interface Props {
  works: {
    lenguage: string;
    projects: {
      name: string;
      summary: string;
      url: string;
      images: string[];
    }[];
  }[];
}

// Mapeo de colores por lenguaje
const languageColors: { [key: string]: string } = {
  JavaScript: "#f5f11a",
  Python: "#c21fd8",
  Java: "#40cf23",
  // Agregar lenguajes
};

export function Accordion({ works }: Props) {
  return (
    <div className="w-full">
      {works.map((work, i) => (
        <div key={`work-${i}`} className="mb-4">
          {/* Cabecera dinamica*/}
          <h1
            className={`tracking-widest uppercase text-2xl font-bold mb-2 ${
              i % 2 !== 0 ? "text-right" : ""
            }`}
            style={{ color: languageColors[work.lenguage] || "black" }} // Asignar color por nombre del lenguaje
          >
            {work.lenguage}
          </h1>

          {/* Acordeón para los proyectos */}
          <BaseAccordion type="multiple">
            {work.projects.map((project, j) => (
              <AccordionItem key={`project-${j}`} value={`project-${j}`}>
                <AccordionTrigger>{project.name}</AccordionTrigger>
                <AccordionContent>
                  <AccordionContentView project={project} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </BaseAccordion>
        </div>
      ))}
    </div>
  );
}
