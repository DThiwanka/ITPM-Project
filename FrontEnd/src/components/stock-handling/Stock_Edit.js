import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import Loader from '../Loader_and_message/Loader'
import { listProductDetails, updateProduct } from '../../actions/productActions'
import '../../CSS/Login.css'
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants'

const Stock_Edit = ({ match, history }) => {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const productUpdate = useSelector((state) => state.productUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/stockHandling')
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }


    }, [dispatch, history, productId, product, successUpdate])


    const uploadingFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch {
            console.error(error)
            setUploading(false)
        }
    }


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }))
    }

    return (
        <div className='mainContainer'>

            <Link to='/admin/stockHandling' id='backBtn' className='btn btn-light my-3'>
                <button>
                    Go Back
                </button>
            </Link> <br /> <br />

            <div className='loginTitleContainer'>
                <div className='mainHead'>
                    <h1>Edit Product</h1>
                    <p>You can Edit User using this form</p>
                    {loadingUpdate && <Loader />}
                    {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                </div>
            </div> <br />
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <form className='loginform' onSubmit={submitHandler}>
                    <label for='name'>Name</label><br />
                    <input
                        type='name'
                        placeholder='Enter name'
                        id='name'
                        className='inputField'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />

                    <label for='price'>Price</label><br />
                    <input
                        type='number'
                        placeholder='Enter price'
                        id='price'
                        className='inputField'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    /><br />

                    <label for="brand">Brand</label><br />
                    <input
                        type='text'
                        placeholder='Enter brand'
                        id='brand'
                        className='inputField'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    /><br />

                    <label for='countInStock'>Count In Stock</label><br />
                    <input
                        type='number'
                        placeholder='Enter CountInStock'
                        id='countInStock'
                        className='inputField'
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                    /><br />

                    <label for="category">Category</label><br />
                    <input
                        type='text'
                        placeholder='Enter category'
                        id='category'
                        className='inputField'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    /><br />

                    <label for="description">Description</label><br />
                    <input
                        type='text'
                        placeholder='Enter description'
                        id='description'
                        className='inputField'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /><br />

                    <label for="image">Image</label><br />
                    <input
                        type='text'
                        placeholder='Enter image url'
                        id='image'
                        className='inputField'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    /><br />
                    <input
                        type='file'
                        label='Choose File'
                        id='image_file'
                        custom
                        className='imageChooser'
                        onChange={uploadingFileHandler}
                    /> <br />
                    {uploading && <Loader />}<br />


                    <div className='updateBtnContainer'>
                        <button type='submit'>Update</button>
                    </div>

                </form>
            )}

        </div>
    )
}

export default Stock_Edit