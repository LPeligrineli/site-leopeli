"use client";

import { useMemo } from "react";
import { biography, profile, skillCategories } from "@/config/site-content";
import { useLanguage } from "@/contexts/LanguageContext";

export function useProfileViewModel() {
  const { locale } = useLanguage();

  return useMemo(
    () => ({
      name: profile.name,
      role: profile.role,
      email: profile.email,
      avatar: profile.avatar,
      linkedinUrl: profile.linkedin[locale],
      cvUrl: profile.cv[locale],
      currentYear: new Date().getFullYear(),
    }),
    [locale],
  );
}

export function useSkillsViewModel() {
  const { t } = useLanguage();

  return useMemo(
    () => ({
      categories: skillCategories.map((category) => ({
        key: category.key,
        title: t(`skills.${category.key}`),
        skills: category.skills.map((skill) => ({ ...skill })),
      })),
    }),
    [t],
  );
}

export function useAboutViewModel() {
  const { locale } = useLanguage();
  const profileViewModel = useProfileViewModel();
  const skillsViewModel = useSkillsViewModel();

  return useMemo(
    () => ({
      profile: profileViewModel,
      biography: [...biography[locale]],
      categories: skillsViewModel.categories,
    }),
    [locale, profileViewModel, skillsViewModel.categories],
  );
}
