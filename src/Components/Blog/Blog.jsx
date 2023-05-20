const Blog = () => {
  return (
   <div className="w-[1240px] mx-auto">
      <section className="mt-10 container mx-auto">
      <div className="collapse mt-10">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-teal-500 text-primary-content peer-checked:bg-teal-500 peer-checked:text-secondary-content text-3xl">
        What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </div>
        <div className="collapse-content bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
          <p className="text-2xl">The method of storing access and refresh tokens on the client-side depends on the specific implementation and security requirements, and its important to carefully consider the pros and cons of each method.</p>
        </div>
      </div>
      <div className="collapse mt-10">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-teal-500 text-primary-content peer-checked:bg-teal-500 peer-checked:text-secondary-content text-3xl">
        Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
          <p className="text-2xl">SQL databases are a good fit for applications that require complex data modeling and support for transactions, while NoSQL databases are better suited for modern web applications that require fast and agile data storage and retrieval and can handle unstructured and complex data. However, it's important to consider the specific requirements of your application when choosing between SQL and NoSQL databases.</p>
        </div>
      </div>
      <div className="collapse mt-10">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-teal-500 text-primary-content peer-checked:bg-teal-500 peer-checked:text-secondary-content text-3xp">
        What is express js? What is Nest JSt
        </div>
        <div className="collapse-content bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
          <p className="text-2xl">Express.js is a minimalist and flexible framework for building fast and scalable web applications and APIs, while Nest.js is a TypeScript-based framework that provides a higher level of organization and abstraction to build complex applications and APIs. The choice between these frameworks depends on the specific requirements of the project, the skill level of the development team, and personal preferences.</p>
        </div>
      </div>
      <div className="collapse mt-10 mb-40">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-teal-500 text-primary-content peer-checked:bg-teal-500 peer-checked:text-secondary-content text-3xl">
        What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
          <p className="text-2xl">MongoDB is a popular NoSQL database that offers a flexible and scalable solution for storing and querying data. It uses a document-based data model and provides features such as auto-sharding, replication, and indexing for optimizing performance and availability.</p>
        </div>
      </div>
       
    </section>
   </div>
  );
};

export default Blog;
