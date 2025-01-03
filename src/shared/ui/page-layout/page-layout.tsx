import { ReactNode } from "react";

import { Text } from "@shared/ui/text";

import {
  Container,
  PageInfoContainer,
  TitleContainer,
} from "./page-layout.styles.ts";

type PageLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const PageLayout = ({ children, subtitle, title }: PageLayoutProps) => (
  <Container>
    <PageInfoContainer>
      <TitleContainer>
        <Text $size="title-l">{title}</Text>
      </TitleContainer>
      <Text $size={"body-l"}>{subtitle}</Text>
    </PageInfoContainer>

    {children}
  </Container>
);
