import React from 'react';
import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const course = useLoaderData();
    return (
        <div className='w-75 h-100 mx-auto text-center'>
            <h1>Checkout</h1>
            <h3>Course Name: {course.name}</h3>
            <h4>Price: {course.price} </h4>
            <h5>Time Need: {course.duration}</h5>
            <button className='btn btn-success'>Proceed Payment</button>

            <div className='invisible'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto cupiditate provident minima mollitia maxime alias, eos exercitationem quas ipsum ipsa. Sint, et sit ea perferendis voluptate ullam quisquam adipisci tempore consequuntur vitae, aliquid, veniam numquam culpa. Modi beatae recusandae odit nisi. Perferendis ullam vero, maiores cumque consectetur iste, libero saepe modi id dolor nostrum. Tempore fuga esse id, tenetur voluptas, ullam sit voluptatum ipsum dicta officiis optio facere aspernatur? Iste fuga quo nulla, vero et, laudantium nemo repudiandae quasi doloribus explicabo distinctio, totam alias numquam quisquam officia ratione velit ipsam sit nobis recusandae. Consequuntur, omnis. Modi libero adipisci qui similique ipsa quam, corporis sapiente optio voluptatem explicabo saepe, architecto neque ducimus nisi quibusdam itaque reprehenderit est? Aut obcaecati animi in cupiditate tenetur a hic, aperiam laudantium blanditiis pariatur neque architecto autem sint provident. Minus dignissimos quo ex perferendis. Architecto veritatis, ullam culpa id odit unde nemo ea? Ipsa, itaque aliquam. Laborum laboriosam iste nihil
            </div>
        </div>

    );
};

export default Checkout;