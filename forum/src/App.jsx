import { useEffect, useState } from 'react';
import ForumHeader from './components/ForumHeader.jsx';
import PostDetails from './components/PostDetails.jsx';
import PostList from './components/PostList.jsx';
import UserDetails from './components/UserDetails.jsx';
import UsersPage from './components/UsersPage.jsx';
import getDutchComments from './commentTexts.js';
import postTexts from './postTexts.js';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [commentError, setCommentError] = useState('');
  const [sendingComment, setSendingComment] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const usersPage = window.location.pathname === '/users';
  const userId = window.location.pathname.match(/^\/users\/(\d+)$/)?.[1];
  const postId = window.location.pathname.match(/^\/posts\/(\d+)$/)?.[1];

  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((postData) => {
          if (!postData.id) throw new Error();
          setPost({ ...postData, ...postTexts[postData.id] });
          return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        })
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((user) => {
          setAuthor(user);
          return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        })
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((postComments) => setComments(getDutchComments(postId, postComments)))
        .catch(() => setError('De discussie kon niet worden geladen. Probeer het later opnieuw.'))
        .finally(() => setLoading(false));
    } else if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((data) => {
          if (!data.id) throw new Error();
          setUser(data);
        })
        .catch(() => setError('Het profiel kon niet worden geladen. Probeer het later opnieuw.'))
        .finally(() => setLoading(false));
    } else if (usersPage) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((data) => setUsers(data))
        .catch(() => setError('De gebruikers konden niet worden geladen. Probeer het later opnieuw.'))
        .finally(() => setLoading(false));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((data) => setPosts(data.slice(0, 5)))
        .catch(() => setError('De discussies konden niet worden geladen. Probeer het later opnieuw.'))
        .finally(() => setLoading(false));
    }
  }, [postId, userId, usersPage]);

  function handleCommentSubmit(event) {
    event.preventDefault();
    setCommentError('');
    setSendingComment(true);

    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId: postId,
        name: commentName,
        body: commentBody,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((newComment) => {
        setComments(comments.concat(newComment));
        setCommentName('');
        setCommentBody('');
      })
      .catch(() => setCommentError('Je reactie kon niet worden verstuurd. Probeer het opnieuw.'))
      .finally(() => setSendingComment(false));
  }

  return (
    <div className="min-h-screen bg-[#0b070e] text-[#f3e8f6]">
      <ForumHeader postId={postId} usersPage={usersPage || Boolean(userId)} />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-12">
        {loading && (postId || userId || usersPage) ? (
          <p className="text-sm text-[#b8a9c9]" role="status">
            {postId ? 'Discussie laden...' : userId ? 'Profiel laden...' : usersPage ? 'Gebruikers laden...' : 'Discussies laden...'}
          </p>
        ) : error && (postId || userId || usersPage) ? (
          <p className="text-sm text-red-300" role="alert">{error}</p>
        ) : postId && post ? (
          <PostDetails
            post={post}
            author={author}
            comments={comments}
            commentName={commentName}
            commentBody={commentBody}
            commentError={commentError}
            sendingComment={sendingComment}
            onNameChange={setCommentName}
            onBodyChange={setCommentBody}
            onSubmit={handleCommentSubmit}
          />
        ) : userId && user ? (
          <UserDetails user={user} />
        ) : usersPage ? (
          <UsersPage users={users} />
        ) : (
          <PostList posts={posts} loading={loading} error={error} />
        )}
      </main>
      <footer id="community" className="mx-auto max-w-5xl px-5 pb-8 text-xs text-[#786b83] sm:px-8">
        StudentForum <span className="text-pink-400">·</span> Een plek om van elkaar te leren
      </footer>
    </div>
  );
}

export default App;
