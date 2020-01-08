import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 50,
    margin:10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function Product({ products }) {
  const classes = useStyles();

  return (
    <ul>
      {products.map(prod => {
        return (
          <Card className={classes.card} variant="outlined" key={prod._id}>
            <CardContent>
              <Typography variant="h4" component="h4">
                {prod.name}
              </Typography>
              <Typography variant="h6" component="h6">{prod.description}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </ul>
  );
}

export default Product;
