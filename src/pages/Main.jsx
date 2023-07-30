import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, sortPosts } from '../redux/posts';
import Pagination from '../components/Pagination/Pagination';
import Loader from '../components/Loader/Loader';
import PostList from '../components/PostList/PostList';
import styles from './Main.module.scss';

function Main() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();

  const posts = useSelector((state) =>
    state.posts.posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
  );
  const status = useSelector((state) => state.posts.status);

  const fetchPostsMemoized = useCallback(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  useEffect(() => {
    fetchPostsMemoized();
  }, [fetchPostsMemoized]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
    dispatch(sortPosts(value));
  }, [dispatch]);

  const changePage = useCallback((selectedPage) => {
    const url = `/page/${selectedPage}`;
    navigate(url); 
  }, [navigate]);

  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={search}
        onChange={changeHandler}
        placeholder='Поиск'
      />
      {status === 'loading' ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <Loader />
        </div>
      ) : (
        <>
          <PostList posts={posts} sortBy={sortBy} onSortChange={handleSortChange} />
          <Pagination currentPage={parseInt(page || 1)} onChangePage={changePage} />
        </>
      )}
    </>
  );
}

export default Main;
