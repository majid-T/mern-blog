import React ,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CreatePost(props){
    const [formData,setFormData] = useState({title:'',body:'',author:''});

    const handleSubmit = async (e)=>{
        console.log('Submit clicked');
        e.preventDefault();
        await axios
        .post('http://localhost:5000/api/posts/create',
            {
                title: formData.title,
                body: formData.body,
                author: formData.author
            }
        )
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err));
        props.history.push('/');
    };

    return(
        <Container>
            <h1 className='mb-4'>Create Post</h1>
            <Form>
                <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Post Title' value={formData.title} 
                    onChange={(e)=> setFormData({...formData,title:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId='body'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control type='text' placeholder='Post Body' value={formData.body} 
                    onChange={(e)=> setFormData({...formData,body:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId='author'>
                    <Form.Label>Author</Form.Label>
                    <Form.Control type='text' placeholder='Post Author' value={formData.author} 
                    onChange={(e)=> setFormData({...formData,author:e.target.value})}/>
                </Form.Group>
                <Button type='submit' onClick={handleSubmit}>Post</Button>
            </Form>
        </Container>
    );
}

export default CreatePost;