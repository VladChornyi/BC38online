import { useState } from 'react';

import { Button } from '../../components/Button';

export const SearchPosts = ({ onSubmit }) => {
  const [search, setSearch] = useState('Hello world');

  // const state = useState('state');

  // state = {
  //   search: '',
  // };

  const handleChange = event => {
    setSearch(event.target.value);
    // setState({ search: event.target.value });
  };

  const handleSubmit = () => {
    onSubmit(search);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={search}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};

// export class SearchPosts extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleSubmit = () => {
//     const { onSubmit } = this.props;
//     onSubmit(this.state.search);
//   };

//   render() {
//     return (
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type to search..."
//           value={this.state.search}
//           onChange={this.handleChange}
//         />
//         <Button onClick={this.handleSubmit}>Search</Button>
//       </div>
//     );
//   }
// }
