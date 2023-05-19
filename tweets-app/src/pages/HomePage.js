import Icon from '../assets/images/tweets.svg'
import './Style_Home_Page.scss'

export const HomePage = () => {
  return (
    <div className='Wr-Home'>
      <h1>Post your tweet today</h1>
      <img src={Icon} alt="tweets conversation" />
     
    </div>
  );

};
