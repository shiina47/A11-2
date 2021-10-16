import { memo } from "react";
import { useLocation } from "react-router-dom";

export const RecipeDetail = memo(() => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <p> detail</p>
    </>
  );
});
