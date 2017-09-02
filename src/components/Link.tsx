import * as React from "react";

class Link extends React.Component {
  public props: {
    link: {
      description: string;
      url: string;
    };
  };

  public render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    );
  }

  public voteForLink = async () => {
    console.log("ok");
  }
}

export default Link;
