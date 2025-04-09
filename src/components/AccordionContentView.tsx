import React from "react";
import { Carousel } from "./Carousel";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";

interface Project {
  summary: string;
  url: string;
  githubUrl?: string;
  images: string[];
  testuser?: string;
  testpass?: string;
}

interface AccordionContentProps {
  project: Project;
}

const AccordionContentView: React.FC<AccordionContentProps> = ({ project }) => {
  return (
    <div className="flex content-center justify-evenly gap-14 flex-row-reverse flex-wrap-reverse">
      <div className="flex flex-col justify-between">
        <p className="max-w-80 mb-12 mt-3">{project.summary}</p>
        {
          /* Test user and password */
          project.testuser && project.testpass && (
            <div className="flex flex-col gap-1 mb-6">
              <p className="text-stone-800 text-sm font-semibold">
                Usuario prueba:{" "}
                <span className="text-stone-600">{project.testuser}</span>
              </p>
              <p className="text-stone-800 text-sm font-semibold">
                Contraseña:{" "}
                <span className="text-stone-600">{project.testpass}</span>
              </p>
            </div>
          )
        }

        <div className="flex justify-between">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-800 underline tracking-wider"
          >
            <Button variant="linkHover2">
              Ver Proyecto <ArrowUpRight className="ml-2 mb-1 h-6 w-6" />
            </Button>
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 underline tracking-wider"
            >
              <Button variant="linkHover2">
                GitHub <Github className="ml-2 mb-1 h-5 w-5" />
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="mt-2">
        {project.images.length > 1 ? (
          <Carousel images={project.images} />
        ) : (
          <figure className="flex aspect-square items-center justify-start max-w-[243px]">
            <img
              src={project.images[0]}
              alt="Project"
              className="w-full h-full object-cover"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default AccordionContentView;
