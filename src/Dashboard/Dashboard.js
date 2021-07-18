import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import PostList from './PostList';
import Alert from './Alert';


const Dashboard = ({ posts }) => {
    const [post, setPost] = useState('');
    const [username, setUsername] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', classType: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!post) {
            showAlert(true, 'error', 'Post cannot be empty');
        }
        else if (post && isEditing) {
            setList(list.map((item)=>{
                if(item.id === editID){
                    return {...item, content: post};
                }
                return item;
            }))
            showAlert(true, 'success', 'Post Edited');
            setPost('');
            setUsername('');
            setEditID(null);
            setIsEditing(false);
        }
        else {
            showAlert(true, 'success', 'Posted successfully!')
            const newPost = { id: new Date().getTime().toString(), user: username, content: post, likeCount: 0, dislikeCount: 0 };
            setList([...list, newPost]);
            setPost('');
        }
    }

    const showAlert = (show = false, classType = '', msg = '') => {
        setAlert({ show, msg, classType });
    }

    const deletePost = (id) => {
        showAlert(true, 'error', 'Post Deleted!');
        setList(list.filter((item) => item.id !== id));
    }

    const editPost = (id) =>{
        const thisPost = list.find((item)=> item.id === id);
        setIsEditing(true);
        setEditID(id);
        setPost(thisPost.content);
    }

    const likePost = (id) => {
        setList(list.map((item)=>{
            if(item.id === id){
                return {...item, likeCount: item.likeCount+1};
            }
            return item;
        }));
    }

    const dislikePost = (id) => {
        setList(list.map((item)=>{
            if(item.id === id){
                return {...item, dislikeCount: item.dislikeCount+1};
            }
            return item;
        }));
    }

    return (
        <section className="Dashboard">
            <form className="postField" onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} />}
                <h1>Post It:</h1>
                <ul className="control-form">
                    <li>
                        <input type="text" className="username-field" placeholder="Enter username" 
                            required value={username} onChange={(e) => setUsername(e.target.value)} />
                    </li>
                    <li>
                        <input type="text" className="post-field" placeholder="Type your post here..."
                            required value={post} onChange={(e) => setPost(e.target.value)}  />
                        <button type="submit" className="post-btn">
                        {isEditing ? 'Edit' : 'Post'}
                        </button>
                    </li>
                </ul>
            </form>
            {list.length > 0 && (
                <div className="container">
                    <div className="post-head">
                        <h1>Posts for you:</h1>
                    </div>
                    <PostList items={list} deletePost={deletePost} editPost={editPost} likePost={likePost} dislikePost={dislikePost} />
                </div>
            )}

        </section>
    );
}

export default Dashboard;