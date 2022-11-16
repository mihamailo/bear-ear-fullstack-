import { Box, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import MainLayout from "layouts/MainLayout";
import gif from "assets/XOsX.gif";

export default function index() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="main-text">
        <Box className="title" style={{ fontSize: "36px" }}>
          {/* Напряги свои уши, расслабляя душу */}
          Music for soul
        </Box>
        <Button onClick={() => router.push("/tracks")}>fill a magic</Button>
      </div>
      <style jsx>
        {`
          .main-text {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </MainLayout>
  );
}
