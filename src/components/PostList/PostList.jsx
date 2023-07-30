import React from 'react';
import styles from './PostList.module.scss';
import MySelect from './mySelect/MySelect';

const PostList = ({ posts, sortBy, onSortChange }) => {

  return (
    <div className={styles.body}>
      <table>
        <thead>
          <tr>
            <th>
              <MySelect
                value={sortBy}
                onChange={onSortChange}
                defaultValue={'ID'}
                options={[
                  { value: 'id', name: 'По возрастанию' },
                  { value: '-id', name: 'По убыванию' }
                ]}
              /></th>
            <th>
              <MySelect
                value={sortBy}
                onChange={onSortChange}
                defaultValue={'Заголовок'}
                options={[
                  { value: 'title', name: 'По алфавиту' }
                ]}
              /></th>
            <th>
              <MySelect
                value={sortBy}
                onChange={onSortChange}
                defaultValue={'Описание'}
                options={[
                  { value: 'body', name: 'По алфавиту' }
                ]}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
