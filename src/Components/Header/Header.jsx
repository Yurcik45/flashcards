import './Header.css';

const Header = ({ userName, setShowModal }) => {
  return (
    <div className="Header">
      <div onClick={() => setShowModal({status: true, item: 'name'})} className="User">
        {userName && userName}
      </div>
    </div>
  )
};

export default Header;