import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
	constructor(props){
      super(props);
      //console.log('data from component', JSON.parse(this.props.data));
      this.state = {
	    sphrase: ''
	  };
    }
    handleFormSubmit(event) {
	  event.preventDefault();
	  //console.log(this.state);
	  const data = new FormData(event.target);
	  console.log(data);
	}
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <form action="" method="post" onSubmit={this.handleSubmit}>
						    <input type="text" id="sphrase" name="search_phrase" value={this.state.sphrase} onChange={e => this.setState({ sphrase: e.target.value })} />
						    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
						    </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    //ReactDOM.render(<Example />, document.getElementById('example'));
    var data = document.getElementById('example').getAttribute('data');
    ReactDOM.render(<Example data={data} />, document.getElementById('example'));
}
