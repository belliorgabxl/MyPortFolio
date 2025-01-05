import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes, renderContent } from "@/app/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import styles from "./hompage.module.css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person, newsletter } = renderContent(t);
  return (
    <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction="column" paddingY="s" gap="m">
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Button
              data-border="rounded"
              href={`/${locale}/about`}
              variant="tertiary"
              suffixIcon="chevronRight"
              size="m"
            >
              <Flex gap="8" alignItems="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {t("about.title")}
              </Flex>
            </Button>
          </RevealFx>
        </Flex>
      </Flex>
      <div className={styles.banner}>
        <div
          className={styles.slider}
          style={{ "--quatity": 10 } as React.CSSProperties}
        >
          <div
            className={styles.item}
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img src="/images/profile/image07.jpg" alt="test1" />
          </div>

          <div
            className={styles.item}
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src="/images/profile/image06.jpg" alt="test1" />
          </div>

          <div
            className={styles.item}
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src="/images/profile/image05.jpg" alt="test1" />
          </div>

          <div
            className={styles.item}
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src="/images/profile/image08.jpg" alt="test1" />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src="/images/profile/image09.jpg" alt="test1" />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img src="/images/profile/image10.jpg" alt="test1" />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src="/images/profile/image11.jpg" alt="test1" />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <img src="/images/profile/image12.jpg" alt="test1" />
          </div>

          <div
            className={styles.item}
            style={{ "--position": 9 } as React.CSSProperties}
          >
            <img src="/images/profile/image13.jpg" alt="test1" />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 10 } as React.CSSProperties}
          >
            <img src="/images/profile/image14.jpg" alt="test1" />
          </div>
        </div>
      </div>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} locale={locale} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth paddingX="20">
          <Posts range={[1, 2]} columns="2" locale={locale} />
        </Flex>
      )}
      <Projects range={[2]} locale={locale} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Flex>
  );
}
