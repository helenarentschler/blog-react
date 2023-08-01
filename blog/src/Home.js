import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlog] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlog(data);
            }) 
    }, []);

    return ( 
        <div className="home">
            {/* conditional template */}
            { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;