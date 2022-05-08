import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{ padding: '100px 50px' }}>
            <h1 className='text-center text-info'>My Questions</h1>
            <div className='p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span> Difference between javascript and nodejs?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <div className='row '>

                    <div className='col-md-6 '>
                        <h5><u>Javascript</u></h5>
                        <ol type="I">
                            <li>Javascript is a programming language.</li>
                            <li>Javascript can only be run in the browsers.</li>
                            <li>It is used on the client-side.</li>
                            <li>Javascript can run in any browser engine.</li>
                            <li>Javascript is used in frontend and backend development.</li>
                        </ol>
                    </div>
                    <div className='col-md-6 '>
                        <h5><u>NodeJS</u></h5>
                        <ol type="I">
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>We can run Javascript outside the browser with  NodeJS</li>
                            <li>It is used on the server-side.</li>
                            <li>Node.js only supports the V8 engine.</li>
                            <li>Nodejs is used in server-side development.</li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* Question 2 */}
            <div className='p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span> Differences between sql and nosql databases?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <div className='row '>

                    <div className='col-md-6 '>
                        <h5><u>SQL</u></h5>
                        <ol type="I">
                            <li>SQL databases are relational.</li>
                            <li>Data Store-Tables with fixed rows and columns.</li>
                            <li>Example-Oracle, MySQL, Microsoft SQL Server, and PostgreSQL.</li>
                            <li>These databases have fixed or static schema.</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>SQL databases are better for multi-row transactions.</li>
                        </ol>
                    </div>
                    <div className='col-md-6 '>
                        <h5><u>NoSQL</u></h5>
                        <ol type="I">
                            <li>NoSQL databases are non-relational.</li>
                            <li>Data Store- JSON documents, key-value pairs, tables with rows and dynamic columns, nodes and edges</li>
                            <li>Example-MongoDB, Redis, DynamoDB, Neo4j, Amazon Neptune.</li>
                            <li>They have dynamic schema.</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>NoSQL is better for unstructured data like documents or JSON.</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Question 3 */}
            <div className='p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span>What is the purpose of jwt and how does it work?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p>
                    <span className='fs-5 '><u>Purpose of JWT-</u></span>
                    First, some conditions need to be clarified. It is not uncommon for someone to refer to a REST API only as an API. Similarly, we often see JWT mixed with JWT-based authentication patterns. JWT itself is nothing more than an open standard for sending messages via HTTP.
                </p>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.</p>
                <p>
                    <span className='fs-5 '><u>How JWT Work-</u></span>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts and serialized using base64. In the most common serialization format, compact serialization, the JWT looks like this: aaaaa.bbbbb.ccccc.

                    Once decoded, you will get two JSON strings:
                    1. The header and the payload.
                    2. The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    The signature ensures that the token hasn't been altered..
                </p>
            </div>
        </div>
    );
};

export default Blogs;