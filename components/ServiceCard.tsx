import React, { FunctionComponent } from 'react'
import {IService} from "../type"

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon,title,about}}) => {

    interface Markup {
      __html: string | TrustedHTML;
    }
    
    const createMarkup = (): Markup => {
      return {
        __html: about,
      };
    };
    
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-orange" />
      <div>
        <h4 className='font-bold'>{title}</h4>
        {/* <p>{about}</p> */}
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  );
}

export default ServiceCard