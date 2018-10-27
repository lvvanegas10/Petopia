import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class AddPetForm extends Component {

  constructor(props){
    super(props);

    this.state={
        name: '',
        ageYears:0,
        ageMonths: 0,
        petsonality: '',
        gender: '',
        breed:'',
        sterilized: true,
        likes: '',
        dislikes: '',
        story: '',
        image: ''
    };

    //bind
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}

    // EventHandlers

    handleChange(event) {
      const value = event.target.value;
      this.setState({
        [event.target.name]: value
      });
    }



  render() {

    const {name, ageYears, ageMonths, petsonality, gender, breed, sterilized, likes, dislikes, story, image} = this.state
    return (
      <div>
          <Container>
              <Row>
               
                <Col><h1 className='text-center'>Let's meet a new friend!</h1></Col>
                
              </Row>
              <Row>
                  <Col>
                    <form className='form-style-8'>
                    
                      <img src="https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid" alt="petimage"/>
                      <div className="form-group">
                        <label htmlFor="SubmitPhoto">Choose a nice picture!</label>
                        <input type="file" className="form-control-file" id="petPhoto" name='image' value={image} onChange={this.handleChange}/>
                      </div>
                    
                      Hi!, my name is 
                      <input type='text' placeholder='Lupe' name='name' value={name} onChange={this.handleChange}/> 
                      and I am 
                      <input type='number' placeholder='7' min='0' name='ageYears' value={ageYears} onChange={this.handleChange}/> 
                      years and 
                      <input type='number' placeholder='5' min='0' name='ageMonths' value={ageMonths} onChange={this.handleChange}/>months old.<br/>
                      My gender is 
                      <select name='gender'><option>Female</option><option>Male</option></select> and my breed is 
                      <input type='text' placeholder='unique' name='breed' value={breed} onChange={this.handleChange}/>. 
                      I have a 
                      <input type='text' placeholder='calm' name='petsonality' value={petsonality} onChange={this.handleChange}/> petsonality. I really love 
                      <input type='text' placeholder='sleeping' name='likes' value={likes} onChange={this.handleChange}/>, I dislike 
                      <input type='text' placeholder='loud noises' name='dislikes' value={dislikes} onChange={this.handleChange}/>.
                      <br/>
                      <div className="form-group purple-border">
                        <label htmlFor="Story">Here is my story</label>
                        <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" name='story' value={story} onChange={this.handleChange}></textarea>
                      </div>

                      Sterilized? <select name='sterilized'><option>Yes</option><option>No</option></select>
                      <br/>

                      <Button>Submit</Button>


                      </form>
                  </Col>
                  
              </Row>

          </Container>
      </div>
    )
  }
}