import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Modal,ModalBody,ModalHeader,ModalFooter,Button, InputGroup,Input,} from 'reactstrap';
const ModalComp = ({ isOpen, toggle, handleAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: ``, description: ``, urlPoster: ``, rate: 0, });
  const onChangeHandler = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(newMovie);
  };
  return (
    <div>
<Modal isOpen={isOpen} fade={false} toggle={toggle}>
<ModalHeader toggle={toggle}>ADD MOVIE</ModalHeader>
<ModalBody>
<InputGroup row>
         <Input
            type='text'
              name='title'
              placeholder='Add movie title'
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
           
            <Input
              type='url'
              name='posterUrl'
              placeholder='Add poster link '
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            
            <Input
              type='textarea'
              name='description'
              placeholder='Add movie description '
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
         
            <Input
              type='text'
              name='rate'
              placeholder='Rate the movie '
              onChange={onChangeHandler}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='success'
            onClick={(e) => {
              handleClick(e);
              toggle();
            }}
          >
            Add
          </Button>{' '}
          <Button color='danger' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalComp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default ModalComp;