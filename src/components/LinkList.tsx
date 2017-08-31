import * as React from "react";

import { ILink } from "../models/Link";
import Link from "./Link";

interface IProps {
  links: ILink[];
}

const defaultProps = {
  links: [
    {
      id: "1",
      description: "The Coolest GraphQL Backend 😎",
      url: "https://www.graph.cool",
    },
    {
      id: "2",
      description: "The Best GraphQL Client",
      url: "http://dev.apollodata.com/",
    },
  ],
};

const LinkList = ({ links }: IProps = defaultProps) => (
  <div>
    {links.map(link => (
      <Link key={link.id} url={link.url} description={link.description} />
    ))}
  </div>
);

export default LinkList;
