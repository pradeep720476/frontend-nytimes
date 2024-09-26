import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import {
  NyArticlesContextProps,
  NYTimesContext,
} from "../../context/nytimescontext";
import { Articles } from "../../types/nyarticles.type";

export const ArticlePage: React.FC = () => {
  const { data, error, loading, get } =
    useContext<NyArticlesContextProps>(NYTimesContext);


  const scrollref = useRef();
  const articles = useState(data);
  const view = ['7.json,30.json'];

  const getCards = (articles?: Articles): React.ReactNode => (
    <Grid container spacing={2}>
      {articles?.results.map((article) => (
        <Grid key={article.id} item xs={12} sm={6} md={4}>
          <NewsCard article={article}/>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container>
      {error && !loading ? (
        <Alert severity="error"> {error.message}</Alert>
      ) : loading ? (
        <CircularProgress />
      ) : (
        getCards(data)
      )}
    </Container>
  );
};
