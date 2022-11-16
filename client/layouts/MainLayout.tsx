import { Container } from "@material-ui/core";
import React, { PropsWithChildren } from "react";
import Navbar from "components/Navbar";
import Player from "components/Player";
import Head from "next/head";
import { FCWithChildren } from "types/global";

interface MainLayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FCWithChildren<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Bear Ear"}</title>
        <meta
          name="description"
          content={
            description ||
            `Музыкальная площадка, 
                        где каждый может почувствовать себя в своей 
                        берлоге, расслабить голову или же зарабоать 
                        бабок, не вставая с дивана`
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={keywords || "Music, tracks, artists, songs, lyrics"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container className="container">{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
