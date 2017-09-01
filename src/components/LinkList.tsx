import * as React from "react";
import { QueryProps } from "react-apollo";

import { ILink } from "../models/Link";
import Link from "./Link";

export interface IProps extends QueryProps {
  links: ILink[];
}

const LinkList = ({ links }: IProps) => (
  <div>
    {links.map(link => (
      <Link key={link.id} url={link.url} description={link.description} />
    ))}
  </div>
);

export default LinkList;
