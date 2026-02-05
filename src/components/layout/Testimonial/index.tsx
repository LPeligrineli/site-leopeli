import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Testimonial } from "@/data/testimonials/testimonial.type";
import { FullTestimonial } from "./Fulltestimonial";
import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialDialog = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const { t } = useLanguage();
  return (
    <Dialog>
      <DialogTrigger asChild className="flex justify-end w-full">
        <button className="text-sm text-primary text-right underline underline-offset-4 mb-8">
          {t("common.read_more")}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[70vh] overflow-y-auto">
        <DialogTitle className="sr-only">{testimonial.name}</DialogTitle>
        <DialogDescription asChild>
          <FullTestimonial testimonial={testimonial} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
