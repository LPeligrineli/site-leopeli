"use client";

import Image from "next/image";
import { LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { TestimonialListItem } from "../types/testimonials-view-model";

interface TestimonialDialogPresenterProps {
  testimonial: TestimonialListItem;
  readMoreLabel: string;
  originalVersionLabel: string;
  printVersionLabel: string;
  showsOriginal: boolean;
  onToggleVersion: () => void;
}

export function TestimonialDialogPresenter({
  testimonial,
  readMoreLabel,
  originalVersionLabel,
  printVersionLabel,
  showsOriginal,
  onToggleVersion,
}: TestimonialDialogPresenterProps) {
  return (
    <Dialog>
      <DialogTrigger asChild className="flex justify-end w-full">
        <button className="text-sm text-primary text-right underline underline-offset-4 mb-8">
          {readMoreLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[70vh] overflow-y-auto">
        <DialogTitle className="sr-only">{testimonial.name}</DialogTitle>
        <DialogDescription asChild>
          <div className="p-4 h-full flex flex-col justify-start">
            <div className="flex items-center">
              <div className="mt-4 mb-2 text-left ml-4">
                <h3 className="text-lg font-bold text-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} @{testimonial.company}
                </p>
                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="inline-block mr-2 mt-2 w-4 h-4 text-blue-600" />
                </a>
              </div>
            </div>
            <Separator className="my-4" />
            {testimonial.print && (
              <Button onClick={onToggleVersion} className="my-4">
                {showsOriginal ? printVersionLabel : originalVersionLabel}
              </Button>
            )}
            {showsOriginal && testimonial.print ? (
              <div className="w-full flex justify-center rounded-md overflow-hidden my-6">
                <Image
                  src={testimonial.print}
                  alt="Print Icon"
                  width={400}
                  height={800}
                  className="text-primary/20 object-cover rounded-md"
                />
              </div>
            ) : (
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                &quot;{testimonial.content}&quot;
              </p>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
