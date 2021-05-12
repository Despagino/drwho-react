import React from 'react'
import Box3 from './box3'

class Box4 extends React.Component {
    render() {
        return (
            <div>
                <Box3 name={this.props.name} />
            </div>
        )
    }
}

export default Box4;