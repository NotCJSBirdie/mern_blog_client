import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/04/EF-DELTA-Pro-3.png?w=1390&crop=1"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>
          After ultracharged growth, battery maker EcoFlow comes for the
          glampers
        </h2>

        <p className="info">
          <a className="author">Carl Serquina</a>

          <time>2023-01-06 16:45</time>
        </p>

        <p className="summary">
          In recent years, episodes of extreme climate crises and power outrages
          have driven doomsday preppers to plan for off-the-grid survival
          scenarios. The mentality has been a boon to EcoFlow, a Shenzhen-based
          power generating and storing unicorn, which racked up $220 million in
          revenues last year as consumers in the U.S. demanded its solar-powered
          portable power stations.
        </p>
      </div>
    </div>
  );
};

export default Post;
