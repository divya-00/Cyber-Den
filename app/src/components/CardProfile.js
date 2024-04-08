import React, { Component } from 'react';
import './Profile.css'; // Make sure to import the corresponding CSS file
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5




const ImgUpload =({ onChange, src })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src} alt="" />
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  
  const Name =({ onChange, value })=>
    <div className="field">
      <label htmlFor="name"> name: </label>
      <input id="name" type="text" onChange={onChange} maxlength="25" value={value} placeholder="Alexa" required/>
    </div>
  
  const Email =({ onChange, value })=>
    <div className="field">
      <label htmlFor="email"> email:</label>
      <input id="name" type="text" onChange={onChange} maxlength="55" value={value} placeholder="alexa@gmail.com" required/>
    </div>

  const Loc =({ onChange, value })=>
  <div className="field">
    <label htmlFor="loc"> Location:</label>
    <input id="name" type="text" onChange={onChange} maxlength="55" value={value} placeholder="Hyderabad" required/>
  </div>
    
  const Status =({ onChange, value })=>
    <div className="field">
      <label htmlFor="status"> status:</label>
      <input id="name" type="text" onChange={onChange} maxlength="35" value={value} placeholder="It,s a nice Day :)" required/>
    </div>
  
  
  const Profile =({ onSubmit, src, name, email,loc, status,})=>
    <div className="cardsprofile">
      <form onSubmit={onSubmit}>
        <h1>Profile</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}  alt =""/>
          </div>
        </label>
        <div className="name"> Name:&nbsp; {name}</div>
        <div className="status">{status}</div>
        <div className="email"><i className="fa fa-envelope"></i>&nbsp;Email: {email}</div>
        <div className="loc"><i className="fa fa-map-marker-alt">&nbsp;</i>Location: {loc}</div>
        
        
        <button type="submit" className="edit">Edit</button>

      </form>
      
    </div>
       
        
  const Edit =({ onSubmit, children, })=>
    <div className="cardsprofile">
      <form onSubmit={onSubmit}>
        <h1>Profile</h1>
          {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  
  class CardProfile extends Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      email:'',
      loc:'',
      status:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    editEmail = e =>{
      const email = e.target.value;
      this.setState({
        email,
      });
    }
    editLoc = e =>{
      const loc = e.target.value;
      this.setState({
        loc,
      });
    }
    
    editStatus = e => {
      const status = e.target.value;
      this.setState({
        status,
      });
    }
    
    handleSubmit= e =>{
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             email,
             status,
             loc, 
             active} = this.state;
      return (
        <div>
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>
              <Email onChange={this.editEmail} value={email}/>
              <Loc onChange={this.editLoc} value={loc}/>
              <Status onChange={this.editStatus} value={status}/>
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} 
              name={name} 
              email={email}
              loc={loc}
              status={status}/>)}
          
        </div>
      )
    }
  }
  
 
  export default CardProfile;