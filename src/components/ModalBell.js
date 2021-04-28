import React, { useState } from "react";
import { Modal} from '@material-ui/core';
import "../assets/styles/notifications/ModalBell.scss";
import bell from "./administration/img/notifications.svg";
import bell2 from "./administration/img/notifications_active.svg";




function ModalBell(props) {

  const [ modal, setModal] = useState(false);

  const open_close_Modal = () => {
    setModal(!modal);
  }



  const body = (
    <div className="Modal" id="Modal">
      <div align="center">
        <header id="header"><strong>Notificaciones</strong>
        <button className="button_cerrar" id="button_cerrar" onClick={()=>open_close_Modal()}>X</button>
        </header>
        
      </div>
    </div>
  ); 

        return (
            <div className="App" id="App">
        
              <button className='button' id="button"  onClick={()=>open_close_Modal()}>
                <img src={bell} alt="bell"/>
                </button>
        
              <Modal open={modal} onClose={open_close_Modal}>
                {body}
              </Modal>
            </div>
  )
        


}




export default ModalBell;