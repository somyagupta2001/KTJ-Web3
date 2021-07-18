import React from 'react';
import icons from './icons';

const PostList = ({ items, deletePost, editPost, likePost, dislikePost }) => {
    return (
        <div className="post-list">
            {items.map((item) => {
                const { id, user, content, likeCount, dislikeCount } = item;
                return (
                    <article key={id} className="post">
                        <div className="header-btns">
                            <img src={icons.Edit} alt="Edit Post" className="edit-btn" onClick={() => editPost(id)} />
                            <img src={icons.Delete} alt="Delete Post" className="delete-btn" onClick={() => deletePost(id)} />
                        </div>
                        <p className="user">{user}</p>
                        <p className="post-content">{content}</p>
                        
                        <div className="footer-btns">
                            <div className="like-section">
                                <p className="like-count">{`${likeCount}`}</p>
                                <img src={icons.LikeFilled} alt="Like Post" className="like-btn" onClick={() => likePost(id)} />
                            </div>
                            <div className="dislike-section">
                                <p className="dislike-count">{`${dislikeCount}`}</p>
                                <img src={icons.DislikeFilled} alt="Dislike Post" className="dislike-btn" onClick={() => dislikePost(id)} />
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    );
}

export default PostList;