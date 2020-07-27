import React from 'react';

class ToDo extends React.Component
{
    render ()
    {
        return (
            <li>
                {this.props.task}
            </li>
        );
    }
}
export default ToDo;