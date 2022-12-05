import React, { Component } from "react";
import "./App.css";
import AccTable from "./Component/AccTable";
import NavBar from "./Component/NavBar";
import SwiperAcc from "./Component/SwiperAcc";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
import Checking from "./Component/Checking";
import TabsExample from "./Component/Autoplay";
import AccorditionwithSlider from "./Component/AccorditionwithSlider";
import Dottedline from "./Component/Dottedline";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     msg: "hi",
  //     riderhead: [
  //       "RTL Support",
  //       "In-app chats",
  //       "Multiple stop",
  //       "Schedule a ride",
  //     ],
  //     driverhead: [
  //       "Schedule a ride",
  //       "Multiple stop",
  //       "In-app chats",
  //       "RTL Support",
  //     ],
  //     ridertext: [
  //       "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
  //       "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
  //       "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
  //       "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
  //     ],
  //     drivertext: [
  //       "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
  //       "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
  //       "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
  //       "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
  //     ],
  //   };
  // }

  // SetDriver = () => {
  //   this.setState({ riderhead: this.state.driverhead });
  // };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <AccTable></AccTable>
        {/* <SwiperAcc
          tab1="Rider"
          tab2="Driver"
          // RiderHead={this.state.riderhead}
          // RiderText={this.state.ridertext}
        /> */}

        {/* <AccorditionwithSlider tab1="Rider" tab2="Driver" /> */}
        <Dottedline />
        {/* <TabsExample /> */}
        {/* <Checking /> */}

        {/* <div>{this.state.riderhead}</div>
        <button onClick={this.SetDriver}> click me</button> */}

        {/* <button onClick={this.ChangeDriver}>click me </button> */}
      </div>
    );
  }
}

export default App;
