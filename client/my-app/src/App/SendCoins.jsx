import {Label} from "recharts";

export default function SendCoins(){
    return(
        <div className="send_form">
            <h1>Send Transactions</h1>
            <div className="send_form_elements">
                <label>Recipient Address </label>
                <input  required  type="text" name="Address" placeholder="" />
                <Label>Amount</Label>
                <input required type="text" name="Amount"/>
                <button>Send</button>
            </div>
        </div>
    )
}