import { memo, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import PaymentIcon from "@mui/icons-material/Payment";
import TimerIcon from "@mui/icons-material/Timer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Recipe = memo((props) => {
  const {
    recipeId,
    title,
    image,
    cost,
    minutes,
    amount,
    material,
    process,
    liked,
    onClickLike,
    onClickDislike,
  } = props;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("レンダリング");

  function compare(a, b) {
    const orderA = a.order;
    const orderB = b.order;

    let comparison = 0;
    if (orderA > orderB) {
      comparison = 1;
    } else if (orderA < orderB) {
      comparison = -1;
    }
    return comparison;
  }

  const [newProcess, setNewProcess] = useState(undefined);

  useEffect(() => {
    console.log(process);
    if (process !== undefined) {
      setNewProcess(process.sort(compare));
    }
  }, [process]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      style={{ margin: "2em 0 7em" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" color="text.primary">
            {title}
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <TimerIcon />
              </ListItemIcon>
              <ListItemText primary={minutes + "分"} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary={cost + "円"} />
            </ListItem>
          </List>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => onClickDislike(recipeId)}
          >
            <CancelIcon />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            onClick={() => onClickLike(recipeId, liked)}
          >
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Divider />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5" color="text.primary" paragraph>
              {title}
            </Typography>
            <Typography variant="h6" color="text.primary">
              所要時間: {minutes}分
            </Typography>
            <Typography variant="h6" color="text.primary">
              費用: {cost}円
            </Typography>
            <Typography variant="h6" color="text.primary">
              分量: {amount}人分
            </Typography>
            <Typography variant="h6" paragraph style={{ marginTop: "1em" }}>
              材料
            </Typography>
            {material &&
              material.map((mate) => {
                return (
                  <Typography variant="subtitle1" key={mate}>
                    {mate}
                  </Typography>
                );
              })}
            <Typography variant="h6" paragraph style={{ marginTop: "1em" }}>
              作り方
            </Typography>
            {newProcess &&
              newProcess.map((proc) => {
                return (
                  <Typography variant="subtitle1" key={proc.how_to}>
                    {proc.order}.{proc.how_to}
                  </Typography>
                );
              })}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
});

export default Recipe;
