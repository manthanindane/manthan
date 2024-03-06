import React from 'react';

function Page() {
  return (
    <div className="container mx-auto w-1/2 text-justify py-8">
      <h1 className="text-6xl font-bold mb-4">What I do?</h1>
      <p className="mb-4">
        I am a Co-Founder at Healthpass, an AI-driven services in healthcare provider. Additionally, I am a Generative AI enthusiast and full-stack web developer experienced in Next.js and React.js.
      </p>
      <h2 className="text-3xl text-orange-600 font-bold mb-2">Skills</h2>
      <p className="mb-4">
        Java | Python | JavaScript(Basics) | NodeJS | ReactJS | Machine Learning | Langchain | NLP | Generative AI | MongoDB | SQL | Pandas | NumPy | Matplotlib | Git and Github | Streamlit(Basic) | Postman | Figma | RESTapi | Jenkins | Networking Fundamentals | Data Structures and Algorithms (DSA) | Problem Solving
      </p>
      <h2 className="text-3xl text-orange-600 font-bold mb-2">Education</h2>
      <ul className="mb-4">
        <li>Walchand Institute of Technology, Solapur - Branch: Information Technology | CGPA: 9.38</li>
        <li>HSC(Class XII), Percentage: 71.8</li>
        <li>SSC (Class X), Percentage: 96</li>
      </ul>
      <h2 className="text-3xl text-orange-600 font-bold mb-2">Projects</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">MedQA: RAG-powered Q&amp;A for Limited Medical Data</h3>
        <p className="mb-2">Built &quot;MedQA&quot;, a RAG-powered medical Q&amp;A system for accurate &amp; relevant answers, utilizing 100 Medical PDFs.</p>
        <p className="mb-2">Accomplished a 35% improvement in medically sound and natural language responses compared to traditional methods by utilizing the &quot;Phi-2&quot; pre-trained language model.</p>
        <p className="mb-2">EmployedFAISS a high-performance vector search library, for efficient text retrieval in medical knowledge base of giving lightning-fast text search within the PDFs. Combined with iterative refinement, responses gained 40% relevance, pinpointing user needs.</p>
        <p className="mb-2">Streamlined development by 30% with modular framework of Langchain, enabling 2x faster prototyping of different retrieval and LLM combinations.</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Deep Learning Fashion Recommender System (Mini Project- Honors)</h3>
        <p className="mb-2">Developed an advanced Fashion Recommender System with ResNet50 architecture, achieving a notable 25% improvement in recommendation accuracy.</p>
        <p className="mb-2">Styled a captivating Streamlit interface, boosting interaction by 30% for seamless fashion recommendations.</p>
        <p className="mb-2">Implemented a robust deep neural network analysis using TensorFlow, revolutionizing the system&apos;s capability to deliver highly personalized and accurate fashion suggestions; increased customer engagement by 45% and boosted conversion rates by 30%.</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">TICKIT- A MOVIE TICKET BOOKING APP</h3>
        <p className="mb-2">Led the development of ReactJS-based Movie Ticket Booking app, reducing development time by 15%.</p>
        <p className="mb-2">Development of a visually captivating UI design on Figma, resulting in a 20% perceived improvement in overall user experience.</p>
        <p className="mb-2">Implemented NodeJS and ExpressJS for a responsive backend, achieving a 25% reduction in server response time.</p>
        <p className="mb-2">Achieved a 30% boost in efficient data management using MongoDB, elevating system performance.</p>
      </div>
      <h2 className="text-3xl text-orange-600 font-bold mb-2">Work Experience (Internship)</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Slash Mark | Virtual Internship (Currently Pursuing)</h3>
        <p className="mb-2">Currently immersed in hands-on experiences with ongoing project-based initiatives, maintaining a perfect 100% completion rate and exemplifying effective task management within project timelines.</p>
      </div>
      <h2 className="text-3xl text-orange-600 font-bold mb-2">Academic and Extracurricular Achievements</h2>
      <ul className="mb-4">
        <li>Smart India Hackathon Project Team Leader 2022 - Led a team as the project team leader, orchestrating the successful development of a Museum Ticket Booking Website with 100% completion rate.</li>
        <li>Hackerrank Java Enthusiast and Problem-Solver - Attained a 5-star rating on Hackerrank, indicating proficiency in Java programming. Successfully solved 100+ Hackerrank challenges, demonstrating commitment to continual improvement. Achieved over 850 points in problem-solving, showcasing dedication and resilience in overcoming obstacles.</li>
      </ul>
    </div>
  );
}

export default Page;
