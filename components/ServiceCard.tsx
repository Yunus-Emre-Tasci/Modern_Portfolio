import React, { FunctionComponent } from 'react'
import {IService} from "../type"

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon,title,about}}) => {
  return (
    <div>
        <Icon/>
      <h4>{title}</h4>
      <p>{about}</p>
    </div>
  );
}

export default ServiceCard