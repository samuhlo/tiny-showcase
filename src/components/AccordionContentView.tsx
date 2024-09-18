import React from "react";
import { Carousel } from "./Carousel";
import { Button } from "@/components/ui/button";
import { ReactSVG } from "react-svg";

interface Project {
  summary: string;
  url: string;
  images: string[];
}

interface AccordionContentProps {
  project: Project;
}

const AccordionContentView: React.FC<AccordionContentProps> = ({ project }) => {
  return (
    <div className="flex content-center justify-evenly gap-14 flex-row-reverse flex-wrap-reverse">
      <div className="flex flex-col justify-between">
        <p className="max-w-80 min-w-80 mb-16">{project.summary}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-700 underline tracking-wider"
        >
          <Button variant="link">
            Ver Proyecto
            <ReactSVG src="arrow-link.svg" className="mb-2" />
          </Button>
        </a>
      </div>
      <div className="mt-2">
        {project.images.length > 1 ? (
          <Carousel images={project.images} />
        ) : (
          <figure className="flex aspect-square items-center justify-center max-w-[246px]">
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
