import React, { Component } from 'react'
const random_words=[
    'hey ya','life is good','dont give up', 'oops i did it again','santa babara','wishful thinking','santa claus','wish i were him','humming under the sun', 
    'tan which i got']


export class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          name: "",
         
        };
        
        this.handleGenerator=this.handleGenerator.bind(this)
      }




    handleGenerator(){
      var u = Math.floor(Math.random()*10)
        this.setState({
            name:random_words[u]
        })
    }
    render() {
        return (
            <div>
                <h6>random words generated</h6>
                <button onClick={this.handleGenerator}>generator</button>
                <br/>  <br/>
                <br/>
                <br/>

                {this.state.name}
            </div>
        )
    }
}

export default App
