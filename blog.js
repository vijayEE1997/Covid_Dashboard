import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Blog(){
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    function fetchData() {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ai-databases`)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                setPosts(data['items'])
            })
            .catch(error => console.log("ERROR",error));
    }

    return (
        <div>
                <div className="blog">
                        <div className="blog-heading"><h3>Articles</h3></div>
                    <div className="blog-items">
                    {posts.map((post)=>(
                        <div className="blog-item">
                            <div className="blog-item-image">
                                <a href={post['link']}><img src={post['thumbnail']}/></a>
                            </div>
                            <div className="blog-item-content">
                                <a href={post['link']} target="_blank">{post['title']}</a>
                                <p>{post['pubDate']}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

        </div>
    );
}
export default Blog
