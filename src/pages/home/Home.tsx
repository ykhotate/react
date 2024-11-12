import { Box, Card, Stack, Typography } from "@mui/material";

const INTRODUCTION: string = await fetch( "/react/" + "introduction.txt").then((res) => res.text().then((data) => data));

const UPDATE_HISTORY = [`新規作成しました`]
const Home = () => {
  return (
    <>
      <Typography variant="h4" mt={5}>
        YK-HOTATE.COM
      </Typography>
      <Box maxWidth={800} mt={5} mb={5}>
        <Typography variant="h4">
          はじめに
        </Typography>
        <Typography variant="body1" whiteSpace={"pre-wrap"}>
          {INTRODUCTION}
        </Typography>
      </Box>
      <Typography variant="h5">
          更新履歴
        </Typography>
      <Box overflow={"auto"} maxHeight={200} maxWidth={500} margin={"auto"} border={"thick"}>
        <Stack direction={"column"} gap={2} margin={1}>
        {UPDATE_HISTORY.map((update, id) => {
          return (
            <Card key={id}>
              <Typography variant="body2" whiteSpace={"pre-wrap"}>
                {update}
              </Typography>
            </Card>)
        })}
          </Stack>
      </Box>
    </>
  );
};

export default Home;
