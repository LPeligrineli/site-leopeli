import type { LocalizedText } from "@/shared/i18n/locale";

export interface Profile {
  name: string;
  role: string;
  email: string;
  avatar: string;
  linkedin: LocalizedText;
  cv: LocalizedText;
}
