import './Home.sass';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../Components/Header/Header';
import List from '../../Components/List/List';
import CardContainer from '../../Components/CardContainer/CardContainer';
import AddModal from '../../Components/AddModal/AddModal';

const Home = ({cardsData}) => {
  const allWordsUrl = "https://flashcards-f6c98-default-rtdb.firebaseio.com/.json";
  const knownWordsUrl = "https://flashcards-f6c98-default-rtdb.firebaseio.com/known_words.json";
  const unknownWordsUrl = "https://flashcards-f6c98-default-rtdb.firebaseio.com/user1.json";
  const url = "https://flashcards-f6c98-default-rtdb.firebaseio.com/test_words.json";
  // const deleteurl = "https://flashcards-f6c98-default-rtdb.firebaseio.com/<collection_name>/<word_in_english>.json";
  const body = {
    'test': 'test 1'
  }
  const requestConfig = { headers: { "Content-Type": "application/json" } };
  const testget = () => {
    axios.get(allWordsUrl, requestConfig)
      .then(res => {
        console.log("get response :", res.data)
      })
  };
  const testput = () => {
    axios.put(url, body, requestConfig)
      .then(res => {
        console.log("post response :", res)
      })
  };
  // const testdelete = () => {
  //   axios.delete(deleteurl, requestConfig)
  //     .then(res => console.log("delete response :", res))
  // };
  const testputch = () => {
    axios.patch(url, {'test': 'test 100'}, requestConfig)
      .then(res => console.log("testputch response :", res))
  };
  const buttonStyle = {
    width: 150,
    height: 50,
    borderRadius: 15,
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  };
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => {
    setShowModal(false)
  }
  const openModal = () => {
    console.log('open clisk')
    setShowModal(true)
  }
  return (
    <div className="Home">
      <Header/>
      <CardContainer cardsData={cardsData} />
      <List />
      <div
        onClick={openModal}
        className="openmodal">open modal</div>
      Home
      <div
        style={buttonStyle}
        onClick={testget}
      >GET</div>
      <div
        style={buttonStyle}
        onClick={testput}
      >PUT</div>
      {/* <div
        style={buttonStyle}
        onClick={testdelete}
      >DELETE</div> */}
      <div
        style={buttonStyle}
        onClick={testputch}
      >UPDATE</div>
      {
        showModal &&
        <AddModal
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={closeModal}
        />
      }
    </div>
  )
};

export default Home;