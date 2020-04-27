import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';


function SinglePostPage(props){
    const [post,setPost] = useState({});

    const postId = props.match.params.id;
    useEffect(()=>{
        console.log(postId);
        axios
        .get(`http://localhost:5000/api/posts/get?id=${postId}`)
        .then((res)=>{
            console.log(res);
            setPost(res.data.post)})
        .catch((err)=>console.log(err));
    },[postId]);

    return(
        <Container>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>Author:{post.author}</p>
        </Container>
    );
}

export default SinglePostPage;