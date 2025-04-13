import React from 'react'

function About() {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    React development is carried out by passionate developers
                </h2>
                <p className="mt-6 text-gray-600">
                Fuelled by passion, React developers meticulously build interactive UIs and seamless web experiences. They leverage component-based architecture and a vibrant ecosystem to craft efficient, scalable, and engaging applications, constantly pushing the boundaries of front-end innovation. Their dedication shapes the modern web.
                </p>
                <p className="mt-4 text-gray-600">
                Driven by enthusiasm, React developers construct dynamic interfaces and fluid web applications. Their expertise in component-based structures and a rich library empowers them to create efficient, scalable, and captivating digital experiences.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About