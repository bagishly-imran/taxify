import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCustomers } from '../store/actions/customersAction';
import { addDrivers } from '../store/actions/driversAction';
import { useNavigate } from "react-router-dom";

var uniqid = require('uniqid'); 

function AddForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        id: uniqid(),
        name: "",
        where_from: "",
        where: "",
        category: "",
        hour: "",
        price: 0,
        tel: "",
    })

    const onHandleSubmit = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const onAddUser = (e) => {

        e.preventDefault()

        if(form.category == "1") {
            dispatch(addDrivers(form));
            navigate('/drivers');
        }

        if(form.category == "2") {
            dispatch(addCustomers(form));
            navigate('/customers');
        }

    }

    return (
        <form className = "form m-2" onSubmit = {onAddUser}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Adınız</label>
                <input type="text" name = "name" value = {form.name} onChange={onHandleSubmit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Adınız...'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Haradan?</label>
                <input type="text" name = "where_from" value = {form.where_from} onChange={onHandleSubmit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Haradan gedəcəksiz?'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Haraya?</label>
                <input type="text" name = "where" value = {form.where} onChange={onHandleSubmit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Gedəcəyiniz yeri qeyd edin...'/>
            </div>
            <select className="form-select mb-3" name = "category" defaultValue={0} value = {form.category} onChange={onHandleSubmit} aria-label="Default select example">
                <option>Kateqorianı seç</option>
                <option value={1}>Sürücü</option>
                <option value={2}>Müştəri</option>
            </select>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Qiymet</label>
                <input type="number" name = "price" value = {form.price} onChange={onHandleSubmit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Qiymet...'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Çıxış saatı</label>
                <input type="time" name = "hour" value = {form.hour} onChange={onHandleSubmit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Çıxış vaxtı...'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Əlaqə nömrəsi</label>
                <input type="tel" name = "tel" value = {form.tel} onChange={onHandleSubmit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='505110003'/>
            </div>
            <button type="submit" className="btn btn-success d-block w-100">Əlavə et</button>
        </form>
    )
}

export default AddForm
