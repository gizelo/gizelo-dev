import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  image?: string;
};

const upsertMeta = (selector: string, attribute: string, value: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute(attribute, value);
};

export const usePageMeta = ({ title, description, image = "/og-image.webp" }: PageMeta) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', "content", description);
    upsertMeta('meta[property="og:title"]', "content", title);
    upsertMeta('meta[property="og:description"]', "content", description);
    upsertMeta('meta[property="og:image"]', "content", `https://gizelo.dev${image}`);
    upsertMeta('meta[name="twitter:title"]', "content", title);
    upsertMeta('meta[name="twitter:description"]', "content", description);
    upsertMeta('meta[name="twitter:image"]', "content", `https://gizelo.dev${image}`);
  }, [description, image, title]);
};
