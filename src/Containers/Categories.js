
import Axios from 'axios'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Categories() {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0)
    useEffect(() => {
        fetchCategories();
    }, [])
    const fetchCategories = async () => {
        const response = await Axios('https://opentdb.com/api_category.php');
        setCategories(response.data.trivia_categories)
    }
    return (
        <div className='container'>

            <div className="page-header">
                <h1 className='text-primary text-center m-5 display-1 font-weight-bold' >Categories</h1>
            </div>
            {
                categories && categories.map((category, i) => {
                    return (<div key={category.id} >
                        <Link to={`/quiz/${category.id}`}><button type="button" className="btn btn-danger btn-lg btn-block m-2">{category.name}</button></Link>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Categories;