import React from 'react'
class CompA extends React.Component{
    constructor(){
        
        super()
        this.state = { 

            saniya : {
                X:0,
                Y:1, 
                Z:2
            }

        }
    }
    render()
    {
        console.log(this.state.saniya)
        return(
            <div>
                <h1>Hi saniya{JSON.stringify(this.state.saniya)}</h1>
            </div>
        )
    }
}

export default CompA;