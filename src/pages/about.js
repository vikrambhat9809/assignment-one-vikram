import React from 'react';
import blogimage from '../images/blogimagetools.jpg'
const About = () => {
    return (
        <div
            style={{

                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1>About</h1>
            <br />
            <p>A blog will be built here very soon. Sign in or sign up for early access and bonus discounts!</p>
            <br />
            <img src={blogimage} alt="blog"></img>
            <h1>Do you know what a blog is?</h1>
            <p>
If you don’t, then you’ve come to the right place. In 1994, when blogs began, a blog was more of a personal diary that people shared online. In this online journal, you could talk about your daily life or share about things that you were doing. Then, people saw an opportunity to communicate information in a new way online. Thus began the beautiful world of blogging.</p>

<h2>What is a Blog?</h2>
<h3>Definition | Meaning of blog:</h3>
<p>
A blog (a shortened version of “weblog”) is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first, at the top. It is a platform where a writer or a group of writers share their views on an individual subject.</p>
        </div>
    );
};

export default About;