import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";
import "../Css/loginPage.css"
import {TextField } from '@mui/material';
import { toast } from 'react-toastify';
import Axios from '../axios/Axios';
const validationSchema = Yup.object().shape({
  
  category: Yup.string()
      .required("Category required "),
      description: Yup.string()
      .required("Description required "),
      title:Yup.string().required("Title required"),
      price:Yup.string().required("Enter the Price"),
      image:Yup.string().required("Select Image")
      
  });

const CreateProduct = ({modal,setModal,data,edit}) => {
const formik = useFormik({
  initialValues: {
    category:'',
    description: '',
    title:'',
    price:'',
    image:''
  },
  validationSchema: validationSchema,
  onSubmit: (values,{resetForm}) => {
    handleSubmit(values,resetForm)

  },
});
useEffect(()=>{
  if(data){
    formik.setFieldValue("category",data.category)
    formik.setFieldValue("description",data.description)
    formik.setFieldValue("title",data.title)
    formik.setFieldValue("price",data.price)
  }
 
},[data])
const handleSubmit = async(value,resetForm)=>{
  let sendData ={
    "category":value.category,
    "description":value.description,
    "price":value.price,
    "title":value.title,  
  }
 if(edit){
  sendData.id =data.id
 }
  try {
    const response = edit ? await Axios.put('/update',sendData): await Axios.post('/post',sendData);
    const data = response.data;
    console.log(data)
    if(data.status){
      toast.success(data.message)
      resetForm()
      toggle()
    }else{
      toast.error(data.message)
    }
  
    
    // Process the data here
  } catch (error) {
    console.error('Error fetching data:', error);
  }
    }
   const toggle =()=> {
    setModal(!modal)
      }
  return (
    <div>
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle}>Create</ModalHeader>
      <ModalBody>
        <div>
      <form className='CreateForm' >
        <TextField
          fullWidth
          id="title"
          name="title"
          label="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="description"
          type="description"
          multiline
          rows={8}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
         <TextField
          fullWidth
          id="category"
          name="category"
          label="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        />
        <div className='d-flex gap-5'>
        <div class="col-sm-4">
   
        <Label>Price</Label>
        <input
        className="form-control" 
          type='number'
          id="price"
          name="price"
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
        />
         <p className="createError">
                  {formik.touched.price && formik.errors.price}
                </p>
                </div>
                <div>
                <Label>Image</Label>
         <input
         className="form-control" 
          id="image"
          name="image"
          label="image"
          onChange={formik.handleChange}
       type='file'
        />
         <p className="createError">
                  {formik.touched.image && formik.errors.image}
                </p>
                </div>
                </div>
      </form>
    </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="contained" fullWidth type="submit"  onClick={formik.handleSubmit} color="primary">sumbit</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
    </div>
  )
}

export default CreateProduct