import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Post from '../components/Post';

function HomePage(){
    const [posts,setPosts] = useState([]);

    useEffect ( ()=>{
        axios
        .get('http:localhost:5000/api/posts')
        .then((resonse)=>setPosts(resonse.data.posts))
        .catch((err)=>console.log(err));
    },[]);

    return(
        <div className='HomePage'>
            <h1 className='mb-4'>Posts</h1>
            {
                posts.map((post)=><Post post={post} key={post.id}/>)
            }
        </div>
    );
}

export default HomePage;