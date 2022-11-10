import logo from './logo.svg';
import './App.css';
import ConfirmMnemonics from "./App/ConfirmMnemonics";
import CreateMnemonics from "./App/CreateMnemonics";
import CreateWallet from "./App/CreateWallet";
import CryptoDetails from "./App/CryptoDetails";
import CryptoList from "./App/CryptoList";
import CryptoMarket from "./App/CryptoMarket";
import LoadWallet from "./App/LoadWallet";
import NewWallet from "./App/NewWallet";
import RecieveCoins from "./App/RecieveCoins";
import SendCoins from "./App/SendCoins";
import WalletOverview from "./App/WalletOverview";
function App() {
  return (
    <div className="App">
      <ConfirmMnemonics/>
      <CreateWallet/>
      <CreateMnemonics/>
      <CryptoDetails/>
      <CryptoList/>
      <CryptoMarket/>
      <LoadWallet/>
      <NewWallet/>
      <RecieveCoins/>
      <SendCoins/>
      <WalletOverview/>
    </div>
  );
}

export default App;
