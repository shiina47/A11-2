import { memo } from "react";
import { Route, Switch } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { Auth } from "../components/pages/Auth";
import { RecipeDisplay } from "../components/pages/RecipeDisplay";
import { Post } from "../components/pages/Post";
import { MyPage } from "../components/pages/MyPage";
import { NotFound } from "../components/pages/NotFound";
import { Header } from "../components/pages/Header";
import { RecipeDetail } from "../components/pages/RecipeDetail";

export const Router = memo(() => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/recipes" component={RecipeDisplay} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/detail" component={RecipeDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
});
