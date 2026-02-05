"use client";
import { Testimonial } from "@/data/testimonials/testimonial.type";
import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { LinkedinIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const FullTestimonial = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const [originalVersion, setOriginalVersion] = useState(false);

  const { locale, t } = useLanguage();

  const { name, content, role, company, linkedinUrl, print } = testimonial;

  return (
    <div className="p-4 h-full flex flex-col justify-start">
      <div className="flex items-center">
        <div className="mt-4 mb-2 text-left ml-4">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {role[locale]} @{company}
          </p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="inline-block mr-2 mt-2 w-4 h-4 text-blue-600" />
          </a>
        </div>
      </div>
      <Separator className="my-4" />
      {/* Quote icon */}
      {/* Content */}
      {print && <Button onClick={() => setOriginalVersion(!originalVersion)} className="my-4">{originalVersion ? t("common.viewPrintVersion") : t("common.viewOriginalVersion")}</Button>}
      
      {originalVersion && print ? (
        <div className="w-full flex justify-center rounded-md overflow-hidden my-6">
          <Image
            src={print}
            alt="Print Icon"
            width={400}
            height={800}
            className="text-primary/20 object-cover rounded-md"
          />
        </div>
      ) : (
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          "{content[locale]}"
        </p>
      )}
    </div>
  );
};
