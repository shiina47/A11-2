import { memo } from "react";
import { Route, Switch } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { Auth } from "../components/pages/Auth";
import { RecipeDisplay } from "../components/pages/RecipeDisplay";
import { Post } from "../components/pages/Post";
import { MyPage } from "../components/pages/MyPage";

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/recipes" component={RecipeDisplay} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/mypage" component={MyPage} />
    </Switch>
  );
});
