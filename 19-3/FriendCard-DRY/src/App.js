import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Friend from "./components/FriendCard";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <Friend alt="Spongebob" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png" name="Spongebob" occupation="Fry Cook" location="A Pineapple Under the Sea"/>
    <Friend alt="Mr. Krabs" src="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131" name="Mr. Krabs" occupation="Restaurant Owner" location="A Giant Anchor"/>
    <Friend alt="Squidward" src="https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626" name="Squidward" occupation="Cashier" location="An Easter Island Head"/>
  </Wrapper>
);

export default App;
