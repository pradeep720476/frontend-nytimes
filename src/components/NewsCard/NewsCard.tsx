import {
  Card,
  Typography,
  IconButton,
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButtonProps,
  Button,
} from "@mui/material";

import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Article, MediaMetaData } from "../../types/nyarticles.type";
import "./NewsCard.scss";
import { OpenInNew } from "@mui/icons-material";

export const NewsCard = (props: {
  article: Article;
}) => {
  const [expanded, setExpanded] = useState(false);

  const getMetaData = (article: Article) => {
    if (
      article.media &&
      article.media.length &&
      article.media[0]["media-metadata"]
    ) {
      return article.media[0]["media-metadata"];
    }
    return [];
  };


  const items: MediaMetaData[] = getMetaData(props.article);

  const handleExpandClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={items[0]?.url} />
          </Avatar>
        }
        title={<Typography>{props.article.title}</Typography>}
        subheader={
          <>
            <Typography variant="body2" color="text.secondary">
              {props.article.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.article.byline}
            </Typography>
          </>
        }
      />
      {items.length ? (
        <CardMedia
          component="img"
          height={items[2].height}
          width={items[2].width}
          image={items[2].url}
          alt="Paella dish"
        />
      ) : (
        <></>
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.article.abstract}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="cardActions">
        <Button
          onClick={() => handleExpandClick(props.article.url)}
          size="medium"
          color="primary"
          centerRipple
        >
          Read more
          <OpenInNew></OpenInNew>
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.article.abstract}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
