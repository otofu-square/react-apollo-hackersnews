import * as React from "react";
import { MutationFunc } from "react-apollo";

import { ILink } from "../models/Link";

interface IProps {
  createLinkMutation: MutationFunc<ILink>;
}

class CreateLink extends React.Component<IProps> {
  public state = {
    description: "",
    url: "",
  };

  public render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button onClick={() => this.createLink()}>Submit</button>
      </div>
    );
  }

  public createLink = async () => {
    const { description, url } = this.state;
    await this.props.createLinkMutation({
      variables: {
        description,
        url,
      },
    });
  }
}

export default CreateLink;
