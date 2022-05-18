//import react from react library
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import Loader from '../Loader_and_message/Loader'
import { listProducts, deleteProduct, createProduct } from '../../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants'

//import CSS File
import '../../CSS/stockhandling.css'

//import icons
import pdf_ico from '../../Icons/StockHandling/pdf.png'

const Stock_handling = ({ history, match }) => {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = productDelete

    const productCreate = useSelector((state) => state.productCreate)
    const { loading:loadingCreate, error:errorCreate, success:successCreate, product: createdProduct } = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo.isAdmin) {
            history.push('/login')
        }

        if(successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts())
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

    return (
        <div className="stockHandling_container">

            <div className='headTitle'>
                <h1>Stock Handling</h1>
            </div>

            <div className='controllerBar'>
                <div className='controllerBar_set'>
                    <div className='adminStockFilter'>
                        <select className='mainCategoriesdropdown' name="" value="{}" onChange="{}">
                            <option value="" selected disabled hidden>Choose Type</option>
                            <option value="">All</option>
                            <option value="">Medicine</option>
                            <option value="">Baby Items</option>
                            <option value="">Beauty</option>
                            <option value="">Local Medicine</option>
                            <option value="">Medical Equipments</option>
                            <option value="">Fitness & Supplements</option>
                        </select>
                    </div>
                    <div className='stocksearch'>
                        <form className="searchbox">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search Pharmacy Items..." aria-label="Search" />
                        </form>
                    </div>
                    <div className='stockButtonContainer'>
                        <button className='pdfBtn'><img src={pdf_ico} /></button>
                        <button className="addItemsBtn" onClick={createProductHandler}><i className='fas fa-plus'></i> Add Item</button>
                    </div>
                </div>

            </div>

            {loadingDelete && <Loader/>}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <Loader/>}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <div className='stockTableContainer'>
                    <table className='stockTable'>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>ITEM ID</th>
                                <th>ITEM NAME</th>
                                <th>ITEM CATEGORY</th>
                                <th>ITEM PRICE</th>
                                <th>ITEM BRAND</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id}>
                                    <td>{index+1}</td>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>Rs.{product.price}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <Link to={`/admin/product/${product._id}/edit`}>
                                            <button type='button' className='stckChangeBtn'>
                                                <i class="fas fa-edit"></i> Edit
                                            </button>
                                        </Link> &nbsp;
                                        <button type='button' className='stckChangeBtn' onClick={() => deleteHandler(product._id)}>
                                            <i className='fas fa-trash'></i> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}


        </div>
    );
};

export default Stock_handling;
