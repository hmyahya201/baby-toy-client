
const Blog = () => {
   return (
      <div className="sm:px-10 md:px-16 sm:2 md:py-2 mt-10">
         <h3 className="font-medium mt-6">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

         <p>An access token is a short-lived credential that is used to grant access to specific resources on behalf of a user or application.</p>
         <p>A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires.</p>
         <p>Initially, when a user logs in or an application obtains an access token, both the access token and refresh token are provided.</p>
         <p>Access Tokens: Access tokens are usually stored in memory, such as in a JavaScript variable or a state management library (e.g., Redux, Vuex). Since they have a shorter lifespan and are sent in API requests, they should not be stored in persistent storage like cookies or local storage due to security risks.</p>

         <h3 className="font-medium mt-6">Compare SQL and NoSQL databases?</h3>
         <h3 className="font-medium">Data Structure:</h3>
         <p>SQL (Relational Databases): SQL databases are table-based and follow a fixed schema. Data is structured into tables with rows and columns, and each table has predefined columns with data types.</p>
         <p>NoSQL (Non-relational Databases): NoSQL databases are typically schema-less or have a dynamic schema for unstructured or semi-structured data. Data can be stored in various formats, such as JSON, XML, key-value pairs, or document-oriented.</p>
         <h3 className="font-medium">Scalability:</h3>
         <p>SQL (Relational Databases): SQL databases are traditionally designed for vertical scalability, where you can increase server capacity by adding more CPU, RAM, or storage. Horizontal scaling (adding more servers) can be challenging and may require complex sharding.</p>
         <p>NoSQL (Non-relational Databases): NoSQL databases are typically designed for horizontal scalability. They can handle large volumes of data and high throughput by distributing data across multiple servers or nodes.</p>

         <h3 className="font-medium mt-6">What is express js? What is Nest JS ?</h3>
         <p>Express.js is a minimal and flexible Node.js web application framework. It provides a simple and unopinionated way to build web and API applications.</p>
         <p>Nest.js is a full-featured, opinionated web application framework for Node.js that is designed to help you build scalable and maintainable server-side applications.</p>

         <h3 className="font-medium mt-6">What is MongoDB aggregate and how does it work ?</h3>
         <p>
            MongoDBs aggregate is a powerful and flexible method for performing data aggregation operations on collections of documents. </p>
         <p>Aggregation operations in MongoDB are performed through a series of stages in a pipeline. Each stage takes input from the previous stage and produces output for the next stage.</p>


      </div>
   );
};

export default Blog;