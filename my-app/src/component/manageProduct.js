import React from 'react';
import { Table } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FormAdd from './formAdd';
import axios from 'axios';

class ManageProduct extends React.Component {
    state = {
        rows: [],
        page: 0,
        rowsPerPage: 10,
        edit: false,
        add: false,
        button: false,
        delete:false
    }

    componentDidMount() {
        this.getDataApi()
    }

    getDataApi = () => {
        axios.get('http://localhost:2000/products')
            .then((res) => this.setState({ rows: res.data }))
            .catch((err) => console.log(err))
    }

    btnSave = () => {
        if(this.state.edit===true){
            var nama = this.namaEdit.inputRef.value
            var brand = this.brandEdit.inputRef.value
            var harga = this.hargaEdit.inputRef.value    
            var diskon = this.diskonEdit.inputRef.value
            var desc = this.descEdit.inputRef.value
            var img = this.imgEdit.inputRef.value
            var qty = this.qtyEdit.inputRef.value
            var ctgry = this.ctgryEdit.inputRef.value
            var newData = {nama,brand,harga,diskon,desc,img,qty,category:ctgry}
            axios.put('http://localhost:2000/products',null,newData)
            .then((res)=>{
                this.getDataApi()
                this.setState({edit:false})
            })
            .catch((err)=>console.log(err))
        }
        else{
            var nama = this.nama.inputRef.value
            var brand = this.nama.inputRef.value
            var harga = this.harga.inputRef.value    
            var diskon = this.diskon.inputRef.value
            var desc = this.desc.inputRef.value
            var img = this.img.inputRef.value
            var qty = this.qty.inputRef.value
            var ctgry = this.state.value === 'face' ? 'Face' : this.state.value === 'eye' ? 'Eye' :this.state.value === 'lip' ? 'Lip' :this.state.value === 'hair' ? 'Hair' :this.state.value === 'body' ? 'Body':null  
            var newData = {nama,brand,harga,diskon,desc,img,qty,category:ctgry}
            axios.post('http://localhost:2000/products',null,newData)
            .then((res)=>{
                this.getDataApi()
                this.setState({add:false})
            })
            .catch((err)=>console.log(err))

        }
        
        
        
        
    }

    btnEdit = () => {
        this.setState({ edit: true, button:true })
    }

    btnCancel = () => {
        this.setState({edit:false, add:false, button:false, delete:false})
    }

    btnAdd = () => {
        this.setState({add:true, button:true})
        
    }

    btnDelete = () => {
        this.setState({delete:true})
    }

    btnDelete2 = () => {

    }



    renderJsx = () => {
        var jsx = this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((val) => {
            return (
                <tbody>
                    {this.state.edit === true ?
                        <tr>
                            <th scope="row">{val.id}</th>
                            <td><input ref={input => this.namaEdit = input} type="text" defaultValue={val.nama} /></td>
                            <td><input ref={input => this.brandEdit = input} type="text" value={val.brand} /></td>
                            <td><input ref={input => this.hargaEdit = input} type="text" value={val.harga} /></td>
                            <td><input ref={input => this.diskonEdit = input} type="text" value={val.diskon} /></td>
                            <td><input ref={input => this.descEdit = input} type="text" value={val.desc} /></td>
                            <td><input ref={input => this.imgEdit = input} type="text" value={val.img} /></td>
                            <td><input ref={input => this.qtyEdit = input} type="text" value={val.qty} /></td>
                            <td><input ref={input => this.ctgryEdit = input} type="text" value={val.category} /></td>
                        </tr>
                        :this.state.delete===true?
                        <tr>
                            <th><input type='checkbox' width='20px'/></th>
                            <th scope="row">{val.id}</th>
                            <td>{val.nama}</td>
                            <td>{val.brand}</td>
                            <td>{val.harga}</td>
                            <td>{val.diskon}</td>
                            <td>{val.desc}</td>
                            <td>{val.img}</td>
                            <td>{val.qty}</td>
                            <td>{val.category}</td>
                        </tr>
                        :
                        <tr>
                            <th scope="row">{val.id}</th>
                            <td>{val.nama}</td>
                            <td>{val.brand}</td>
                            <td>{val.harga}</td>
                            <td>{val.diskon}</td>
                            <td>{val.desc}</td>
                            <td>{val.img}</td>
                            <td>{val.qty}</td>
                            <td>{val.category}</td>
                        </tr>
                    }

                </tbody>
            )
        })
        return jsx
    }



    render() {
        var styling={ fontSize: '12px', width: '75%', height: '28px'}

        return (
            <div className='container-fluid'>
                <div className='row justify-content-end' style={{ marginTop: '80px' }}>
                    {
                        this.state.button === true ?
                            <div className='col-md-2' >
                                <button className='d-inline' position="fixed" style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'green' }} onClick={this.btnSave}><i class="far fa-save"/></button>
                                <button position="fixed" style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'red' }} onClick={this.btnCancel}><i class="far fa-window-close"/></button>

                            </div>
                            :this.state.delete===true?
                            <div className='col-md-2'>
                                <button position="fixed" style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'red' }} onClick={this.btnDelete2}><i class="far fa-trash-alt"/></button>
                                <button position="fixed" style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'red' }} onClick={this.btnCancel}><i class="far fa-window-close"/></button>
                            </div>
                            : <div className='col-md-2'>
                                <button  position="fixed" style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'orange' }} onClick={this.btnEdit}><i className="fas fa-edit" /></button>
                                <button  position="fixed" className='d-inline' style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'green' }} onClick={this.btnAdd}><i class="far fa-plus-square"/></button>
                                <button position="fixed" style={{ backgroundColor: "#FFF9F9", border: 'none', color: 'red' }} onClick={this.btnDelete}><i class="far fa-trash-alt"/></button>
                            </div>

                    }

                </div>

                <div className='row'>
                    
                {
                        this.state.add===true?
                        // <FormAdd style={{position:'fixed', zIndex:1, backgroundColor:"#E16868"}}/>
                        <div className='row container justify-content-center mb-4'>
            <div className='col-md-8 text-left' style={{ fontSize: '12px', width: '80%', height: '80%', marginBottom:'30px' }}>
                {/* <div className='popup_inner' style={{fontSize:'12px',width:'50%',height:'0px',backgroundColor:'white',position:'absolute'}}> */}
                <Form style={{ fontSize: '12px', width: '75%', height: '75%', backgroundColor: 'white',  }}>
                    <FormGroup>
                        <Label for="productName">Product Name</Label>
                        <Input ref={input => this.nama = input} style={styling} type="text" placeholder="Product Name" height='40px' />
                    </FormGroup>
                    <FormGroup>
                        <Label for="brand">Brand</Label>
                        <Input ref={input => this.brand = input} style={styling} type="text" placeholder="Brand Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="harga">Price</Label>
                        <parseInt><Input ref={input => this.harga = input} style={styling} type="number" placeholder="Price per pc" /></parseInt>
                    </FormGroup>
                    <FormGroup>
                        <Label for="diskon">Discount</Label>
                        <parseInt><Input ref={input => this.diskon = input} style={styling} type="number" placeholder="Discount" /></parseInt>
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Description</Label>
                        <Input ref={input => this.desc = input} style={styling} type="textarea" placeholder="Description about the product, how to use, etc" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Image</Label>
                        <Input ref={input => this.img = input} style={styling} type="file" name="img" /> <Input ref={input => this.diskon = input} style={styling} type="text" placeholder="Input img link here" />

                    </FormGroup>
                    <FormGroup>
                        <Label for="qty">Quantity</Label>
                        <parseInt><Input ref={input => this.diskon = input} style={styling} type="number" placeholder="Stock in Warehouse" /></parseInt>
                        </FormGroup>
                    <FormGroup>
                        <Label for="ctgry">Category</Label>
                        <Input style={{fontSize: '12px', width: '75%', height: '50px'}} type="select" multiple>
                            <option value='face'>Face</option>
                            <option value='eye'>Eye</option>
                            <option value='lip'>Lip</option>
                            <option value='hair'>Hair</option>
                            <option value='body'>Body</option>
                        </Input>
                    </FormGroup>
                </Form>
                {/* </div> */}
                </div>
            </div>
                        : this.state.delete===true?
                        <Table striped className='text-left' style={{position:'relative', padding: '15px', fontSize: '10px', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th><input type='checkbox' width='20px'/></th>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        {this.renderJsx()}
                    </Table>
                        :<Table striped className='text-left' style={{position:'relative', padding: '15px', fontSize: '10px', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        {this.renderJsx()}
                    </Table>
                    }
                    
                    
                </div>
              
            </div>
    
        )
    }
};

export default ManageProduct;