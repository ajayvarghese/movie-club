import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './MovieSearch.css';
import { TextInput } from './../../components/FormFields/Input';
import TextField from '@material-ui/core/TextField';

const Search = ({ onChange, ...props }) => (<div>
  <TextField
    {...props} 
    label="Name"
    onChange={e => onChange(e.target.value)}
    margin="normal"
  />
</div>);

class MovieSearch extends Component {
  state = {
    searchText: '',
  }

  changeSearchText = searchText => this.setState({ searchText });

  render(){
    return(<div className={styles.wrapper}>
      <Search value={this.state.searchText} onChange={this.changeSearchText} />
      <Button variant="contained" color="primary">ADD MOVIE</Button>
      {this.state.searchText && <p>Search List for {this.state.searchText}</p>}
    </div>)
  }
}

export default MovieSearch;