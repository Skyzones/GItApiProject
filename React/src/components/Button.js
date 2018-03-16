import React, {
  Component
} from 'react';


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }



    onButtonClick() {
      this.setState({
        isLoaded:true
      });
      this.fetchData();
    }

  //
  fetchData() {
    fetch('https://api.github.com/users/skyzones/repos')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: false,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

render() {
  const {
    error,
    isLoaded,
    items
  } = this.state;
  console.log(items, isLoaded)
//check for array

items.splice(2,2);
items.splice(1,1);
// removing fluff


  return (
    <div>
      <button onClick={this.onButtonClick}>Click me!</button>
      Click the button to pull my most recent repository!!
       {items.map(item => (
         <div key={item.id}>
            <div>Name of repo: {item.name} </div>
            <div> Photo: <img src={item.owner.avatar_url} /> </div>
            <div>
              <a href={item.html_url}>More info!</a>
            </div>

         </div>
       ))}
     </div>
    );
  }

}
export default Button;
