import './App.css';
import { Menu } from './Components/Menu'
import { Items } from './Components/Items'
import { FaInbox,FaTrashAlt } from 'react-icons/fa';
import { IoMailUnreadSharp,IoMailOpen,IoMailUnread,IoMailOpenOutline } from "react-icons/io5";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";


function App() {
  return (
    
    <Menu>
      <div>
        <Items title='Inbox' icon={IoMailOpen}/>
        <Items title='Starred' icon={IoMailUnreadSharp}/>
        <Items title='Send email' icon={IoMailOpenOutline}/>
        <Items title='Drafts' icon={FaInbox} />
        </div>
        
        <div>
      <Items title='All Mail' icon={IoMailUnread}/>
        <Items title='Trash' icon={FaTrashAlt} />
        <Items title='Junk' icon={BsFillExclamationOctagonFill} />
      </div>
        <Items title='More' icon={IoIosArrowDown} />
      

      </Menu>
    
  );
}

export default App;
