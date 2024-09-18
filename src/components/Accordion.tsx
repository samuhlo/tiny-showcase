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
  react: "#FEC42F",
  nodejs: "#FF206E",
  html_css: "#34bdab",
  // Agregar lenguajes
};

export function Accordion({ works }: Props) {
  return (
    <div className="w-full">
      {works.map((work, i) => (
        <div key={`work-${i}`} className="mb-4">
          {/* Cabecera dinámica con la línea */}
          <h1
            className={`tracking-widest font-anton uppercase text-2xl font-bold mb-2 relative ${
              i % 2 !== 0 ? "text-right" : "text-left"
            }`}
            style={{ color: languageColors[work.lenguage] || "black" }}
          >
            {/* Línea antes o después del texto, dependiendo si es impar o par */}
            {i % 2 === 0 ? (
              <span className="relative z-10">{work.lenguage}</span>
            ) : (
              <span className="relative z-10">{work.lenguage}</span>
            )}
            {/* Línea usando pseudoelementos */}
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 h-px bg-current ${
                i % 2 === 0 ? "right-0 left-1/2" : "left-0 right-1/2"
              }`}
            ></span>
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
