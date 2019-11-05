import React, { Component } from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import axios from 'axios';
import Posts from './Components/Posts/Posts';
import Pagination from './Components/Paginator/Pagination';

const URL = `https://pixabay.com/api/?image&per_page=100&&page=category=nature&key=12869213-d0e5717d841c234d773fc655d`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      currentPage: 1,
      postsPerPage: 9,
      pageNumber: '',
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(({ data }) => {
        this.setState({ pictures: data.hits });
        console.log(data.hits);
      })
      .catch();
  }

  render() {
    const { pictures, currentPage, postsPerPage, setCurrentPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pictures.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div>
        <LoginForm />
        <Posts items={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={pictures.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default App;
