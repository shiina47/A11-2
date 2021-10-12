import { memo } from "react";
import { Route, Switch } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { Auth } from "../components/pages/Auth";
import { RecipeDisplay } from "../components/pages/RecipeDisplay";
import { Post } from "../components/pages/Post";
import { MyPage } from "../components/pages/MyPage";
import { NotFound } from "../components/pages/NotFound";
import { Header } from "../components/pages/Header";
import { Advanced } from "../components/pages/tinderLike";

export const Router = memo(() => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/tinder" component={ Advanced } />
        <Route exact path="/" component={Top} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/recipes" component={RecipeDisplay} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/mypage" component={MyPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
});
