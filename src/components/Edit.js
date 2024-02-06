import { useSelector } from "react-redux";
import Switch from '@mui/material/Switch';

const Edit = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const state = useSelector(state => state.data);

    console.log(state);
    return <div className = "form-box">
    <form>
        <div className = "field1">
        <label> Label:</label>
        <input placeholder="community"/>
        <div>
        <label>Instance:</label>  
        <input placeholder="Phone 000-000-0000"/> 
          <label>
           <input type="checkbox" />
           Distributed
          </label>   
        </div>
        <label>StakeHolderNotification</label>
        <Switch {...label} defaultChecked />
        <div> 
        <div>UPtime</div>
        <label>Enable Email</label>
        <Switch {...label} defaultChecked />
        <label>Enable Webhook</label>
        <Switch {...label} defaultChecked />
        <label>Enable Twilio</label>
        <Switch {...label} defaultChecked />
        <label>StakeHolderNotification</label>
        <Switch {...label} defaultChecked />
        </div>
        <div> 
        <div>Inventory:</div>
        <label>Enable Email</label>
        <Switch {...label} defaultChecked />
        <label>Enable Webhook</label>
        <Switch {...label} defaultChecked />
        <label>Enable Twilio</label>
        <Switch {...label} defaultChecked />
        <label>StakeHolderNotification</label>
        <Switch {...label} defaultChecked />
        </div>
        <div> 
        <div>PollAPI:</div>
        <label>Enable Email</label>
        <Switch {...label} defaultChecked />
        <label>Enable Webhook</label>
        <Switch {...label} defaultChecked />
        <label>Enable Twilio</label>
        <Switch {...label} defaultChecked />
        <label>StakeHolderNotification</label>
        <Switch {...label} defaultChecked />
        </div>
        <div> 
        <div>IndexSize:</div>
        <label>Enable Email</label>
        <Switch {...label} defaultChecked />
        <label>Enable Webhook</label>
        <Switch {...label} defaultChecked />
        <label>Enable Twilio</label>
        <Switch {...label} defaultChecked />
        <label>StakeHolderNotification</label>
        <Switch {...label} defaultChecked />
        </div>
        <label>Webhook</label>
        <Switch {...label} defaultChecked />
        <label>Webhook URL</label>
        <input placeholder="E-mail"/>
        </div>
        
        <div>
        <label>emails:</label>
        <input placeholder="E-mail"/>
        <textarea placeholder="Emails"/>
        </div>

        <div>
        <label>Phone:</label>
        <input placeholder="Phone"/>
        <textarea placeholder="Phone numbers"/>
        </div>
        
        <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
    </form>

</div>
}

export default Edit;