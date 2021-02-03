import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function Message({message:data,onClick}) {
    return (
        <div>
            {(data.type === 'user' && data.message !== '')&&(
                <div className="text user">
                        {data.message}
                </div>
            )}
            {(data.type === 'reply' && data.message !== '')&&(
                <div className="text reply reply1" >
                  {data.message}
                  <ReactTooltip id="toolTip1" type="light" effect="float" place="bottom"/>
                  <i className="fas fa-ellipsis-v"  data-tip="click to edit" data-for='toolTip1' style={{marginLeft:'5px',cursor:'pointer'}} onClick={()=>onClick(data)}></i>
                </div>
            )}           
        </div>
    )
}
